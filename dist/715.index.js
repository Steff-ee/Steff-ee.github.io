(self.webpackChunkrambling_after=self.webpackChunkrambling_after||[]).push([[715],{8956:(t,e,r)=>{"use strict";var n,o,a;r.d(e,{ht:()=>o,rY:()=>a}),function(t){t[t.Horizontal=0]="Horizontal",t[t.Vertical=1]="Vertical"}(n||(n={})),function(t){t[t.Left=0]="Left",t[t.Right=1]="Right"}(o||(o={})),function(t){t[t.Left=0]="Left",t[t.Right=1]="Right"}(a||(a={}))},8715:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>Bt});var n=r(9526),o=r(7035),a=r(8956),i=r(3063),c=r(5228);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f={WebkitTransform:"perspective(1px) translateZ(0)",transform:"perspective(1px) translateZ(0)",WebkitTransitionProperty:"transform",transitionProperty:"transform"},p=u(u({},f),{},{WebkitTransform:"scale(1.08)",transform:"scale(1.08)"}),d=function(t){var e=t.icon,r=t.onClick,o=t.color,a=t.innerStyle,i=t.width,c=void 0===i?"64px":i,l=t.height,s=void 0===l?"64px":l,d=t.filter,v=t.applyGrow,b=void 0!==v&&v,y=t.disabled,h=void 0!==y&&y,m=f;return b&&(m=p),n.createElement("div",{style:u({width:c,height:s,color:o,display:"flex",justifyContent:"center",alignItems:"center",filter:d,cursor:h?"default":"pointer"},m),onClick:function(){!h&&r&&r()}},n.createElement("div",{style:a},e))};function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=function(t){var e=t.label,r=t.width,o=t.height,a=t.rootStyle,i=t.textStyle,c=t.onClick;return n.createElement("div",null,n.createElement("div",{"aria-label":e,key:"NavLabel-".concat(e),style:b({display:"flex",width:r,height:o,minWidth:"160px",cursor:"pointer"},a),onClick:c},n.createElement("div",{style:b({margin:"auto",padding:"0 16px"},i)},e)))};function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var j=n.forwardRef((function(t,e){var r,o,l=t.icon,u=t.onClick,s=t.label,f=void 0===s?"":s,p=t.width,v=t.height,b=t.color,y=t.onAttention,m=t.labelPosition,O=t.labelWidth,j=t.rootStyle,x=t.labelTextStyle,k=t.isSelected,C=void 0!==k&&k,P=t.disabled,S=void 0!==P&&P,E=t.tabIndex,I=void 0===E?0:E,z=(r=(0,n.useState)(!1),o=2,function(t){if(Array.isArray(t))return t}(r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(r,o)||function(t,e){if(t){if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),A=z[0],L=z[1],M=(0,c.cI)().borderHighlight,B=A?M:void 0,H=S?"opacity(0.25)":"",D={};C&&(D={borderRadius:"3px",borderLeft:"2px solid ".concat(b)});var R=n.createElement(n.Fragment,null);void 0!==m&&(R=n.createElement(h,{label:f,width:O||p,height:v,rootStyle:{textAlign:"left"},textStyle:x}));var T=n.createElement(d,{icon:l,width:p,height:v,color:b,innerStyle:D,filter:H,applyGrow:A,disabled:S}),_=n.createElement("div",{"aria-label":f,tabIndex:I,style:g({display:"flex",backgroundColor:B},j),onClick:u,onKeyPress:u,ref:e},m===a.ht.Left&&R,T,m===a.ht.Right&&R);return(0,i.o)(_,[y,L])})),x=r(7267),k=r(7505),C=r(9882),P=r(8407);function S(t){return function(t){if(Array.isArray(t))return z(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||I(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=I(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function I(t,e){if(t){if("string"==typeof t)return z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(t,e):void 0}}function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var A=["mousedown","touchstart"];function L(){return L=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},L.apply(this,arguments)}function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function B(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){H(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function H(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var R=function(t){var e,r,o=t.navItems,i=t.showIconLabels,l=t.onIconsMenuIconClick,u=t.onRenderBelowContent,s=t.iconWidth,f=void 0===s?"64px":s,p=t.iconHeight,d=void 0===p?"64px":p,v=t.labelWidth,b=void 0===v?"184px":v,y=t.selectedId,h=t.orientation,m=t.menuButtonProps,g=t.tabIndex,O=void 0===g?0:g,w=(e=(0,n.useState)(!1),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),x=w[0],C=w[1],I=(0,c.cI)().navbarText,z=(0,n.useRef)(null),M=(0,n.useRef)(null);!function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:A,o=(0,n.useRef)(e);(0,n.useEffect)((function(){o.current=e}),[e]),(0,n.useEffect)((function(){var e,n=function(e){var r,n=E(t);try{for(n.s();!(r=n.n()).done;){var a;if(null!==(a=r.value.current)&&void 0!==a&&a.contains(e.target))return}}catch(t){n.e(t)}finally{n.f()}o.current(e)},a=E(r);try{for(a.s();!(e=a.n()).done;){var i=e.value;document.addEventListener(i,n)}}catch(t){a.e(t)}finally{a.f()}return function(){var t,e=E(r);try{for(e.s();!(t=e.n()).done;){var o=t.value;document.removeEventListener(o,n)}}catch(t){e.e(t)}finally{e.f()}}}),[r].concat(S(t)))}([M,z],(0,n.useCallback)((function(){return C(!1)}),[]));var H=(0,k.Z)(),R={};return i&&(R={labelPosition:h===a.rY.Left?a.ht.Right:a.ht.Left,labelWidth:b}),{menuButtonProps:B({label:"Open menu",width:f,height:d,color:I,icon:n.createElement(P.F,{size:"2x"}),onClick:function(){null==l||l(),C(!x)},ref:M},m),MenuList:n.createElement("div",{style:{display:"table"},ref:z},n.createElement("div",{style:B({color:I},H)},x&&o.map((function(t){var e=t.label,r=t.icon,o=t.onClick;return n.createElement(j,L({},R,{icon:r,label:e,onClick:function(){null==o||o(),C(!1)},width:f,height:d,color:I,key:t.id,isSelected:t.id===y,tabIndex:O}))}))),u&&i&&u()),isOpen:x}},T=r(8563),_=r(8284),V=r(3539),N=r(9508),W=r(4823),U=r(3482),Y=r(7451),F=r(8505),$=r(251),G=r(8281),Z=r(6880),q=r(2121),K=r(8610),J=r(8702),X=r(4226),Q=r(4456),tt=r(7422),et=r(3550),rt=r(7198),nt=r(1579),ot=r(1228),at=r(4797),it=r(1081),ct=r(8952);function lt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var ut=function(){var t=(0,n.useContext)(Q.q).setSeason,e="true"===new URLSearchParams((0,it.TH)().search).get("test");return{icon:n.createElement(X.d,{size:"28px"}),id:void 0,label:"change theme",onClick:function(){return t((function(t){return function(t,e){switch(t){case tt.ak.None:return tt.ak.Winter;case tt.ak.Winter:return tt.ak.Spring;case tt.ak.Spring:return e?tt.ak.Summer:tt.ak.None;case tt.ak.Summer:return tt.ak.Autumn;case tt.ak.Autumn:default:return tt.ak.None}}(t,e)}))}}},st={icon:n.createElement(K.I,null),id:at.dl.Cats,label:"cats",onClick:function(){return(0,at.gB)(at.X_)}},ft={icon:n.createElement(Z.x,null),id:"all-about",label:"about",onClick:function(){return(0,at.gB)(at.jQ)}},pt={icon:n.createElement(q.A,null),id:"all-posts",label:"posts",onClick:function(){return(0,at.gB)(at.LM)}},dt={icon:n.createElement($.s,null),id:"all-links",label:"links",onClick:function(){return(0,at.gB)(at.OI)}},vt={icon:n.createElement(Y.S,null),id:"subscribe",label:"subscribe",onClick:function(){return window.open("https://ramblingafter.substack.com/","_blank")}},bt=function(t){return"home"===t?"":"".concat(t," ")};function yt(){return yt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},yt.apply(this,arguments)}function ht(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function mt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ht(Object(r),!0).forEach((function(e){gt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ht(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function gt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var wt=n.lazy((function(){return r.e(235).then(r.bind(r,235))})),jt=function(t){var e,r,o=t.navItems,l=t.rootStyle,u=t.iconWidth,s=void 0===u?"64px":u,f=t.iconHeight,p=void 0===f?"64px":f,d=t.labelWidth,v=void 0===d?"248px":d,b=t.orientation,y=t.defaultActiveItemIndex,h=void 0===y?-1:y,m=(e=(0,n.useState)(-1),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return Ot(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ot(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),g=m[0],O=m[1];-1===g&&h>-1&&(g=h);var w,C=g>=0?o[g]:void 0,P=(0,c.cI)().navbarText,S=(0,k.Z)(),E=(0,n.useContext)(x.YN)===x.cJ.Small?"0 auto":void 0;w=b===a.rY.Right?{right:0}:{left:0};var I=(0,n.useCallback)((function(t){t||O(-1)}),[]),z=n.createElement("div",{style:mt({display:"inline-block",margin:E},l)},n.createElement("div",{style:mt({display:"flex",position:"relative"},w)},o.map((function(t,e){var r=(0,n.useCallback)((function(t){t&&O(e)}),[]);return n.createElement(j,yt({},t,{width:s,height:p,color:P,key:"nav-".concat(e),id:t.id,onAttention:r}))}))),n.createElement(n.Suspense,null,n.createElement(wt,{navItem:C,height:p,width:v,orientation:b,rootStyle:mt(mt({},S),{},{color:P,position:"absolute"},w)})));return(0,i.o)(z,[I])},xt=["onClick"];function kt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Ct(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?kt(Object(r),!0).forEach((function(e){Pt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):kt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Pt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var St=function(t){var e,r,o,i,c,l,u,s,f=t.skip,p=(r=(0,n.useContext)(at.Xn).prevPivots,o=(0,n.useContext)(ct.p).getLastOpenPost,i=(0,at.N6)().pivot,c=(0,ot.mK)(o,r,i),l=(0,ot.U7)(o,r,i),u=(0,ot.KL)(o,r,i),s=(0,ot.Nq)(o,r,i),[{icon:n.createElement(G.q,null),id:at.dl.Home,label:"all",onClick:function(){return(0,at.gB)(c)}},{icon:n.createElement(F.u,null),id:at.dl.Stories,label:nt.GM,onClick:function(){return(0,at.gB)(l)}},{icon:n.createElement(W.U,null),id:at.dl.Games,label:rt.xN,onClick:function(){return(0,at.gB)(u)}},{icon:n.createElement(J.r,null),id:at.dl.Conjecture,label:et.j3,onClick:function(){return(0,at.gB)(s)}}]),d=(0,it.TH)(),v=(0,at.NS)(d.pathname),b=null!==(e=p.find((function(t){return t.id===v})))&&void 0!==e?e:p[0],y=(b.onClick,Ct(Ct({},function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(b,xt)),{},{label:"choose category",tabIndex:1})),h=R({skip:f,navItems:p,showIconLabels:!0,selectedId:v,orientation:a.rY.Left,menuButtonProps:y,tabIndex:2});return{categoryButtonProps:h.menuButtonProps,CategoryList:h.MenuList,isOpen:h.isOpen}},Et=function(t){var e=t.orientation,r=ut(),o=St({}),a=o.categoryButtonProps,i=o.CategoryList,c=o.isOpen,l=(0,n.useMemo)((function(){return[a,st,vt,r]}),[a,r,vt]);return n.createElement(n.Fragment,null,n.createElement(jt,{navItems:l,orientation:e,defaultActiveItemIndex:c?0:void 0}),n.createElement("div",{style:{marginTop:"64px",position:"absolute"}},i))},It=function(t){var e,r,o=t.firstClick,a=t.backClick,i=t.nextClick,c=t.latestClick,l=t.scrollRef,u=t.positionRef,s=t.orientation,f=(0,it.TH)(),p=(0,at.NS)(f.pathname),d=(e=a,r=p,{icon:n.createElement(V._,null),id:"BackCommand",label:"Previous ".concat(bt(r)," post"),onClick:e,disabled:void 0===e}),v=function(t,e){return{icon:n.createElement(N.H,null),id:"NextCommand",label:"Next ".concat(bt(e)," post"),onClick:t,disabled:void 0===t}}(i,p),b=function(t,e){var r,o,a=(r=(0,n.useState)(!1),o=2,function(t){if(Array.isArray(t))return t}(r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(r,o)||function(t,e){if(t){if("string"==typeof t)return lt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?lt(t,e):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],c=a[1];return(0,n.useEffect)((function(){!i&&e.current&&(0,C.w)(e).y<0&&c(!0)})),{icon:n.createElement(U.s,null),id:"ReturnToTopCommand",label:"Return to top",onClick:function(){var e,r;c(!1),null===(e=t.current)||void 0===e||null===(r=e.scrollTo)||void 0===r||r.call(e,0,0)},disabled:!i}}(l,u),y=function(t,e){return{icon:n.createElement(T.d,null),id:"FirstCommand",label:"First ".concat(bt(e)," post"),onClick:t,disabled:void 0===t}}(o,p),h=function(t,e){return{icon:n.createElement(_.h,null),id:"LatestCommand",label:"Latest ".concat(bt(e)," post"),onClick:t,disabled:void 0===t}}(c,p),m=(0,n.useMemo)((function(){return[y,d,b,v,h]}),[y,d,b,v,h]);return n.createElement(jt,{selectedId:p,navItems:m,orientation:s})};function zt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function At(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?zt(Object(r),!0).forEach((function(e){Lt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):zt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Lt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Mt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const Bt=function(t){var e,r,i,c,l=t.showPosts,u=t.scrollRef,s=t.positionRef,f=t.rootStyle,p=t.firstClick,d=t.backClick,v=t.nextClick,b=t.latestClick,y=(0,n.useContext)(x.YN)===x.cJ.Small,h=(i=(0,n.useState)(!0),c=2,function(t){if(Array.isArray(t))return t}(i)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(i,c)||function(t,e){if(t){if("string"==typeof t)return Mt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Mt(t,e):void 0}}(i,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=h[0],g=h[1],O=function(t){var e=t.skip,r=ut(),o=(0,n.useMemo)((function(){return[ft,pt,dt,st,vt,r]}),[]);return R({skip:e,navItems:o,showIconLabels:!0,selectedId:"",orientation:a.rY.Left})}({skip:!y}),w=O.menuButtonProps,P=O.MenuList,S=n.createElement(j,w),E=(0,k.Z)();(0,C.v)(u,s,(function(t,e){if(l){var r=t.y-e.y;r>256&&m&&g(!1),r<-256&&!m&&g(!0)}})),y?r=!(e=l&&m):(e=l,r=!0);var I=(0,o.useTransition)(r,{from:{opacity:0,transform:"translate3d(0, -24%, 0)"},enter:{opacity:1,transform:"translate3d(0, 0%, 0)"},leave:{opacity:0}}),z=(0,o.useTransition)(e,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return n.createElement("div",{style:f},n.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},r&&I((function(t,e){return e&&n.createElement(o.animated.div,{style:At(At({},t),{},{visibility:(0,o.to)(t.opacity,(function(t){return 0===t?"hidden":"visible"}))})},y?S:n.createElement(Et,{orientation:a.rY.Left}))})),!y&&n.createElement("div",{style:{flexGrow:1}}),e&&z((function(t,e){return e&&n.createElement(o.animated.div,{style:At(At({},t),{},{visibility:(0,o.to)(t.opacity,(function(t){return 0===t?"hidden":"visible"}))})},n.createElement(It,{scrollRef:u,positionRef:s,orientation:a.rY.Right,firstClick:p,backClick:d,nextClick:v,latestClick:b}))}))),n.createElement("div",{style:At(At(At({},f),E),{},{marginTop:y?void 0:"-64px",zIndex:-1})}),P)}},8563:(t,e,r)=>{var n=r(3498).w_;t.exports.d=function(t){return n({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"}}]})(t)}},8284:(t,e,r)=>{var n=r(3498).w_;t.exports.h=function(t){return n({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"}}]})(t)}},3539:(t,e,r)=>{var n=r(3498).w_;t.exports._=function(t){return n({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"}}]})(t)}},9508:(t,e,r)=>{var n=r(3498).w_;t.exports.H=function(t){return n({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"}}]})(t)}},8407:(t,e,r)=>{var n=r(3498).w_;t.exports.F=function(t){return n({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(t)}},4823:(t,e,r)=>{var n=r(3498).w_;t.exports.U=function(t){return n({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M19 272.47l40.63 18.06a32 32 0 0 0 24.88.47l12.78-5.12a32 32 0 0 0 18.76-20.5l9.22-30.65a24 24 0 0 1 12.55-15.65L159.94 208v50.33a48 48 0 0 1-26.53 42.94l-57.22 28.65A80 80 0 0 0 32 401.48V416h319.86V224c0-106-85.92-192-191.92-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.79 7.58L16 80l-9 9a24 24 0 0 0-7 17v137.21a32 32 0 0 0 19 29.26zM52 128a20 20 0 1 1-20 20 20 20 0 0 1 20-20zm316 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}}]})(t)}},3482:(t,e,r)=>{var n=r(3498).w_;t.exports.s=function(t){return n({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"}}]})(t)}},7451:(t,e,r)=>{var n=r(3498).w_;t.exports.S=function(t){return n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(t)}},8505:(t,e,r)=>{var n=r(3498).w_;t.exports.u=function(t){return n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 0C460.22 3.56 96.44 38.2 71.01 287.61c-3.09 26.66-4.84 53.44-5.99 80.24l178.87-178.69c6.25-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94 9.38 9.37 24.59 9.37 33.98 0l57.13-57.07c42.09-.14 84.15-2.53 125.96-7.36 53.48-5.44 97.02-26.47 132.58-56.54H255.74l146.79-48.88c11.25-14.89 21.37-30.71 30.45-47.12h-81.14l106.54-53.21C500.29 132.86 510.19 26.26 512 0z"}}]})(t)}},251:(t,e,r)=>{var n=r(3498).w_;t.exports.s=function(t){return n({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"}}]})(t)}},8281:(t,e,r)=>{var n=r(3498).w_;t.exports.q=function(t){return n({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"}}]})(t)}},6880:(t,e,r)=>{var n=r(3498).w_;t.exports.x=function(t){return n({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}}]})(t)}},2121:(t,e,r)=>{var n=r(3498).w_;t.exports.A=function(t){return n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}}]})(t)}},8610:(t,e,r)=>{var n=r(3498).w_;t.exports.I=function(t){return n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"}}]})(t)}},8702:(t,e,r)=>{var n=r(3498).w_;t.exports.r=function(t){return n({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM160 368c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V240c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v128zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V144c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v224zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v64z"}}]})(t)}},4226:(t,e,r)=>{var n=r(3498).w_;t.exports.d=function(t){return n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"}}]})(t)}}}]);