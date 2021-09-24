(this["webpackJsonpmovies-explorer-frontend"]=this["webpackJsonpmovies-explorer-frontend"]||[]).push([[0],{30:function(e,t,s){},31:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(22),i=s.n(c),r=(s(30),s(3)),o=s(24),l=s(9),u=s(2),d=s(4),j=n.a.createContext(),h=(s(31),s(11)),m=s(12),b=new(function(){function e(t){Object(h.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(m.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getMovies",value:function(){return fetch("".concat(this._url),{method:"GET",credentials:"include",headers:this._headers}).then(this._checkResponse)}}]),e}())({url:"https://api.nomoreparties.co/beatfilm-movies",headers:{Accept:"application/json","Content-Type":"application/json"}}),_=new(function(){function e(){Object(h.a)(this,e),this._baseUrl="https://api-beatfilm-movies.xyz"}return Object(m.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():(console.log(e.json()),Promise.reject("Error: ".concat(e.status)))}},{key:"register",value:function(e,t,s){return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:s})}).then(this._checkResponse)}},{key:"signIn",value:function(e){var t=e.email,s=e.password;return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:s,email:t})}).then(this._checkResponse)}},{key:"getContent",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(this._checkResponse)}},{key:"signOut",value:function(){return fetch("".concat(this._baseUrl,"/signout"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(this._checkResponse)}}]),e}()),f=/http(s)?:\/\/w{0,3}?[a-zA-Z0-9]+[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]*/,v="\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437",p="https://api.nomoreparties.co",O=new(function(){function e(t){Object(h.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(m.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e)}},{key:"getSavedMovies",value:function(){return fetch("".concat(this._url,"/movies"),{method:"GET",credentials:"include",headers:this._headers}).then(this._checkResponse)}},{key:"getUserData",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",credentials:"include",headers:this._headers}).then(this._checkResponse)}},{key:"saveMovieCard",value:function(e){return fetch("".concat(this._url,"/movies"),{method:"POST",credentials:"include",headers:this._headers,body:JSON.stringify({country:"".concat(null!==e.country?e.country:"no info"),director:"".concat(null!==e.director?e.director:"no info"),duration:e.duration,year:e.year,description:e.description,image:"".concat(p).concat(e.image.url),trailer:"".concat(null!==e.trailerLink&&e.trailerLink.match(f)?e.trailerLink:"https://www.youtube.com/watch?v=uA4k5Vc5jFc"),thumbnail:"".concat(p).concat(e.image.formats.thumbnail.url),movieId:e.id,nameRU:"".concat(null===e.nameRU?"no info":e.nameRU),nameEN:"".concat(null===e.nameEN?"no info":e.nameEN)})}).then(this._checkResponse)}},{key:"deleteMovie",value:function(e){return fetch("".concat(this._url,"/movies/").concat(e),{method:"DELETE",credentials:"include",headers:this._headers}).then(this._checkResponse)}},{key:"uploadUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",credentials:"include",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}}]),e}())({url:"https://api-beatfilm-movies.xyz",headers:{Accept:"application/json","Content-Type":"application/json"}}),x=s(0);function g(){return Object(x.jsxs)("section",{className:"footer",children:[Object(x.jsx)("p",{className:"footer__credits",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(x.jsxs)("div",{className:"footer__wrapper",children:[Object(x.jsx)("p",{className:"footer__copy",children:"\xa9 2021"}),Object(x.jsxs)("ul",{className:"footer__list",children:[Object(x.jsx)("li",{className:"footer__item",children:Object(x.jsx)("a",{className:"footer__link",href:"https://practicum.yandex.ru/",rel:"noreferrer",target:"_blank",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})}),Object(x.jsx)("li",{className:"footer__item",children:Object(x.jsx)("a",{className:"footer__link",href:"https://github.com/",rel:"noreferrer",target:"_blank",children:"Github"})}),Object(x.jsx)("li",{className:"footer__item",children:Object(x.jsx)("a",{className:"footer__link",href:"https://www.facebook.com/",rel:"noreferrer",target:"_blank",children:"Facebook"})})]})]})]})}var N=s.p+"static/media/headerLogo.bca2ab18.svg";function k(){return Object(x.jsxs)("ul",{className:"nav-landing",children:[Object(x.jsx)("li",{className:"nav-landing__btn",children:Object(x.jsx)(r.b,{to:"/signup",className:"nav-landing__register-btn",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(x.jsx)("li",{className:"nav-landing__btn",children:Object(x.jsx)(r.b,{to:"/signin",className:"nav-landing__login-btn",children:"\u0412\u043e\u0439\u0442\u0438"})})]})}function S(){return Object(x.jsxs)(r.b,{to:"/profile",className:"account-btn",children:["\u0410\u043a\u043a\u0430\u0443\u043d\u0442",Object(x.jsx)("span",{className:"account-btn__icon"})]})}function M(e){var t=e.handleBurgerClick,s=Object(d.h)().pathname;return Object(x.jsxs)("section",{className:"nav-main ",children:[Object(x.jsxs)("nav",{className:"/"===s?"nav-main__visible_promo":"nav-main__visible",children:[Object(x.jsxs)("ul",{className:"nav-main__list",children:[Object(x.jsx)("li",{className:"nav-main__item",children:Object(x.jsx)(r.c,{to:"/movies",className:"/"===s?"nav-main__link_promo":"nav-main__link",activeClassName:"nav-main__link_active",children:"\u0424\u0438\u043b\u044c\u043c\u044b"})}),Object(x.jsx)("li",{className:"nav-main__item",children:Object(x.jsx)(r.c,{to:"/saved-movies",className:"/"===s?"nav-main__link_promo":"nav-main__link",activeClassName:"nav-main__link_active",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"})})]}),Object(x.jsx)(S,{})]}),Object(x.jsx)("div",{className:"/"===s?"nav-main__burger_promo":"nav-main__burger",onClick:t})]})}function C(e){var t=e.headerDark,s=e.loggedIn,a=e.handleBurgerClick;return Object(x.jsxs)("header",{className:"header ".concat(t||""),children:[Object(x.jsx)(r.b,{to:"/",children:Object(x.jsx)("img",{src:N,alt:"Movie",className:"header__logo"})}),s?Object(x.jsx)(M,{handleBurgerClick:a}):Object(x.jsx)(k,{})]})}var E=s.p+"static/media/studentPhoto.c37f918b.jpg";var y=function(){return Object(x.jsxs)("section",{className:"about-me",children:[Object(x.jsx)("h2",{className:"about-me__title",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"}),Object(x.jsxs)("div",{className:"about-me__profile",children:[Object(x.jsxs)("div",{className:"about-me__text-wrapper",children:[Object(x.jsx)("h3",{className:"about-me__section-title",children:"\u041e\u043b\u044c\u0433\u0430"}),Object(x.jsx)("p",{className:"about-me__section-subtitle",children:"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u0446\u0430, 31 \u0433\u043e\u0434"}),Object(x.jsx)("p",{className:"about-me__text",children:"\u0420\u043e\u0434\u0438\u043b\u0430\u0441\u044c \u0438 \u0436\u0438\u0432\u0443 \u0432 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435, \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0430 \u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u0443\u0440\u0443 \u043f\u043e \u0430\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0439 \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0435 \u0438 \u043b\u0438\u043d\u0433\u0432\u0438\u0441\u0442\u0438\u043a\u0435 \u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u0413\u0440\u0430\u043d\u0430\u0434\u044b. \u0428\u0435\u0441\u0442\u044c \u043b\u0435\u0442 \u043f\u0440\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a\u043e\u043c \u0441 \u0438\u0441\u043f\u0430\u043d\u0441\u043a\u043e\u0433\u043e \u043d\u0430 \u0440\u0443\u0434\u043d\u0438\u043a\u0435 \u0432 \u0413\u0432\u0430\u0442\u0435\u043c\u0430\u043b\u0435. \u041f\u043e\u0441\u043b\u0435 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u043a\u0443\u0440\u0441\u0430 \u043f\u043e \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u044e \u043d\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u0443 \u0432 \u043d\u043e\u0432\u043e\u0439 \u0441\u0444\u0435\u0440\u0435."}),Object(x.jsxs)("ul",{className:"about-me__social",children:[Object(x.jsx)("li",{className:"about-me__social-item",children:Object(x.jsx)("a",{className:"about-me__link",href:"https://www.facebook.com/olga.lubar",rel:"noopener noreferrer",target:"_blank",children:"Facebook"})}),Object(x.jsx)("li",{className:"about-me__social-item",children:Object(x.jsx)("a",{className:"about-me__link",href:"https://github.com/OlgaLiubar",rel:"noopener noreferrer",target:"_blank",children:"Github"})})]})]}),Object(x.jsx)("img",{className:"about-me__photo",src:E,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430"})]})]})};var w=function(){return Object(x.jsxs)("section",{className:"about-project",children:[Object(x.jsx)("h2",{className:"about-project__title",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(x.jsxs)("ul",{className:"about-project__articles",children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("h3",{className:"about-project__subtitle",children:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u043b 5 \u044d\u0442\u0430\u043f\u043e\u0432"}),Object(x.jsx)("p",{className:"about-project__text",children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c, \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("h3",{className:"about-project__subtitle",children:"\u041d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u0430 \u0443\u0448\u043b\u043e 5 \u043d\u0435\u0434\u0435\u043b\u044c"}),Object(x.jsx)("p",{className:"about-project__text",children:"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0431\u044b\u043b \u043c\u044f\u0433\u043a\u0438\u0439 \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0434\u0435\u0434\u043b\u0430\u0439\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f."})]})]}),Object(x.jsxs)("div",{className:"about-project__timebar",children:[Object(x.jsxs)("div",{className:"about-project__timebar-back",children:[Object(x.jsx)("div",{className:"about-project__timebar-duration about-project__timebar-duration_back-weeks",children:"1 \u043d\u0435\u0434\u0435\u043b\u044f"}),Object(x.jsx)("p",{className:"about-project__timebar-caption",children:"Back-end"})]}),Object(x.jsxs)("div",{className:"about-project__timebar-front",children:[Object(x.jsx)("div",{className:"about-project__timebar-duration about-project__timebar-duration_front-weeks",children:"4 \u043d\u0435\u0434\u0435\u043b\u0438"}),Object(x.jsx)("p",{className:"about-project__timebar-caption",children:"Front-end"})]})]})]})};var L=function(){return Object(x.jsxs)("section",{className:"portfolio",children:[Object(x.jsx)("h3",{className:"portfolio__section-title",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),Object(x.jsxs)("ul",{className:"portfolio__list",children:[Object(x.jsx)("li",{className:"portfolio__list-item",children:Object(x.jsxs)("a",{className:"portfolio__link",href:"https://www.facebook.com/olga.lubar",rel:"noopener noreferrer",target:"_blank",children:[Object(x.jsx)("p",{className:"portfolio__link-txt",children:"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"}),Object(x.jsx)("span",{className:"portfolio__arrow",children:"\u2197"})]})}),Object(x.jsx)("li",{className:"portfolio__list-item",children:Object(x.jsxs)("a",{className:"portfolio__link",href:"https://github.com/OlgaLiubar",rel:"noopener noreferrer",target:"_blank",children:[Object(x.jsx)("p",{className:"portfolio__link-txt",children:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"}),Object(x.jsx)("span",{className:"portfolio__arrow",children:"\u2197"})]})}),Object(x.jsx)("li",{className:"portfolio__list-item",children:Object(x.jsxs)("a",{className:"portfolio__link",href:"https://github.com/OlgaLiubar",rel:"noopener noreferrer",target:"_blank",children:[Object(x.jsx)("p",{className:"portfolio__link-txt",children:"\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(x.jsx)("span",{className:"portfolio__arrow",children:"\u2197"})]})})]})]})};function F(){return Object(x.jsx)("section",{className:"promo",children:Object(x.jsx)("h1",{className:"promo__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043a\u0438 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})})}var I=function(){return Object(x.jsxs)("section",{className:"techs",children:[Object(x.jsx)("h2",{className:"techs__title",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(x.jsx)("h3",{className:"techs__section-title",children:"7 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(x.jsx)("p",{className:"techs__section-subtitle",children:"\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u044b \u043e\u0441\u0432\u043e\u0438\u043b\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u0432 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."}),Object(x.jsxs)("ul",{className:"techs__list",children:[Object(x.jsx)("li",{className:"techs__item",children:"HTML"}),Object(x.jsx)("li",{className:"techs__item",children:"CSS"}),Object(x.jsx)("li",{className:"techs__item",children:"JS"}),Object(x.jsx)("li",{className:"techs__item",children:"React"}),Object(x.jsx)("li",{className:"techs__item",children:"Git"}),Object(x.jsx)("li",{className:"techs__item",children:"Express.js"}),Object(x.jsx)("li",{className:"techs__item",children:"mongoDB"})]})]})};function T(e){var t=e.loggedIn,s=e.handleBurgerClick;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{loggedIn:t,headerDark:"header_dark",handleBurgerClick:s}),Object(x.jsx)(F,{}),Object(x.jsx)(w,{}),Object(x.jsx)(I,{}),Object(x.jsx)(y,{}),Object(x.jsx)(L,{}),Object(x.jsx)(g,{})]})}function U(e){var t=e.handleCheck,s=e.isShortFilms;var a=s?"checkbox__input-visible_checked":"checkbox__input-visible";return Object(x.jsxs)("label",{className:"checkbox",htmlFor:"filtercheckbox",children:[Object(x.jsx)("input",{className:"checkbox__input",type:"checkbox",onChange:function(){t()},checked:s,id:"filtercheckbox"}),Object(x.jsx)("span",{className:a}),"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0438"]})}var D=s(15);function B(){var e=n.a.useState({}),t=Object(u.a)(e,2),s=t[0],c=t[1],i=n.a.useState({}),r=Object(u.a)(i,2),o=r[0],d=r[1],j=n.a.useState(!1),h=Object(u.a)(j,2),m=h[0],b=h[1],_=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];c(e),d(t),b(s)}),[c,d,b]);return{values:s,handleChange:function(e){var t=e.target,a=t.value,n=t.name;c(Object(l.a)(Object(l.a)({},s),{},Object(D.a)({},n,a))),d(Object(l.a)(Object(l.a)({},o),{},Object(D.a)({},n,t.validationMessage))),b(t.closest("form").checkValidity())},resetForm:_,errors:o,isValid:m,setValues:c}}function R(e){var t=e.handleMovieSearch,s=e.handleCheck,a=e.isShortFilms,c=e.localArr,i=e.savedMov,r=B(),o=r.values,l=r.handleChange,d=r.isValid,j=n.a.useState(!1),h=Object(u.a)(j,2),m=h[0],b=h[1],_=m?"error ":"error_invisible";return Object(x.jsxs)("section",{className:"search",children:[Object(x.jsx)("span",{className:_,children:"\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"}),Object(x.jsxs)("form",{className:"search__form",noValidate:!0,onSubmit:function(e){if(b(!1),e&&e.preventDefault(),d)if(i){if(i)return localStorage.setItem("querySM",o.input),t(o.input,c)}else t(o.input,c),localStorage.setItem("queryM",o.input);else b(!0)},children:[Object(x.jsxs)("div",{className:"search__container",children:[Object(x.jsx)("input",{className:"search__input",type:"text",name:"input",placeholder:"\u0424\u0438\u043b\u044c\u043c",onChange:function(e){l(e),b(!1)}}),Object(x.jsx)("button",{className:"search__button",type:"submit",value:"\u041d\u0430\u0439\u0442\u0438 \u0444\u0438\u043b\u044c\u043c",id:"search__button"})]}),Object(x.jsx)(U,{handleCheck:s,isShortFilms:a})]})]})}var V=function(){return Object(x.jsx)("p",{className:"no-movies",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e :("})};function J(e){var t,s=e.card,a=e.onSaveMovie,n=e.onDeleteMovie,c=e.isSavedMovie,i=Object(d.h)().pathname,r=c(s);return Object(x.jsxs)("li",{className:"card",children:[Object(x.jsx)("a",{className:"card__link",href:s.trailerLink,rel:"noopener noreferrer",target:"_blank",children:Object(x.jsx)("img",{src:s.image.url?"".concat("https://api.nomoreparties.co").concat(s.image.url):s.image,alt:s.image.name,className:"card__image"})}),Object(x.jsx)("button",{className:"/saved-movies"===i?"card__save-button_delete":r?"card__save-button_checked":"card__save-button",type:"button",onClick:"/saved-movies"===i?function(){n(s._id),console.log("clicked")}:function(){r?n(r._id):(a(s),console.log(s))},children:r||"/saved-movies"===i?"":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(x.jsxs)("div",{className:"card__info",children:[Object(x.jsx)("h2",{className:"card__title",children:s.nameRU}),Object(x.jsx)("p",{className:"card__duration",children:(t=s.duration,Math.trunc(t/60)+"\u0447 "+t%60+"\u043c")})]})]})}function P(e){var t=e.cardList,s=e.onSaveMovie,a=e.isSavedMovie,n=e.onDeleteMovie,c=e.setMaxNumberOfMovies,i=e.maxNumberOfMovies,r=e.step,o=e.isLoading,l=e.notFound,u=e.allMovies;var d=t.slice(0,i);return Object(x.jsxs)("section",{className:"moviesCardList",children:[l&&!o&&Object(x.jsx)(V,{}),Object(x.jsx)("ul",{className:"moviesCardList__gallery",children:d.map((function(e){return Object(x.jsx)(J,{card:e,onSaveMovie:s,isSavedMovie:a,onDeleteMovie:n},e.id||e._id)}))}),u&&t.length>i&&Object(x.jsx)("button",{className:"moviesCardList__more-button",onClick:function(){return c(i+r)},children:"\u0415\u0449\u0435"})]})}s(38);var A=function(){return Object(x.jsx)("div",{className:"preloader",children:Object(x.jsx)("div",{className:"preloader__container",children:Object(x.jsx)("span",{className:"preloader__round"})})})};function q(e){var t=e.handleBurgerClick,s=e.cards,a=e.handleMovieSearch,n=e.loggedIn,c=e.onSaveMovie,i=e.isLoading,r=e.isSavedMovie,o=e.isCheckedForShortFilms,l=e.handleCheck,u=e.setMaxNumberOfMovies,d=e.maxNumberOfMovies,j=e.setStep,h=e.step,m=e.savedMovies,b=e.foundMovies,_=e.notFound,f=e.onDeleteMovie,v=e.customErr,p=e.fetchErrMsg;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{handleBurgerClick:t,loggedIn:n}),Object(x.jsxs)("section",{className:"movies",children:[Object(x.jsx)(R,{handleMovieSearch:a,handleCheck:l,isShortFilms:o,localArr:localStorage.movies}),Object(x.jsx)("p",{className:"movies__error",children:p||""}),i&&Object(x.jsx)(A,{}),Object(x.jsx)(P,{cardList:s,onSaveMovie:c,isSavedMovie:r,setMaxNumberOfMovies:u,maxNumberOfMovies:d,setStep:j,step:h,savedMovies:m,foundMovies:b,isLoading:i,notFound:_,onDeleteMovie:f,customErr:v,allMovies:!0})]}),Object(x.jsx)(g,{})]})}function G(e){var t=e.isLoading,s=e.handleBurgerClick,a=e.savedMovies,n=e.loggedIn,c=e.isSavedMovie,i=e.onDeleteMovie,r=e.handleMovieSearch,o=e.isCheckedForSavedShortFilms,l=e.handleCheck,u=e.foundSavedMovies,d=e.setMaxNumberOfMovies,j=e.maxNumberOfMovies,h=e.setStep,m=e.step,b=e.notFound,_=e.fetchErrMsg;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{handleBurgerClick:s,loggedIn:n}),Object(x.jsxs)("section",{className:"saved-movies",children:[Object(x.jsx)(R,{handleMovieSearch:r,handleCheck:l,isShortFilms:o,savedMov:!0,localArr:localStorage.savedMovies}),Object(x.jsx)("p",{className:"movies__error",children:_||""}),t&&Object(x.jsx)(A,{}),Object(x.jsx)(P,{cardList:u,savedMovies:a,isSavedMovie:c,onDeleteMovie:i,setMaxNumberOfMovies:d,maxNumberOfMovies:j,setStep:h,step:m,notFound:b})]}),Object(x.jsx)(g,{})]})}function z(e){var t=e.btnName,s=e.isValid,a=e.isError;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("button",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",className:"submit-btn ".concat((!s||a)&&"submit-btn_disabled"),disabled:!s||a,children:t})})}function Q(e){var t,s=e.serverErrMsg,a=e.customErr,n="Error: 409"==(t=s)?"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.":"Error: 401"===t?"\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c.":"Error: 500"===t?"\u041d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.":1;return Object(x.jsx)("span",{className:"error",children:1==n?a:n})}function H(e){var t=e.title,s=e.signUp,a=e.btnName,n=e.authQuestion,c=e.authLinkTxt,i=e.linkPath,o=e.onChangeInput,l=e.errors,u=e.values,d=e.isValid,j=e.onSubmit,h=e.serverErrMsg,m=e.customErr,b=e.resetServerError;function _(){b()}return Object(x.jsxs)("section",{className:"auth",children:[Object(x.jsx)(r.b,{to:"/",children:Object(x.jsx)("div",{className:"auth__logo"})}),Object(x.jsx)("h1",{className:"auth__title",children:"".concat(t)}),Object(x.jsxs)("form",{onSubmit:j,className:"auth__form",noValidate:!0,children:[Object(x.jsxs)("fieldset",{className:"auth__fieldset",children:[s&&Object(x.jsxs)("label",{className:"auth__label",children:[Object(x.jsx)("p",{className:"auth__input-name",children:"\u0418\u043c\u044f"}),Object(x.jsx)("input",{className:"auth__input",minLength:2,maxLength:30,type:"text",name:"name",onChange:o,onFocus:_,required:!0}),Object(x.jsx)("span",{className:"auth__input-error",id:"name-error",children:l.name||""})]}),Object(x.jsxs)("label",{className:"auth__label",children:[Object(x.jsx)("p",{className:"auth__input-name",children:"E-mail"}),Object(x.jsx)("input",{className:"auth__input",type:"email",name:"email",required:!0,onChange:o,onFocus:_}),Object(x.jsx)("span",{className:"auth__input-error",id:"email-error",children:l.email||""})]}),Object(x.jsxs)("label",{className:"auth__label",children:[Object(x.jsx)("p",{className:"auth__input-name",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(x.jsx)("input",{className:l.password?"auth__input auth__input_invalid":"auth__input",minLength:8,type:"password",name:"password",onChange:o,required:!0,onFocus:_}),Object(x.jsx)("span",{className:"auth__input-error",id:"password-error",children:l.password||""})]})]}),Object(x.jsx)(Q,{serverErrMsg:h,customErr:m}),Object(x.jsx)(z,{btnName:a,isValid:d,values:u})]}),Object(x.jsxs)("p",{className:"auth__signed-up",children:[n,Object(x.jsx)(r.b,{to:i,className:"auth__link",children:c})]})]})}function W(e){var t=e.onSubmit,s=e.isLoading,a=e.serverErrMsg,n=e.customErr,c=e.resetServerError,i=B(),r=i.values,o=i.handleChange,l=i.errors,u=i.isValid;return Object(x.jsx)(H,{title:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c!",signUp:!1,btnName:"\u0412\u043e\u0439\u0442\u0438",authQuestion:"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",authLinkTxt:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",linkPath:"/signup",onChangeInput:o,onSubmit:function(e){e.preventDefault(),t(r)},errors:l,isValid:u,isLoading:s,values:r,serverErrMsg:a,customErr:n,resetServerError:c})}function Z(e){var t=e.onSubmit,s=e.isLoading,a=e.serverErrMsg,n=e.customErr,c=e.resetServerError,i=B(),r=i.values,o=i.handleChange,l=i.errors,u=i.isValid;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(H,{title:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",signUp:!0,btnName:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",authQuestion:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",authLinkTxt:"\u0412\u043e\u0439\u0442\u0438",linkPath:"/signin",onChangeInput:o,onSubmit:function(e){e.preventDefault(),t(r)},errors:l,isValid:u,isLoading:s,serverErrMsg:a,customErr:n,resetServerError:c})})}function $(){var e=Object(d.g)();return Object(x.jsxs)("section",{className:"not-found",children:[Object(x.jsx)("h1",{className:"not-found__title",children:"404"}),Object(x.jsx)("p",{className:"not-found__subtitle",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(x.jsx)("button",{type:"button",onClick:function(){return e.goBack()},className:"not-found__button",children:"\u041d\u0430\u0437\u0430\u0434"})]})}function K(e){var t=e.handleBurgerClick,s=e.handleLogOut,a=e.handleUpdateUser,c=e.isLoading,i=e.loggedIn,r=e.customErr,o=e.serverErrMsg,l=e.isError,d=e.resetServerError,h=e.successMsg,m=n.a.useState(!0),b=Object(u.a)(m,2),_=b[0],f=b[1],v=n.a.useContext(j),p=v.name,O=v.email,g=B(),N=g.values,k=g.handleChange,S=g.errors,M=g.isValid,E=g.setValues;return n.a.useEffect((function(){E({name:p,email:O})}),[p,O]),n.a.useEffect((function(){d()}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{handleBurgerClick:t,loggedIn:i}),Object(x.jsxs)("section",{className:"profile",children:[Object(x.jsx)("h1",{className:"profile__title",children:"\u041f\u0440\u0438\u0432\u0435\u0442, ".concat(p,"!")}),Object(x.jsx)("p",{className:"profile__success",children:h||""}),Object(x.jsx)("form",{className:"profile__form",name:"profile",onSubmit:function(e){e.preventDefault(),a(N),f(!0)},noValidate:!0,children:c?Object(x.jsx)(A,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"profile__inputs",children:[Object(x.jsxs)("label",{className:"profile__label",children:[Object(x.jsx)("span",{className:"profile__input-title",children:"\u0418\u043c\u044f"}),Object(x.jsx)("input",{type:"text",name:"name",id:"name-input",className:"profile__input",minLength:2,maxLength:30,required:!0,value:N.name||"",onChange:k,disabled:_})]}),Object(x.jsx)("span",{className:"profile__input-error",children:S.name||""}),Object(x.jsxs)("label",{className:"profile__label",children:[Object(x.jsx)("span",{className:"profile__input-title",children:"E-mail"}),Object(x.jsx)("input",{type:"email",name:"email",className:"profile__input",id:"email-input",required:!0,disabled:_,value:N.email||"",onChange:k})]}),Object(x.jsx)("span",{className:"profile__input-error",children:S.email||""})]}),N.name===p&&N.email===O?Object(x.jsxs)("div",{className:"profile__edit-group",children:[Object(x.jsx)("button",{type:"button",value:"Edit",className:"profile__submit-btn ".concat(_?"":"profile__submit-btn_clicked"),onClick:function(){f(!_)},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(x.jsx)("button",{type:"button",className:"profile__signout-btn",value:"Signout",onClick:s,children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Q,{serverErrMsg:o,customErr:r}),Object(x.jsx)(z,{btnName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isError:l,isValid:M})]})]})})]})]})}function X(e){var t=e.isOpen,s=e.onClose;return Object(x.jsx)("div",{className:"sidebar__overlay ".concat(t?"sidebar__overlay_opened":""),onMouseDown:function(e){e.target===e.currentTarget&&t&&s()},children:Object(x.jsxs)("div",{className:"sidebar",children:[Object(x.jsx)("button",{type:"button",className:"sidebar__close-btn",onClick:s}),Object(x.jsxs)("nav",{className:"sidebar__menu",children:[Object(x.jsxs)("ul",{className:"sidebar__menu-list",children:[Object(x.jsx)("li",{className:"sidebar__menu-item",children:Object(x.jsx)(r.c,{to:"/",className:"sidebar__menu-link",onClick:s,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(x.jsx)("li",{className:"sidebar__menu-item",children:Object(x.jsx)(r.c,{to:"/movies",className:"sidebar__menu-link",activeClassName:"sidebar__menu-link_active",onClick:s,children:"\u0424\u0438\u043b\u044c\u043c\u044b"})}),Object(x.jsx)("li",{className:"sidebar__menu-item",children:Object(x.jsx)(r.c,{to:"/saved-movies",className:"sidebar__menu-link",activeClassName:"sidebar__menu-link_active",onClick:s,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"})})]}),Object(x.jsx)("div",{onClick:s,children:Object(x.jsx)(S,{})})]})]})})}var Y=s(25),ee=["component"],te=function(e){var t=e.component,s=Object(Y.a)(e,ee);return Object(x.jsx)(d.b,{children:function(){return s.loggedIn?Object(x.jsx)(t,Object(l.a)({},s)):Object(x.jsx)(d.a,{to:"/"})}})};function se(e,t,s){var a=[];return e&&(a=e.filter((function(e){return e.nameRU.toUpperCase().includes(t.toUpperCase())}))),s&&(a=a.filter((function(e){return e.duration<=40}))),a}var ae=function(e){var t,s;return e>980?(t=12,s=3):e>=500&&e<=980?(t=8,s=2):e<500&&(t=5,s=2),{maxNumberOfMovies:t,step:s}};function ne(){var e=Object(d.g)(),t=n.a.useState({}),s=Object(u.a)(t,2),c=s[0],i=s[1],r=n.a.useState(!1),h=Object(u.a)(r,2),m=h[0],f=h[1],p=n.a.useState(!1),g=Object(u.a)(p,2),N=g[0],k=g[1],S=n.a.useState(!1),M=Object(u.a)(S,2),C=M[0],E=M[1],y=n.a.useState([]),w=Object(u.a)(y,2),L=w[0],F=w[1],I=n.a.useState([]),U=Object(u.a)(I,2),D=U[0],B=U[1],R=n.a.useState([]),V=Object(u.a)(R,2),J=V[0],P=V[1],A=n.a.useState(window.innerWidth),z=Object(u.a)(A,2),Q=z[0],H=z[1],Y=n.a.useState(!1),ee=Object(u.a)(Y,2),ne=ee[0],ce=ee[1],ie=n.a.useState(0),re=Object(u.a)(ie,2),oe=re[0],le=re[1],ue=n.a.useState(0),de=Object(u.a)(ue,2),je=de[0],he=de[1],me=n.a.useState(!1),be=Object(u.a)(me,2),_e=be[0],fe=be[1],ve=n.a.useState(!1),pe=Object(u.a)(ve,2),Oe=pe[0],xe=pe[1],ge=n.a.useState(""),Ne=Object(u.a)(ge,2),ke=Ne[0],Se=Ne[1],Me=n.a.useState(""),Ce=Object(u.a)(Me,2),Ee=Ce[0],ye=Ce[1],we=n.a.useState(!1),Le=Object(u.a)(we,2),Fe=Le[0],Ie=Le[1],Te=n.a.useState(!1),Ue=Object(u.a)(Te,2),De=Ue[0],Be=Ue[1],Re=n.a.useState(!1),Ve=Object(u.a)(Re,2),Je=Ve[0],Pe=Ve[1],Ae=n.a.useState(""),qe=Object(u.a)(Ae,2),Ge=qe[0],ze=qe[1],Qe=n.a.useState(""),He=Object(u.a)(Qe,2),We=He[0],Ze=He[1];function $e(){E(!0)}function Ke(e){ye(e)}function Xe(){ye(""),Se("")}function Ye(t){var s=t.email,a=t.password;f(!0),_.signIn({email:s,password:a}).then((function(){O.getUserData().then((function(e){i(e)})).catch((function(e){console.log("".concat(e))})),k(!0),Xe(),e.push("/movies")})).catch((function(e){Ke(e),Se("\u041f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.")})).finally((function(){f(!1)}))}function et(e,t){if(t===localStorage.movies){var s=se(JSON.parse(t),e,_e);tt(s),F(s)}else{var a=se(JSON.parse(t),e,Oe);st(a),B(a)}}function tt(e){0==e.length?Be(!0):Be(!1)}function st(e){0==e.length?Pe(!0):Pe(!1)}function at(){f(!0),O.getSavedMovies().then((function(e){var t=e.filter((function(e){return e.owner==c._id}));P(t),localStorage.setItem("savedMovies",JSON.stringify(e))})).catch((function(e){Ze(v),console.log("".concat(e))})).finally((function(){return f(!1)}))}function nt(e){return J.find((function(t){return t.movieId===e.id}))}function ct(e){O.deleteMovie(e).then((function(e){var t=D.filter((function(t){return t._id!==e.data._id}));B(t),at()})).catch((function(e){console.log(e)}))}return n.a.useEffect((function(){N&&O.getSavedMovies().then((function(e){var t=e.filter((function(e){return e.owner==c._id}));P(t),B(t),localStorage.setItem("savedMovies",JSON.stringify(t))})).catch((function(e){Ze(v),console.log("".concat(e))}))}),[N]),n.a.useEffect((function(){f(!0),N?O.getUserData().then((function(e){i(e)})).catch((function(e){console.log(e)})).finally((function(){return f(!1)})):f(!1)}),[N]),console.log(N),n.a.useEffect((function(){N&&_.getContent().then((function(e){e&&k(!0)})).catch((function(e){return console.log(e)}))}),[N]),n.a.useEffect((function(){if(localStorage.movies&&localStorage.queryM){var e=se(JSON.parse(localStorage.movies),localStorage.queryM,_e);tt(e),F(e)}}),[_e]),n.a.useEffect((function(){if(localStorage.savedMovies&&localStorage.querySM){var e=se(JSON.parse(localStorage.savedMovies),localStorage.querySM,Oe);st(e),B(e)}}),[Oe]),n.a.useEffect((function(){if(localStorage.savedMovies)if(1==Oe){var e=JSON.parse(localStorage.savedMovies).filter((function(e){return e.duration<=40}));B(e)}else B(J)}),[Oe]),n.a.useEffect((function(){f(!0),localStorage.movies||b.getMovies().then((function(e){var t=e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{movieId:e.id})}));localStorage.setItem("movies",JSON.stringify(t))})).catch((function(e){Ze(v),console.log("".concat(e))})).finally((function(){return f(!1)}))}),[N]),Object(a.useLayoutEffect)((function(){function e(){ne||(ce(!0),setTimeout((function(){H(window.innerWidth),ce(!1)}),700))}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n.a.useEffect((function(){var e=ae(Q),t=e.maxNumberOfMovies,s=e.step;le(t),he(s)}),[Q]),n.a.useEffect((function(){setTimeout((function(){ze("")}),2e3)}),[Ge]),n.a.useEffect((function(){setTimeout((function(){ze("")}),2e3)}),[We]),Object(x.jsx)(j.Provider,{value:c,children:Object(x.jsxs)("div",{className:"page",children:[Object(x.jsxs)(d.d,{children:[Object(x.jsx)(d.b,{path:"/",exact:!0,children:Object(x.jsx)(T,{loggedIn:N,handleBurgerClick:$e})}),Object(x.jsx)(te,{path:"/movies",component:q,handleMovieSearch:et,handleBurgerClick:$e,cards:L,loggedIn:N,isLoading:m,onSaveMovie:function(e){O.saveMovieCard(e).then((function(e){at(),B([].concat(Object(o.a)(D),[e]))})).catch((function(e){return console.log("\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))})).finally((function(){return console.log("\u0423\u0444, \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u043b\u0438!")}))},isSavedMovie:nt,isCheckedForShortFilms:_e,handleCheck:function(){fe(!_e)},setMaxNumberOfMovies:le,maxNumberOfMovies:oe,setStep:he,step:je,savedMovies:J,notFound:De,onDeleteMovie:ct,fetchErrMsg:We}),Object(x.jsx)(te,{path:"/saved-movies",component:G,handleMovieSearch:et,handleBurgerClick:$e,foundSavedMovies:D,savedMovies:J,loggedIn:N,isLoading:m,onDeleteMovie:ct,isCheckedForSavedShortFilms:Oe,handleCheck:function(){xe(!Oe)},isSavedMovie:nt,notFound:Je,fetchErrMsg:We}),Object(x.jsx)(te,{path:"/profile",component:K,loggedIn:N,handleBurgerClick:$e,handleLogOut:function(){f(!0),_.signOut().then((function(){F([]),B([]),k(!1),localStorage.clear(),e.push("/")})).catch((function(e){console.log("".concat(e))})).finally((function(){return f(!1)}))},handleUpdateUser:function(e){var t=e.name,s=e.email;f(!0),O.uploadUserInfo({name:t,email:s}).then((function(e){Xe(),ze("\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b!"),i(e)})).catch((function(e){Ke(e),Se("\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430."),Ie(!0)})).finally((function(){return f(!1)}))},isLoading:m,serverErrMsg:Ee,customErr:ke,isError:Fe,resetServerError:Xe,successMsg:Ge}),Object(x.jsx)(d.b,{path:"/signup",children:N?Object(x.jsx)(d.a,{to:"/movies"}):Object(x.jsx)(Z,{isLoading:m,onSubmit:function(e){var t=e.name,s=e.email,a=e.password;f(!0),_.register(t,s,a).then((function(){Ye({email:s,password:a}),Xe()})).catch((function(e){Ke(e),Se("\u041f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.")})).finally((function(){f(!1)}))},serverErrMsg:Ee,customErr:ke,isError:Fe,resetServerError:Xe})}),Object(x.jsx)(d.b,{path:"/signin",children:N?Object(x.jsx)(d.a,{to:"/movies"}):Object(x.jsx)(W,{isLoading:m,onSubmit:Ye,serverErrMsg:Ee,customErr:ke,isError:Fe,resetServerError:Xe})}),Object(x.jsx)(d.b,{path:"*",children:Object(x.jsx)($,{})})]}),Object(x.jsx)(X,{isOpen:C,onClose:function(){E(!1)}})]})})}var ce=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,40)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(r.a,{children:Object(x.jsx)(ne,{})})}),document.getElementById("root")),ce()}},[[39,1,2]]]);
//# sourceMappingURL=main.641c0128.chunk.js.map