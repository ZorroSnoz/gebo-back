(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{52:function(e,n,t){},82:function(e,n,t){"use strict";t.r(n);var a,r,i,c,o,s,d,l,u,g,b,h,j,p,x,O,f,v,m,w,C,S,y,R,U,k=t(0),A=t(19),E=t.n(A),L=t(22),D=(t(52),t(4)),T=t(5),_=T.a.div(a||(a=Object(D.a)(["\nheight: ",";\nbackground: linear-gradient(90deg, #6D4BCE 0%, #4398B6 100%);\nmax-width: 586px;\nwidth: 100%;\ndisplay: inline-block;\n\n@media (min-width: 586px) {\ndisplay: none;\n}\n"])),(function(e){return e.height+"px"})),N=T.a.div(r||(r=Object(D.a)(["\nheight: ",";\nbackground: linear-gradient(90deg, #6D4BCE 0%, #4398B6 100%);\nwidth: 100%;\ndisplay: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\nh2 {\n\n}\n\n@media (max-width: 586px) {\ndisplay: none;\n}\n"])),(function(e){return e.height+"px"})),I=T.a.div(i||(i=Object(D.a)(["\n    display: flex;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n        overflow-y: overlay;\n"]))),F="\nwidth: calc(100% - 83px);\nmin-width: 250px;\nheight: 66px;\nbackground: #000000;\nborder-radius: 49px;\ncolor: #FFFFFF;\nfont-weight: 800;\nfont-size: 20px;\ntext-transform: uppercase;\ncursor: pointer;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\noutline: none;\nborder: none;\n",M=t(3),B=function(e){var n=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return n?decodeURIComponent(n[1]):null},z=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(t=Object(M.a)({path:"/","max-age":31536e3},t)).expires instanceof Date&&(t.expires=t.expires.toUTCString());var a=encodeURIComponent(e)+"="+encodeURIComponent(n);for(var r in t){a+="; "+r;var i=t[r];!0!==i&&(a+="="+i)}document.cookie=a},P=function(e){z(e,"",{"max-age":-1})},G=function(e){null!=e.name&&null!=e.idUser?(z("user",e.name),z("idUser",e.idUser),z("phone",e.phone),z("avatar",e.avatar)):console.log("Error: Cookies not added."),e.isRegistered?z("registered","true"):z("registered","false")},H=t(11),J=t(27),K=t.n(J),$=t(44),V=t(45),W=t.n(V).a.create({baseURL:"https://60abde1c5a4de40017ccb188.mockapi.io/"}),Y={AddNewUser:function(e){return W.post("add-new-user",e)}},q="SET_AUTH_USER_DATA",Q="SET_AUTH_USER_DATA_AND_REDIRECT",X="TOGGLE_LOADER_SUBMIT",Z="CLEAN_STATE",ee={isRegistered:null,name:null,phone:null,avatar:null,idUser:null,isLoadNewUser:!1,isRedirectToMainPage:!1},ne=function(e){return{type:Q,userData:e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case q:return Object(M.a)(Object(M.a)({},e),{},{isRegistered:n.userData.isRegistered,name:n.userData.name,idUser:n.userData.idUser,phone:n.userData.phone,avatar:n.userData.avatar});case X:var t=!0;return e.isLoadNewUser&&(t=!1),Object(M.a)(Object(M.a)({},e),{},{isLoadNewUser:t});case Q:return Object(M.a)(Object(M.a)({},e),{},{isRegistered:n.userData.isRegistered,name:n.userData.name,idUser:n.userData.idUser,phone:n.userData.phone,avatar:n.userData.avatar,isLoadNewUser:!1,isRedirectToMainPage:!0});case Z:return Object(M.a)(Object(M.a)({},e),{},{isLoadNewUser:!1,isRedirectToMainPage:!1});default:return e}},ae=t(17),re=t(7),ie=t(1),ce=function(e){var n=e.component,t=e.auth;return Object(ie.jsx)(ie.Fragment,{children:t?Object(ie.jsx)(n,{}):Object(ie.jsx)(re.a,{to:"/login"})})},oe=t(15),se=T.a.div(c||(c=Object(D.a)(["\n    padding: 8px 0;\n"]))),de=T.a.div(o||(o=Object(D.a)(["\n    height:  ",";\n    opacity:  ",";\n    display: flex;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    padding: 0 22px;\n    transition: 0.25s;\n    \n   ::-webkit-scrollbar {\n    height: 0px;\n    }\n\n"])),(function(e){return e.active?"59px":"0"}),(function(e){return e.active?"1":"0"})),le=T.a.p(s||(s=Object(D.a)(["\nwidth: 8px;\nheight: 8px;\np {\nwidth: 8px;\nheight: 8px;\n}\n"]))),ue=T.a.div(d||(d=Object(D.a)(["\nheight: 43px;\nbackground: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 99.99%);\nbox-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\nborder-radius: 47px;\nfont-style: normal;\nfont-weight: 800;\nfont-size: 14px;\nline-height: 52px;\nletter-spacing: -0.32px;\ntext-transform: uppercase;\ncolor: white;\ncursor: pointer;\nwidth: min-content;\npadding: 0 14px;\ndisplay: flex;\nalign-items: center;\nmargin: 8px 14px 8px 0;\nuser-select:none;\ntransition: 0.25s;\n -webkit-tap-highlight-color: rgba(0,0,0,0); \n -webkit-tap-highlight-color: transparent;\n"]))),ge=Object(T.a)(ue)(l||(l=Object(D.a)(["\ncolor: ",";\nbackground: ",";\n"])),(function(e){return e.active?"rgba(0, 0, 0, 0.8)":"white"}),(function(e){return e.active?"white":"radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 99.99%)"})),be=Object(T.a)(ue)(u||(u=Object(D.a)(["\nbackground: ",";\n"])),(function(e){return e.active?"#BFB439":"radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 99.99%)"})),he=Object(T.a)(ue)(g||(g=Object(D.a)(["\nbackground: ",";\n"])),(function(e){return e.active?"#36B782":"radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 99.99%)"})),je=Object(T.a)(ue)(b||(b=Object(D.a)(["\nbackground: ",";\n"])),(function(e){return e.active?"#8B3BBE":"radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 99.99%)"})),pe=Object(T.a)(ue)(h||(h=Object(D.a)(["\nbackground: ",";\n"])),(function(e){return e.active?"#BF3339":"radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 99.99%)"})),xe=function(e){var n=e.showSecondCategories,t=e.SetShowSecondCategories,a=e.mainCategoriesState,r=e.SelectAllMainCategories,i=e.ChangeMainCategory,c=e.local;return Object(ie.jsxs)(se,{children:[Object(ie.jsxs)(de,{active:!0,children:[Object(ie.jsx)(ge,{onClick:function(){r()},active:a[0],children:c[0]}),Object(ie.jsx)(be,{onClick:function(){i(1)},active:a[1],children:c[1]}),Object(ie.jsx)(he,{onClick:function(){i(2)},active:a[2],children:c[2]}),Object(ie.jsx)(je,{onClick:function(){i(3)},active:a[3],children:c[3]}),Object(ie.jsx)(pe,{onClick:function(){i(4)},active:a[4],children:c[4]}),Object(ie.jsx)(le,{children:Object(ie.jsx)("p",{})})]}),Object(ie.jsxs)(de,{active:n,children:[Object(ie.jsx)(ge,{onClick:function(){t()},active:!0,children:c[0]}),Object(ie.jsx)(ge,{active:!1,children:c[5]}),Object(ie.jsx)(ge,{active:!1,children:c[6]}),Object(ie.jsx)(ge,{active:!1,children:c[7]}),Object(ie.jsx)(ge,{active:!1,children:c[8]}),Object(ie.jsx)(le,{children:Object(ie.jsx)("p",{})})]})]})},Oe=t(47),fe="SET_SHOW_SECOND_CATEGORIES",ve="SELECT_ALL_MAIN_CATEGORIES",me="CHANGE_MAIN_CATEGORY",we={showSecondCategories:!1,mainCategoriesState:[!0,!1,!1,!1,!1]},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case fe:return Object(M.a)(Object(M.a)({},e),{},{showSecondCategories:!e.showSecondCategories});case ve:return Object(M.a)(Object(M.a)({},e),{},{mainCategoriesState:[!0,!1,!1,!1,!1]});case me:var t=Object(Oe.a)(e.mainCategoriesState);return t[n.categoryId]=!t[n.categoryId],Object(M.a)(Object(M.a)({},e),{},{mainCategoriesState:t});default:return e}},Se=Object(H.b)((function(e){return{local:e.LocalizationReducer.langData.categories,showSecondCategories:e.CategoriesReducer.showSecondCategories,mainCategoriesState:e.CategoriesReducer.mainCategoriesState}}),{SetShowSecondCategories:function(){return{type:fe}},SelectAllMainCategories:function(){return{type:ve}},ChangeMainCategory:function(e){return{type:me,categoryId:e}}})((function(e){var n={showSecondCategories:e.showSecondCategories,SetShowSecondCategories:e.SetShowSecondCategories,mainCategoriesState:e.mainCategoriesState,SelectAllMainCategories:e.SelectAllMainCategories,ChangeMainCategory:e.ChangeMainCategory,local:e.local};return Object(ie.jsx)(xe,Object(M.a)({},n))})),ye=function(e){return Object(oe.a)(e),Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsx)(Se,{})})},Re=Object(H.b)((function(e){return{}}),{})((function(e){return Object(oe.a)(e),"true"!==B("isReadInstruction")?Object(ie.jsx)(ye,{}):Object(ie.jsx)(re.a,{to:"/instruction"})})),Ue=t(16),ke=T.a.form(j||(j=Object(D.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n"]))),Ae=Object(T.a)(Ue.a)(p||(p=Object(D.a)(["\n","\nmargin-top: 30px;\n"])),"\nbackground: none;\n    outline: none;\n    border: 3px solid rgba(0, 0, 0, 0.8);\n    border-radius: 49px;\n    height: 66px;\n    box-sizing: border-box;\n    width: calc(100% - 84px);\n    min-width: 250px;\n    text-align: center;\n    text-transform: uppercase;\n    font-style: normal;\nfont-weight: normal;\nfont-size: 20px;\nline-height: 52px;\ncolor: rgba(255, 255, 255, 0.7);\n    \n    ::placeholder {\nfont-style: normal;\nfont-weight: normal;\nfont-size: 20px;\nline-height: 52px;\ncolor: rgba(255, 255, 255, 0.7);\ntext-transform: uppercase;\ntransition: 0.25s;\n    }\n   \n:focus::placeholder {\ncolor: rgba(255, 255, 255, 0.0);\n}\n"),Ee=T.a.button(x||(x=Object(D.a)(["\n","\nmargin-top: 60px;\nmargin-bottom: 60px;\n"])),F),Le=T.a.div(O||(O=Object(D.a)(["\n","\nmargin-top: 60px;\nmargin-bottom: 60px;\n"])),F),De=t(21),Te=function(e){var n=e.input,t=e.meta,a=Object(De.a)(e,["input","meta"]),r=t.touched&&t.error;return Object(ie.jsxs)(_e,{children:[Object(ie.jsx)("input",Object(M.a)(Object(M.a)({},n),a)),r&&Object(ie.jsx)(Ne,{children:t.error})]})},_e=T.a.div(f||(f=Object(D.a)(["\n    width: inherit;\n    height: inherit;\n    position: relative;\n   display: flex;\n    justify-content: center;\n"]))),Ne=T.a.span(v||(v=Object(D.a)(["\nposition: absolute;\n    color: red;\n    bottom: -20px;\n"]))),Ie=function(e){return e?void 0:"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"},Fe=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduce((function(n,t){return n||t(e)}),void 0)}},Me=t.p+"static/media/preloader.d8588b2b.svg",Be=T.a.div(m||(m=Object(D.a)(["\n\nheight: ",";\nimg {\nwidth: inherit;\nheight: inherit;\nborder-radius: 100%;\n}\n"])),(function(e){return e.height+"px"})),ze=T.a.div(w||(w=Object(D.a)(["\nheight: 100%;\nwidth: 100%;\njustify-content: center;\nalign-items: center;\ndisplay: flex;\nbackground: linear-gradient(90deg, #6D4BCE 0%, #4398B6 100%);\n"]))),Pe=function(e){var n=e.full,t=e.height,a=void 0===t?"150":t;return n?Object(ie.jsx)(ze,{children:Object(ie.jsx)(Be,{height:a,children:Object(ie.jsx)("img",{src:Me,alt:"preloader"})})}):Object(ie.jsx)(Be,{height:a,children:Object(ie.jsx)("img",{src:Me,alt:"preloader"})})},Ge=t.p+"static/media/avatar.80455780.png",He=Object(H.b)((function(e){return{local:e.LocalizationReducer.langData.auth_page}}),{})((function(e){var n,t=e.local,a=Object(k.useState)({files:[]}),r=Object(L.a)(a,2),i=r[0],c=r[1],o=Object(k.useRef)(null);return Object(ie.jsxs)($e,{children:[Object(ie.jsx)(Ve,{children:Object(ie.jsx)(Ue.a,{name:"avatar",children:function(e){var n=e.input,t=(n.value,n.onChange),a=Object(De.a)(n,["value","onChange"]);return Object(ie.jsx)("input",Object(M.a)(Object(M.a)({},a),{},{type:"file",ref:o,onChange:function(e){var n=e.target;t(n.files);var a=[];if(null!==n.files)for(var r=0;r<n.files.length;r++)a.push(URL.createObjectURL(n.files[r]));c({files:a})}}))}})}),Object(ie.jsxs)(We,{children:[0===i.files.length?Object(ie.jsx)(Ke,{src:Ge,alt:t[0]}):Object(ie.jsx)(Ke,{src:null===(n=i.files)||void 0===n?void 0:n[0],alt:t[0]}),Object(ie.jsx)(Je,{onClick:function(){o.current.click()},children:t[1]})]})]})})),Je=T.a.div(C||(C=Object(D.a)(["\n","\nmargin-top: 67px;\n"])),F),Ke=T.a.img(S||(S=Object(D.a)(["\nheight: 127px;\nwidth: 127px;\nbox-shadow: 0px 0px 40px 1px rgba(0, 0, 0, 0.21);\nborder-radius: 100%;\nmargin-top: 86px;\n"]))),$e=T.a.div(y||(y=Object(D.a)(["\nwidth: 100%;\n"]))),Ve=T.a.div(R||(R=Object(D.a)(["\ndisplay: none;\n"]))),We=T.a.div(U||(U=Object(D.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n"]))),Ye=function(e){var n=e.local,t=e.onSubmit,a=e.isLoadNewUser;return Object(ie.jsx)(I,{children:Object(ie.jsx)(Ue.b,{onSubmit:t,render:function(e){var t=e.handleSubmit;return Object(ie.jsxs)(ke,{onSubmit:t,children:[Object(ie.jsx)(He,{}),Object(ie.jsx)(Ae,{validate:Fe(Ie),name:"name",component:Te,placeholder:n[2]}),Object(ie.jsx)(Ae,{name:"phone",component:Te,placeholder:n[3]}),a?Object(ie.jsx)(Le,{children:Object(ie.jsx)(Pe,{full:!1,height:40})}):Object(ie.jsx)(Ee,{type:"submit",children:n[4]})]})}})})},qe=Object(H.b)((function(e){return{local:e.LocalizationReducer.langData.auth_page,isLoadNewUser:e.AuthReducer.isLoadNewUser,isRedirectToMainPage:e.AuthReducer.isRedirectToMainPage}}),{AddNewUserThunk:function(e){return function(){var n=Object($.a)(K.a.mark((function n(t){var a,r,i,c;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})),r=new FormData,i={isRegistered:!0,name:e.name,avatar:null,phone:null,idUser:a},r.append("name",e.name),e.avatar&&r.append("avatar",e.avatar[0]),e.phone&&""!==e.phone&&(r.append("phone",e.phone),i.phone=e.phone),r.append("idUser",a),n.next=9,Y.AddNewUser(r);case 9:201===(c=n.sent).status?(i.avatar=c.data.avatar,G(i),t(ne(i))):console.log("AddNewUserThunk error.");case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},ToggleLoadSubmit:function(){return{type:X}},CleanState:function(){return{type:Z}}})((function(e){var n=e.local,t=e.AddNewUserThunk,a=e.ToggleLoadSubmit,r=e.isLoadNewUser,i=e.CleanState,c=e.isRedirectToMainPage;Object(k.useEffect)((function(){return function(){i()}}),[]);var o={isLoadNewUser:r,onSubmit:function(e){t(e),a()},local:n};return c?Object(ie.jsx)(re.a,{to:"/"}):Object(ie.jsx)(Ye,Object(M.a)({},o))})),Qe=function(e){return Object(oe.a)(e),Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsx)("h1",{children:"\u0406\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u044f"})})},Xe=Object(H.b)((function(e){return{isRegistered:e.AuthReducer.isRegistered,local:e.LocalizationReducer.langData.common}}),{SetUser:function(e){return{type:q,userData:e}}})((function(e){var n=e.isRegistered,t=e.SetUser,a=e.local;Object(k.useEffect)((function(){if("true"===B("registered")&&null===n){var e={isRegistered:!0,name:B("user"),idUser:B("idUser"),phone:B("phone"),avatar:B("avatar")};t(e)}else{t({isRegistered:!1,name:null,idUser:null,phone:null,avatar:null})}}),[]),document.addEventListener("keydown",(function(e){e.ctrlKey&&(P("registered"),P("user"),P("idUser"))})),document.addEventListener("keydown",(function(e){e.altKey&&console.log(window.store.getState())}));var r=Object(k.useState)(window.innerHeight),i=Object(L.a)(r,2),c=i[0],o=i[1];return Object(k.useEffect)((function(){function e(){o(window.innerHeight)}return window.addEventListener("resize",e),function(n){window.removeEventListener("resize",e)}})),Object(ie.jsxs)(ae.a,{children:[Object(ie.jsx)(_,{height:c,children:null===n?Object(ie.jsx)(Pe,{full:!0}):Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(re.b,{path:"/login",exact:!0,render:function(){return Object(ie.jsx)(qe,{})}}),Object(ie.jsx)(re.b,{path:"/instruction",exact:!0,render:function(){return Object(ie.jsx)(Qe,{})}}),Object(ie.jsx)(re.b,{path:"/",exact:!0,render:function(){return Object(ie.jsx)(ce,{component:Re,auth:n})}})]})}),Object(ie.jsx)(N,{height:c,children:Object(ie.jsxs)("h2",{children:[a[0],Object(ie.jsx)("br",{}),a[1]]})})]})})),Ze=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,83)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),i(e),c(e)}))},en=t(23),nn=t(46),tn={UA:{langId:1,langData:{common:["\u041f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0430 \u0448\u0438\u0440\u043e\u043a\u0438\u0445 \u0435\u043a\u0440\u0430\u043d\u0456\u0432 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u044f.","\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0439\u0442\u0435\u0441\u044c \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043e\u043c \u0430\u0431\u043e \u0437\u0432\u0443\u0437\u044c\u0442\u0435 \u0432\u0456\u043a\u043d\u043e \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."],auth_page:["\u0430\u0432\u0430\u0442\u0430\u0440","\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u043e\u0442\u043e","\u0456\u043c\u2019\u044f (\u043e\u0431\u043e\u0432\u2019\u044f\u0437\u043a\u043e\u0432\u043e*)","\u0442\u0435\u043b\u0435\u0444\u043e\u043d","\u043f\u043e\u0433\u043d\u0430\u043b\u0438!"],categories:["\u0432\u0441\u0456","\u043e\u0431'\u044f\u0432\u0430","\u043a\u0443\u043f\u043b\u044e","\u043f\u0440\u043e\u0434\u0430\u043c","\u043e\u0431\u043c\u0456\u043d\u044f\u044e","\u0457\u0436\u0430","\u043d\u0430\u043f\u043e\u0457","\u043a\u0432\u0438\u0442\u043a\u0438","\u0456\u043d\u0448\u0435"]}}},an={currentLangId:tn.UA.langId,langData:tn.UA.langData},rn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,n=arguments.length>1?arguments[1]:void 0;return n.type,e},cn=Object(en.b)({LocalizationReducer:rn,AuthReducer:te,CategoriesReducer:Ce}),on=Object(en.c)(cn,Object(en.a)(nn.a));window.store=on;var sn=on;E.a.render(Object(ie.jsx)(H.a,{store:sn,children:Object(ie.jsx)(Xe,{})}),document.getElementById("root")),Ze()}},[[82,1,2]]]);
//# sourceMappingURL=main.4bade3dc.chunk.js.map