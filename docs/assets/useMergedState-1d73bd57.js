import{r as h,aA as m,h as S,ba as V}from"./index-3ff3488c.js";function C(a){var u=h.useRef();u.current=a;var t=h.useCallback(function(){for(var n,e=arguments.length,f=new Array(e),r=0;r<e;r++)f[r]=arguments[r];return(n=u.current)===null||n===void 0?void 0:n.call.apply(n,[u].concat(f))},[]);return t}function c(a){return a!==void 0}function F(a,u){var t=u||{},n=t.defaultValue,e=t.value,f=t.onChange,r=t.postState,A=m(function(){return c(e)?e:c(n)?typeof n=="function"?n():n:typeof a=="function"?a():a}),v=S(A,2),i=v[0],l=v[1],o=e!==void 0?e:i,E=r?r(o):o,R=C(f),_=m([o]),p=S(_,2),d=p[0],b=p[1];V(function(){var s=d[0];i!==s&&R(i,s)},[d]),V(function(){c(e)||l(e)},[e]);var x=C(function(s,g){l(s,g),b([o],g)});return[E,x]}export{C as a,F as u};
