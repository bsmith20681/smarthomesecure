"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[342],{3075:function(e,t,n){n.d(t,{NI:function(){return E},Rz:function(){return T},YF:function(){return R},aN:function(){return H}});var r,l=n(7294),u=n(7145),o=n(1371),c=n(4750),f=n(9238),i=n(3935);let s={...r||(r=n.t(l,2))},a=s.useInsertionEffect||(e=>e());function m(e){let t=l.useRef(()=>{});return a(()=>{t.current=e}),l.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)},[])}var g="undefined"!=typeof document?l.useLayoutEffect:l.useEffect;let d=!1,h=0,v=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+h++,p=s.useId||function(){let[e,t]=l.useState(()=>d?v():void 0);return g(()=>{null==e&&t(v())},[]),l.useEffect(()=>{d=!0},[]),e},C=l.createContext(null),x=l.createContext(null),M=()=>{var e;return(null==(e=l.useContext(C))?void 0:e.id)||null},y=()=>l.useContext(x);function R(e){void 0===e&&(e={});let{nodeId:t}=e,n=function(e){let{open:t=!1,onOpenChange:n,elements:r}=e,u=p(),o=l.useRef({}),[c]=l.useState(()=>(function(){let e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach(e=>e(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter(e=>e!==n))||[])}}})()),f=null!=M(),[i,s]=l.useState(r.reference),a=m((e,t,r)=>{o.current.openEvent=e?t:void 0,c.emit("openchange",{open:e,event:t,reason:r,nested:f}),null==n||n(e,t,r)}),g=l.useMemo(()=>({setPositionReference:s}),[]),d=l.useMemo(()=>({reference:i||r.reference||null,floating:r.floating||null,domReference:r.reference}),[i,r.reference,r.floating]);return l.useMemo(()=>({dataRef:o,open:t,onOpenChange:a,elements:d,events:c,floatingId:u,refs:g}),[t,a,d,c,u,g])}({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,u=r.elements,[c,i]=l.useState(null),[s,a]=l.useState(null),d=(null==u?void 0:u.reference)||c,h=l.useRef(null),v=y();g(()=>{d&&(h.current=d)},[d]);let C=(0,o.YF)({...e,elements:{...u,...s&&{reference:s}}}),x=l.useCallback(e=>{let t=(0,f.kK)(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;a(t),C.refs.setReference(t)},[C.refs]),R=l.useCallback(e=>{((0,f.kK)(e)||null===e)&&(h.current=e,i(e)),((0,f.kK)(C.refs.reference.current)||null===C.refs.reference.current||null!==e&&!(0,f.kK)(e))&&C.refs.setReference(e)},[C.refs]),b=l.useMemo(()=>({...C.refs,setReference:R,setPositionReference:x,domReference:h}),[C.refs,R,x]),k=l.useMemo(()=>({...C.elements,domReference:d}),[C.elements,d]),S=l.useMemo(()=>({...C,...r,refs:b,elements:k,nodeId:t}),[C,b,k,t,r]);return g(()=>{r.dataRef.current.floatingContext=S;let e=null==v?void 0:v.nodesRef.current.find(e=>e.id===t);e&&(e.context=S)}),l.useMemo(()=>({...C,context:S,refs:b,elements:k}),[C,b,k,S])}let b="active",k="selected";function S(e,t,n){let r=new Map,l="item"===n,u=e;if(l&&e){let{[b]:t,[k]:n,...r}=e;u=r}return{..."floating"===n&&{tabIndex:-1},...u,...t.map(t=>{let r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r}).concat(e).reduce((e,t)=>(t&&Object.entries(t).forEach(t=>{let[n,u]=t;if(!(l&&[b,k].includes(n))){if(0===n.indexOf("on")){if(r.has(n)||r.set(n,[]),"function"==typeof u){var o;null==(o=r.get(n))||o.push(u),e[n]=function(){for(var e,t=arguments.length,l=Array(t),u=0;u<t;u++)l[u]=arguments[u];return null==(e=r.get(n))?void 0:e.map(e=>e(...l)).find(e=>void 0!==e)}}}else e[n]=u}}),e),{})}}function E(e){void 0===e&&(e=[]);let t=e,n=l.useCallback(t=>S(t,e,"reference"),t),r=l.useCallback(t=>S(t,e,"floating"),t),u=l.useCallback(t=>S(t,e,"item"),e.map(e=>null==e?void 0:e.item));return l.useMemo(()=>({getReferenceProps:n,getFloatingProps:r,getItemProps:u}),[n,r,u])}function w(e,t){return{...e,rects:{...e.rects,floating:{...e.rects.floating,height:t}}}}let H=e=>({name:"inner",options:e,async fn(t){let{listRef:n,overflowRef:r,onFallbackChange:l,offset:u=0,index:f=0,minItemsVisible:s=4,referenceOverflowThreshold:a=0,scrollRef:m,...g}=e,{rects:d,elements:{floating:h}}=t,v=n.current[f];if(!v)return{};let p={...t,...await (0,o.cv)(-v.offsetTop-h.clientTop-d.reference.height/2-v.offsetHeight/2-u).fn(t)},C=(null==m?void 0:m.current)||h,x=await (0,c.US)(w(p,C.scrollHeight),g),M=await (0,c.US)(p,{...g,elementContext:"reference"}),y=Math.max(0,x.top),R=p.y+y,b=Math.max(0,C.scrollHeight-y-Math.max(0,x.bottom));return C.style.maxHeight=b+"px",C.scrollTop=y,l&&(C.offsetHeight<v.offsetHeight*Math.min(s,n.current.length-1)-1||M.top>=-a||M.bottom>=-a?(0,i.flushSync)(()=>l(!0)):(0,i.flushSync)(()=>l(!1))),r&&(r.current=await (0,c.US)(w({...p,y:R},C.offsetHeight),g)),{y:R}}});function T(e,t){let{open:n,elements:r}=e,{enabled:o=!0,overflowRef:c,scrollRef:f,onChange:s}=t,a=m(s),g=l.useRef(!1),d=l.useRef(null),h=l.useRef(null);return l.useEffect(()=>{if(!o)return;function e(e){if(e.ctrlKey||!t||null==c.current)return;let n=e.deltaY,r=c.current.top>=-.5,l=c.current.bottom>=-.5,o=t.scrollHeight-t.clientHeight,f=n<0?-1:1,s=n<0?"max":"min";!(t.scrollHeight<=t.clientHeight)&&(!r&&n>0||!l&&n<0?(e.preventDefault(),(0,i.flushSync)(()=>{a(e=>e+Math[s](n,o*f))})):/firefox/i.test((0,u.ij)())&&(t.scrollTop+=n))}let t=(null==f?void 0:f.current)||r.floating;if(n&&t)return t.addEventListener("wheel",e),requestAnimationFrame(()=>{d.current=t.scrollTop,null!=c.current&&(h.current={...c.current})}),()=>{d.current=null,h.current=null,t.removeEventListener("wheel",e)}},[o,n,r.floating,c,f,a]),l.useMemo(()=>o?{floating:{onKeyDown(){g.current=!0},onWheel(){g.current=!1},onPointerMove(){g.current=!1},onScroll(){let e=(null==f?void 0:f.current)||r.floating;if(c.current&&e&&g.current){if(null!==d.current){let t=e.scrollTop-d.current;(c.current.bottom<-.5&&t<-1||c.current.top<-.5&&t>1)&&(0,i.flushSync)(()=>a(e=>e+t))}requestAnimationFrame(()=>{d.current=e.scrollTop})}}}}:{},[o,c,r.floating,f,a])}}}]);