(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{233:function(t,e,n){"use strict";(function(t){n.d(e,"c",function(){return x}),n.d(e,"a",function(){return F}),n.d(e,"b",function(){return Z});n(14),n(133),n(71),n(67),n(92),n(41),n(98),n(68),n(69),n(141),n(94),n(29),n(39),n(70),n(30),n(31),n(13),n(50),n(40),n(38),n(51),n(23),n(52),n(42),n(91);var o=n(0),r=n.n(o),i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function s(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function a(t,e){return t(e={exports:{}},e.exports),e.exports}var c=a(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,l=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116;function y(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case p:case f:case i:case a:case s:case d:return t;default:switch(t=t&&t.$$typeof){case u:case l:case c:return t;default:return e}}case h:case m:case r:return e}}}function v(t){return y(t)===f}e.typeOf=y,e.AsyncMode=p,e.ConcurrentMode=f,e.ContextConsumer=u,e.ContextProvider=c,e.Element=o,e.ForwardRef=l,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=a,e.StrictMode=s,e.Suspense=d,e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===f||t===a||t===s||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===h||t.$$typeof===m||t.$$typeof===c||t.$$typeof===u||t.$$typeof===l)},e.isAsyncMode=function(t){return v(t)||y(t)===p},e.isConcurrentMode=v,e.isContextConsumer=function(t){return y(t)===u},e.isContextProvider=function(t){return y(t)===c},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return y(t)===l},e.isFragment=function(t){return y(t)===i},e.isLazy=function(t){return y(t)===h},e.isMemo=function(t){return y(t)===m},e.isPortal=function(t){return y(t)===r},e.isProfiler=function(t){return y(t)===a},e.isStrictMode=function(t){return y(t)===s},e.isSuspense=function(t){return y(t)===d}});s(c),s(a(function(t,e){})),a(function(t){t.exports=c}),Object,Object,Object,function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}()&&Object;var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function p(){}function f(){}Function.call.bind(Object.prototype.hasOwnProperty),f.resetWarningCache=p;var l=a(function(t){t.exports=function(){function t(t,e,n,o,r,i){if(i!==u){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:f,resetWarningCache:p};return n.PropTypes=n,n}()}),d=s(a(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.displayName||t.name||("string"==typeof t&&t.length>0?t:"Unknown")}})),m=function(t,e){var n={};for(var o in t)-1===e.indexOf(o)&&(n[o]=t[o]);return n},h="__global_unique_id__",y=function(){return i[h]=(i[h]||0)+1};function v(t){return function(){return t}}var b=function(){};b.thatReturns=v,b.thatReturnsFalse=v(!1),b.thatReturnsTrue=v(!0),b.thatReturnsNull=v(null),b.thatReturnsThis=function(){return this},b.thatReturnsArgument=function(t){return t};var j=b,O=a(function(t,e){e.__esModule=!0;var n=i(l),o=i(y);function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}i(j),e.default=function(t,e){var i,u,p="__create-react-context-"+(0,o.default)()+"__",f=function(t){function n(){var e,o,r,i;s(this,n);for(var c=arguments.length,u=Array(c),p=0;p<c;p++)u[p]=arguments[p];return e=o=a(this,t.call.apply(t,[this].concat(u))),o.emitter=(r=o.props.value,i=[],{on:function(t){i.push(t)},off:function(t){i=i.filter(function(e){return e!==t})},get:function(){return r},set:function(t,e){r=t,i.forEach(function(t){return t(r,e)})}}),a(o,e)}return c(n,t),n.prototype.getChildContext=function(){var t;return(t={})[p]=this.emitter,t},n.prototype.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n=this.props.value,o=t.value,r=void 0;((i=n)===(s=o)?0!==i||1/i==1/s:i!=i&&s!=s)?r=0:(r="function"==typeof e?e(n,o):1073741823,0!=(r|=0)&&this.emitter.set(t.value,r))}var i,s},n.prototype.render=function(){return this.props.children},n}(r.a.Component);f.childContextTypes=((i={})[p]=n.default.object.isRequired,i);var l=function(e){function n(){var t,o;s(this,n);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return t=o=a(this,e.call.apply(e,[this].concat(i))),o.state={value:o.getValue()},o.onUpdate=function(t,e){0!=((0|o.observedBits)&e)&&o.setState({value:o.getValue()})},a(o,t)}return c(n,e),n.prototype.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},n.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},n.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[p]?this.context[p].get():t},n.prototype.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(r.a.Component);return l.contextTypes=((u={})[p]=n.default.object,u),{Provider:f,Consumer:l}},t.exports=e.default});s(O);var _=s(a(function(t,e){e.__esModule=!0;var n=i(r.a),o=i(O);function i(t){return t&&t.__esModule?t:{default:t}}e.default=n.default.createContext||o.default,t.exports=e.default})),g=_(null),w=function(t){var e=d(t);return function(n){return r.a.createElement(g.Consumer,null,function(o){if(null===o)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that <"+e+" /> is inside <YMaps /> provider");return r.a.createElement(t,Object.assign({},{ymaps:o},n))})}},E=_(null),C=function(t){return function(e){return r.a.createElement(E.Consumer,null,function(n){return r.a.createElement(t,Object.assign({},{parent:n},e))})}};function P(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=[]);var o=function(o){function i(){o.call(this),this.state={loading:!0},this._isMounted=!1}return o&&(i.__proto__=o),(i.prototype=Object.create(o&&o.prototype)).constructor=i,i.prototype.componentDidMount=function(){var t=this;this._isMounted=!0,this.props.ymaps.load().then(function(e){return Promise.all(n.concat(t.props.modules).map(e.loadModule)).then(function(){!0===t._isMounted&&t.setState({loading:!1},function(){t.props.onLoad(e)})})}).catch(function(e){!0===t._isMounted&&t.props.onError(e)})},i.prototype.componentWillUnmount=function(){this._isMounted=!1},i.prototype.render=function(){var n=this.props.ymaps,o=!1===e||!1===this.state.loading,i=m(this.props,["onLoad","onError","modules","ymaps"]);return o&&r.a.createElement(t,Object.assign({},{ymaps:n.getApi()},i))},i}(r.a.Component);return o.defaultProps={onLoad:Function.prototype,onError:Function.prototype,modules:[]},w(o)}var R={lang:"ru_RU",load:"",ns:"",mode:"release"},S={},M=function(t){var e=Date.now().toString(32);this.options=t,this.namespace=t.query.ns||R.ns,this.onload="__yandex-maps-api-onload__$$"+e,this.onerror="__yandex-maps-api-onerror__$$"+e};M.prototype.getApi=function(){return"undefined"!=typeof window&&this.namespace?window[this.namespace]:this.api},M.prototype.setApi=function(t){return this.api=t},M.prototype.getPromise=function(){return this.namespace?S[this.namespace]:this.promise},M.prototype.setPromise=function(t){return this.namespace?S[this.namespace]=this.promise=t:this.promise=t},M.prototype.load=function(){var t=this;if(this.getApi())return Promise.resolve(this.setApi(this.getApi()));if(this.getPromise())return this.setPromise(this.getPromise());var e=Object.assign({onload:this.onload,onerror:this.onerror},R,this.options.query),n=Object.keys(e).map(function(t){return t+"="+e[t]}).join("&"),o=["https://"+(this.options.enterprise?"enterprise.":"")+"api-maps.yandex.ru",this.options.version,"?"+n].join("/"),r=new Promise(function(e,n){window[t.onload]=function(n){delete window[t.onload],n.loadModule=t.loadModule.bind(t),n.ready(function(){return e(t.setApi(n))})},window[t.onerror]=function(e){delete window[t.onerror],n(e)},t.fetchScript(o).catch(window[t.onerror])});return this.setPromise(r)},M.prototype.fetchScript=function(t){var e=this;return new Promise(function(n,o){e.script=document.createElement("script"),e.script.type="text/javascript",e.script.onload=n,e.script.onerror=o,e.script.src=t,e.script.async="async",document.head.appendChild(e.script)})},M.prototype.loadModule=function(t){var e=this;return new Promise(function(n,o){e.getApi().modules.require(t,function(o){!function(t,e,n,o){void 0===o&&(o=!1),e="string"==typeof e?e.split("."):e.slice();for(var r,i=t;e.length>1;)i[r=e.shift()]||(i[r]={}),i=i[r];i[e[0]]=!0===o&&i[e[0]]||n}(e.api,t,o,!0),n(o)},o,e.getApi())})},M._name="__react-yandex-maps__";var x=function(t){function e(e){t.call(this,e),this.ymaps=new M(e)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){!0===this.props.preload&&this.ymaps.load()},e.prototype.render=function(){return r.a.createElement(g.Provider,{value:this.ymaps},this.props.children)},e}(r.a.Component);x.defaultProps={version:"2.1",enterprise:!1,query:{lang:"ru_RU",load:"",ns:""},preload:!1};var T=/^on(?=[A-Z])/;function k(t){return Object.keys(t).reduce(function(e,n){if(T.test(n)){var o=n.replace(T,"").toLowerCase();e._events[o]=t[n]}else e[n]=t[n];return e},{_events:{}})}function A(t,e,n){"function"==typeof n&&t.events.add(e,n)}function U(t,e,n){"function"==typeof n&&t.events.remove(e,n)}function $(t,e,n){Object.keys(Object.assign({},e,n)).forEach(function(o){e[o]!==n[o]&&(U(t,o,e[o]),A(t,o,n[o]))})}var D=function(t){return"default"+t.charAt(0).toUpperCase()+t.slice(1)};function B(t,e){return void 0!==t[e]||void 0===t[D(e)]}function N(t,e,n){return(B(t,e)?t[e]:t[D(e)])||n}function W(t,e,n){void 0===n&&(n=null),t&&t!==e&&(t.hasOwnProperty("current")?t.current=null:"function"==typeof t&&t(null)),e&&(e.hasOwnProperty("current")?e.current=n:"function"==typeof e&&e(n))}var z=function(t){function e(){var e=this;t.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(t){e._parentElement=t}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this._parentElement,this.props.ymaps.Map,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){var t=e.getParentElementSize(this.props),n=k(this.props),o=m(n,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return r.a.createElement(E.Provider,{value:this.state.instance},r.a.createElement("div",Object.assign({},{ref:this._getRef},t,o),this.props.children))},e.getParentElementSize=function(t){var e=t.width,n=t.height,o=t.style,r=t.className;return void 0!==o||void 0!==r?Object.assign({},o&&{style:o},r&&{className:r}):{style:{width:e,height:n}}},e.mountObject=function(t,e,n){var o=k(n),r=o.instanceRef,i=o._events,s=new e(t,N(n,"state"),N(n,"options"));return Object.keys(i).forEach(function(t){return A(s,t,i[t])}),W(null,r,s),s},e.updateObject=function(t,e,n){var o=k(n),r=o._events,i=o.instanceRef,s=k(e),a=s._events,c=s.instanceRef;if(B(n,"state")){var u=N(e,"state",{}),p=N(n,"state",{});u.type!==p.type&&t.setType(p.type),u.behaviors!==p.behaviors&&(u.behaviors&&t.behaviors.disable(u.behaviors),p.behaviors&&t.behaviors.enable(p.behaviors)),u.zoom!==p.zoom&&t.setZoom(p.zoom),u.center!==p.center&&t.setCenter(p.center),p.bounds&&u.bounds!==p.bounds&&t.setBounds(p.bounds)}if(B(n,"options")){var f=N(e,"options"),l=N(n,"options",{});f!==l&&t.options.set(l)}N(e,"width")===N(n,"width")&&N(e,"height")===N(n,"height")||t.container.fitToViewport(),$(t,a,r),W(c,i,t)},e.unmountObject=function(t,e){var n=k(e),o=n.instanceRef,r=n._events;null!==t&&(Object.keys(r).forEach(function(e){return U(t,e,r[e])}),t.destroy(),W(o))},e}(r.a.Component);z.defaultProps={width:320,height:240};var F=P(z,!0,["Map"]),L=function(t){function e(){var e=this;t.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(t){e._parentElement=t}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=this;this._mounted=!0,this.props.ymaps.panorama.isSupported()&&e.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(function(e){return t._mounted&&t.setState({instance:e})})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){this._mounted=!1,e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){var t=e.getParentElementSize(this.props);return r.a.createElement("div",Object.assign({},{ref:this._getRef},t))},e.getParentElementSize=function(t){var e=t.width,n=t.height,o=t.style,r=t.className;return void 0!==o||void 0!==r?Object.assign({},o&&{style:o},r&&{className:r}):{style:{width:e,height:n}}},e.mountObject=function(t,e,n){var o=k(n),r=o.instanceRef,i=o._events,s=N(n,"point"),a=N(n,"locateOptions"),c=N(n,"options");return new Promise(function(n,o){e.locate(s,a).done(function(o){if(o.length>0){var s=new e.Player(t,o[0],c);W(null,r,s),Object.keys(i).forEach(function(t){return A(s,t,i[t])}),n(s)}},o)})},e.updateObject=function(t,e,n){var o=k(n),r=o._events,i=o.instanceRef,s=k(e),a=s._events,c=s.instanceRef;if(B(n,"options")){var u=N(e,"options"),p=N(n,"options");u!==p&&t.options.set(p)}if(B(n,"point")){var f=N(n,"point"),l=N(e,"point"),d=N(n,"locateOptions");f!==l&&t.moveTo(f,d)}$(t,a,r),W(c,i,t)},e.unmountObject=function(t,e){var n=k(e),o=n.instanceRef,r=n._events;null!==t&&(Object.keys(r).forEach(function(e){return U(t,e,r[e])}),W(o))},e}(r.a.Component);L.defaultProps={width:320,height:240};P(L,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"]);var q=function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountControl(this.props.ymaps.control[this.props.name],this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateControl(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountControl(this.state.instance,this.props)},e.prototype.render=function(){return r.a.createElement(E.Provider,{value:this.state.instance},this.props.children)},e.mountControl=function(t,e){var n=k(e),o=n.instanceRef,r=n.parent,i=n.lazy,s=n._events,a=new t({data:N(e,"data"),options:N(e,"options"),state:N(e,"state"),mapTypes:N(e,"mapTypes"),lazy:i});if(Object.keys(s).forEach(function(t){return A(a,t,s[t])}),r&&r.controls&&"function"==typeof r.controls.add)r.controls.add(a);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+e.name);r.add(a)}return W(null,o,a),a},e.updateControl=function(t,e,n){var o=k(n),r=o._events,i=o.instanceRef,s=k(e),a=s._events,c=s.instanceRef;if(B(n,"options")){var u=N(e,"options"),p=N(n,"options");u!==p&&t.options.set(p)}if(B(n,"data")){var f=N(e,"data"),l=N(n,"data");f!==l&&t.data.set(l)}if(B(n,"state")){var d=N(e,"state"),m=N(n,"state");d!==m&&t.state.set(m)}if(B(n,"mapTypes")){var h=N(e,"mapTypes"),y=N(n,"mapTypes");h!==y&&(t.removeAllMapTypes(),y.forEach(function(e){return t.addMapType(e)}))}$(t,a,r),W(c,i,t)},e.unmountControl=function(t,e){var n=k(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach(function(e){return U(t,e,i[e])}),r.controls&&"function"==typeof r.controls.remove?r.controls.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),W(o))},e}(r.a.Component),I=(C(P(function(t){return r.a.createElement(q,Object.assign({},t,{name:"Button"}))},!0,["control.Button"])),C(P(function(t){return r.a.createElement(q,Object.assign({},t,{name:"FullscreenControl"}))},!0,["control.FullscreenControl"])),C(P(function(t){return r.a.createElement(q,Object.assign({},t,{name:"GeolocationControl"}))},!0,["control.GeolocationControl"])),C(P(function(t){return r.a.createElement(q,Object.assign({},t,{name:"ListBox"}))},!0,["control.ListBox"])),C(P(function(t){return r.a.createElement(q,Object.assign({},t,{name:"ListBoxItem"}))},!0,["control.ListBoxItem"])),C(P(function(t){return r.a.createElement(q,Object.assign({},t,{name:"RouteButton"}))},!0,["control.RouteButton"])),C(P(function(t){return r.a.createElement(q,Object.assign({},t,{name:"RouteEditor"}))},!0,["control.RouteEditor"])),C(P(function(t){return r.a.createElement(q,Object.assign({},t,{name:"RoutePanel"}))},!0,["control.RoutePanel"])),C(P(function(t){return r.a.createElement(q,Object.assign({},t,{name:"RulerControl"}))},!0,["control.RulerControl"])),C(P(function(t){return r.a.createElement(q,Object.assign({},t,{name:"SearchControl"}))},!0,["control.SearchControl"])),C(P(function(t){return r.a.createElement(q,Object.assign({},t,{name:"TrafficControl"}))},!0,["control.TrafficControl"])),C(P(function(t){return r.a.createElement(q,Object.assign({},t,{name:"TypeSelector"}))},!0,["control.TypeSelector"])),C(P(function(t){return r.a.createElement(q,Object.assign({},t,{name:"ZoomControl"}))},!0,["control.ZoomControl"])),C(P(function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this.props.ymaps.Clusterer,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return r.a.createElement(E.Provider,{value:this.state.instance},this.props.children)},e.mountObject=function(t,e){var n=k(e),o=n.instanceRef,r=n.parent,i=n._events,s=new t(N(e,"options"));if(Object.keys(i).forEach(function(t){return A(s,t,i[t])}),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(s);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount Clusterer");r.add(s)}return W(null,o,s),s},e.updateObject=function(t,e,n){var o=k(n),r=o._events,i=o.instanceRef,s=k(e),a=s._events,c=s.instanceRef;if(B(n,"options")){var u=N(e,"options"),p=N(n,"options");u!==p&&t.options.set(p)}$(t,a,r),W(c,i,t)},e.unmountObject=function(t,e){var n=k(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach(function(e){return U(t,e,i[e])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),W(o))},e}(r.a.Component),!0,["Clusterer"])),C(P(function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this.props.ymaps.ObjectManager,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return null},e.mountObject=function(t,e){var n=k(e),o=n.instanceRef,r=n.parent,i=n._events,s=N(e,"options"),a=N(e,"features"),c=N(e,"filter"),u=N(e,"objects"),p=N(e,"clusters"),f=new t(s);if(f.add(a||[]),f.setFilter(c),f.objects.options.set(u),f.clusters.options.set(p),Object.keys(i).forEach(function(t){return A(f,t,i[t])}),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(f);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount ObjectManager");r.add(f)}return W(null,o,f),f},e.updateObject=function(t,e,n){var o=k(n),r=o._events,i=o.instanceRef,s=k(e),a=s._events,c=s.instanceRef;if(B(n,"options")){var u=N(e,"options"),p=N(n,"options");u!==p&&t.options.set(p)}if(B(n,"objects")){var f=N(e,"objects"),l=N(n,"objects");f!==l&&t.objects.options.set(l)}if(B(n,"clusters")){var d=N(e,"clusters"),m=N(n,"clusters");d!==m&&t.clusters.options.set(m)}if(B(n,"filter")){var h=N(e,"filter"),y=N(n,"filter");h!==y&&t.options.set(y)}if(B(n,"features")){var v=N(e,"features"),b=N(n,"features");v!==b&&(t.remove(v),t.add(b))}$(t,a,r),W(c,i,t)},e.unmountObject=function(t,e){var n=k(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach(function(e){return U(t,e,i[e])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),W(o))},e}(r.a.Component),!0,["ObjectManager"])),function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=this.props,n=t.name,o=t.ymaps,r=t.dangerZone,i=e.mountObject(r&&"function"==typeof r.modifyConstructor?r.modifyConstructor(o[n]):o[n],this.props);this.setState({instance:i})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return null},e.mountObject=function(t,e){var n=k(e),o=n.instanceRef,r=n.parent,i=n._events,s=new t(N(e,"geometry"),N(e,"properties"),N(e,"options"));if(Object.keys(i).forEach(function(t){return A(s,t,i[t])}),r&&r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(s);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+e.name);r.add(s)}return W(null,o,s),s},e.updateObject=function(t,e,n){var o=k(n),r=o._events,i=o.instanceRef,s=k(e),a=s._events,c=s.instanceRef;if(B(n,"geometry")){var u=N(e,"geometry",{}),p=N(n,"geometry",{});Array.isArray(p)&&p!==u?Array.isArray(p[0])&&"number"==typeof p[1]?(t.geometry.setCoordinates(p[0]),t.geometry.setRadius(p[1])):t.geometry.setCoordinates(p):"object"==typeof p&&(p.coordinates!==u.coordinates&&t.geometry.setCoordinates(p.coordinates),p.radius!==u.radius&&t.geometry.setRadius(p.radius))}if(B(n,"properties")){var f=N(e,"properties"),l=N(n,"properties");f!==l&&t.properties.set(l)}if(B(n,"options")){var d=N(e,"options"),m=N(n,"options");d!==m&&t.options.set(m)}$(t,a,r),W(c,i,t)},e.unmountObject=function(t,e){var n=k(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach(function(e){return U(t,e,i[e])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),W(o))},e}(r.a.Component)),V={modifyConstructor:function(t){function e(e,n,o){t.call(this,{geometry:e,properties:n},o)}return e.prototype=t.prototype,e}},Z=(C(P(function(t){return r.a.createElement(I,Object.assign({},t,{name:"GeoObject",dangerZone:V}))},!0,["GeoObject"])),C(P(function(t){return r.a.createElement(I,Object.assign({},t,{name:"Circle"}))},!0,["Circle"])),C(P(function(t){return r.a.createElement(I,Object.assign({},t,{name:"Placemark"}))},!0,["Placemark"])));C(P(function(t){return r.a.createElement(I,Object.assign({},t,{name:"Polygon"}))},!0,["Polygon"])),C(P(function(t){return r.a.createElement(I,Object.assign({},t,{name:"Polyline"}))},!0,["Polyline"])),C(P(function(t){return r.a.createElement(I,Object.assign({},t,{name:"Rectangle"}))},!0,["Rectangle"]))}).call(this,n(140))}}]);
//# sourceMappingURL=7-dae4726363dcd34ff3f4.js.map