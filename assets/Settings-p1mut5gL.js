import{r as A,j as t,c as O,p as Rt}from"./vendor-pjRk-vBk.js";import{R as pe,z as U,S as un,u as Ht,U as gn,V as ke,W as Ve,B as q,X as Ft,Y as Kt,Z as hn,_ as zt,$ as At,a0 as mn,a1 as Gt,a2 as et,a3 as be,a4 as Pt,a5 as fn,a6 as xn,a7 as pn,n as $t,a8 as bn,L as qt,y as yn,a9 as vn,aa as Wt,ab as tt,ac as st,ad as Xt,ae as Qe,af as jn,ag as Yt,ah as wn,k as Nn,ai as It,aj as Cn,ak as Sn,al as kt,am as Ut,an as Lt,ao as Bt,ap as _n,aq as Tn,ar as An,as as Pn,at as In,au as kn,av as Un}from"./index-MxdNAAnV.js";import{c as Ie,g as Ln}from"./auth-PrcDRVv8.js";import{b as N,d as nt,H as Bn,a as Zt,T as Jt,j as En}from"./react-dom-TQ8kguLZ.js";import{I as te,a as P,s as On,F as Dn,g as Mn}from"./Icons-awHH-sQs.js";import"./hls-zqvr_1ex.js";import"./caption-parsing-s8xSAG1s.js";import"./language-db-rihdcEfo.js";import{S as Rn}from"./StatusCircle-jm_f_Ge4.js";import"./locales-U0bIJ3PG.js";var Ue={exports:{}};Ue.exports;(function(n,i){var r=200,o="__lodash_hash_undefined__",l=1,h=2,m=9007199254740991,u="[object Arguments]",x="[object Array]",D="[object AsyncFunction]",I="[object Boolean]",w="[object Date]",F="[object Error]",y="[object Function]",Z="[object GeneratorFunction]",L="[object Map]",M="[object Number]",B="[object Null]",k="[object Object]",z="[object Promise]",d="[object Proxy]",se="[object RegExp]",g="[object Set]",S="[object String]",G="[object Symbol]",Le="[object Undefined]",ue="[object WeakMap]",ge="[object ArrayBuffer]",le="[object DataView]",Be="[object Float32Array]",Ee="[object Float64Array]",ye="[object Int8Array]",Oe="[object Int16Array]",De="[object Int32Array]",Me="[object Uint8Array]",ve="[object Uint8ClampedArray]",Re="[object Uint16Array]",He="[object Uint32Array]",Fe=/[\\^$.*+?()[\]{}|]/g,je=/^\[object .+?Constructor\]$/,Ke=/^(?:0|[1-9]\d*)$/,p={};p[Be]=p[Ee]=p[ye]=p[Oe]=p[De]=p[Me]=p[ve]=p[Re]=p[He]=!0,p[u]=p[x]=p[ge]=p[I]=p[le]=p[w]=p[F]=p[y]=p[L]=p[M]=p[k]=p[se]=p[g]=p[S]=p[ue]=!1;var at=typeof Ie=="object"&&Ie&&Ie.Object===Object&&Ie,Vt=typeof self=="object"&&self&&self.Object===Object&&self,W=at||Vt||Function("return this")(),it=i&&!i.nodeType&&i,rt=it&&!0&&n&&!n.nodeType&&n,ct=rt&&rt.exports===it,ze=ct&&at.process,lt=function(){try{return ze&&ze.binding&&ze.binding("util")}catch{}}(),ot=lt&&lt.isTypedArray;function es(e,s){for(var a=-1,c=e==null?0:e.length,b=0,f=[];++a<c;){var j=e[a];s(j,a,e)&&(f[b++]=j)}return f}function ts(e,s){for(var a=-1,c=s.length,b=e.length;++a<c;)e[b+a]=s[a];return e}function ss(e,s){for(var a=-1,c=e==null?0:e.length;++a<c;)if(s(e[a],a,e))return!0;return!1}function ns(e,s){for(var a=-1,c=Array(e);++a<e;)c[a]=s(a);return c}function as(e){return function(s){return e(s)}}function is(e,s){return e.has(s)}function rs(e,s){return e==null?void 0:e[s]}function cs(e){var s=-1,a=Array(e.size);return e.forEach(function(c,b){a[++s]=[b,c]}),a}function ls(e,s){return function(a){return e(s(a))}}function os(e){var s=-1,a=Array(e.size);return e.forEach(function(c){a[++s]=c}),a}var ds=Array.prototype,us=Function.prototype,we=Object.prototype,Ge=W["__core-js_shared__"],dt=us.toString,$=we.hasOwnProperty,ut=function(){var e=/[^.]+$/.exec(Ge&&Ge.keys&&Ge.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),gt=we.toString,gs=RegExp("^"+dt.call($).replace(Fe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ht=ct?W.Buffer:void 0,Ne=W.Symbol,mt=W.Uint8Array,ft=we.propertyIsEnumerable,hs=ds.splice,ne=Ne?Ne.toStringTag:void 0,xt=Object.getOwnPropertySymbols,ms=ht?ht.isBuffer:void 0,fs=ls(Object.keys,Object),$e=oe(W,"DataView"),he=oe(W,"Map"),qe=oe(W,"Promise"),We=oe(W,"Set"),Xe=oe(W,"WeakMap"),me=oe(Object,"create"),xs=re($e),ps=re(he),bs=re(qe),ys=re(We),vs=re(Xe),pt=Ne?Ne.prototype:void 0,Ye=pt?pt.valueOf:void 0;function ae(e){var s=-1,a=e==null?0:e.length;for(this.clear();++s<a;){var c=e[s];this.set(c[0],c[1])}}function js(){this.__data__=me?me(null):{},this.size=0}function ws(e){var s=this.has(e)&&delete this.__data__[e];return this.size-=s?1:0,s}function Ns(e){var s=this.__data__;if(me){var a=s[e];return a===o?void 0:a}return $.call(s,e)?s[e]:void 0}function Cs(e){var s=this.__data__;return me?s[e]!==void 0:$.call(s,e)}function Ss(e,s){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=me&&s===void 0?o:s,this}ae.prototype.clear=js,ae.prototype.delete=ws,ae.prototype.get=Ns,ae.prototype.has=Cs,ae.prototype.set=Ss;function X(e){var s=-1,a=e==null?0:e.length;for(this.clear();++s<a;){var c=e[s];this.set(c[0],c[1])}}function _s(){this.__data__=[],this.size=0}function Ts(e){var s=this.__data__,a=Se(s,e);if(a<0)return!1;var c=s.length-1;return a==c?s.pop():hs.call(s,a,1),--this.size,!0}function As(e){var s=this.__data__,a=Se(s,e);return a<0?void 0:s[a][1]}function Ps(e){return Se(this.__data__,e)>-1}function Is(e,s){var a=this.__data__,c=Se(a,e);return c<0?(++this.size,a.push([e,s])):a[c][1]=s,this}X.prototype.clear=_s,X.prototype.delete=Ts,X.prototype.get=As,X.prototype.has=Ps,X.prototype.set=Is;function ie(e){var s=-1,a=e==null?0:e.length;for(this.clear();++s<a;){var c=e[s];this.set(c[0],c[1])}}function ks(){this.size=0,this.__data__={hash:new ae,map:new(he||X),string:new ae}}function Us(e){var s=_e(this,e).delete(e);return this.size-=s?1:0,s}function Ls(e){return _e(this,e).get(e)}function Bs(e){return _e(this,e).has(e)}function Es(e,s){var a=_e(this,e),c=a.size;return a.set(e,s),this.size+=a.size==c?0:1,this}ie.prototype.clear=ks,ie.prototype.delete=Us,ie.prototype.get=Ls,ie.prototype.has=Bs,ie.prototype.set=Es;function Ce(e){var s=-1,a=e==null?0:e.length;for(this.__data__=new ie;++s<a;)this.add(e[s])}function Os(e){return this.__data__.set(e,o),this}function Ds(e){return this.__data__.has(e)}Ce.prototype.add=Ce.prototype.push=Os,Ce.prototype.has=Ds;function J(e){var s=this.__data__=new X(e);this.size=s.size}function Ms(){this.__data__=new X,this.size=0}function Rs(e){var s=this.__data__,a=s.delete(e);return this.size=s.size,a}function Hs(e){return this.__data__.get(e)}function Fs(e){return this.__data__.has(e)}function Ks(e,s){var a=this.__data__;if(a instanceof X){var c=a.__data__;if(!he||c.length<r-1)return c.push([e,s]),this.size=++a.size,this;a=this.__data__=new ie(c)}return a.set(e,s),this.size=a.size,this}J.prototype.clear=Ms,J.prototype.delete=Rs,J.prototype.get=Hs,J.prototype.has=Fs,J.prototype.set=Ks;function zs(e,s){var a=Te(e),c=!a&&an(e),b=!a&&!c&&Ze(e),f=!a&&!c&&!b&&_t(e),j=a||c||b||f,C=j?ns(e.length,String):[],_=C.length;for(var v in e)(s||$.call(e,v))&&!(j&&(v=="length"||b&&(v=="offset"||v=="parent")||f&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Vs(v,_)))&&C.push(v);return C}function Se(e,s){for(var a=e.length;a--;)if(wt(e[a][0],s))return a;return-1}function Gs(e,s,a){var c=s(e);return Te(e)?c:ts(c,a(e))}function fe(e){return e==null?e===void 0?Le:B:ne&&ne in Object(e)?Js(e):nn(e)}function bt(e){return xe(e)&&fe(e)==u}function yt(e,s,a,c,b){return e===s?!0:e==null||s==null||!xe(e)&&!xe(s)?e!==e&&s!==s:$s(e,s,a,c,yt,b)}function $s(e,s,a,c,b,f){var j=Te(e),C=Te(s),_=j?x:Q(e),v=C?x:Q(s);_=_==u?k:_,v=v==u?k:v;var E=_==k,K=v==k,T=_==v;if(T&&Ze(e)){if(!Ze(s))return!1;j=!0,E=!1}if(T&&!E)return f||(f=new J),j||_t(e)?vt(e,s,a,c,b,f):Ys(e,s,_,a,c,b,f);if(!(a&l)){var R=E&&$.call(e,"__wrapped__"),H=K&&$.call(s,"__wrapped__");if(R||H){var V=R?e.value():e,Y=H?s.value():s;return f||(f=new J),b(V,Y,a,c,f)}}return T?(f||(f=new J),Zs(e,s,a,c,b,f)):!1}function qs(e){if(!St(e)||tn(e))return!1;var s=Nt(e)?gs:je;return s.test(re(e))}function Ws(e){return xe(e)&&Ct(e.length)&&!!p[fe(e)]}function Xs(e){if(!sn(e))return fs(e);var s=[];for(var a in Object(e))$.call(e,a)&&a!="constructor"&&s.push(a);return s}function vt(e,s,a,c,b,f){var j=a&l,C=e.length,_=s.length;if(C!=_&&!(j&&_>C))return!1;var v=f.get(e);if(v&&f.get(s))return v==s;var E=-1,K=!0,T=a&h?new Ce:void 0;for(f.set(e,s),f.set(s,e);++E<C;){var R=e[E],H=s[E];if(c)var V=j?c(H,R,E,s,e,f):c(R,H,E,e,s,f);if(V!==void 0){if(V)continue;K=!1;break}if(T){if(!ss(s,function(Y,ce){if(!is(T,ce)&&(R===Y||b(R,Y,a,c,f)))return T.push(ce)})){K=!1;break}}else if(!(R===H||b(R,H,a,c,f))){K=!1;break}}return f.delete(e),f.delete(s),K}function Ys(e,s,a,c,b,f,j){switch(a){case le:if(e.byteLength!=s.byteLength||e.byteOffset!=s.byteOffset)return!1;e=e.buffer,s=s.buffer;case ge:return!(e.byteLength!=s.byteLength||!f(new mt(e),new mt(s)));case I:case w:case M:return wt(+e,+s);case F:return e.name==s.name&&e.message==s.message;case se:case S:return e==s+"";case L:var C=cs;case g:var _=c&l;if(C||(C=os),e.size!=s.size&&!_)return!1;var v=j.get(e);if(v)return v==s;c|=h,j.set(e,s);var E=vt(C(e),C(s),c,b,f,j);return j.delete(e),E;case G:if(Ye)return Ye.call(e)==Ye.call(s)}return!1}function Zs(e,s,a,c,b,f){var j=a&l,C=jt(e),_=C.length,v=jt(s),E=v.length;if(_!=E&&!j)return!1;for(var K=_;K--;){var T=C[K];if(!(j?T in s:$.call(s,T)))return!1}var R=f.get(e);if(R&&f.get(s))return R==s;var H=!0;f.set(e,s),f.set(s,e);for(var V=j;++K<_;){T=C[K];var Y=e[T],ce=s[T];if(c)var Tt=j?c(ce,Y,T,s,e,f):c(Y,ce,T,e,s,f);if(!(Tt===void 0?Y===ce||b(Y,ce,a,c,f):Tt)){H=!1;break}V||(V=T=="constructor")}if(H&&!V){var Ae=e.constructor,Pe=s.constructor;Ae!=Pe&&"constructor"in e&&"constructor"in s&&!(typeof Ae=="function"&&Ae instanceof Ae&&typeof Pe=="function"&&Pe instanceof Pe)&&(H=!1)}return f.delete(e),f.delete(s),H}function jt(e){return Gs(e,ln,Qs)}function _e(e,s){var a=e.__data__;return en(s)?a[typeof s=="string"?"string":"hash"]:a.map}function oe(e,s){var a=rs(e,s);return qs(a)?a:void 0}function Js(e){var s=$.call(e,ne),a=e[ne];try{e[ne]=void 0;var c=!0}catch{}var b=gt.call(e);return c&&(s?e[ne]=a:delete e[ne]),b}var Qs=xt?function(e){return e==null?[]:(e=Object(e),es(xt(e),function(s){return ft.call(e,s)}))}:on,Q=fe;($e&&Q(new $e(new ArrayBuffer(1)))!=le||he&&Q(new he)!=L||qe&&Q(qe.resolve())!=z||We&&Q(new We)!=g||Xe&&Q(new Xe)!=ue)&&(Q=function(e){var s=fe(e),a=s==k?e.constructor:void 0,c=a?re(a):"";if(c)switch(c){case xs:return le;case ps:return L;case bs:return z;case ys:return g;case vs:return ue}return s});function Vs(e,s){return s=s??m,!!s&&(typeof e=="number"||Ke.test(e))&&e>-1&&e%1==0&&e<s}function en(e){var s=typeof e;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?e!=="__proto__":e===null}function tn(e){return!!ut&&ut in e}function sn(e){var s=e&&e.constructor,a=typeof s=="function"&&s.prototype||we;return e===a}function nn(e){return gt.call(e)}function re(e){if(e!=null){try{return dt.call(e)}catch{}try{return e+""}catch{}}return""}function wt(e,s){return e===s||e!==e&&s!==s}var an=bt(function(){return arguments}())?bt:function(e){return xe(e)&&$.call(e,"callee")&&!ft.call(e,"callee")},Te=Array.isArray;function rn(e){return e!=null&&Ct(e.length)&&!Nt(e)}var Ze=ms||dn;function cn(e,s){return yt(e,s)}function Nt(e){if(!St(e))return!1;var s=fe(e);return s==y||s==Z||s==D||s==d}function Ct(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=m}function St(e){var s=typeof e;return e!=null&&(s=="object"||s=="function")}function xe(e){return e!=null&&typeof e=="object"}var _t=ot?as(ot):Ws;function ln(e){return rn(e)?zs(e):Xs(e)}function on(){return[]}function dn(){return!1}n.exports=cn})(Ue,Ue.exports);var Hn=Ue.exports;const Fn=Ln(Hn);function ee(n){const[i,r]=A.useState(void 0);A.useEffect(()=>{r(void 0)},[n]);const o=A.useMemo(()=>!Fn(i,n)&&i!==void 0,[i,n]),l=A.useCallback(u=>{u instanceof Function?r(x=>u(x!==void 0?x:n)):r(u)},[n,r]),h=i===void 0?n:i,m=A.useCallback(()=>r(void 0),[r]);return[h,l,m,o]}function Kn(n,i,r,o,l,h,m,u){const[x,D,I,w]=ee(l),[F,y,Z,L]=ee(h),[M,B,k,z]=ee(n),[d,se,g,S]=ee(i),[G,Le,ue,ge]=ee(r),[le,Be,Ee,ye]=ee(o),[Oe,De,Me,ve]=ee(m),[Re,He,Fe,je]=ee(u);function Ke(){k(),g(),ue(),I(),Z(),Ee(),Me(),Fe()}return{reset:Ke,changed:z||S||ge||ye||L||w||ve||je,theme:{state:M,set:B,changed:z},appLanguage:{state:d,set:se,changed:S},subtitleStyling:{state:G,set:Le,changed:ge},deviceName:{state:le,set:Be,changed:ye},proxyUrls:{state:x,set:D,changed:w},backendUrl:{state:F,set:y,changed:L},profile:{state:Oe,set:De,changed:ve},enableThumbnails:{state:Re,set:He,changed:je}}}function de(n){return t.jsx("div",{className:O("w-full rounded-lg bg-settings-card-background bg-opacity-[0.15] border border-settings-card-border",n.paddingClass??"px-8 py-6",n.className),children:n.children})}function Qt(n){return t.jsx("div",{className:O("w-full rounded-lg bg-settings-card-altBackground bg-opacity-50",n.paddingClass??"px-8 py-6",n.className),children:n.children})}function zn(){const{t:n}=N(),i=pe(),r=U(u=>u.account),{logout:o}=un(),l=Ht("account-delete"),[h,m]=nt(async()=>{r&&(await gn(i,r),await o(),l.hide())},[o,r,i,l.hide]);return r?t.jsxs("div",{children:[t.jsx(ke,{border:!0,children:n("settings.account.actions.title")}),t.jsxs(Qt,{paddingClass:"px-6 py-12",className:"grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12",children:[t.jsxs("div",{children:[t.jsx(Ve,{children:n("settings.account.actions.delete.title")}),t.jsx("p",{className:"text-type-text",children:n("settings.account.actions.delete.text")})]}),t.jsx("div",{className:"flex justify-start lg:justify-end items-center",children:t.jsx(q,{theme:"danger",loading:h.loading,onClick:l.show,children:n("settings.account.actions.delete.button")})})]}),t.jsx(Ft,{id:l.id,children:t.jsxs(Kt,{children:[t.jsx(ke,{className:"!mt-0",children:n("settings.account.actions.delete.confirmTitle")}),t.jsx(hn,{children:n("settings.account.actions.delete.confirmDescription")}),t.jsx(q,{theme:"danger",loading:h.loading,onClick:m,children:n("settings.account.actions.delete.confirmButton")})]})})]}):null}function Gn(n){const{t:i}=N();return t.jsx(Ft,{id:n.id,children:t.jsxs(Kt,{children:[t.jsxs("div",{className:"flex justify-between items-center mb-9",children:[t.jsx(ke,{className:"!mt-0 !mb-0",children:i("settings.account.profile.title")}),t.jsx(zt,{profile:{colorA:n.colorA,colorB:n.colorB,icon:n.userIcon},iconClass:"text-2xl",sizeClass:"w-12 h-12"})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsx(At,{label:i("settings.account.profile.firstColor"),value:n.colorA,onInput:n.setColorA}),t.jsx(At,{label:i("settings.account.profile.secondColor"),value:n.colorB,onInput:n.setColorB}),t.jsx(mn,{label:i("settings.account.profile.userIcon"),value:n.userIcon,onInput:n.setUserIcon})]}),t.jsx("div",{className:"flex justify-center mt-8",children:t.jsx(q,{theme:"purple",className:"!px-20",onClick:n.close,children:i("settings.account.profile.finish")})})]})})}function $n(n){const{t:i}=N(),{logout:r}=Gt(),o=Ht("profile-edit");return t.jsxs(de,{paddingClass:"px-8 py-10",className:"!mt-8",children:[t.jsx(Gn,{id:o.id,close:o.hide,colorA:n.colorA,setColorA:n.setColorA,colorB:n.colorB,setColorB:n.setColorB,userIcon:n.userIcon,setUserIcon:n.setUserIcon}),t.jsxs("div",{className:"grid lg:grid-cols-[auto,1fr] gap-8",children:[t.jsx("div",{children:t.jsx(zt,{profile:{colorA:n.colorA,colorB:n.colorB,icon:n.userIcon},iconClass:"text-5xl",sizeClass:"w-32 h-32",bottom:t.jsxs("button",{type:"button",className:"tabbable text-xs flex gap-2 items-center bg-editBadge-bg text-editBadge-text hover:bg-editBadge-bgHover py-1 px-3 rounded-full cursor-pointer",onClick:o.show,children:[t.jsx(te,{icon:P.EDIT}),i("settings.account.accountDetails.editProfile")]})})}),t.jsx("div",{children:t.jsxs("div",{className:"space-y-8 max-w-xs",children:[t.jsx(et,{label:i("settings.account.accountDetails.deviceNameLabel")??void 0,placeholder:i("settings.account.accountDetails.deviceNamePlaceholder")??void 0,value:n.deviceName,onChange:l=>n.setDeviceName(l)}),t.jsx("div",{className:"flex space-x-3",children:t.jsx(q,{theme:"danger",onClick:r,children:i("settings.account.accountDetails.logoutButton")})})]})})]})]})}function Et(n){const{t:i}=N();return t.jsxs("div",{className:O({"pointer-events-none overflow-hidden w-full rounded":!0,"aspect-video relative":!n.fullscreen,"fixed inset-0 z-[60]":n.fullscreen}),children:[n.fullscreen&&n.show?t.jsx(Bn,{children:t.jsx("html",{"data-no-scroll":!0})}):null,t.jsx($t,{animation:"fade",show:n.show,children:t.jsxs("div",{className:"absolute inset-0 pointer-events-auto",style:{backgroundImage:"radial-gradient(102.95% 87.07% at 100% 100%, #EEAA45 0%, rgba(165, 186, 151, 0.56) 54.69%, rgba(74, 207, 254, 0.00) 100%), linear-gradient(180deg, #48D3FF 0%, #3B27B2 100%)"},children:[t.jsx("button",{type:"button",className:"tabbable bg-black absolute right-3 top-3 text-white bg-opacity-25 duration-100 transition-[background-color,transform] active:scale-110 hover:bg-opacity-50 p-2 rounded-md cursor-pointer",onClick:n.onToggle,children:t.jsx(te,{icon:n.fullscreen?P.X:P.EXPAND})}),t.jsx("div",{className:"text-white pointer-events-none absolute flex w-full flex-col items-center transition-[bottom] bottom-0 p-4",children:t.jsx("div",{className:n.fullscreen?"":"transform origin-bottom text-[0.5rem]",children:t.jsx(bn,{text:i("settings.subtitles.previewQuote")??void 0,styling:n.styling,overrideCasing:!1})})})]})})]})}function qn(n){const{t:i}=N(),[r,o]=A.useState(!1);return t.jsxs("div",{children:[t.jsx(be,{border:!0,children:i("settings.subtitles.title")}),t.jsxs("div",{className:"grid md:grid-cols-[1fr,356px] gap-8",children:[t.jsxs("div",{className:"space-y-6",children:[t.jsx(Pt,{label:i("settings.subtitles.backgroundLabel"),max:100,min:0,onChange:l=>n.setStyling({...n.styling,backgroundOpacity:l/100}),value:n.styling.backgroundOpacity*100,textTransformer:l=>`${l}%`}),t.jsx(Pt,{label:i("settings.subtitles.textSizeLabel"),max:200,min:1,textTransformer:l=>`${l}%`,onChange:l=>n.setStyling({...n.styling,size:l/100}),value:n.styling.size*100}),t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx(fn.FieldTitle,{children:i("settings.subtitles.colorLabel")}),t.jsx("div",{className:"flex justify-center items-center",children:xn.map(l=>t.jsx(pn,{onClick:()=>n.setStyling({...n.styling,color:l}),color:l,active:n.styling.color===l},l))})]})]}),t.jsx(Et,{show:!0,styling:n.styling,onToggle:()=>o(l=>!l)}),t.jsx(Et,{show:r,fullscreen:!0,styling:n.styling,onToggle:()=>o(l=>!l)})]})]})}const Ot="https://postman-echo.com/get";function Wn(n){return new Promise((i,r)=>{setTimeout(()=>r(new Error("Timed out!")),3e3),vn(n,Ot,{}).then(o=>{if(o.url!==Ot)return r(new Error("Not a proxy"));i()}).catch(r)})}function Xn(){const n=U(l=>l.proxySet),{loading:i,value:r}=Zt(async()=>{const l=await yn()?"success":"unset";let h="unset";if(n&&n.length>0)try{await Wn(n[0]),h="success"}catch{h="error"}return{extension:l,proxy:h,defaultProxy:"success"}},[n]);let o="unset";return((r==null?void 0:r.extension)==="success"||(r==null?void 0:r.proxy)==="success")&&(o="success"),((r==null?void 0:r.proxy)==="error"||(r==null?void 0:r.extension)==="error")&&(o="error"),{setupStates:r,globalState:o,loading:i}}function Je(n){const{t:i}=N(),r={error:"error",success:"success",unset:"noresult"};return t.jsxs("div",{className:"flex items-start text-type-dimmed my-4",children:[t.jsx(Rn,{type:r[n.status],className:O({"!text-video-scraping-noresult !bg-video-scraping-noresult opacity-50":n.grey,"scale-90 mr-3":!0})}),t.jsxs("div",{children:[t.jsx("p",{className:O({"!text-white":n.grey&&n.highlight,"!text-type-dimmed opacity-75":n.grey&&!n.highlight,"text-type-danger":n.status==="error","text-white":n.status==="success"}),children:n.children}),n.status==="error"?t.jsx("p",{className:"max-w-96",children:i("settings.connections.setup.itemError")}):null]})]})}function Yn(){const{t:n}=N(),i=Rt(),{loading:r,setupStates:o,globalState:l}=Xn();if(r||!o)return t.jsx(de,{children:t.jsx("div",{className:"flex py-6 items-center justify-center",children:t.jsx(qt,{})})});const h={error:{title:"settings.connections.setup.errorStatus.title",desc:"settings.connections.setup.errorStatus.description",button:"settings.connections.setup.redoSetup"},success:{title:"settings.connections.setup.successStatus.title",desc:"settings.connections.setup.successStatus.description",button:"settings.connections.setup.redoSetup"},unset:{title:"settings.connections.setup.unsetStatus.title",desc:"settings.connections.setup.unsetStatus.description",button:"settings.connections.setup.doSetup"}};return t.jsx(de,{children:t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{children:t.jsx("div",{className:O({"rounded-full h-12 w-12 flex bg-opacity-15 justify-center items-center":!0,"text-type-success bg-type-success":l==="success","text-type-danger bg-type-danger":l==="error"||l==="unset"}),children:t.jsx(te,{icon:l==="success"?P.CHECKMARK:P.X,className:"text-xl"})})}),t.jsxs("div",{className:"flex-1",children:[t.jsx(Ve,{className:"!mb-3",children:n(h[l].title)}),t.jsx("p",{className:"max-w-[20rem] font-medium mb-6",children:n(h[l].desc)}),t.jsx(Je,{status:o.extension,children:n("settings.connections.setup.items.extension")}),t.jsx(Je,{status:o.proxy,children:n("settings.connections.setup.items.proxy")}),t.jsx(Je,{grey:!0,highlight:l==="unset",status:o.defaultProxy,children:n("settings.connections.setup.items.default")})]}),t.jsx("div",{className:"mt-5",children:t.jsx(q,{theme:"purple",onClick:()=>i("/onboarding"),children:n(h[l].button)})})]})})}function Zn(n){let{proxyUrls:i,setProxyUrls:r}=n;const{t:o}=N(),l=A.useCallback(()=>{r(u=>[...u??[],""])},[r]),h=A.useCallback((u,x)=>{r(D=>[...(D??[]).map((I,w)=>w!==u?I:x)])},[r]),m=A.useCallback(u=>{r(x=>[...(x??[]).filter((D,I)=>I!==u)])},[r]);return t.jsxs(de,{children:[t.jsxs("div",{className:"flex justify-between items-center gap-4",children:[t.jsxs("div",{className:"my-3",children:[t.jsx("p",{className:"text-white font-bold mb-3",children:o("settings.connections.workers.label")}),t.jsx("p",{className:"max-w-[20rem] font-medium",children:t.jsx(Jt,{i18nKey:"settings.connections.workers.description",children:t.jsx(Wt,{to:"https://docs.movie-web.app/proxy/deploy",children:"Proxy documentation"})})})]}),t.jsx("div",{children:t.jsx(tt,{onClick:()=>r(u=>u===null?[]:null),enabled:i!==null})})]}),i!==null?t.jsxs(t.Fragment,{children:[t.jsx(st,{marginClass:"my-6 px-8 box-content -mx-8"}),t.jsx("p",{className:"text-white font-bold mb-3",children:o("settings.connections.workers.urlLabel")}),t.jsxs("div",{className:"my-6 space-y-2 max-w-md",children:[((i==null?void 0:i.length)??0)===0?t.jsx("p",{children:o("settings.connections.workers.emptyState")}):null,(i??[]).map((u,x)=>t.jsxs("div",{className:"grid grid-cols-[1fr,auto] items-center gap-2",children:[t.jsx(et,{value:u,onChange:D=>h(x,D),placeholder:o("settings.connections.workers.urlPlaceholder")??void 0}),t.jsx("button",{type:"button",onClick:()=>m(x),className:"h-full scale-90 hover:scale-100 rounded-full aspect-square bg-authentication-inputBg hover:bg-authentication-inputBgHover flex justify-center items-center transition-transform duration-200 hover:text-white cursor-pointer",children:t.jsx(te,{className:"text-xl",icon:P.X})})]},x))]}),t.jsx(q,{theme:"purple",onClick:l,children:o("settings.connections.workers.addButton")})]}):null]})}function Jn(n){let{backendUrl:i,setBackendUrl:r}=n;const{t:o}=N();return t.jsxs(de,{children:[t.jsxs("div",{className:"flex justify-between items-center gap-4",children:[t.jsxs("div",{className:"my-3",children:[t.jsx("p",{className:"text-white font-bold mb-3",children:o("settings.connections.server.label")}),t.jsx("p",{className:"max-w-[20rem] font-medium",children:t.jsx(Jt,{i18nKey:"settings.connections.server.description",children:t.jsx(Wt,{to:"https://docs.movie-web.app/backend/deploy",children:"Backend documentation"})})})]}),t.jsx("div",{children:t.jsx(tt,{onClick:()=>r(l=>l===null?"":null),enabled:i!==null})})]}),i!==null?t.jsxs(t.Fragment,{children:[t.jsx(st,{marginClass:"my-6 px-8 box-content -mx-8"}),t.jsx("p",{className:"text-white font-bold mb-3",children:o("settings.connections.server.urlLabel")}),t.jsx(et,{onChange:r,value:i??""})]}):null]})}function Qn(n){const{t:i}=N();return t.jsxs("div",{children:[t.jsx(be,{border:!0,children:i("settings.connections.title")}),t.jsxs("div",{className:"space-y-6",children:[t.jsx(Yn,{}),t.jsx(Zn,{proxyUrls:n.proxyUrls,setProxyUrls:n.setProxyUrls}),t.jsx(Jn,{backendUrl:n.backendUrl,setBackendUrl:n.setBackendUrl})]})]})}function Vn(n){return t.jsx("p",{className:"text-type-text",children:n.children})}function ea(n){const{t:i}=N(),r=pe(),o=U(m=>{var u;return(u=m.account)==null?void 0:u.token}),[l,h]=nt(async()=>{var m;if(!o)throw new Error("No token present");await jn(r,o,n.id),(m=n.onRemove)==null||m.call(n)},[r,o,n.id]);return t.jsxs(de,{className:"flex justify-between items-center",paddingClass:"px-6 py-4",children:[t.jsxs("div",{className:"font-medium",children:[t.jsx(Vn,{children:i("settings.account.devices.deviceNameLabel")}),t.jsx("p",{className:"text-white",children:n.name})]}),n.isCurrent?null:t.jsx(q,{theme:"danger",loading:l.loading,onClick:h,children:i("settings.account.devices.removeDevice")})]})}function ta(n){const{t:i}=N(),r=U(m=>{var u;return(u=m.account)==null?void 0:u.seed}),o=n.sessions,l=U(m=>{var u;return(u=m.account)==null?void 0:u.sessionId}),h=A.useMemo(()=>{if(!r)return[];let m=o.map(u=>{const x=Xt(u.device,Qe(r));return{current:u.id===l,id:u.id,name:x}});return m=m.sort((u,x)=>u.current?-1:x.current?1:u.name.localeCompare(x.name)),m},[r,o,l]);return r?t.jsxs("div",{children:[t.jsx(ke,{border:!0,className:"mt-0 mb-9",children:i("settings.account.devices.title")}),n.error?t.jsx("p",{children:i("settings.account.devices.failed")}):n.loading?t.jsx(qt,{}):t.jsx("div",{className:"space-y-5",children:h.map(m=>t.jsx(ea,{name:m.name,id:m.id,isCurrent:m.current,onRemove:n.onChange},m.id))})]}):null}function sa(){const n=Rt(),{t:i}=N();return t.jsx("div",{children:t.jsxs(Qt,{paddingClass:"px-6 py-12",className:"grid grid-cols-2 gap-12 mt-5",children:[t.jsxs("div",{children:[t.jsx(Ve,{children:i("settings.account.register.title")}),t.jsx("p",{className:"text-type-text",children:i("settings.account.register.text")})]}),t.jsx("div",{className:"flex justify-end items-center",children:t.jsx(q,{theme:"purple",onClick:()=>n("/register"),children:i("settings.account.register.cta")})})]})})}function Dt(n){return t.jsxs("section",{className:n.className??"",children:[t.jsx("p",{className:"text-sm font-bold uppercase text-settings-sidebar-type-secondary mb-2",children:n.title}),n.children]})}function na(n){return t.jsxs("button",{type:"button",onClick:n.onClick,className:O("tabbable w-full px-3 py-2 flex items-center space-x-3 cursor-pointer rounded my-2",n.active?"bg-settings-sidebar-activeLink text-settings-sidebar-type-activated":null),children:[t.jsx(te,{className:O("text-2xl text-settings-sidebar-type-icon",n.active?"text-settings-sidebar-type-iconActivated":null),icon:n.icon}),t.jsx("span",{children:n.children})]})}const aa=16;function ia(n){const{t:i}=N(),r=n.url.startsWith("https://");return t.jsxs("div",{className:"flex items-center gap-1 -mx-1 ml-3 px-1 rounded bg-largeCard-background font-bold",children:[t.jsx(te,{icon:r?P.LOCK:P.UNLOCK}),i(r?"settings.sidebar.info.secure":"settings.sidebar.info.insecure")]})}function ra(){var I;const{t:n}=N(),{isMobile:i}=Yt(),{account:r}=U(),o=location.hostname,[l,h]=A.useState(""),m=[{textKey:"settings.account.title",id:"settings-account",icon:P.USER},{textKey:"settings.preferences.title",id:"settings-preferences",icon:P.SETTINGS},{textKey:"settings.appearance.title",id:"settings-appearance",icon:P.BRUSH},{textKey:"settings.subtitles.title",id:"settings-captions",icon:P.CAPTIONS},{textKey:"settings.connections.title",id:"settings-connection",icon:P.LINK}],u=pe(),x=Zt(async()=>wn(u),[u]);A.useEffect(()=>{function w(){var L;const y=(window.innerHeight||document.documentElement.clientHeight)/4,Z=m.map(M=>{const B=document.getElementById(M.id);if(!B)return{distance:1/0,link:M.id};const k=B.getBoundingClientRect(),z=Math.abs(y-k.top),d=Math.abs(y-k.bottom);return{distance:Math.min(d,z),link:M.id}}).sort((M,B)=>M.distance-B.distance);window.innerHeight+window.scrollY>=document.body.offsetHeight?h(m[m.length-1].id):h(((L=Z[0])==null?void 0:L.link)??"")}return document.addEventListener("scroll",w),w(),()=>{document.removeEventListener("scroll",w)}});const D=A.useCallback(w=>{const F=document.getElementById(w);if(!F)return null;const y=F.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:y-120,behavior:"smooth"})},[]);return t.jsx("div",{className:"text-settings-sidebar-type-inactive sidebar-boundary",children:t.jsxs(En,{topOffset:-6*aa,stickyClassName:"pt-[6rem]",disabled:i,hideOnBoundaryHit:!1,boundaryElement:".sidebar-boundary",children:[t.jsxs("div",{className:"hidden lg:block",children:[t.jsx(Dt,{title:n("global.pages.settings"),children:m.map(w=>t.jsx(na,{icon:w.icon,active:w.id===l,onClick:()=>D(w.id),children:n(w.textKey)},w.id))}),t.jsx(st,{})]}),t.jsx(Dt,{className:"text-sm",title:n("settings.sidebar.info.title"),children:t.jsxs("div",{className:"px-3 py-3.5 rounded-lg bg-largeCard-background bg-opacity-50 grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"col-span-2 space-y-1",children:[t.jsx("p",{className:"text-type-dimmed font-medium",children:n("settings.sidebar.info.hostname")}),t.jsx("p",{className:"text-white",children:o})]}),t.jsxs("div",{className:"col-span-2 space-y-1",children:[t.jsxs("div",{className:"text-type-dimmed font-medium flex items-center",children:[t.jsx("p",{children:n("settings.sidebar.info.backendUrl")}),t.jsx(ia,{url:u})]}),t.jsx("p",{className:"text-white",children:u.replace(/https?:\/\//,"")})]}),t.jsxs("div",{className:"col-span-2 space-y-1",children:[t.jsx("p",{className:"text-type-dimmed font-medium",children:n("settings.sidebar.info.userId")}),t.jsx("p",{className:"text-white",children:(r==null?void 0:r.userId)??n("settings.sidebar.info.notLoggedIn")})]}),t.jsxs("div",{className:"col-span-1 space-y-1",children:[t.jsx("p",{className:"text-type-dimmed font-medium",children:n("settings.sidebar.info.appVersion")}),t.jsx("p",{className:"text-type-dimmed px-2 py-1 rounded bg-settings-sidebar-badge inline-block",children:Nn().APP_VERSION})]}),t.jsxs("div",{className:"col-span-1 space-y-1",children:[t.jsx("p",{className:"text-type-dimmed font-medium",children:n("settings.sidebar.info.backendVersion")}),t.jsxs("p",{className:"text-type-dimmed px-2 py-1 rounded bg-settings-sidebar-badge inline-flex items-center gap-1",children:[x.error?t.jsx(te,{icon:P.WARNING,className:"text-type-danger text-base"}):null,x.loading?t.jsx("span",{className:"block h-4 w-12 bg-type-dimmed/20 rounded"}):((I=x==null?void 0:x.value)==null?void 0:I.version)||n("settings.sidebar.info.unknownVersion")]})]})]})})]})})}const ca=[{id:"blue",key:"settings.appearance.themes.blue"},{id:"teal",key:"settings.appearance.themes.teal"},{id:"red",key:"settings.appearance.themes.red"},{id:"gray",key:"settings.appearance.themes.gray"}],la=function(i){const{t:r}=N();return t.jsxs("div",{className:O(i.selector,"cursor-pointer group tabbable"),onClick:i.onClick,children:[t.jsxs("div",{tabIndex:0,onKeyUp:o=>o.key==="Enter"&&o.currentTarget.click(),className:O("tabbable scroll-mt-32 w-full h-32 relative rounded-lg border bg-gradient-to-br from-themePreview-primary/20 to-themePreview-secondary/10 bg-clip-content transition-colors duration-150",i.active?"border-themePreview-primary":"border-transparent group-hover:border-white/20"),children:[t.jsxs("div",{className:"absolute top-2 left-2",children:[t.jsx("div",{className:"h-5 w-5 bg-themePreview-primary rounded-full"}),t.jsx("div",{className:"h-5 w-5 bg-themePreview-secondary rounded-full -mt-2"})]}),t.jsx(te,{icon:P.CHECKMARK,className:O("absolute top-3 right-3 text-xs text-white transition-opacity duration-150",i.active?"opacity-100":"opacity-0")}),t.jsx("div",{className:"absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/5 h-4/5 rounded-t-lg -mb-px bg-background-main overflow-hidden",children:t.jsxs("div",{className:"relative w-full h-full",children:[t.jsx("div",{className:"bg-themePreview-primary/50 w-[130%] h-10 absolute left-1/2 -top-5 blur-xl transform -translate-x-1/2 rounded-[100%]"}),t.jsxs("div",{className:"p-2 flex justify-between items-center",children:[t.jsxs("div",{className:"flex space-x-1",children:[t.jsx("div",{className:"bg-themePreview-ghost bg-opacity-10 w-4 h-2 rounded-full"}),t.jsx("div",{className:"bg-themePreview-ghost bg-opacity-10 w-2 h-2 rounded-full"}),t.jsx("div",{className:"bg-themePreview-ghost bg-opacity-10 w-2 h-2 rounded-full"})]}),t.jsx("div",{className:"bg-themePreview-ghost bg-opacity-10 w-2 h-2 rounded-full"})]}),t.jsxs("div",{className:"mt-1 flex items-center flex-col gap-1",children:[t.jsx("div",{className:"bg-themePreview-ghost bg-opacity-20 w-8 h-0.5 rounded-full"}),t.jsx("div",{className:"bg-themePreview-ghost bg-opacity-20 w-6 h-0.5 rounded-full"}),t.jsx("div",{className:"bg-themePreview-ghost bg-opacity-10 w-16 h-2 mt-1 rounded-full"})]}),t.jsxs("div",{className:"mt-5 px-3",children:[t.jsxs("div",{className:"flex gap-1 items-center",children:[t.jsx("div",{className:"bg-themePreview-ghost bg-opacity-20 w-2 h-2 rounded-full"}),t.jsx("div",{className:"bg-themePreview-ghost bg-opacity-20 w-8 h-0.5 rounded-full"})]}),t.jsxs("div",{className:"flex w-full gap-1 mt-1",children:[t.jsx("div",{className:"bg-themePreview-ghost bg-opacity-10 w-full h-20 rounded"}),t.jsx("div",{className:"bg-themePreview-ghost bg-opacity-10 w-full h-20 rounded"}),t.jsx("div",{className:"bg-themePreview-ghost bg-opacity-10 w-full h-20 rounded"}),t.jsx("div",{className:"bg-themePreview-ghost bg-opacity-10 w-full h-20 rounded"})]})]})]})})]}),t.jsxs("div",{className:"mt-2 flex justify-between items-center",children:[t.jsx("span",{className:"font-medium text-white",children:i.name}),t.jsx("span",{className:O("inline-block px-3 text-sm transition-opacity duration-150 rounded-full bg-[#27182F] text-white",i.active?"opacity-100":"opacity-0 pointer-events-none"),children:r("settings.appearance.activeTheme")})]})]})},Mt=la;function oa(n){const{t:i}=N();return t.jsxs("div",{children:[t.jsx(be,{border:!0,children:i("settings.appearance.title")}),t.jsxs("div",{className:"grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-6 max-w-[700px]",children:[t.jsx(Mt,{name:i("settings.appearance.themes.default"),selector:"theme-default",active:n.active===null,onClick:()=>n.setTheme(null)}),ca.map(r=>t.jsx(Mt,{selector:`theme-${r.id}`,active:n.active===r.id,name:i(r.key),onClick:()=>n.setTheme(r.id)},r.id))]})]})}function da(n){const{t:i}=N(),r=On(It.map(h=>h.code)),o=It.sort((h,m)=>r.indexOf(h.code)-r.indexOf(m.code)).map(h=>({id:h.code,name:`${h.name}${h.nativeName?` — ${h.nativeName}`:""}`,leftIcon:t.jsx(Dn,{langCode:h.code})})),l=o.find(h=>{var m;return h.id===((m=Mn(n.language))==null?void 0:m.code)});return t.jsxs("div",{className:"space-y-12",children:[t.jsx(be,{border:!0,children:i("settings.preferences.title")}),t.jsxs("div",{children:[t.jsx("p",{className:"text-white font-bold mb-3",children:i("settings.preferences.language")}),t.jsx("p",{className:"max-w-[20rem] font-medium",children:i("settings.preferences.languageDescription")}),t.jsx(Cn,{options:o,selectedItem:l||o[0],setSelectedItem:h=>n.setLanguage(h.id)})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-white font-bold mb-3",children:i("settings.preferences.thumbnail")}),t.jsx("p",{className:"max-w-[25rem] font-medium",children:i("settings.preferences.thumbnailDescription")}),t.jsxs("div",{onClick:()=>n.setEnableThumbnails(!n.enableThumbnails),className:"bg-dropdown-background hover:bg-dropdown-hoverBackground select-none my-4 cursor-pointer space-x-3 flex items-center max-w-[25rem] py-3 px-4 rounded-lg",children:[t.jsx(tt,{enabled:n.enableThumbnails}),t.jsx("p",{className:"flex-1 text-white font-bold",children:i("settings.preferences.thumbnailLabel")})]})]})]})}function ua(n){const{isMobile:i}=Yt();return t.jsx(Un,{ultraWide:!0,classNames:"overflow-visible",children:t.jsxs("div",{className:O("grid gap-12",i?"grid-cols-1":"lg:grid-cols-[280px,1fr]"),children:[t.jsx(ra,{}),t.jsx("div",{children:n.children})]})})}function ga(n){const i=pe(),{account:r}=n,[o,l]=nt(()=>Sn(i,r),[r,i]);return A.useEffect(()=>{l()},[l]),t.jsxs(t.Fragment,{children:[t.jsx($n,{deviceName:n.deviceName,setDeviceName:n.setDeviceName,colorA:n.colorA,setColorA:n.setColorA,colorB:n.colorB,setColorB:n.setColorB,userIcon:n.userIcon,setUserIcon:n.setUserIcon}),t.jsx(ta,{error:!!o.error,loading:o.loading,sessions:o.value??[],onChange:l}),t.jsx(zn,{})]})}function Na(){const{t:n}=N(),i=kt(g=>g.theme),r=kt(g=>g.setTheme),o=Ut(g=>g.language),l=Ut(g=>g.setLanguage),h=Lt(g=>g.styling),m=Lt(g=>g.updateStyling),u=U(g=>g.proxySet),x=U(g=>g.setProxySet),D=U(g=>g.backendUrl),I=U(g=>g.setBackendUrl),w=Bt(g=>g.enableThumbnails),F=Bt(g=>g.setEnableThumbnails),y=U(g=>g.account),Z=U(g=>g.setAccountProfile),L=U(g=>g.updateDeviceName),M=A.useMemo(()=>y?Xt(y.deviceName,Qe(y.seed)):"",[y]),B=pe(),{logout:k}=Gt(),z=U(),d=Kn(i,o,h,M,u,D,y==null?void 0:y.profile,w),se=A.useCallback(async()=>{var g,S;if(y){if((d.appLanguage.changed||d.theme.changed||d.proxyUrls.changed)&&await _n(B,y,{applicationLanguage:d.appLanguage.state,applicationTheme:d.theme.state,proxyUrls:((g=d.proxyUrls.state)==null?void 0:g.filter(G=>G!==""))??null}),d.deviceName.changed){const G=await Tn(d.deviceName.state,Qe(y.seed));await An(B,y,{deviceName:G}),L(G)}d.profile.changed&&await Pn(B,y,{profile:d.profile.state})}F(d.enableThumbnails.state),l(d.appLanguage.state),r(d.theme.state),m(d.subtitleStyling.state),x(((S=d.proxyUrls.state)==null?void 0:S.filter(G=>G!==""))??null),d.profile.state&&Z(d.profile.state),d.backendUrl.changed&&(await k(),I(d.backendUrl.state))},[d,y,B,F,l,r,m,L,Z,x,I,k]);return t.jsxs(In,{children:[t.jsx(kn,{subpage:!0,k:"global.pages.settings"}),t.jsxs(ua,{children:[t.jsxs("div",{id:"settings-account",children:[t.jsx(be,{border:!0,className:"!mb-0",children:n("settings.account.title")}),z.account&&d.profile.state?t.jsx(ga,{account:z.account,deviceName:d.deviceName.state,setDeviceName:d.deviceName.set,colorA:d.profile.state.colorA,setColorA:g=>{d.profile.set(S=>S?{...S,colorA:g}:void 0)},colorB:d.profile.state.colorB,setColorB:g=>d.profile.set(S=>S?{...S,colorB:g}:void 0),userIcon:d.profile.state.icon,setUserIcon:g=>d.profile.set(S=>S?{...S,icon:g}:void 0)}):t.jsx(sa,{})]}),t.jsx("div",{id:"settings-preferences",className:"mt-48",children:t.jsx(da,{language:d.appLanguage.state,setLanguage:d.appLanguage.set,enableThumbnails:d.enableThumbnails.state,setEnableThumbnails:d.enableThumbnails.set})}),t.jsx("div",{id:"settings-appearance",className:"mt-48",children:t.jsx(oa,{active:d.theme.state,setTheme:d.theme.set})}),t.jsx("div",{id:"settings-captions",className:"mt-48",children:t.jsx(qn,{styling:d.subtitleStyling.state,setStyling:d.subtitleStyling.set})}),t.jsx("div",{id:"settings-connection",className:"mt-48",children:t.jsx(Qn,{backendUrl:d.backendUrl.state,setBackendUrl:d.backendUrl.set,proxyUrls:d.proxyUrls.state,setProxyUrls:d.proxyUrls.set})})]}),t.jsxs($t,{animation:"fade",show:d.changed,className:"bg-settings-saveBar-background border-t border-settings-card-border/50 py-4 transition-opacity w-full fixed bottom-0 flex justify-between flex-col md:flex-row px-8 items-start md:items-center gap-3",children:[t.jsx("p",{className:"text-type-danger",children:n("settings.unsaved")}),t.jsxs("div",{className:"space-x-3 w-full md:w-auto flex",children:[t.jsx(q,{className:"w-full md:w-auto",theme:"secondary",onClick:d.reset,children:n("settings.reset")}),t.jsx(q,{className:"w-full md:w-auto",theme:"purple",onClick:se,children:n("settings.save")})]})]})]})}export{ga as AccountSettings,Na as SettingsPage,Na as default};
//# sourceMappingURL=Settings-p1mut5gL.js.map
