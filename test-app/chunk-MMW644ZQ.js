import{Aa as s,B as ee,Ba as c,Ca as f,Da as j,Ea as F,Fa as T,Ha as _,I as te,Ia as u,J as ne,Ja as $,K as ie,Ka as l,La as C,M as re,Ma as q,Na as O,Oa as W,Pa as ce,Qa as g,Ra as x,S as P,Sa as Q,U as v,V as b,X as y,aa as oe,ca as ae,d as be,da as w,ea as k,eb as A,fb as V,g as U,gb as L,hb as R,ib as pe,j as X,lb as de,na as D,ob as le,pa as a,r as E,s as Y,ta as se,u as Z,ya as h,z as J,za as p}from"./chunk-QSM3SCAL.js";function z(t){return Array.isArray(t)?t:[t]}var K;try{K=typeof Intl<"u"&&Intl.v8BreakIterator}catch{K=!1}var ue=(()=>{let e=class e{constructor(i){this._platformId=i,this.isBrowser=this._platformId?de(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||K)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(n){return new(n||e)(w(oe))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var me=new Set,M,Ee=(()=>{let e=class e{constructor(i,n){this._platform=i,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Pe}matchMedia(i){return(this._platform.WEBKIT||this._platform.BLINK)&&Me(i,this._nonce),this._matchMedia(i)}};e.\u0275fac=function(n){return new(n||e)(w(ue),w(ae,8))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Me(t,e){if(!me.has(t))try{M||(M=document.createElement("style"),e&&(M.nonce=e),M.setAttribute("type","text/css"),document.head.appendChild(M)),M.sheet&&(M.sheet.insertRule(`@media ${t} {body{ }}`,0),me.add(t))}catch(o){console.error(o)}}function Pe(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var he=(()=>{let e=class e{constructor(i,n){this._mediaMatcher=i,this._zone=n,this._queries=new Map,this._destroySubject=new X}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(i){return fe(z(i)).some(r=>this._registerQuery(r).mql.matches)}observe(i){let r=fe(z(i)).map(d=>this._registerQuery(d).observable),m=Y(r);return m=Z(m.pipe(ee(1)),m.pipe(ne(1),J(0))),m.pipe(E(d=>{let S={matches:!1,breakpoints:{}};return d.forEach(({matches:N,query:ve})=>{S.matches=S.matches||N,S.breakpoints[ve]=N}),S}))}_registerQuery(i){if(this._queries.has(i))return this._queries.get(i);let n=this._mediaMatcher.matchMedia(i),m={observable:new U(d=>{let S=N=>this._zone.run(()=>d.next(N));return n.addListener(S),()=>{n.removeListener(S)}}).pipe(ie(n),E(({matches:d})=>({query:i,matches:d})),re(this._destroySubject)),mql:n};return this._queries.set(i,m),m}};e.\u0275fac=function(n){return new(n||e)(w(Ee),w(se))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function fe(t){return t.map(e=>e.split(",")).reduce((e,o)=>e.concat(o)).map(e=>e.trim())}var ge={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var H=(()=>{let e=class e{constructor(i){this.breakpointObserver=i}get isHandset(){return this.breakpointObserver.observe(ge.Handset).pipe(E(i=>i.matches),te())}};e.\u0275fac=function(n){return new(n||e)(w(he))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function De(t,e){if(t&1){let o=T();s(0,"button",5),_("click",function(){v(o);let n=u();return b(n.prevImage())}),c()}if(t&2){let o=u();p("disabled",o.currentIndex===0)}}function Te(t,e){t&1&&f(0,"span",6)}var Oe=(t,e,o,i,n)=>({"before-prev":t,"prev-image":e,"current-image":o,"next-image":i,"after-next":n});function Be(t,e){if(t&1&&(j(0),f(1,"img",7),F()),t&2){let o=e.$implicit,i=e.index,n=u();a(),p("src",o,D)("ngClass",ce(2,Oe,i===n.currentIndex-2,i===n.currentIndex-1,i===n.currentIndex,i===n.currentIndex+1,i===n.currentIndex+2))}}function je(t,e){t&1&&f(0,"span",8)}function Fe(t,e){if(t&1){let o=T();s(0,"button",9),_("click",function(){v(o);let n=u();return b(n.nextImage())}),c()}if(t&2){let o=u();p("disabled",o.currentIndex===o.images.length-1)}}var xe=(()=>{let e=class e{constructor(){this.currentIndex=0,this.cdkService=k(H),this.isHandset$=this.cdkService.isHandset,this.touchEventStartVal=0}nextImage(){this.currentIndex===this.images.length-1||(this.currentIndex=(this.currentIndex+1)%this.images.length)}prevImage(){this.currentIndex===0||(this.currentIndex=this.currentIndex>0?this.currentIndex-1:this.images.length-1)}touchStart(i){this.touchEventStartVal=i.changedTouches[0].clientX}touchEnd(i){i.changedTouches[0].clientX-this.touchEventStartVal>50&&this.prevImage(),i.changedTouches[0].clientX-this.touchEventStartVal<-50&&this.nextImage()}imageByIndex(i,n){return i}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=P({type:e,selectors:[["app-carousel"]],hostBindings:function(n,r){n&1&&_("touchstart",function(d){return r.touchStart(d)})("touchend",function(d){return r.touchEnd(d)})},inputs:{images:"images"},standalone:!0,features:[O],decls:7,vars:10,consts:[["class","left-arrow",3,"disabled","click",4,"ngIf"],["class","carousel-image prev-image",4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],["class","carousel-image next-image",4,"ngIf"],["class","right-arrow",3,"disabled","click",4,"ngIf"],[1,"left-arrow",3,"disabled","click"],[1,"carousel-image","prev-image"],["alt","",1,"carousel-image",3,"src","ngClass"],[1,"carousel-image","next-image"],[1,"right-arrow",3,"disabled","click"]],template:function(n,r){n&1&&(h(0,De,1,1,"button",0),g(1,"async"),h(2,Te,1,0,"span",1)(3,Be,2,8,"ng-container",2)(4,je,1,0,"span",3)(5,Fe,1,1,"button",4),g(6,"async")),n&2&&(p("ngIf",x(1,6,r.isHandset$)===!1),a(2),p("ngIf",r.currentIndex===0),a(),p("ngForOf",r.images)("ngForTrackBy",r.imageByIndex),a(),p("ngIf",r.currentIndex===r.images.length-1),a(),p("ngIf",x(6,8,r.isHandset$)===!1))},dependencies:[V,A,L,R],styles:['[_nghost-%COMP%]{display:flex;width:100%;height:400px;align-items:center;justify-content:space-between;position:relative;margin:20px 0;border-radius:10px;box-shadow:0 0 4px gray;overflow:hidden}.carousel-image[_ngcontent-%COMP%]{opacity:0;width:0;height:0;aspect-ratio:1;transition:.5s ease-in-out;position:absolute}.prev-image[_ngcontent-%COMP%], .current-image[_ngcontent-%COMP%], .next-image[_ngcontent-%COMP%]{opacity:1;display:block}.current-image[_ngcontent-%COMP%]{height:300px;width:300px;aspect-ratio:1;z-index:2}.prev-image[_ngcontent-%COMP%], .next-image[_ngcontent-%COMP%]{height:100px;width:100px;aspect-ratio:1;z-index:1}.prev-image[_ngcontent-%COMP%]{left:calc(25% - 50px)}.current-image[_ngcontent-%COMP%]{left:calc(50% - 150px)}.next-image[_ngcontent-%COMP%], .after-next[_ngcontent-%COMP%]{left:calc(75% - 50px)}.before-prev[_ngcontent-%COMP%]{left:calc(25% - 50px)}button[_ngcontent-%COMP%]{height:100%;width:100px;border:none;background-color:transparent;transition:.3s ease-in-out;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#8080804d}button[_ngcontent-%COMP%]:disabled{cursor:not-allowed;background-color:transparent}.left-arrow[_ngcontent-%COMP%]{padding-left:20px}.right-arrow[_ngcontent-%COMP%]{padding-right:20px}button[_ngcontent-%COMP%]:before{content:"";width:20px;height:20px;display:inline-block;rotate:45deg;border-left:2px solid;border-bottom:2px solid}.right-arrow[_ngcontent-%COMP%]:before{rotate:225deg;padding-left:0}']});let t=e;return t})();var ye=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=P({type:e,selectors:[["app-product-feature"]],inputs:{featureData:"featureData"},standalone:!0,features:[O],decls:7,vars:3,consts:[[1,"image-container"],["alt","","width","100px",3,"src"],[1,"detail"]],template:function(n,r){n&1&&(s(0,"div",0),f(1,"img",1),c(),s(2,"div",2)(3,"h3"),l(4),c(),s(5,"p"),l(6),c()()),n&2&&(a(),p("src",r.featureData.image,D),a(3),C(r.featureData.title),a(2),C(r.featureData.desc))},styles:["[_nghost-%COMP%]{display:flex;gap:20px;align-items:center;padding:10px;border:2px solid gray;border-radius:10px;margin:10px 0}"]});let t=e;return t})();var G={};be(G,{default:()=>qe,fullDesc:()=>Re,id:()=>Ne,images:()=>Le,price:()=>He,shortDesc:()=>Ve,stock:()=>$e,title:()=>Ae});var Ne=1,Ae="Apple Vision Pro",Ve="With Apple Vision Pro, you have an infinite canvas that transforms how you use the apps you love. Arrange apps anywhere and scale them to the perfect size, making the workspace of your dreams a reality \u2014 all while staying present in the world around you. Browse the web in Safari, create a to-do list in Notes, chat in Messages, and seamlessly move between them with a glance.",Le=["../../../assets/images/1.jpg","../../../assets/images/2.jpg","../../../assets/images/3.jpg","../../../assets/images/4.jpg"],Re={title:"A spectrum of immersion",mainImage:"https://developer.apple.com/visionos/images/figure_2x.webp",detailParagraphs:["Apple Vision Pro offers an infinite spatial canvas to explore, experiment, and play, giving you the freedom to completely rethink your experience in 3D. People can interact with your app while staying connected to their surroundings, or immerse themselves completely in a world of your creation. And your experiences can be fluid: start in a window, bring in 3D content, transition to a fully immersive scene, and come right back.","The choice is yours, and it all starts with the building blocks of spatial computing in visionOS."],featuresList:[{id:1,title:"Windows",image:"https://developer.apple.com/visionos/images/windows-256x256_2x.png",desc:"You can create one or more windows in your visionOS app. They\u2019re built with SwiftUI and contain traditional views and controls, and you can add depth to your experience by adding 3D content."},{id:2,title:"Volumes",image:"https://developer.apple.com/visionos/images/volumes-256x256_2x.png",desc:"Add depth to your app with a 3D volume. Volumes are SwiftUI scenes that can showcase 3D content using RealityKit or Unity, creating experiences that are viewable from any angle in the Shared Space or an app\u2019s Full Space."},{id:3,title:"Spaces",image:"https://developer.apple.com/visionos/images/spaces-256x256_2x.png",desc:"By default, apps launch into the Shared Space, where they exist side by side \u2014 much like multiple apps on a Mac desktop. Apps can use windows and volumes to show content, and the user can reposition these elements wherever they like. For a more immersive experience, an app can open a dedicated Full Space where only that app\u2019s content will appear. Inside a Full Space, an app can use windows and volumes, create unbounded 3D content, open a portal to a different world, or even fully immerse people in an environment."}]},He=100,$e=5,qe={id:Ne,title:Ae,shortDesc:Ve,images:Le,fullDesc:Re,price:He,stock:$e};var we=(()=>{let e=class e{constructor(){}get getMockData(){return G}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function We(t,e){t&1&&(s(0,"span"),l(1," Item Already in Cart "),c())}function Qe(t,e){if(t&1&&(s(0,"span"),l(1),g(2,"currency"),c()),t&2){let o=u();a(),q(" Price: ",x(2,1,o.data.price*o.quantity)," ")}}function ze(t,e){t&1&&f(0,"span",10)}function Ke(t,e){if(t&1){let o=T();j(0),s(1,"button",11),_("click",function(){v(o);let n=u();return b(n.openMiniCart())}),l(2,"Goto Cart"),c(),F()}}function Ge(t,e){if(t&1){let o=T();s(0,"span",12)(1,"button",13),_("click",function(){v(o);let n=u();return b(n.decreaseQty())}),l(2,"-"),c(),l(3),s(4,"button",14),_("click",function(){v(o);let n=u();return b(n.increaseQty())}),l(5,"+"),c()(),s(6,"span")(7,"button",11),_("click",function(){v(o);let n=u();return b(n.addToCart(n.data.id,n.quantity,n.data.title,n.data.price,n.data.images[0]))}),l(8,"Add to Cart"),c()()}if(t&2){let o=u();a(3),q(" ",o.quantity," ")}}function Ue(t,e){if(t&1&&(j(0),s(1,"p"),l(2),c(),F()),t&2){let o=e.$implicit;a(2),C(o)}}var _e=t=>({mobile:t});function Xe(t,e){if(t&1&&(s(0,"div",15),f(1,"app-product-feature",16),g(2,"async"),c()),t&2){let o=e.$implicit,i=u();a(),p("featureData",o)("ngClass",W(4,_e,x(2,2,i.isHandset$)))}}var Ot=(()=>{let e=class e{constructor(){this.quantity=1,this.cartService=k(le),this.apiService=k(we),this.cdkService=k(H),this.isHandset$=this.cdkService.isHandset,this.data=this.apiService.getMockData,this.itemInCart$=this.cartService.cartItems.pipe(E(i=>i.find(n=>n.id===this.data.id)))}increaseQty(){this.quantity>=this.data.stock||this.quantity++}decreaseQty(){this.quantity<=1||this.quantity--}addToCart(i,n,r,m,d){this.cartService.addToCart(i,r,n,m,d)}openMiniCart(){this.cartService.openMiniCart()}featureById(i,n){return n.id}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=P({type:e,selectors:[["app-product-detail"]],standalone:!0,features:[O],decls:25,vars:24,consts:[[3,"images"],[1,"cart-actions",3,"ngClass"],[1,"price"],[4,"ngIf","ngIfElse"],["price",""],["class","spacer",4,"ngIf"],["addtocart",""],["alt","","width","100%",3,"src"],[4,"ngFor","ngForOf"],["class","features-list",4,"ngFor","ngForOf","ngForTrackBy"],[1,"spacer"],[1,"cart-btn",3,"click"],[1,"quantity"],[1,"qty-sub-btn",3,"click"],[1,"qty-add-btn",3,"click"],[1,"features-list"],[3,"featureData","ngClass"]],template:function(n,r){if(n&1&&(s(0,"h1"),l(1),c(),s(2,"section"),f(3,"app-carousel",0),s(4,"div",1),g(5,"async"),s(6,"div",2),h(7,We,2,0,"span",3),g(8,"async"),h(9,Qe,3,3,"ng-template",null,4,Q),c(),h(11,ze,1,0,"span",5),g(12,"async"),h(13,Ke,3,0,"ng-container",3),g(14,"async"),h(15,Ge,9,1,"ng-template",null,6,Q),c()(),s(17,"p"),l(18),c(),s(19,"article"),f(20,"img",7),s(21,"h2"),l(22),c(),h(23,Ue,3,1,"ng-container",8)(24,Xe,3,6,"div",9),c()),n&2){let m=$(10),d=$(16);a(),C(r.data.title),a(2),p("images",r.data.images),a(),p("ngClass",W(22,_e,x(5,14,r.isHandset$))),a(3),p("ngIf",x(8,16,r.itemInCart$))("ngIfElse",m),a(4),p("ngIf",x(12,18,r.isHandset$)===!1),a(2),p("ngIf",x(14,20,r.itemInCart$))("ngIfElse",d),a(5),C(r.data.shortDesc),a(2),p("src",r.data.fullDesc.mainImage,D),a(2),C(r.data.fullDesc.title),a(),p("ngForOf",r.data.fullDesc.detailParagraphs),a(),p("ngForOf",r.data.fullDesc.featuresList)("ngForTrackBy",r.featureById)}},dependencies:[xe,ye,V,pe,L,R,A],styles:["[_nghost-%COMP%]{max-width:1000px;display:block;margin:auto}.cart-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-evenly;align-content:center;align-items:center;gap:20px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}button.cart-btn[_ngcontent-%COMP%]{display:flex;width:200px;height:40px;align-items:center;justify-content:center;border-radius:20px;border:none;box-shadow:0 0 3px gray;background:#fff;cursor:pointer}.quantity[_ngcontent-%COMP%]{box-shadow:0 0 3px gray;display:flex;align-items:center;gap:10px;justify-content:space-between;border-radius:20px;width:120px;height:40px;overflow:hidden}.quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:100%;aspect-ratio:1;border:none;cursor:pointer}.cart-actions.mobile[_ngcontent-%COMP%]{justify-content:center}.cart-actions.mobile[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{width:100%;text-align:center}app-product-feature.mobile[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]});let t=e;return t})();export{Ot as ProductDetailComponent};
