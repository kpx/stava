var C,c,z,V,H,G,J,K,F={},Q=[],be=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,_){for(var t in _)e[t]=_[t];return e}function X(e){var _=e.parentNode;_&&_.removeChild(e)}function O(e,_,t){var r,l,n,i={};for(n in _)n=="key"?r=_[n]:n=="ref"?l=_[n]:i[n]=_[n];if(arguments.length>2&&(i.children=arguments.length>3?C.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)i[n]===void 0&&(i[n]=e.defaultProps[n]);return P(e,i,r,l,null)}function P(e,_,t,r,l){var n={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l==null?++z:l};return l==null&&c.vnode!=null&&c.vnode(n),n}function ke(){return{current:null}}function A(e){return e.children}function E(e,_){this.props=e,this.context=_}function x(e,_){if(_==null)return e.__?x(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?x(e):null}function Y(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return Y(e)}}function L(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!D.__r++||J!==c.debounceRendering)&&((J=c.debounceRendering)||G)(D)}function D(){for(var e;D.__r=H.length;)e=H.sort(function(_,t){return _.__v.__b-t.__v.__b}),H=[],e.some(function(_){var t,r,l,n,i,a;_.__d&&(i=(n=(t=_).__v).__e,(a=t.__P)&&(r=[],(l=k({},n)).__v=n.__v+1,W(a,n,l,t.__n,a.ownerSVGElement!==void 0,n.__h!=null?[i]:null,r,i==null?x(n):i,n.__h),le(r,n),n.__e!=i&&Y(n)))})}function Z(e,_,t,r,l,n,i,a,p,h){var o,d,f,u,s,$,v,y=r&&r.__k||Q,g=y.length;for(t.__k=[],o=0;o<_.length;o++)if((u=t.__k[o]=(u=_[o])==null||typeof u=="boolean"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?P(null,u,null,null,u):Array.isArray(u)?P(A,{children:u},null,null,null):u.__b>0?P(u.type,u.props,u.key,null,u.__v):u)!=null){if(u.__=t,u.__b=t.__b+1,(f=y[o])===null||f&&u.key==f.key&&u.type===f.type)y[o]=void 0;else for(d=0;d<g;d++){if((f=y[d])&&u.key==f.key&&u.type===f.type){y[d]=void 0;break}f=null}W(e,u,f=f||F,l,n,i,a,p,h),s=u.__e,(d=u.ref)&&f.ref!=d&&(v||(v=[]),f.ref&&v.push(f.ref,null,u),v.push(d,u.__c||s,u)),s!=null?($==null&&($=s),typeof u.type=="function"&&u.__k===f.__k?u.__d=p=ee(u,p,e):p=te(e,u,f,y,s,p),typeof t.type=="function"&&(t.__d=p)):p&&f.__e==p&&p.parentNode!=e&&(p=x(f))}for(t.__e=$,o=g;o--;)y[o]!=null&&(typeof t.type=="function"&&y[o].__e!=null&&y[o].__e==t.__d&&(t.__d=x(r,o+1)),ue(y[o],y[o]));if(v)for(o=0;o<v.length;o++)ie(v[o],v[++o],v[++o])}function ee(e,_,t){for(var r,l=e.__k,n=0;l&&n<l.length;n++)(r=l[n])&&(r.__=e,_=typeof r.type=="function"?ee(r,_,t):te(t,r,r,l,r.__e,_));return _}function _e(e,_){return _=_||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(t){_e(t,_)}):_.push(e)),_}function te(e,_,t,r,l,n){var i,a,p;if(_.__d!==void 0)i=_.__d,_.__d=void 0;else if(t==null||l!=n||l.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(l),i=null;else{for(a=n,p=0;(a=a.nextSibling)&&p<r.length;p+=2)if(a==l)break e;e.insertBefore(l,n),i=n}return i!==void 0?i:l.nextSibling}function $e(e,_,t,r,l){var n;for(n in t)n==="children"||n==="key"||n in _||U(e,n,null,t[n],r);for(n in _)l&&typeof _[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||t[n]===_[n]||U(e,n,_[n],t[n],r)}function ne(e,_,t){_[0]==="-"?e.setProperty(_,t):e[_]=t==null?"":typeof t!="number"||be.test(_)?t:t+"px"}function U(e,_,t,r,l){var n;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||ne(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||ne(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")n=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+n]=t,t?r||e.addEventListener(_,n?oe:re,n):e.removeEventListener(_,n?oe:re,n);else if(_!=="dangerouslySetInnerHTML"){if(l)_=_.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_ in e)try{e[_]=t==null?"":t;break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||_[0]==="a"&&_[1]==="r")?e.setAttribute(_,t):e.removeAttribute(_))}}function re(e){this.l[e.type+!1](c.event?c.event(e):e)}function oe(e){this.l[e.type+!0](c.event?c.event(e):e)}function W(e,_,t,r,l,n,i,a,p){var h,o,d,f,u,s,$,v,y,g,w,b=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(p=t.__h,a=_.__e=t.__e,_.__h=null,n=[a]),(h=c.__b)&&h(_);try{e:if(typeof b=="function"){if(v=_.props,y=(h=b.contextType)&&r[h.__c],g=h?y?y.props.value:h.__:r,t.__c?$=(o=_.__c=t.__c).__=o.__E:("prototype"in b&&b.prototype.render?_.__c=o=new b(v,g):(_.__c=o=new E(v,g),o.constructor=b,o.render=Ce),y&&y.sub(o),o.props=v,o.state||(o.state={}),o.context=g,o.__n=r,d=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=k({},o.__s)),k(o.__s,b.getDerivedStateFromProps(v,o.__s))),f=o.props,u=o.state,d)b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==f&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,g),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,g)===!1||_.__v===t.__v){o.props=v,o.state=o.__s,_.__v!==t.__v&&(o.__d=!1),o.__v=_,_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(T){T&&(T.__=_)}),o.__h.length&&i.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,g),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(f,u,s)})}o.context=g,o.props=v,o.state=o.__s,(h=c.__r)&&h(_),o.__d=!1,o.__v=_,o.__P=e,h=o.render(o.props,o.state,o.context),o.state=o.__s,o.getChildContext!=null&&(r=k(k({},r),o.getChildContext())),d||o.getSnapshotBeforeUpdate==null||(s=o.getSnapshotBeforeUpdate(f,u)),w=h!=null&&h.type===A&&h.key==null?h.props.children:h,Z(e,Array.isArray(w)?w:[w],_,t,r,l,n,i,a,p),o.base=_.__e,_.__h=null,o.__h.length&&i.push(o),$&&(o.__E=o.__=null),o.__e=!1}else n==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=xe(t.__e,_,t,r,l,n,i,p);(h=c.diffed)&&h(_)}catch(T){_.__v=null,(p||n!=null)&&(_.__e=a,_.__h=!!p,n[n.indexOf(a)]=null),c.__e(T,_,t)}}function le(e,_){c.__c&&c.__c(_,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(r){r.call(t)})}catch(r){c.__e(r,t.__v)}})}function xe(e,_,t,r,l,n,i,a){var p,h,o,d=t.props,f=_.props,u=_.type,s=0;if(u==="svg"&&(l=!0),n!=null){for(;s<n.length;s++)if((p=n[s])&&"setAttribute"in p==!!u&&(u?p.localName===u:p.nodeType===3)){e=p,n[s]=null;break}}if(e==null){if(u===null)return document.createTextNode(f);e=l?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,f.is&&f),n=null,a=!1}if(u===null)d===f||a&&e.data===f||(e.data=f);else{if(n=n&&C.call(e.childNodes),h=(d=t.props||F).dangerouslySetInnerHTML,o=f.dangerouslySetInnerHTML,!a){if(n!=null)for(d={},s=0;s<e.attributes.length;s++)d[e.attributes[s].name]=e.attributes[s].value;(o||h)&&(o&&(h&&o.__html==h.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if($e(e,f,d,l,a),o)_.__k=[];else if(s=_.props.children,Z(e,Array.isArray(s)?s:[s],_,t,r,l&&u!=="foreignObject",n,i,n?n[0]:t.__k&&x(t,0),a),n!=null)for(s=n.length;s--;)n[s]!=null&&X(n[s]);a||("value"in f&&(s=f.value)!==void 0&&(s!==d.value||s!==e.value||u==="progress"&&!s)&&U(e,"value",s,d.value,!1),"checked"in f&&(s=f.checked)!==void 0&&s!==e.checked&&U(e,"checked",s,d.checked,!1))}return e}function ie(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){c.__e(r,t)}}function ue(e,_,t){var r,l;if(c.unmount&&c.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ie(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){c.__e(n,_)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&ue(r[l],_,typeof e.type!="function");t||e.__e==null||X(e.__e),e.__e=e.__d=void 0}function Ce(e,_,t){return this.constructor(e,t)}function ce(e,_,t){var r,l,n;c.__&&c.__(e,_),l=(r=typeof t=="function")?null:t&&t.__k||_.__k,n=[],W(_,e=(!r&&t||_).__k=O(A,null,[e]),l||F,F,_.ownerSVGElement!==void 0,!r&&t?[t]:l?null:_.firstChild?C.call(_.childNodes):null,n,!r&&t?t:l?l.__e:_.firstChild,r),le(n,e)}function fe(e,_){ce(e,_,fe)}function He(e,_,t){var r,l,n,i=k({},e.props);for(n in _)n=="key"?r=_[n]:n=="ref"?l=_[n]:i[n]=_[n];return arguments.length>2&&(i.children=arguments.length>3?C.call(arguments,2):t),P(e.type,i,r||e.key,l||e.ref,null)}function Pe(e,_){var t={__c:_="__cC"+K++,__:e,Consumer:function(r,l){return r.children(l)},Provider:function(r){var l,n;return this.getChildContext||(l=[],(n={})[_]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&l.some(L)},this.sub=function(i){l.push(i);var a=i.componentWillUnmount;i.componentWillUnmount=function(){l.splice(l.indexOf(i),1),a&&a.call(i)}}),r.children}};return t.Provider.__=t.Consumer.contextType=t}C=Q.slice,c={__e:function(e,_){for(var t,r,l;_=_.__;)if((t=_.__c)&&!t.__)try{if((r=t.constructor)&&r.getDerivedStateFromError!=null&&(t.setState(r.getDerivedStateFromError(e)),l=t.__d),t.componentDidCatch!=null&&(t.componentDidCatch(e),l=t.__d),l)return t.__E=t}catch(n){e=n}throw e}},z=0,V=function(e){return e!=null&&e.constructor===void 0},E.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},t),this.props)),e&&k(t,e),e!=null&&this.__v&&(_&&this.__h.push(_),L(this))},E.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),L(this))},E.prototype.render=A,H=[],G=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,D.__r=0,K=0;var Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",render:ce,hydrate:fe,createElement:O,h:O,Fragment:A,createRef:ke,get isValidElement(){return V},Component:E,cloneElement:He,createContext:Pe,toChildArray:_e,get options(){return c}}),S,m,se,M=0,q=[],ae=c.__b,pe=c.__r,he=c.diffed,de=c.__c,ve=c.unmount;function N(e,_){c.__h&&c.__h(m,e,M||_),M=0;var t=m.__H||(m.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function je(e){return M=1,Ee(me,e)}function Ee(e,_,t){var r=N(S++,2);return r.t=e,r.__c||(r.__=[t?t(_):me(void 0,_),function(l){var n=r.t(r.__[0],l);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=m),r.__}function Oe(e,_){var t=N(S++,3);!c.__s&&R(t.__H,_)&&(t.__=e,t.__H=_,m.__H.__h.push(t))}function Le(e,_){var t=N(S++,4);!c.__s&&R(t.__H,_)&&(t.__=e,t.__H=_,m.__h.push(t))}function Se(e,_){var t=N(S++,7);return R(t.__H,_)&&(t.__=e(),t.__H=_,t.__h=e),t.__}function We(e,_){return M=8,Se(function(){return e},_)}function we(){var e;for(q.sort(function(_,t){return _.__v.__b-t.__v.__b});e=q.pop();)if(e.__P)try{e.__H.__h.forEach(j),e.__H.__h.forEach(I),e.__H.__h=[]}catch(_){e.__H.__h=[],c.__e(_,e.__v)}}c.__b=function(e){m=null,ae&&ae(e)},c.__r=function(e){pe&&pe(e),S=0;var _=(m=e.__c).__H;_&&(_.__h.forEach(j),_.__h.forEach(I),_.__h=[])},c.diffed=function(e){he&&he(e);var _=e.__c;_&&_.__H&&_.__H.__h.length&&(q.push(_)!==1&&se===c.requestAnimationFrame||((se=c.requestAnimationFrame)||function(t){var r,l=function(){clearTimeout(n),ye&&cancelAnimationFrame(r),setTimeout(t)},n=setTimeout(l,100);ye&&(r=requestAnimationFrame(l))})(we)),m=null},c.__c=function(e,_){_.some(function(t){try{t.__h.forEach(j),t.__h=t.__h.filter(function(r){return!r.__||I(r)})}catch(r){_.some(function(l){l.__h&&(l.__h=[])}),_=[],c.__e(r,t.__v)}}),de&&de(e,_)},c.unmount=function(e){ve&&ve(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{j(r)}catch(l){_=l}}),_&&c.__e(_,t.__v))};var ye=typeof requestAnimationFrame=="function";function j(e){var _=m,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),m=_}function I(e){var _=m;e.__c=e.__(),m=_}function R(e,_){return!e||e.length!==_.length||_.some(function(t,r){return t!==e[r]})}function me(e,_){return typeof _=="function"?_(e):_}function Te(e){if(e.__esModule)return e;var _=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(_,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}),_}var Fe=Te(Ae),De,Ue,Me,B=Fe,Ne=0;function ge(e,_,t,r,l){var n,i,a={};for(i in _)i=="ref"?n=_[i]:a[i]=_[i];var p={type:e,props:a,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ne,__source:r,__self:l};if(typeof e=="function"&&(n=e.defaultProps))for(i in n)a[i]===void 0&&(a[i]=n[i]);return B.options.vnode&&B.options.vnode(p),p}Me=B.Fragment,Ue=ge,De=ge;export{We as A,Me as F,ce as S,De as a,Le as h,Ue as j,je as l,Oe as y};