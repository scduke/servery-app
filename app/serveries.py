from . import app, db
from .util import current_rice_time, parse_to_rice_time
from .models import MealTime, Servery
from .dish import get_dishes_data

from flask import request, jsonify

from collections import defaultdict

import datetime


def find_mealtime(servery, day_of_the_week, meal_type):
        return db.session.query(MealTime).filter(
            MealTime.servery == servery,
            MealTime.day_of_the_week == day_of_the_week,
            MealTime.meal_type == meal_type).scalar()


def get_mealtime_data(mealtime):
    return {
        'start_time': mealtime.start_time,
        'end_time': mealtime.end_time
    }


def get_servery_hours_data(servery):
    mealtimes = db.session.query(MealTime).filter(MealTime.servery == servery)

    result = defaultdict(dict)

    for m in mealtimes:
        result[m.day_of_the_week][m.meal_type] = get_mealtime_data(m)

    return result


def get_servery_data(servery):
    return {
        "name": servery.name,
        "fullname": servery.fullname,
        "id": servery.name,
        "hours": get_servery_hours_data(servery),
        "open_now": servery_is_currently_open(servery)
    }


@app.route('/api/serveries')
def get_serveries():
    serveries = db.session.query(Servery).all()
    serveries_data = [get_servery_data(servery) for servery in serveries]

    return jsonify(result=serveries_data)


def servery_is_currently_open(servery):
    # gets current time and day of week to see if servery is currently open
    now = current_rice_time()
    day_of_the_week = now.weekday()
    time = now.time()

    open_filter = db.and_(
        MealTime.day_of_the_week == day_of_the_week,
        MealTime.start_time <= time,
        MealTime.end_time >= time)

    currently_open = db.session.query(MealTime).filter(
        MealTime.servery == servery,
        open_filter)

    is_open = len(currently_open.all()) == 1

    return is_open


@app.route('/api/serveries/<servery_id>')
def get_servery(servery_id):
    # Query for all data for specific servery
    # retrieves actual servery
    servery_filter = Servery.name == servery_id
    servery = db.session.query(Servery).filter(servery_filter).one()

    servery_data = get_servery_data(servery)

    return jsonify(servery_data)


@app.route('/api/serveries/<servery_id>/menu')
def get_menu(servery_id):
    servery_filter = Servery.name == servery_id
    servery = db.session.query(Servery).filter(servery_filter).one()

    if request.args.get("date"):
        date = parse_to_rice_time(request.args.get("date")).date()
    else:
        date = current_rice_time().date()

    menu = {"lunch": [], "dinner": []}

    for meal_type in menu:
        menu[meal_type] = get_dishes_data(date, servery, meal_type)

    return jsonify(menu)


def find_next_meal_type(date, time):
    """
    Finds the next type of meal for the given day and
    then returns a tuple containing (meal_type,date)
    """
    day_of_the_week = date.weekday()

    # I first find one MealTime that is closest in time
    time_filter = db.and_(
        MealTime.day_of_the_week == day_of_the_week,
        MealTime.end_time >= time)

    coming_mealtimes = db.session.query(MealTime)\
        .filter(time_filter)\
        .order_by(MealTime.start_time)

    first_mealtime = coming_mealtimes.first()

    if first_mealtime is None:
        next_day = date + datetime.timedelta(1)
        return find_next_meal_type(next_day, datetime.time())

    return first_mealtime.meal_type, date

wind_back = {
    "breakfast": lambda day: ("dinner", day + datetime.timedelta(-1)),
    "lunch": lambda day: ("breakfast", day),
    "dinner": lambda day: ("lunch", day)
}

wind_forward = {
    "breakfast": lambda day: ("lunch", day),
    "lunch": lambda day: ("dinner", day),
    "dinner": lambda day: ("breakfast", day + datetime.timedelta(1))
}


def get_offset_mealtime(meal_type, day, offset):
    if offset == 0:
        return (meal_type, day)
    elif offset < 0:
        current = wind_back[meal_type](day)
        return get_offset_mealtime(current[0], current[1], offset+1)
    else:  # offset > 0
        current = wind_forward[meal_type](day)
        return get_offset_mealtime(current[0], current[1], offset-1)


@app.route('/api/serveries/next_meals')
def get_next_meals():
    """
    Queries the database for the next possible meal.
    """

    now = current_rice_time()
    now_date_time = (now.date(), now.time())

    next_meal_type, next_meal_date = find_next_meal_type(now_date_time[0], now_date_time[1])

    if request.args.get("offset"):
        offset = int(request.args.get("offset"))
    else:
        offset = 0

    offset_meal_type, offset_meal_date = get_offset_mealtime(
        next_meal_type, next_meal_date, offset
    )

    equivalent_mealtime_filter = db.and_(
        MealTime.day_of_the_week == offset_meal_date.weekday(),
        MealTime.meal_type == offset_meal_type)

    all_meals_at_time = db.session.query(MealTime).filter(
        equivalent_mealtime_filter).all()

    if len(all_meals_at_time) == 0:
        result = {
            "day": offset_meal_date,
            "meal_type": offset_meal_type,
            "meals": []
        }

        return jsonify(result)

    def process_mealtime(mealtime):
        return {
            "servery": get_servery_data(mealtime.servery),
            "dishes": get_dishes_data(
                offset_meal_date,
                mealtime.servery,
                mealtime.meal_type
            )
        }

    result = {
        "day": offset_meal_date,
        "start_time": all_meals_at_time[0].start_time,
        "end_time": all_meals_at_time[0].end_time,
        "meal_type": offset_meal_type,
        "meals": map(process_mealtime, all_meals_at_time)
    }

    return jsonify(result)
