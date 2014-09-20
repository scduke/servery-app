(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";var angular="undefined"!=typeof window?window.angular:"undefined"!=typeof global?global.angular:null,serveryApi=require("./services/api"),serveryComponents=require("./components/serverycomponents"),module=angular.module("serveryApp",["serveryApi","serveryComponents"]);module.controller("RootController",require("./controllers/root"));
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./components/serverycomponents":12,"./controllers/root":14,"./services/api":18}],2:[function(require,module,exports){
(function (global){
var React="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null;module.exports=["FilterStore",function(e){var a=React.createClass({displayName:"AllergyFilter",onFilterChange:function(a,l){e.setFilter(a,l.target.checked)},render:function(){return React.DOM.div({className:"inline checkbox"},React.DOM.label({className:"allergyFilterLabel"},React.DOM.h5({className:"inline noMargin"},this.props.allergyName," Only  ",React.DOM.img({src:"/static/img/allergyicons/"+this.props.allergyType+".svg",className:"allergyIcon inline noMargin"})," "),React.DOM.input({type:"checkbox",className:"foodFilterCheckbox",onChange:this.onFilterChange.bind(this,this.props.allergyType),checked:this.props.allergyValue})))}});return a}];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
var Router="undefined"!=typeof window?window.ReactRouter:"undefined"!=typeof global?global.ReactRouter:null,React="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,ServeryHours=require("./serveryhours");module.exports=["MealMenu","MenuStore","AllergyFilter","FilterStore",function(e,a,t,r){var n=["breakfast","lunch","dinner"],s=React.createClass({displayName:"Detail",getInitialState:function(){return{menu:{},filters:r.getFilters()}},getServery:function(){return this.props.serveries.filter(function(e){return e.name===this.props.params.serveryName},this)[0]},getDate:function(){return this.props.query.date?new Date(this.props.query.date):new Date},selectServery:function(e){a.setServery(e)},openMenu:function(e){e.preventDefault(),e.stopPropagation()},componentDidMount:function(){var e=this.refs.datepicker.getDOMNode();$(e).datepicker("setDate",this.getDate()),$(e).on("changeDate",function(e){a.setDate(e.date)}.bind(this)),a.addListener(this.onUpdate),r.addListener(this.onUpdate),a.initialize(this.getServery(),this.getDate())},componentWillUnmount:function(){a.removeListener(this.onUpdate),r.removeListener(this.onUpdate)},onUpdate:function(){this.setState({menu:a.getMenu(),filters:r.getFilters()})},render:function(){var a=this.getServery();return React.DOM.div(null,React.DOM.nav({className:"navbar navbar-default",role:"navigation"},React.DOM.div({className:"container"},React.DOM.div({className:"navbar-header"},React.DOM.a({className:"navbar-brand visible-xs-block"},a?a.fullname:"Select Servery"),React.DOM.button({type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"},React.DOM.span({className:"sr-only"},"Toggle navigation"),React.DOM.span({className:"icon-bar"}),React.DOM.span({className:"icon-bar"}),React.DOM.span({className:"icon-bar"}))),React.DOM.div({className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},React.DOM.ul({className:"nav navbar-nav"},React.DOM.li({className:"dropdown"},React.DOM.a({href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},a?a.fullname:"Select Servery"," ",React.DOM.b({className:"caret"})),React.DOM.ul({className:"dropdown-menu"},this.props.serveries.map(function(e){return React.DOM.li({key:e.fullname},React.DOM.a({onClick:this.selectServery.bind(this,e)},e.fullname))},this)))),React.DOM.form({className:"navbar-form navbar-left"},React.DOM.div(null,React.DOM.input({type:"text",style:{width:"205px"},className:"form-control","data-provide":"datepicker","data-date-autoclose":"true",ref:"datepicker"}),React.DOM.button({className:"btn btn-default",onClick:this.openMenu},React.DOM.i({className:"glyphicon glyphicon-calendar"})))),React.DOM.form({className:"navbar-form navbar-right",role:"search"},t({allergyType:"vegetarian",allergyName:"Vegetarian",allergyValue:this.state.filters.vegetarian}),t({allergyType:"glutenfree",allergyName:"Gluten-free",allergyValue:this.state.filters.glutenfree}))))),a&&React.DOM.div({className:"row"},React.DOM.div({className:"servery-info col-sm-6 col-sm-4"},React.DOM.div({className:"thumbnail"},React.DOM.img({src:"/static/img/serveries/"+a.name+".jpg",alt:"..."}),React.DOM.div({className:"caption"},React.DOM.h4(null,a.fullname," "))),ServeryHours({servery:a})),React.DOM.div({className:"servery col-sm-6 col-md-8"},React.DOM.h2(null," Menu "),n.slice(1).map(function(a){return e({key:a,meal:a,menuitems:this.state.menu[a],user:this.props.user,filters:this.state.filters})},this))))}});return s}];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./serveryhours":13}],4:[function(require,module,exports){
(function (global){
var React="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null;module.exports=React.createClass({displayName:"exports",render:function(){return React.DOM.footer(null,React.DOM.div({className:"row"},React.DOM.div({className:"col-lg-12"},React.DOM.p(null,"Made by ",React.DOM.a({href:"http://csclub.rice.edu/riceapps"},"Rice Apps"),". View code ",React.DOM.a({href:"http://github.com/rice-apps"},"here"),"."))))}});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
(function (global){
var React="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,ReactRouter="undefined"!=typeof window?window.ReactRouter:"undefined"!=typeof global?global.ReactRouter:null;module.exports=["LoginStatus",function(a){var e=ReactRouter.ActiveState,t=ReactRouter.Link,n=React.createClass({displayName:"Tab",mixins:[e],getInitialState:function(){return{isActive:!1}},updateActiveState:function(){this.setState({isActive:n.isActive(this.props.to,this.props.params,this.props.query)})},render:function(){var a=this.state.isActive?"active":"",e=t(this.props);return React.DOM.li({className:a},e)}}),i=React.createClass({displayName:"Header",closeMenu:function(){var a=$("#navbar-main-toggle.navbar-toggle");a.is(":visible")&&a.trigger("click")},render:function(){return React.DOM.div({className:"navbar navbar-default navbar-fixed-top"},React.DOM.button({type:"button","class":"btn btn-default btn-lg"},React.DOM.span({"class":"glyphicon glyphicon-star"})),React.DOM.div({className:"container"},React.DOM.div({className:"navbar-header"},React.DOM.a({href:"/",className:"navbar-brand"},"Servery App"),React.DOM.button({id:"navbar-main-toggle",className:"navbar-toggle",type:"button","data-toggle":"collapse","data-target":"#navbar-main"},React.DOM.span({className:"icon-bar"}),React.DOM.span({className:"icon-bar"}),React.DOM.span({className:"icon-bar"}))),React.DOM.div({className:"navbar-collapse collapse",id:"navbar-main"},React.DOM.ul({className:"nav navbar-nav"},n({to:"quickview",onClick:this.closeMenu}," Next Meal "),n({to:"detail",onClick:this.closeMenu}," Servery Information ")),a({user:this.props.user}))))}});return i}];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],6:[function(require,module,exports){
(function (global){
var React="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null;module.exports=["LoginEvent","User",function(e,t){var a=React.createClass({displayName:"LoginStatus",closeMenu:function(){var e=$("#navbar-main-toggle.navbar-toggle");e.is(":visible")&&e.trigger("click")},render:function(){var e;return e=null!==this.props.user&&this.props.user.username?[React.DOM.li({key:"userid"},React.DOM.a({onClick:this.closeMenu},this.props.user.username)," "),React.DOM.li({key:"logout"},React.DOM.a({href:"#",onClick:this.logout}," Logout "))]:[React.DOM.li({key:"login"},React.DOM.a({href:"/api/auth/login"},"Login"))],React.DOM.ul({className:"nav navbar-nav navbar-right"},React.DOM.li(null,React.DOM.a({href:"http://csclub.rice.edu/riceapps",onClick:this.closeMenu,target:"_blank"},"Built by Rice Apps")),e)},logout:function(a){a.preventDefault(),t.logout(function(){e.setUser(null)}),this.closeMenu()}});return a}];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
(function (global){
var React="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,Footer=require("./footer");module.exports=["Header","Detail","User","LoginEvent","MenuStore",function(e,t,n,s,i){var r=React.createClass({displayName:"Main",render:function(){return React.DOM.div(null,e({user:this.state.user}),React.DOM.div({className:"container"},React.DOM.div({id:"page-content"},this.props.activeRouteHandler({serveries:this.props.serveries,user:this.state.user})),Footer(null)),React.DOM.div({className:"sidebar"},React.DOM.ul({className:"side-items"},React.DOM.li(null,"North"),React.DOM.li(null,"South"),React.DOM.li(null,"East"),React.DOM.li(null,"West"),React.DOM.li(null,"Baker"),React.DOM.li(null,"Sid"))))},getInitialState:function(){return{user:null,servery:{},menu:{}}},setUser:function(e){this.setState({user:e})},setServeryAndMenu:function(e,t){this.setState({servery:e,menu:t})},componentDidMount:function(){n.current_user(function(e){this.setUser(e)}.bind(this)),s.addListener(function(e){i.updateMenu(),this.setUser(e)}.bind(this))}});return r}];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./footer":4}],8:[function(require,module,exports){
(function (global){
var React="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null;module.exports=["MenuItem","FilterStore",function(e,t){var a=React.createClass({displayName:"MealMenu",render:function(){var a=t.getFilterFunction(this.props.filters);return React.DOM.div({className:"menu panel panel-primary"},React.DOM.div({className:"panel-heading"},React.DOM.h3({className:"panel-title"},this.props.meal)),React.DOM.div({className:"panel-body"},this.props.menuitems&&0!==this.props.menuitems.length?React.DOM.ul({className:"list-group"},this.props.menuitems.map(function(t){var s="list-group-item menuItem";return a(t)||(s+=" hidden"),React.DOM.li({key:t.name,className:s},e({item:t,user:this.props.user}))},this)):React.DOM.em({className:"not-found"},"No items found.")))}});return a}];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],9:[function(require,module,exports){
(function (global){
var React="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null;module.exports=["MenuStore","NextMealsStore","Restangular",function(e,t,n){var s=React.createClass({displayName:"MenuItem",getQuery:function(e){return n.one("dishes",this.props.item.id).one("vote",e).customPOST()},upvote:function(){"up"==this.props.item.vote_type?this.reset():this.getQuery("up").then(function(){e.updateMenu(),t.updateMenu()})},downvote:function(){"down"==this.props.item.vote_type?this.reset():this.getQuery("down").then(function(){e.updateMenu(),t.updateMenu()})},reset:function(){this.getQuery("none").then(function(){e.updateMenu(),t.updateMenu()})},render:function(){function e(e,t){return-1!==e.indexOf(t)}function t(e){return n(e)}function n(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}var s=React.addons.classSet,a=s({btn:!0,"btn-default":!0,"btn-xs":!0,"btn-default":"up"!==this.props.item.vote_type,"btn-success":"up"===this.props.item.vote_type}),o=s({btn:!0,"btn-default":!0,"btn-xs":!0,"btn-default":"down"!==this.props.item.vote_type,"btn-success":"down"===this.props.item.vote_type}),i=[];return(e(this.props.item.allergyflags,"vegetarian")||e(this.props.item.allergyflags,"vegan"))&&i.push(React.DOM.img({key:"vegetarian",src:"/static/img/allergyicons/vegetarian.svg",className:"allergyIcon"})),e(this.props.item.allergyflags,"gluten")||i.push(React.DOM.img({key:"gluten",src:"/static/img/allergyicons/glutenfree.svg",className:"allergyIcon"})),React.DOM.div(null,React.DOM.span(null,t(this.props.item.name),i),React.DOM.span({className:"pull-right"},React.DOM.button({className:a,onClick:this.upvote},React.DOM.i({className:"glyphicon glyphicon-chevron-up"})),React.DOM.span({className:"score"},this.props.item.score),React.DOM.button({className:o,onClick:this.downvote},React.DOM.i({className:"glyphicon glyphicon-chevron-down"}))))}});return s}];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],10:[function(require,module,exports){
(function (global){
var React="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,Router="undefined"!=typeof window?window.ReactRouter:"undefined"!=typeof global?global.ReactRouter:null;module.exports=["MealMenu","NextMealsStore","AllergyFilter","MenuItem","Restangular","FilterStore",function(e,t,a,n,s,i){function r(e){return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][e]}function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}var d=React.createClass({displayName:"QuickViewItem",render:function(){var e=i.getFilterFunction(this.props.filters);return React.DOM.span({className:"menuThing"},React.DOM.div({className:"menu panel panel-primary noMarginIfRotate"},React.DOM.div({className:"panel-heading"},React.DOM.h3({className:"panel-title"},this.props.meal.servery.fullname)),React.DOM.div({className:"panel-body menuItemList"},React.DOM.ul({className:"list-group"},this.props.meal.dishes.map(function(t){var a="list-group-item row";return e(t)||(a+=" hidden"),React.DOM.li({key:t.name,className:a},React.DOM.div({className:"detailedMenuItem"},n({item:t,user:this.props.user})))},this)))))}}),c=React.createClass({displayName:"QuickView",getInitialState:function(){return{data:{loading:!0},selected:0,filters:i.getFilters()}},componentDidMount:function(){t.addListener(this.onUpdate),i.addListener(this.onUpdate),t.initialize()},onUpdate:function(){this.setState({data:t.getNextMeals(),filters:i.getFilters()})},componentWillUnmount:function(){t.removeListener(this.onUpdate),i.removeListener(this.onUpdate)},selectItem:function(e){this.setState({selected:e})},render:function(){if(this.state.data.loading)return React.DOM.span(null," Loading ");var e=new Date(this.state.data.day);return React.DOM.div({id:"topHeader"},React.DOM.nav({className:"navbar navbar-default"},React.DOM.h3({className:"nav navbar-text quickViewHeader"},r(e.getDay())," ",l(this.state.data.meal_type)),React.DOM.form({className:"navbar-right quickViewHeader"},a({allergyType:"vegetarian",allergyName:"Vegetarian",allergyValue:this.state.filters.vegetarian}),a({allergyType:"glutenfree",allergyName:"Gluten-free",allergyValue:this.state.filters.glutenfree}))),React.DOM.div({className:"oneLine"},this.state.data.meals.map(function(e,t){var a=this.state.selected===t;return React.DOM.span({key:e.servery.name},React.DOM.span({className:a?"selected":"unselected",onMouseEnter:this.selectItem.bind(this,t)},d({meal:e,user:this.props.user,filters:this.state.filters})))},this)))}});return c}];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],11:[function(require,module,exports){
(function (global){
var React="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,ReactRouter="undefined"!=typeof window?window.ReactRouter:"undefined"!=typeof global?global.ReactRouter:null;module.exports=["Main","Detail","QuickView",function(e,t,a){function r(r){return n({location:"history"},o({name:"app",path:"/",handler:e,serveries:r},o({name:"detail",handler:u},o({path:"",handler:t}),o({path:":serveryName",name:"detailWithServery",handler:t})),o({name:"quickview",handler:a}),i({to:"quickview"})))}var n=ReactRouter.Routes,o=ReactRouter.Route,i=(ReactRouter.DefaultRoute,ReactRouter.Redirect),u=React.createClass({displayName:"Pass",render:function(){return this.props.activeRouteHandler({serveries:this.props.serveries,user:this.props.user})}});return r}];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],12:[function(require,module,exports){
(function (global){
var angular="undefined"!=typeof window?window.angular:"undefined"!=typeof global?global.angular:null;require("../stores/dispatch"),require("../services/api");var serveryComponents=angular.module("serveryComponents",["dispatch","userApi"]).factory("CreateRouter",require("./router")).factory("Main",require("./main")).factory("Header",require("./header")).factory("LoginStatus",require("./loginstatus")).factory("Detail",require("./detail")).factory("MealMenu",require("./menu")).factory("MenuItem",require("./menuitem")).factory("AllergyFilter",require("./allergyfilter")).factory("QuickView",require("./quickview"));
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../services/api":18,"../stores/dispatch":19,"./allergyfilter":2,"./detail":3,"./header":5,"./loginstatus":6,"./main":7,"./menu":8,"./menuitem":9,"./quickview":10,"./router":11}],13:[function(require,module,exports){
(function (global){
function dayofweek(e){var a;switch(e){case"0":a="Mon";break;case"1":a="Tue";break;case"2":a="Wed";break;case"3":a="Thu";break;case"4":a="Fri";break;case"5":a="Sat";break;case"6":a="Sun"}return a}function twelvehour(e){if(void 0==e)return"";var a=parseInt(e.substr(0,2)),t=e.substr(3,2);return a>12?(a-=12,a.toString()+":"+t+" PM"):finalString=a.toString()+":"+t+" AM"}var React="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,meals=["breakfast","lunch","dinner"];module.exports=React.createClass({displayName:"exports",render:function(){return React.DOM.div({className:"panel panel-default"},React.DOM.div({className:"panel-heading"},"Hours",this.props.servery.open_now?React.DOM.span({className:"label label-success"},"Currently Open"):React.DOM.span({className:"label label-default"},"Currently Closed")),React.DOM.table({className:"table"},React.DOM.tbody(null,React.DOM.tr(null," ",React.DOM.td(null),meals.map(function(e){return React.DOM.th({key:e},e)})),this.props.servery.hours&&Object.keys(this.props.servery.hours).map(function(e){return React.DOM.tr({key:e},React.DOM.td(null," ",dayofweek(e)," "),meals.map(function(a){return React.DOM.td({key:a},this.props.servery.hours[e][a]&&React.DOM.span(null,twelvehour(this.props.servery.hours[e][a].start_time)," -  ",twelvehour(this.props.servery.hours[e][a].end_time)))},this))},this))))}});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],14:[function(require,module,exports){
(function (global){
var React="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null;module.exports=["Servery","CreateRouter",function(e,n){e.all(function(e){React.renderComponent(n(e.result),document.body)})}];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],15:[function(require,module,exports){
(function (global){
__browserify_shim_require__=require,function(e,t,n,i,r){!function(e){"use strict";function t(){}function n(e,t){if(s)return t.indexOf(e);for(var n=t.length;n--;)if(t[n]===e)return n;return-1}var r=t.prototype,s=Array.prototype.indexOf?!0:!1;r.getListeners=function(e){var t=this._events||(this._events={});return t[e]||(t[e]=[])},r.addListener=function(e,t){var i=this.getListeners(e);return-1===n(t,i)&&i.push(t),this},r.on=r.addListener,r.removeListener=function(e,t){var i=this.getListeners(e),r=n(t,i);return-1!==r&&(i.splice(r,1),0===i.length&&(this._events[e]=null)),this},r.off=r.removeListener,r.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},r.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},r.manipulateListeners=function(e,t,n){var i,r,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"==typeof t)for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?s.call(this,i,r):o.call(this,i,r));else for(i=n.length;i--;)s.call(this,t,n[i]);return this},r.removeEvent=function(e){return e?this._events[e]=null:this._events=null,this},r.emitEvent=function(e,t){for(var n,i=this.getListeners(e),r=i.length;r--;)n=t?i[r].apply(null,t):i[r](),n===!0&&this.removeListener(e,i[r]);return this},r.trigger=r.emitEvent,"function"==typeof i&&i.amd?i(function(){return t}):e.EventEmitter=t}(this),r("undefined"!=typeof EventEmitter?EventEmitter:window.EventEmitter)}.call(global,void 0,void 0,void 0,void 0,function(e){module.exports=e});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],16:[function(require,module,exports){
!function(r,e,t){"use strict";function n(r){return null!=r&&""!==r&&"hasOwnProperty"!==r&&s.test("."+r)}function a(r,e){if(!n(e))throw i("badmember",'Dotted member path "@{0}" is invalid.',e);for(var a=e.split("."),o=0,s=a.length;s>o&&r!==t;o++){var c=a[o];r=null!==r?r[c]:t}return r}function o(r,t){t=t||{},e.forEach(t,function(r,e){delete t[e]});for(var n in r)!r.hasOwnProperty(n)||"$"===n.charAt(0)&&"$"===n.charAt(1)||(t[n]=r[n]);return t}var i=e.$$minErr("$resource"),s=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;e.module("ngResource",["ng"]).provider("$resource",function(){var r=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}},this.$get=["$http","$q",function(n,s){function c(r){return u(r,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function u(r,e){return encodeURIComponent(r).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,e?"%20":"+")}function p(e,t){this.template=e,this.defaults=d({},r.defaults,t),this.urlParams={}}function l(c,u,$,v){function w(r,e){var t={};return e=d({},u,e),h(e,function(e,n){g(e)&&(e=e()),t[n]=e&&e.charAt&&"@"==e.charAt(0)?a(r,e.substr(1)):e}),t}function y(r){return r.resource}function E(r){o(r||{},this)}var A=new p(c,v);return $=d({},r.defaults.actions,$),E.prototype.toJSON=function(){var r=d({},this);return delete r.$promise,delete r.$resolved,r},h($,function(r,a){var c=/^(POST|PUT|PATCH)$/i.test(r.method);E[a]=function(a,u,p,l){var $,v,b,P={};switch(arguments.length){case 4:b=l,v=p;case 3:case 2:if(!g(u)){P=a,$=u,v=p;break}if(g(a)){v=a,b=u;break}v=u,b=p;case 1:g(a)?v=a:c?$=a:P=a;break;case 0:break;default:throw i("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length)}var T=this instanceof E,O=T?$:r.isArray?[]:new E($),x={},R=r.interceptor&&r.interceptor.response||y,D=r.interceptor&&r.interceptor.responseError||t;h(r,function(r,e){"params"!=e&&"isArray"!=e&&"interceptor"!=e&&(x[e]=m(r))}),c&&(x.data=$),A.setUrlParams(x,d({},w($,r.params||{}),P),r.url);var S=n(x).then(function(t){var n=t.data,a=O.$promise;if(n){if(e.isArray(n)!==!!r.isArray)throw i("badcfg","Error in resource configuration. Expected response to contain an {0} but got an {1}",r.isArray?"array":"object",e.isArray(n)?"array":"object");r.isArray?(O.length=0,h(n,function(r){O.push("object"==typeof r?new E(r):r)})):(o(n,O),O.$promise=a)}return O.$resolved=!0,t.resource=O,t},function(r){return O.$resolved=!0,(b||f)(r),s.reject(r)});return S=S.then(function(r){var e=R(r);return(v||f)(e,r.headers),e},D),T?S:(O.$promise=S,O.$resolved=!1,O)},E.prototype["$"+a]=function(r,e,t){g(r)&&(t=e,e=r,r={});var n=E[a].call(this,r,this,e,t);return n.$promise||n}}),E.bind=function(r){return l(c,d({},u,r),$)},E}var f=e.noop,h=e.forEach,d=e.extend,m=e.copy,g=e.isFunction;return p.prototype={setUrlParams:function(r,t,n){var a,o,s=this,u=n||s.template,p=s.urlParams={};h(u.split(/\W/),function(r){if("hasOwnProperty"===r)throw i("badname","hasOwnProperty is not a valid parameter name.");!new RegExp("^\\d+$").test(r)&&r&&new RegExp("(^|[^\\\\]):"+r+"(\\W|$)").test(u)&&(p[r]=!0)}),u=u.replace(/\\:/g,":"),t=t||{},h(s.urlParams,function(r,n){a=t.hasOwnProperty(n)?t[n]:s.defaults[n],e.isDefined(a)&&null!==a?(o=c(a),u=u.replace(new RegExp(":"+n+"(\\W|$)","g"),function(r,e){return o+e})):u=u.replace(new RegExp("(/?):"+n+"(\\W|$)","g"),function(r,e,t){return"/"==t.charAt(0)?t:e+t})}),s.defaults.stripTrailingSlashes&&(u=u.replace(/\/+$/,"")||"/"),u=u.replace(/\/\.(?=\w+($|\?))/,"."),r.url=u.replace(/\/\\\./,"/."),h(t,function(e,t){s.urlParams[t]||(r.params=r.params||{},r.params[t]=e)})}},l}]})}(window,window.angular);
},{}],17:[function(require,module,exports){
(function (global){
var angular="undefined"!=typeof window?window.angular:"undefined"!=typeof global?global.angular:null,serveryApp=require("./app");angular.element(document).ready(function(){angular.bootstrap(document,["serveryApp"])});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./app":1}],18:[function(require,module,exports){
(function (global){
"use strict";var angular="undefined"!=typeof window?window.angular:"undefined"!=typeof global?global.angular:null,ngResource=require("../lib/angular/angular-resource"),serveryApi=angular.module("serveryApi",["ngResource"]);serveryApi.factory("Servery",["$resource",function(e){return e("/api/serveries/:serveryId",{},{all:{method:"GET",params:{}}})}]);var userApi=angular.module("userApi",["ngResource"]);userApi.factory("User",["$resource",function(e){return e("/api/user",{},{current_user:{method:"GET"},save:{method:"POST"},logout:{method:"POST",url:"/api/auth/logout"}})}]);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../lib/angular/angular-resource":16}],19:[function(require,module,exports){
(function (global){
"use strict";var angular="undefined"!=typeof window?window.angular:"undefined"!=typeof global?global.angular:null,dispatch=angular.module("dispatch",["restangular"]).config(["RestangularProvider",function(e){e.setBaseUrl("/api")}]).factory("FilterStore",require("./filterstore")).factory("MenuStore",require("./menustore")).factory("NextMealsStore",require("./nextmealsstore")),EventEmitter=require("event-emitter");dispatch.factory("LoginEvent",[function(){var e=new EventEmitter;return{addListener:function(t){e.addListener("login",t)},setUser:function(t){e.emitEvent("login",[t])}}}]);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./filterstore":20,"./menustore":21,"./nextmealsstore":22,"event-emitter":15}],20:[function(require,module,exports){
var EventEmitter=require("event-emitter");module.exports=[function(){var e=new EventEmitter,t={};return{addListener:function(t){e.addListener("filterupdate",t)},removeListener:function(t){e.removeListener("filterupdate",t)},getFilterFunction:function(e){return function(t){function n(e){return-1!==r.indexOf(e)}var r=t.allergyflags;return!e.vegetarian||n("vegetarian")||n("vegan")?e.glutenfree&&n("gluten")?!1:!0:!1}},getFilters:function(){return t},setFilter:function(n,r){t[n]=r,e.emitEvent("filterupdate")}}}];
},{"event-emitter":15}],21:[function(require,module,exports){
var EventEmitter=require("event-emitter");module.exports=["Restangular","LoginEvent",function(e,t){"use strict";function n(t,n){return e.one("serveries",t).customGET("menu",{date:n})}var i=new EventEmitter,r={name:"north"},u=new Date,a={loading:!0},o={addListener:function(e){i.addListener("menuupdate",e)},removeListener:function(e){i.removeListener("menuupdate",e)},setServery:function(e){r=e,this.updateMenu(),this.setUrl()},setDate:function(e){u=e,this.updateMenu(),this.setUrl()},initialize:function(e,t){u=t,r=e,this.updateMenu()},setUrl:function(){window.ReactRouter.transitionTo("detailWithServery",{serveryName:r.name},{date:u.toISOString()})},updateMenu:function(){if("undefined"!=typeof r){var e=r.name,t=u.toISOString();n(e,t).then(function(n){e===r.name&&t===u.toISOString()&&(a=n,i.emitEvent("menuupdate"))})}},getMenu:function(){return a}};return t.addListener(function(){o.updateMenu()}),o}];
},{"event-emitter":15}],22:[function(require,module,exports){
var EventEmitter=require("event-emitter");module.exports=["Restangular","LoginEvent",function(e,t){"use strict";function n(){return e.all("serveries").customGET("next_meals")}var i=new EventEmitter,u={loading:!0},a={addListener:function(e){i.addListener("nextmealsupdate",e)},removeListener:function(e){i.removeListener("nextmealsupdate",e)},initialize:function(){u={loading:!0},i.emitEvent("nextmealsupdate"),n().then(function(e){u=e,i.emitEvent("nextmealsupdate")})},updateMenu:function(){n().then(function(e){u=e,i.emitEvent("nextmealsupdate")})},getNextMeals:function(){return u}};return t.addListener(function(){a.updateMenu()}),a}];
},{"event-emitter":15}]},{},[17]);
