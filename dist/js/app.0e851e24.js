(function(t){function e(e){for(var s,n,c=e[0],o=e[1],l=e[2],d=0,f=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"096e":function(t,e,a){t.exports=a.p+"img/breakfast.2db44f4d.png"},1072:function(t,e,a){},"32ff":function(t,e,a){"use strict";a("73f5")},"37c1":function(t,e,a){},"519f":function(t,e,a){t.exports=a.p+"img/luke-chesser-rCOWMC8qf8A-unsplash.93e6dc29.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],n={name:"App"},c=n,o=(a("034f"),a("2877")),l=Object(o["a"])(c,i,r,!1,null,null,null),u=l.exports,d=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("Header"),a("div",{staticClass:"content"},[a("div",{staticClass:"container mb-5"},[a("h4",{staticClass:"my-4 fw-600 d-blue"},[t._v("Top rated")]),a("div",{staticClass:"row"},t._l(t.topRated,(function(e){return a("div",{key:e.id,staticClass:"col-md-4 pointer",on:{click:function(a){return t.foodDetails(e)}}},[a("img",{staticStyle:{"border-radius":"15px"},attrs:{src:e.url,width:"300px",height:"300px"}}),a("h5",{staticClass:"fw-600 black"},[t._v(t._s(e.name))])])})),0),a("h4",{staticClass:"my-4 fw-600 d-blue"},[t._v("All Categories")]),a("div",{staticClass:"row"},t._l(t.allCategories,(function(e){return a("div",{key:e.id,staticClass:"col-md-4 pointer",on:{click:function(a){return t.foodDetails(e)}}},[a("img",{staticStyle:{"border-radius":"15px"},attrs:{src:e.url,width:"300px",height:"300px"}}),a("h5",{staticClass:"fw-600 black"},[t._v(t._s(e.name))])])})),0),a("h4",{staticClass:"my-4 fw-600 d-blue"},[t._v("Deshes Near You")]),a("div",{staticClass:"row"},t._l(t.dishesNearYou,(function(e){return a("div",{key:e.id,staticClass:"col-md-4 pointer",on:{click:function(a){return t.foodDetails(e)}}},[a("img",{staticStyle:{"border-radius":"15px"},attrs:{src:e.url,width:"300px",height:"300px"}}),a("h5",{staticClass:"fw-600 black"},[t._v(t._s(e.name))])])})),0)])]),a("Footer")],1)},m=[],p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"logo"},[s("h4",{staticClass:"sweet",on:{click:t.home}},[t._v("Sweet Dish")]),s("img",{staticStyle:{"margin-left":"10px"},attrs:{src:a("096e"),width:"45px",height:"45px",alt:""}})]),s("div",{staticClass:"d-flex cart"},[s("b-icon",{staticClass:"cart-icon",attrs:{icon:"cart-plus-fill "},on:{click:t.cart}}),s("span",{staticClass:"cart-count"},[t._v(t._s(t.cartItemCount))]),s("h5",{staticClass:"login"},[t._v("Login")]),s("h5",{staticClass:"register"},[t._v("Sign Up")])],1)])},h=[],v={name:"Header",computed:{cartItemCount:function(){return this.$store.state.cartItemCount}},methods:{home:function(){this.$router.push("/")},cart:function(){this.$router.push("/cart")}}},C=v,y=(a("ea12"),Object(o["a"])(C,p,h,!1,null,"150fc68c",null)),_=y.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticStyle:{"margin-left":"20px"}},[a("h4",{staticClass:"fw-600"},[t._v("Sweet Dish")])]),a("div",{staticClass:"about-us"},[a("div",[a("h5",{staticClass:"fw-600"},[t._v("About Us")])]),a("div",[a("h5",{staticClass:"fw-600"},[t._v("T & C")])]),a("div",[a("h5",{staticClass:"fw-600"},[t._v("Privacy Policy")])]),a("div",[a("h5",{staticClass:"fw-600"},[t._v("Contact Us")])])])])}],w={},x=w,I=(a("cace"),Object(o["a"])(x,b,g,!1,null,"fc49b9aa",null)),S=I.exports,k={name:"Home",components:{Header:_,Footer:S},computed:{topRated:function(){return this.$store.state.topRated},allCategories:function(){return this.$store.state.allCategories},dishesNearYou:function(){return this.$store.state.dishesNearYou}},methods:{foodDetails:function(t){this.$router.push({name:"food-details",params:t})}}},j=k,$=(a("6fd7"),Object(o["a"])(j,f,m,!1,null,"291e6370",null)),O=$.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex food-details-outer"},[a("Header"),a("div",{staticClass:"food-details"},[a("div",{staticClass:"container mb-5"},[a("h4",{staticClass:"my-4 fw-600"},[t._v("Add Item to Cart")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4",staticStyle:{cursor:"ponter"}},[a("img",{staticStyle:{"border-radius":"15px"},attrs:{src:t.details.url,width:"300px",height:"300px"}})]),a("div",{staticClass:"col-md-4"},[a("h5",{staticClass:"my-4 fw-600"},[t._v("Name: "+t._s(t.details.name)+" ")]),a("h5",{staticClass:"my-4 fw-600"},[t._v("Price: "+t._s(t.details.price)+" ")]),a("h5",{staticClass:"my-4 fw-600"},[t._v("Description: "+t._s(t.details.desc)+" ")]),a("h5",{staticClass:"my-4 fw-600"},[t._v("Rating: "+t._s(t.details.rate)+" ")]),a("div",[a("button",{staticClass:"btn btn-primary me-1",on:{click:t.gotoCart}},[t._v("Go to Cart")]),a("button",{staticClass:"btn btn-success me-1",on:{click:t.addtoCart}},[t._v("Add Item")]),a("button",{staticClass:"btn btn-danger me-1",on:{click:t.removeItem}},[t._v("Remove Item")])])])])])]),a("Footer")],1)},E=[],P={name:"FoodDetails",components:{Header:_,Footer:S},data:function(){return{details:this.$route.params}},methods:{gotoCart:function(){this.$router.push("/cart")},addtoCart:function(){this.$store.dispatch("addToCart",this.details)},removeItem:function(){this.$store.dispatch("removeItem",this.details)}},created:function(){void 0!==this.$route.params.id&&localStorage.setItem("details",JSON.stringify(this.$route.params))},mounted:function(){this.details=JSON.parse(localStorage.getItem("details"))}},q=P,D=(a("b15d"),Object(o["a"])(q,T,E,!1,null,"ad424484",null)),H=D.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex cart-outer-div"},[a("Header"),a("div",{staticClass:"cart-body"},[0!==t.totalPrice?a("div",{staticClass:"container mb-5"},[a("h4",{staticClass:"my-4 my-cart"},[t._v("My Cart")]),t._m(0),a("div",{staticClass:"d-flex"},[a("Summary",{attrs:{totalPrice:t.totalPrice}}),a("div",{staticClass:"row",staticStyle:{width:"50%"}},[a("div",{staticClass:"col-md-12",staticStyle:{"max-width":"70%"}},[a("ul",{staticStyle:{padding:"0"}},t._l(t.cartItems,(function(e){return a("li",{key:e.id,staticStyle:{"list-style":"none"}},[a("div",{staticClass:"cart-items"},[a("img",{staticStyle:{"border-radius":"50%"},attrs:{src:e.url,width:"50px"}}),a("h6",{attrs:{"mt-15":""}},[t._v(" "+t._s(e.name)+" ")]),a("div",{staticClass:"f-flex mt-10"},[a("button",{staticClass:"add",attrs:{type:"button"},on:{click:function(a){return t.removeItem(e)}}},[t._v("-")]),a("span",{staticClass:"cart-quantity"},[t._v(" "+t._s(e.quantity)+" ")]),a("button",{staticClass:"remove",attrs:{type:"button"},on:{click:function(a){return t.addItem(e)}}},[t._v("+")])]),a("h6",{staticClass:"mt-15"},[t._v(" "+t._s(e.price*e.quantity)+" ")])]),a("div",{staticClass:"line"})])})),0)])])],1),a("div",{staticClass:"d-flex justify-content-end",staticStyle:{width:"80%","margin-top":"2%"}},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.checkout}},[t._v("Checkout")])])]):a("EmptyCart")],1),a("Footer")],1)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex my-3",staticStyle:{"justify-content":"space-between"}},[a("h4",{staticClass:"fw-600"},[t._v("Summary")]),a("h4",{staticClass:"fw-600",staticStyle:{"margin-right":"49%"}},[t._v("Cart")])])}],N=(a("d81d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container my-5",staticStyle:{"text-align":"center"}},[a("b-icon",{staticClass:"cart-icon",attrs:{icon:"cart-plus-fill "}}),t._m(0)],1)}),F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[a("h4",{staticClass:"orange-red fw-600"},[t._v("Your cart is empty")]),a("h5",{staticClass:"darkblue fw-600"},[t._v("You can go to home page to view more food items")])])}],M={name:"EmptyCat"},R=M,J=(a("f7f7"),Object(o["a"])(R,N,F,!1,null,"5372af80",null)),U=J.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",staticStyle:{width:"50%"}},[t._m(0),a("div",{staticClass:"col-md-4"},[a("h6",[t._v(t._s(t.totalPrice)+" Tk")]),a("h6",[t._v("RsSWEETDISH")]),a("h6",[t._v("BD 50 Tk")]),a("div",{staticClass:"my-3 line w-60"}),a("h6",[t._v(t._s(t.totalPrice+50)+" Tk")])])])},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4"},[a("h6",[t._v("Total:")]),a("h6",[t._v("Promo Code: ")]),a("h6",[t._v("Shipping: ")]),a("div",{staticClass:"my-3 line w-120"}),a("h6",[t._v("Subtotal: ")])])}],z={name:"Summary",props:["totalPrice"]},G=z,K=(a("e93c"),Object(o["a"])(G,L,V,!1,null,"76ab1b05",null)),Q=K.exports,W=a("1940"),Z=a.n(W),B={name:"Cart",components:{Header:_,Footer:S,EmptyCart:U,Summary:Q},methods:{addItem:function(t){this.$store.dispatch("addToCart",t)},removeItem:function(t){this.$store.dispatch("removeItem",t)},checkout:function(){Z()("Good job!","Your order is placced successfully!","success").then((function(){window.location.reload()}))}},computed:{cartItems:function(){return this.$store.state.cartItems},totalPrice:function(){var t=0;return this.$store.state.cartItems.map((function(e){t+=e["quantity"]*e["price"]})),t}}},X=B,tt=(a("32ff"),Object(o["a"])(X,Y,A,!1,null,"6ca7a1b4",null)),et=tt.exports,at=[{path:"/",component:O},{path:"/food-details",name:"food-details",component:H},{path:"/cart",component:et}],st=a("5530"),it=(a("c740"),a("a434"),a("2f62")),rt=a("a7a7"),nt=a.n(rt),ct=a("c98f"),ot=a.n(ct),lt=a("dd6e"),ut=a.n(lt),dt=a("62ee"),ft=a.n(dt),mt=a("519f"),pt=a.n(mt),ht=a("76ea"),vt=a.n(ht),Ct=a("723c"),yt=a.n(Ct),_t=a("b969"),bt=a.n(_t),gt=a("758b"),wt=a.n(gt);s["default"].use(it["a"]);var xt=new it["a"].Store({state:{topRated:[{id:1,name:"Cake",price:100,url:nt.a,desc:"Very Tasty Cake",rate:4.1},{id:2,name:"Noodles",price:200,url:ot.a,desc:"Chilly",rate:4.1},{id:3,name:"Fries",price:70,url:ut.a,desc:"Crispy",rate:4.2}],allCategories:[{id:4,name:"Macroni",price:150,url:ft.a,desc:"Yummy",rate:4.5},{id:5,name:"Pizza",price:400,url:pt.a,desc:"Very Tasty",rate:4},{id:6,name:"Salad",price:60,url:vt.a,desc:"Very Tasty",rate:4.2}],dishesNearYou:[{id:7,name:"Samosa",price:20,url:yt.a,desc:"Very Tasty",rate:4.2},{id:8,name:"Soup",price:50,url:bt.a,desc:"Delicious",rate:4.2},{id:9,name:"Tacos",price:110,url:wt.a,desc:"Awesome",rate:4.4}],cartItemCount:0,cartItems:[]},mutations:{addToCart:function(t,e){var a=e;if(a=Object(st["a"])(Object(st["a"])({},a),{},{quantity:1}),t.cartItems.length>0){var s=t.cartItems.some((function(t){return t.id==a.id}));if(s){var i=t.cartItems.findIndex((function(t){return t.id===a.id}));t.cartItems[i]["quantity"]+=1}else t.cartItems.push(a)}else t.cartItems.push(a);t.cartItemCount++},removeItem:function(t,e){if(t.cartItems.length>0){var a=t.cartItems.some((function(t){return t.id===e.id}));if(a){var s=t.cartItems.findIndex((function(t){return t.id===e.id}));0!==t.cartItems[s]["quantity"]&&(t.cartItems[s]["quantity"]-=1,t.cartItemCount--),0===t.cartItems[s]["quantity"]&&t.cartItems.splice(s,1)}}}},actions:{addToCart:function(t,e){t.commit("addToCart",e)},removeItem:function(t,e){t.commit("removeItem",e)}}}),It=a("5f5b"),St=a("b1e0");a("f9e3"),a("2dd8");s["default"].use(It["a"]),s["default"].use(St["a"]),s["default"].config.productionTip=!1,s["default"].use(d["a"]);var kt=new d["a"]({routes:at});new s["default"]({router:kt,store:xt,render:function(t){return t(u)}}).$mount("#app")},"628b":function(t,e,a){},"62ee":function(t,e,a){t.exports=a.p+"img/kendal-L4iKccAChOc-unsplash.e7e9316c.jpg"},"6fd7":function(t,e,a){"use strict";a("37c1")},"723c":function(t,e,a){t.exports=a.p+"img/nicholas-green-rAsESO5Puqw-unsplash.3699e35d.jpg"},"73f5":function(t,e,a){},"758b":function(t,e,a){t.exports=a.p+"img/wright-brand-bacon-sOomKkiqmTY-unsplash.177eacfd.jpg"},"76ea":function(t,e,a){t.exports=a.p+"img/marco-oriolesi-wqLGlhjr6Og-unsplash.381015b3.jpg"},"7c87":function(t,e,a){},"85ec":function(t,e,a){},"9db1":function(t,e,a){},a689:function(t,e,a){},a7a7:function(t,e,a){t.exports=a.p+"img/arjun-kapoor-oqLnHkvny3U-unsplash.59c77bbf.jpg"},b15d:function(t,e,a){"use strict";a("1072")},b969:function(t,e,a){t.exports=a.p+"img/vincent-van-zalinge-vUNQaTtZeOo-unsplash.6d5c82c1.jpg"},c98f:function(t,e,a){t.exports=a.p+"img/carolyn-v-K-YlEjJDSEo-unsplash.27c907c6.jpg"},cace:function(t,e,a){"use strict";a("9db1")},dd6e:function(t,e,a){t.exports=a.p+"img/hush-naidoo-yo01Z-9HQAw-unsplash.f0cfa36d.jpg"},e93c:function(t,e,a){"use strict";a("7c87")},ea12:function(t,e,a){"use strict";a("a689")},f7f7:function(t,e,a){"use strict";a("628b")}});
//# sourceMappingURL=app.0e851e24.js.map