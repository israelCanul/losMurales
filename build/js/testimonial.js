webpackJsonp([4],{0:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=i(3),u=n(o),d=i(9),c=n(d),p=i(27),h=i(24),m=n(h),f=i(23),b=n(f),g=i(291),v=n(g),y=i(31),w=n(y),T=function(e){function t(e){a(this,t);var i=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.state={imagenes_last:[{original:"img/gallery/menu-chefs.png"}],itemsMenu:[{link:"/",label:"Home"},{link:"mexican-food-menu.html",label:"Menu & Chefs"},{link:"best-authentic-mexican-restaurant-riviera-maya.html",label:"Concept"},{link:"restaurants-in-riviera-maya-groups-and-events.html",label:"Group & Events"},{link:"gallery-mexican-food.html",label:"Gallery"},{link:"trip-advisor-reviews.html",label:"Testimonials",active:!0},{link:"contact-us.html",label:"Contact Us"},{link:"reservations-online.html",label:"Book a Table",bookAction:!0}],items:p.CommentsTripAdvisor},i}return r(t,e),l(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"index-page",id:"testimonial-wrap"},u.default.createElement(m.default,{items:this.state.itemsMenu}),u.default.createElement(w.default,{showThumbnails:!1,showBullets:!0,showPlayButton:!1,showFullscreenButton:!1,items:this.state.imagenes_last,slideInterval:2e3,onImageLoad:this.handleImageLoad}),u.default.createElement("div",{className:"row description"},u.default.createElement("div",{className:"col s12 description-title row"},u.default.createElement("div",{className:"col s6 description-title-logo"},u.default.createElement("img",{src:"img/logotrip.png"})),u.default.createElement("div",{className:"col s6 description-title-title"},"Testimonials"),u.default.createElement("div",{className:"col s12  description-title-parraf"},u.default.createElement("p",null,"A selection of some of the glowing reviews received from diners who enjoyed their meal and had an unforgettable evening at Los Murales.")),u.default.createElement("div",{className:"col s12 description-title-title comments"},"Our Clients Love Us")),u.default.createElement("div",{className:"col s12 row"},u.default.createElement(v.default,{items:this.state.items})),u.default.createElement("div",{className:"row description-title "},u.default.createElement("div",{className:"description-title-btn"},u.default.createElement("a",{target:"_blank",href:"https://www.tripadvisor.com/UserReviewEdit-g150812-d2159424-Los_Murales-Playa_del_Carmen_Yucatan_Peninsula.html"},"CLICK TO RATE US")))),u.default.createElement(b.default,{description:"Seating capacity:  96 dinners </br>Reservations required </br>Dress code: Casual elegant </br>acruz@royalresorts.com </br>Tel.: (998) 881-0100",logo:"img/logo.png",items:this.state.itemsMenu,socialLinks:[{link:"#",img:"img/facebook-logo-2.png",active:!0},{link:"#",img:"img/twitter-logo.png"}],rights:"© 2017 Los Murales All rights reserved"}))}}]),t}(o.Component);c.default.render(u.default.createElement(T,null),document.getElementById("app"))},20:function(e,t){(function(t){function i(e,t,i){function n(t){var i=f,n=b;return f=b=void 0,P=t,v=e.apply(n,i)}function s(e){return P=e,y=setTimeout(d,t),k?n(e):v}function r(e){var i=e-w,n=e-P,a=t-i;return E?S(a,g-n):a}function u(e){var i=e-w,n=e-P;return void 0===w||i>=t||i<0||E&&n>=g}function d(){var e=_();return u(e)?c(e):void(y=setTimeout(d,r(e)))}function c(e){return y=void 0,I&&f?n(e):(f=b=void 0,v)}function p(){void 0!==y&&clearTimeout(y),P=0,f=w=b=y=void 0}function h(){return void 0===y?v:c(_())}function m(){var e=_(),i=u(e);if(f=arguments,b=this,w=e,i){if(void 0===y)return s(w);if(E)return y=setTimeout(d,t),n(w)}return void 0===y&&(y=setTimeout(d,t)),v}var f,b,g,v,y,w,P=0,k=!1,E=!1,I=!0;if("function"!=typeof e)throw new TypeError(o);return t=l(t)||0,a(i)&&(k=!!i.leading,E="maxWait"in i,g=E?T(l(i.maxWait)||0,t):g,I="trailing"in i?!!i.trailing:I),m.cancel=p,m.flush=h,m}function n(e,t,n){var s=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return a(n)&&(s="leading"in n?!!n.leading:s,r="trailing"in n?!!n.trailing:r),i(e,t,{leading:s,maxWait:t,trailing:r})}function a(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function s(e){return!!e&&"object"==typeof e}function r(e){return"symbol"==typeof e||s(e)&&w.call(e)==d}function l(e){if("number"==typeof e)return e;if(r(e))return u;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var i=h.test(e);return i||m.test(e)?f(e.slice(2),i?2:8):p.test(e)?u:+e}var o="Expected a function",u=NaN,d="[object Symbol]",c=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,m=/^0o[0-7]+$/i,f=parseInt,b="object"==typeof t&&t&&t.Object===Object&&t,g="object"==typeof self&&self&&self.Object===Object&&self,v=b||g||Function("return this")(),y=Object.prototype,w=y.toString,T=Math.max,S=Math.min,_=function(){return v.Date.now()};e.exports=n}).call(t,function(){return this}())},27:function(e,t){"use strict";function i(e){e.target.value=e.target.value.replace(/[^0-9]/g,"")}Object.defineProperty(t,"__esModule",{value:!0}),t.onInputKeyupNumber=i;t.Captains={range:[["17:00","21:00"]],interval:30,id:0},t.Sisal={range:[["17:00","21:30"]],interval:30,id:1},t.Conquistador={range:[["17:00","23:00"]],interval:15,id:2},t.Murales={range:[["17:00","21:00"]],interval:30,id:3},t.Trattoria={range:[["17:00","21:30"]],interval:30,id:6},t.maxWidth=1600,t.ROOT_URL_PRUE="http://localhost/reservations/reservations-rest.php",t.ROOT_URL_PROD="http://elconquistadorcancun.com/reservations-rest.php",t.MenuMurales=[{cat:"Cold Appetizers",items:[{title:"Marlin Salpicón",subtitle:"Shredded  llet of smoked marlin served with Xcatic chili, tomato, red onion, avocado and a coriander dressing. 125"},{title:"Salmon Gravlax Tiradito",subtitle:"Salmon in a 24-hour marinade, served over a mango and cucumber relish with a sweet mustard vinaigrette. 140"},{title:"Shrimp Symphony",subtitle:"A delicate and intriguing blend of  avors from land and sea make this shrimp cocktail a delight. 165"},{title:"Scallops",subtitle:"Whisky  ambéed scallops, served on an onion marmalade and fresh endive salad. 170"},{title:"Stffed Avocado",subtitle:"Avocado with a shrimp  lling, served with a red wine vinaigrette. 165"},{title:"Tuna Tiradito",subtitle:"Chili powder and hibiscus-crusted seared tuna with sweet potato chips. 225"},{title:"Tuna Tartare",subtitle:"Fresh tuna  llet marinated in lime juice with capers and mango, served with tuna wrapped in prosciutto and phyllo pastry with mango sauce and strawberry vinaigrette. 145"}]},{cat:"Hot Appetizers",items:[{title:"Crab Enchiladas",subtitle:"Crepes with a crabmeat  lling, served with tomato sauce and rice. 260"},{title:"Buttered Clams",subtitle:"Clams in a butter sauce with sautéed vegetables and a hint of caviar. 195 surcharge 120"},{title:"Shrimp Crisps",subtitle:"Crispy fried plantain slices served with sautéed diced shrimp, garlic, tomato and basil. 140"},{title:"Porcini Mushroom Crepe",subtitle:"Crepe with a porcini mushroom  lling, served with a sauce featuring the rich  avors of wild portobello and porcini mushrooms. 145"},{title:"Lobster Risotto",subtitle:"Arborio rice served with squash  owers and lobster slices. 245 surcharge 70"}]},{cat:"Soups",items:[{title:"Lobster Bisque",subtitle:"Cream of lobster soup, full of the  avors of the sea, served with a hint of cognac. 143"},{title:"Clam Chowder",subtitle:"New England-style cream of clam soup served in a freshly baked loaf to bring out the  avor of the clams. 145"},{title:"Seafood Soup",subtitle:"A hearty mix of seafood and vegetables in a broth with a hint of chili. 160"}]},{cat:"Salads",items:[{title:"Caesar Salad",subtitle:"Lettuce leaves coated with Caesar dressing, served with Parmesan cheese crisps. 118 With shrimp 165"},{title:"Murales Salad",subtitle:"Mixed lettuces drizzled with mango vinaigrette and served with fried calamari and litchis. 148"},{title:"Apple, Nut and Roquefort Cheese Salad",subtitle:"A tangy salad that blends the  avors of mixed lettuces, toasted nuts, apples and a hint of Roquefort cheese, drizzled with a balsamic vinegar glaze. 1485"}]},{cat:"Pastas",items:[{title:"Open Seafood Ravioli",subtitle:"Freshly made spinach pasta  lled with lobster, shrimp, scallop and squid and served with tomato sauce and a hint of Xtabentun liqueur. 245"},{title:"Murales Penne",subtitle:"Penne pasta with crabmeat pasta in a creamy three-cheese sauce. 296"},{title:"Gluten-Free Fettuccini",subtitle:"Gluten-free pasta sautéed with mushrooms, olive oil, onion, cream and grilled lobster. 367"}]},{cat:"Lobster",items:[{title:"Lobster Tail",subtitle:"12 oz lobster tail served with pilaf rice, herbed tomatoes and marinated grilled vegetables. 780"},{title:"Mixed Grill",subtitle:"Nature’s bounty from land and sea, lobster tail, salmon, shrimp and beef  llet served with steamed vegetables. Ideal for sharing (2 people). 1,310 "}]},{cat:"Shrimp",items:[{title:"Lime Shrimp",subtitle:"Shrimp cooked in lime and tequila sauce, served with rice and chili de árbol oil. 320"},{title:"Coconut Shrimp",subtitle:"Golden-fried shrimp served with creamy coconut sauce and tamarind sauce. 310"}]},{cat:"Meat & Poultry",items:[{title:"Angus Beef Fillet",subtitle:"Beef  llet with potato au gratin, parsley and wild mushroom goulash. 420"},{title:"Rib Eye",subtitle:"12 oz Rib eye served with potatoes au gratin and grilled vegetables. 450"},{title:"Rack of Lamb",subtitle:"Tender roast rack of lamb cooked with herbs and served with baked artichoke and mint sauce. 410"},{title:"Grilled Arrachera Steak",subtitle:"Grilled beef with a delightful red wine reduction, accompanied by rosemary potatoes. 305"},{title:"Kurobuta Pork Chops",subtitle:"Grilled pork chops served with Mediterranean quinoa and  g marmalade. 442"},{title:"Rock Cornish Game Hen",subtitle:"Rock Cornish Game Hen Rock Cornish game hen served on a bed of lentil and Portobello mushroom risotto with  ambéed  gs and asparagus. 340"}]},{cat:"Fish",items:[{title:"Tuna Steak",subtitle:"Grilled tuna steak served with mashed local pumpkin and a black Mayan sauce. 325"},{title:"Chilean Sea Bass",subtitle:"Sea bass  llet with garlic mashed potato, asparagus, caramelized shallots and pernod sauce. 4420"},{title:"Salmon",subtitle:"Grilled salmon with capers, served with an asparagus bundle, marinated lettuce and a pomegranate vinaigrette. 305"},{title:"Grouper",subtitle:"Grilled grouper served with rice and almond and pimiento sauce. 319"},{title:"Boquinete",subtitle:"Grilled boquinete or Spanish snapper served with steamed vegetables and garlic-dill butter. 320"}]}],t.CommentsTripAdvisor=[{comment:"I've dined here many times. I love the ambiance, the staff, and, of course, the cuisine. Keep up the good work!",name:"Anikasmama",image:"https://media-cdn.tripadvisor.com/media/photo-l/07/56/72/0e/anikasmama.jpg",link:"https://www.tripadvisor.com/ShowUserReviews-g150812-d2159424-r466252851-Los_Murales-Playa_del_Carmen_Yucatan_Peninsula.html#REVIEWS"},{comment:"The Los Murales is a Beautiful Restaurant with a Guitar player for your enjoyment and Flaming Desserts done right at your Table.",name:"JudySkibsted",image:"https://media-cdn.tripadvisor.com/media/photo-l/01/2e/70/55/avatar028.jpg",link:"https://www.tripadvisor.com/ShowUserReviews-g150812-d2159424-r464129887-Los_Murales-Playa_del_Carmen_Yucatan_Peninsula.html#REVIEWS"},{comment:"We had a nice dinner here while staying at the Haciendas. The food and service was terrific. I'd recommend the Mayan coffee to end your dinner.",name:"Nikki H",image:"https://media-cdn.tripadvisor.com/media/photo-l/03/12/e7/b0/nikki-h.jpg",link:"https://www.tripadvisor.com/ShowUserReviews-g150812-d2159424-r463804896-Los_Murales-Playa_del_Carmen_Yucatan_Peninsula.html#REVIEWS"}]},28:function(e,t){(function(t){function i(e,t,i){function a(t){var i=f,n=b;return f=b=void 0,P=t,v=e.apply(n,i)}function s(e){return P=e,y=setTimeout(d,t),k?a(e):v}function o(e){var i=e-_,n=e-P,a=t-i;return E?T(a,g-n):a}function u(e){var i=e-_,n=e-P;return void 0===_||i>=t||i<0||E&&n>=g}function d(){var e=S();return u(e)?c(e):void(y=setTimeout(d,o(e)))}function c(e){return y=void 0,I&&f?a(e):(f=b=void 0,v)}function p(){void 0!==y&&clearTimeout(y),P=0,f=_=b=y=void 0}function h(){return void 0===y?v:c(S())}function m(){var e=S(),i=u(e);if(f=arguments,b=this,_=e,i){if(void 0===y)return s(_);if(E)return y=setTimeout(d,t),a(_)}return void 0===y&&(y=setTimeout(d,t)),v}var f,b,g,v,y,_,P=0,k=!1,E=!1,I=!0;if("function"!=typeof e)throw new TypeError(l);return t=r(t)||0,n(i)&&(k=!!i.leading,E="maxWait"in i,g=E?w(r(i.maxWait)||0,t):g,I="trailing"in i?!!i.trailing:I),m.cancel=p,m.flush=h,m}function n(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==typeof e}function s(e){return"symbol"==typeof e||a(e)&&y.call(e)==u}function r(e){if("number"==typeof e)return e;if(s(e))return o;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var i=p.test(e);return i||h.test(e)?m(e.slice(2),i?2:8):c.test(e)?o:+e}var l="Expected a function",o=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,h=/^0o[0-7]+$/i,m=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,g=f||b||Function("return this")(),v=Object.prototype,y=v.toString,w=Math.max,T=Math.min,S=function(){return g.Date.now()};e.exports=i}).call(t,function(){return this}())},31:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),u=i(3),d=n(u),c=i(32),p=n(c),h=i(20),m=n(h),f=i(28),b=n(f),g=["fullscreenchange","msfullscreenchange","mozfullscreenchange","webkitfullscreenchange"],v=function(e){function t(e){a(this,t);var i=s(this,Object.getPrototypeOf(t).call(this,e));return i.state={currentIndex:e.startIndex,thumbsTranslate:0,offsetPercentage:0,galleryWidth:0,thumbnailsWrapperWidth:0,thumbnailsWrapperHeight:0,isFullscreen:!1,isPlaying:!1},e.lazyLoad&&(i._lazyLoaded=[]),i}return r(t,e),o(t,[{key:"componentWillReceiveProps",value:function(e){this.props.disableArrowKeys!==e.disableArrowKeys&&(e.disableArrowKeys?window.removeEventListener("keydown",this._handleKeyDown):window.addEventListener("keydown",this._handleKeyDown)),!e.lazyLoad||this.props.lazyLoad&&this.props.items===e.items||(this._lazyLoaded=[])}},{key:"componentDidUpdate",value:function(e,t){e.thumbnailPosition===this.props.thumbnailPosition&&e.showThumbnails===this.props.showThumbnails&&t.thumbnailsWrapperHeight===this.state.thumbnailsWrapperHeight&&t.thumbnailsWrapperWidth===this.state.thumbnailsWrapperWidth||this._handleResize(),t.currentIndex!==this.state.currentIndex&&(this.props.onSlide&&this.props.onSlide(this.state.currentIndex),this._updateThumbnailTranslate(t)),e.slideDuration!==this.props.slideDuration&&(this.slideToIndex=(0,m.default)(this._unthrottledSlideToIndex,this.props.slideDuration,{trailing:!1}))}},{key:"componentWillMount",value:function(){this._unthrottledSlideToIndex=this.slideToIndex.bind(this),this.slideToIndex=(0,m.default)(this._unthrottledSlideToIndex,this.props.slideDuration,{trailing:!1}),this._handleResize=this._handleResize.bind(this),this._debounceResize=(0,b.default)(this._handleResize,500),this._handleScreenChange=this._handleScreenChange.bind(this),this._handleKeyDown=this._handleKeyDown.bind(this),this._thumbnailDelay=300}},{key:"componentDidMount",value:function(){this._handleResize(),this.props.autoPlay&&this.play(),this.props.disableArrowKeys||window.addEventListener("keydown",this._handleKeyDown),window.addEventListener("resize",this._debounceResize),this._onScreenChangeEvent()}},{key:"componentWillUnmount",value:function(){this.props.disableArrowKeys||window.removeEventListener("keydown",this._handleKeyDown),this._debounceResize&&window.removeEventListener("resize",this._debounceResize),this._offScreenChangeEvent(),this._intervalId&&(window.clearInterval(this._intervalId),this._intervalId=null),this._resizeTimer&&window.clearTimeout(this._resizeTimer)}},{key:"play",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]||arguments[0];if(!this._intervalId){var i=this.props,n=i.slideInterval,a=i.slideDuration;this.setState({isPlaying:!0}),this._intervalId=window.setInterval(function(){e.state.hovering||(e.props.infinite||e._canSlideRight()?e.slideToIndex(e.state.currentIndex+1):e.pause())},Math.max(n,a)),this.props.onPlay&&t&&this.props.onPlay(this.state.currentIndex)}}},{key:"pause",value:function(){var e=arguments.length<=0||void 0===arguments[0]||arguments[0];this._intervalId&&(window.clearInterval(this._intervalId),this._intervalId=null,this.setState({isPlaying:!1}),this.props.onPause&&e&&this.props.onPause(this.state.currentIndex))}},{key:"setModalFullscreen",value:function(e){this.setState({modalFullscreen:e}),this.props.onScreenChange&&this.props.onScreenChange(e)}},{key:"fullScreen",value:function(){var e=this._imageGallery;this.props.useBrowserFullscreen?e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():this.setModalFullscreen(!0):this.setModalFullscreen(!0),this.setState({isFullscreen:!0})}},{key:"exitFullScreen",value:function(){this.state.isFullscreen&&(this.props.useBrowserFullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():this.setModalFullscreen(!1):this.setModalFullscreen(!1),this.setState({isFullscreen:!1}))}},{key:"slideToIndex",value:function(e,t){var i=this.state.currentIndex;t&&this._intervalId&&(this.pause(!1),this.play(!1));var n=this.props.items.length-1,a=e;e<0?a=n:e>n&&(a=0),this.setState({previousIndex:i,currentIndex:a,offsetPercentage:0,style:{transition:"all "+this.props.slideDuration+"ms ease-out"}})}},{key:"getCurrentIndex",value:function(){return this.state.currentIndex}},{key:"_handleScreenChange",value:function(){var e=document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement;this.props.onScreenChange&&this.props.onScreenChange(e),this.setState({isFullscreen:!!e})}},{key:"_onScreenChangeEvent",value:function(){var e=this;g.map(function(t){document.addEventListener(t,e._handleScreenChange)})}},{key:"_offScreenChangeEvent",value:function(){var e=this;g.map(function(t){document.removeEventListener(t,e._handleScreenChange)})}},{key:"_toggleFullScreen",value:function(){this.state.isFullscreen?this.exitFullScreen():this.fullScreen()}},{key:"_togglePlay",value:function(){this._intervalId?this.pause():this.play()}},{key:"_handleResize",value:function(){var e=this;this._resizeTimer=window.setTimeout(function(){e._imageGallery&&e.setState({galleryWidth:e._imageGallery.offsetWidth}),e._setThumbsTranslate(-e._getThumbsTranslate(e.state.currentIndex>0?1:0)*e.state.currentIndex),e._imageGallerySlideWrapper&&e.setState({gallerySlideWrapperHeight:e._imageGallerySlideWrapper.offsetHeight}),e._thumbnailsWrapper&&(e._isThumbnailHorizontal()?e.setState({thumbnailsWrapperHeight:e._thumbnailsWrapper.offsetHeight}):e.setState({thumbnailsWrapperWidth:e._thumbnailsWrapper.offsetWidth}))},500)}},{key:"_isThumbnailHorizontal",value:function(){var e=this.props.thumbnailPosition;return"left"===e||"right"===e}},{key:"_handleKeyDown",value:function(e){var t=37,i=39,n=parseInt(e.keyCode||e.which||0);switch(n){case t:this._canSlideLeft()&&!this._intervalId&&this._slideLeft();break;case i:this._canSlideRight()&&!this._intervalId&&this._slideRight()}}},{key:"_handleMouseOverThumbnails",value:function(e){var t=this;this.props.slideOnThumbnailHover&&(this.setState({hovering:!0}),this._thumbnailTimer&&(window.clearTimeout(this._thumbnailTimer),this._thumbnailTimer=null),this._thumbnailTimer=window.setTimeout(function(){t.slideToIndex(e)},this._thumbnailDelay))}},{key:"_handleMouseLeaveThumbnails",value:function(){this._thumbnailTimer&&(window.clearTimeout(this._thumbnailTimer),this._thumbnailTimer=null,this.props.autoPlay===!0&&this.play(!1)),this.setState({hovering:!1})}},{key:"_handleImageError",value:function(e){this.props.defaultImage&&e.target.src.indexOf(this.props.defaultImage)===-1&&(e.target.src=this.props.defaultImage)}},{key:"_handleOnSwiped",value:function(e,t,i,n){this.setState({isFlick:n})}},{key:"_shouldSlideOnSwipe",value:function(){var e=Math.abs(this.state.offsetPercentage)>30||this.state.isFlick;return e&&this.setState({isFlick:!1}),e}},{key:"_handleOnSwipedTo",value:function(e){var t=this.state.currentIndex;this._shouldSlideOnSwipe()&&(t+=e),e<0?this._canSlideLeft()||(t=this.state.currentIndex):this._canSlideRight()||(t=this.state.currentIndex),this._unthrottledSlideToIndex(t)}},{key:"_handleSwiping",value:function(e,t,i){var n=this.props.swipingTransitionDuration,a=this.state.galleryWidth,s=e*(i/a*100);Math.abs(s)>=100&&(s=100*e);var r={transition:"transform "+n+"ms ease-out"};this.setState({offsetPercentage:s,style:r})}},{key:"_canNavigate",value:function(){return this.props.items.length>=2}},{key:"_canSlideLeft",value:function(){return this.props.infinite||this.state.currentIndex>0}},{key:"_canSlideRight",value:function(){return this.props.infinite||this.state.currentIndex<this.props.items.length-1}},{key:"_updateThumbnailTranslate",value:function(e){if(0===this.state.currentIndex)this._setThumbsTranslate(0);else{var t=Math.abs(e.currentIndex-this.state.currentIndex),i=this._getThumbsTranslate(t);i>0&&(e.currentIndex<this.state.currentIndex?this._setThumbsTranslate(this.state.thumbsTranslate-i):e.currentIndex>this.state.currentIndex&&this._setThumbsTranslate(this.state.thumbsTranslate+i))}}},{key:"_setThumbsTranslate",value:function(e){this.setState({thumbsTranslate:e})}},{key:"_getThumbsTranslate",value:function(e){if(this.props.disableThumbnailScroll)return 0;var t=this.state,i=t.thumbnailsWrapperWidth,n=t.thumbnailsWrapperHeight,a=void 0;if(this._thumbnails){if(this._isThumbnailHorizontal()){if(this._thumbnails.scrollHeight<=n)return 0;a=this._thumbnails.scrollHeight-n}else{if(this._thumbnails.scrollWidth<=i)return 0;a=this._thumbnails.scrollWidth-i}var s=this._thumbnails.children.length,r=a/(s-1);return e*r}}},{key:"_getAlignmentClassName",value:function(e){var t=this.state.currentIndex,i="",n="left",a="center",s="right";switch(e){case t-1:i=" "+n;break;case t:i=" "+a;break;case t+1:i=" "+s}return this.props.items.length>=3&&this.props.infinite&&(0===e&&t===this.props.items.length-1?i=" "+s:e===this.props.items.length-1&&0===t&&(i=" "+n)),i}},{key:"_getTranslateXForTwoSlide",value:function(e){var t=this.state,i=t.currentIndex,n=t.offsetPercentage,a=t.previousIndex,s=-100*i,r=s+100*e+n;return n>0?this.direction="left":n<0&&(this.direction="right"),0===i&&1===e&&n>0?r=-100+n:1===i&&0===e&&n<0&&(r=100+n),i!==a?0===a&&0===e&&0===n&&"left"===this.direction?r=100:1===a&&1===e&&0===n&&"right"===this.direction&&(r=-100):0===i&&1===e&&0===n&&"left"===this.direction?r=-100:1===i&&0===e&&0===n&&"right"===this.direction&&(r=100),r}},{key:"_getThumbnailBarHeight",value:function(){return this._isThumbnailHorizontal()?{height:this.state.gallerySlideWrapperHeight}:{}}},{key:"_getSlideStyle",value:function(e){var t=this.state,i=t.currentIndex,n=t.offsetPercentage,a=this.props,s=a.infinite,r=a.items,l=-100*i,o=r.length-1,u=l+100*e+n,d=1;e===i?d=3:e===this.state.previousIndex?d=2:0!==e&&e!==o||(d=0),s&&r.length>2&&(0===i&&e===o?u=-100+n:i===o&&0===e&&(u=100+n)),s&&2===r.length&&(u=this._getTranslateXForTwoSlide(e));var c="translate3d("+u+"%, 0, 0)";return{WebkitTransform:c,MozTransform:c,msTransform:c,OTransform:c,transform:c,zIndex:d}}},{key:"_getThumbnailStyle",value:function(){var e=void 0;return e=this._isThumbnailHorizontal()?"translate3d(0, "+this.state.thumbsTranslate+"px, 0)":"translate3d("+this.state.thumbsTranslate+"px, 0, 0)",{WebkitTransform:e,MozTransform:e,msTransform:e,OTransform:e,transform:e}}},{key:"_slideLeft",value:function(e){this.slideToIndex(this.state.currentIndex-1,e)}},{key:"_slideRight",value:function(e){this.slideToIndex(this.state.currentIndex+1,e)}},{key:"_renderItem",value:function(e){var t=this.props.onImageError||this._handleImageError;return d.default.createElement("div",{className:"image-gallery-image"},d.default.createElement("img",{src:e.original,alt:e.originalAlt,srcSet:e.srcSet,sizes:e.sizes,onLoad:this.props.onImageLoad,onError:t.bind(this)}),e.description&&d.default.createElement("span",{className:"image-gallery-description"},e.description))}},{key:"render",value:function(){var e=this,t=this.state,i=t.currentIndex,n=t.isFullscreen,a=t.modalFullscreen,s=t.isPlaying,r=this._getThumbnailStyle(),o=this.props.thumbnailPosition,u=this._slideLeft.bind(this),c=this._slideRight.bind(this),h=[],m=[],f=[];this.props.items.map(function(t,n){var a=e._getAlignmentClassName(n),s=t.originalClass?" "+t.originalClass:"",r=t.thumbnailClass?" "+t.thumbnailClass:"",o=t.renderItem||e.props.renderItem||e._renderItem.bind(e),u=!e.props.lazyLoad||a||e._lazyLoaded[n];u&&e.props.lazyLoad&&(e._lazyLoaded[n]=!0);var c=d.default.createElement("div",{key:n,className:"image-gallery-slide"+a+s,style:l(e._getSlideStyle(n),e.state.style),onClick:e.props.onClick},u?o(t):d.default.createElement("div",{style:{height:"100%"}}));h.push(c);var p=e._handleImageError;e.props.onThumbnailError&&(p=e.props.onThumbnailError),e.props.showThumbnails&&m.push(d.default.createElement("a",{onMouseOver:e._handleMouseOverThumbnails.bind(e,n),onMouseLeave:e._handleMouseLeaveThumbnails.bind(e,n),key:n,role:"button","aria-pressed":i===n?"true":"false","aria-label":"Go to Slide "+(n+1),className:"image-gallery-thumbnail"+(i===n?" active":"")+r,onClick:function(t){return e.slideToIndex.call(e,n,t)}},d.default.createElement("img",{src:t.thumbnail,alt:t.thumbnailAlt,onError:p.bind(e)}),d.default.createElement("div",{className:"image-gallery-thumbnail-label"},t.thumbnailLabel))),e.props.showBullets&&f.push(d.default.createElement("button",{key:n,type:"button",className:"image-gallery-bullet "+(i===n?"active":""),onClick:function(t){return e.slideToIndex.call(e,n,t)},"aria-pressed":i===n?"true":"false","aria-label":"Go to Slide "+(n+1)}))});var b=d.default.createElement("div",{ref:function(t){return e._imageGallerySlideWrapper=t},className:"image-gallery-slide-wrapper "+o},this.props.renderCustomControls&&this.props.renderCustomControls(),this.props.showFullscreenButton&&this.props.renderFullscreenButton(this._toggleFullScreen.bind(this),n),this.props.showPlayButton&&this.props.renderPlayPauseButton(this._togglePlay.bind(this),s),this._canNavigate()?[this.props.showNav&&d.default.createElement("span",{key:"navigation"},this.props.renderLeftNav(u,!this._canSlideLeft()),this.props.renderRightNav(c,!this._canSlideRight())),this.props.disableSwipe?d.default.createElement("div",{className:"image-gallery-slides",key:"slides"},h):d.default.createElement(p.default,{className:"image-gallery-swipe",key:"swipeable",delta:1,onSwipingLeft:this._handleSwiping.bind(this,-1),onSwipingRight:this._handleSwiping.bind(this,1),onSwiped:this._handleOnSwiped.bind(this),onSwipedLeft:this._handleOnSwipedTo.bind(this,1),onSwipedRight:this._handleOnSwipedTo.bind(this,-1)},d.default.createElement("div",{className:"image-gallery-slides"},h))]:d.default.createElement("div",{className:"image-gallery-slides"},h),this.props.showBullets&&d.default.createElement("div",{className:"image-gallery-bullets"},d.default.createElement("ul",{className:"image-gallery-bullets-container",role:"navigation","aria-label":"Bullet Navigation"},f)),this.props.showIndex&&d.default.createElement("div",{className:"image-gallery-index"},d.default.createElement("span",{className:"image-gallery-index-current"},this.state.currentIndex+1),d.default.createElement("span",{className:"image-gallery-index-separator"},this.props.indexSeparator),d.default.createElement("span",{className:"image-gallery-index-total"},this.props.items.length)));return d.default.createElement("section",{ref:function(t){return e._imageGallery=t},className:"image-gallery"+(a?" fullscreen-modal":""),"aria-live":"polite"},d.default.createElement("div",{className:"image-gallery-content"+(n?" fullscreen":"")},("bottom"===o||"right"===o)&&b,this.props.showThumbnails&&d.default.createElement("div",{className:"image-gallery-thumbnails-wrapper "+o,style:this._getThumbnailBarHeight()},d.default.createElement("div",{className:"image-gallery-thumbnails",ref:function(t){return e._thumbnailsWrapper=t}},d.default.createElement("div",{ref:function(t){return e._thumbnails=t},className:"image-gallery-thumbnails-container",style:r,role:"navigation","aria-label":"Thumbnail Navigation"},m))),("top"===o||"left"===o)&&b))}}]),t}(d.default.Component);v.propTypes={items:d.default.PropTypes.array.isRequired,showNav:d.default.PropTypes.bool,autoPlay:d.default.PropTypes.bool,lazyLoad:d.default.PropTypes.bool,infinite:d.default.PropTypes.bool,showIndex:d.default.PropTypes.bool,showBullets:d.default.PropTypes.bool,showThumbnails:d.default.PropTypes.bool,showPlayButton:d.default.PropTypes.bool,showFullscreenButton:d.default.PropTypes.bool,slideOnThumbnailHover:d.default.PropTypes.bool,disableThumbnailScroll:d.default.PropTypes.bool,disableArrowKeys:d.default.PropTypes.bool,disableSwipe:d.default.PropTypes.bool,useBrowserFullscreen:d.default.PropTypes.bool,defaultImage:d.default.PropTypes.string,indexSeparator:d.default.PropTypes.string,thumbnailPosition:d.default.PropTypes.string,startIndex:d.default.PropTypes.number,slideDuration:d.default.PropTypes.number,slideInterval:d.default.PropTypes.number,swipingTransitionDuration:d.default.PropTypes.number,onSlide:d.default.PropTypes.func,onScreenChange:d.default.PropTypes.func,onPause:d.default.PropTypes.func,onPlay:d.default.PropTypes.func,onClick:d.default.PropTypes.func,onImageLoad:d.default.PropTypes.func,onImageError:d.default.PropTypes.func,onThumbnailError:d.default.PropTypes.func,renderCustomControls:d.default.PropTypes.func,renderLeftNav:d.default.PropTypes.func,renderRightNav:d.default.PropTypes.func,renderPlayPauseButton:d.default.PropTypes.func,
renderFullscreenButton:d.default.PropTypes.func,renderItem:d.default.PropTypes.func},v.defaultProps={items:[],showNav:!0,autoPlay:!1,lazyLoad:!1,infinite:!0,showIndex:!1,showBullets:!1,showThumbnails:!0,showPlayButton:!0,showFullscreenButton:!0,slideOnThumbnailHover:!1,disableThumbnailScroll:!1,disableArrowKeys:!1,disableSwipe:!1,useBrowserFullscreen:!0,indexSeparator:" / ",thumbnailPosition:"bottom",startIndex:0,slideDuration:450,swipingTransitionDuration:0,slideInterval:3e3,renderLeftNav:function(e,t){return d.default.createElement("button",{type:"button",className:"image-gallery-left-nav",disabled:t,onClick:e,"aria-label":"Previous Slide"})},renderRightNav:function(e,t){return d.default.createElement("button",{type:"button",className:"image-gallery-right-nav",disabled:t,onClick:e,"aria-label":"Next Slide"})},renderPlayPauseButton:function(e,t){return d.default.createElement("button",{type:"button",className:"image-gallery-play-button"+(t?" active":""),onClick:e,"aria-label":"Play or Pause Slideshow"})},renderFullscreenButton:function(e,t){return d.default.createElement("button",{type:"button",className:"image-gallery-fullscreen-button"+(t?" active":""),onClick:e,"aria-label":"Open Fullscreen"})}},t.default=v},32:function(e,t,i){"use strict";function n(){return{x:null,y:null,swiping:!1,start:0}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},s=i(3),r=s.createClass({displayName:"Swipeable",propTypes:{onSwiped:s.PropTypes.func,onSwiping:s.PropTypes.func,onSwipingUp:s.PropTypes.func,onSwipingRight:s.PropTypes.func,onSwipingDown:s.PropTypes.func,onSwipingLeft:s.PropTypes.func,onSwipedUp:s.PropTypes.func,onSwipedRight:s.PropTypes.func,onSwipedDown:s.PropTypes.func,onSwipedLeft:s.PropTypes.func,onTap:s.PropTypes.func,flickThreshold:s.PropTypes.number,delta:s.PropTypes.number,preventDefaultTouchmoveEvent:s.PropTypes.bool,stopPropagation:s.PropTypes.bool,nodeName:s.PropTypes.string,trackMouse:s.PropTypes.bool,children:s.PropTypes.node},getDefaultProps:function(){return{flickThreshold:.6,delta:10,preventDefaultTouchmoveEvent:!0,stopPropagation:!1,nodeName:"div"}},componentWillMount:function(){this.swipeable=n()},calculatePos:function(e){var t=void 0,i=void 0;e.changedTouches?(t=e.changedTouches[0].clientX,i=e.changedTouches[0].clientY):(t=e.clientX,i=e.clientY);var n=this.swipeable.x-t,a=this.swipeable.y-i,s=Math.abs(n),r=Math.abs(a),l=Date.now()-this.swipeable.start,o=Math.sqrt(s*s+r*r)/l;return{deltaX:n,deltaY:a,absX:s,absY:r,velocity:o}},eventStart:function(e){if("function"==typeof this.props.onMouseDown&&this.props.onMouseDown(e),("mousedown"!==e.type||this.props.trackMouse)&&!(e.touches&&e.touches.length>1)){var t=e.touches;t||(t=[{clientX:e.clientX,clientY:e.clientY}]),this.props.stopPropagation&&e.stopPropagation(),this.swipeable={start:Date.now(),x:t[0].clientX,y:t[0].clientY,swiping:!1}}},eventMove:function(e){if("function"==typeof this.props.onMouseMove&&this.props.onMouseMove(e),("mousemove"!==e.type||this.props.trackMouse)&&this.swipeable.x&&this.swipeable.y&&!(e.touches&&e.touches.length>1)){var t=!1,i=this.calculatePos(e);i.absX<this.props.delta&&i.absY<this.props.delta||(this.props.stopPropagation&&e.stopPropagation(),this.props.onSwiping&&this.props.onSwiping(e,i.deltaX,i.deltaY,i.absX,i.absY,i.velocity),i.absX>i.absY?i.deltaX>0?(this.props.onSwipingLeft||this.props.onSwipedLeft)&&(this.props.onSwipingLeft&&this.props.onSwipingLeft(e,i.absX),t=!0):(this.props.onSwipingRight||this.props.onSwipedRight)&&(this.props.onSwipingRight&&this.props.onSwipingRight(e,i.absX),t=!0):i.deltaY>0?(this.props.onSwipingUp||this.props.onSwipedUp)&&(this.props.onSwipingUp&&this.props.onSwipingUp(e,i.absY),t=!0):(this.props.onSwipingDown||this.props.onSwipedDown)&&(this.props.onSwipingDown&&this.props.onSwipingDown(e,i.absY),t=!0),this.swipeable.swiping=!0,t&&this.props.preventDefaultTouchmoveEvent&&e.preventDefault())}},eventEnd:function(e){if("function"==typeof this.props.onMouseUp&&this.props.onMouseUp(e),"mouseup"!==e.type||this.props.trackMouse){if(this.swipeable.swiping){var t=this.calculatePos(e);this.props.stopPropagation&&e.stopPropagation();var i=t.velocity>this.props.flickThreshold;this.props.onSwiped&&this.props.onSwiped(e,t.deltaX,t.deltaY,i,t.velocity),t.absX>t.absY?t.deltaX>0?this.props.onSwipedLeft&&this.props.onSwipedLeft(e,t.deltaX,i):this.props.onSwipedRight&&this.props.onSwipedRight(e,t.deltaX,i):t.deltaY>0?this.props.onSwipedUp&&this.props.onSwipedUp(e,t.deltaY,i):this.props.onSwipedDown&&this.props.onSwipedDown(e,t.deltaY,i)}else this.props.onTap&&this.props.onTap(e);this.swipeable=n()}},render:function(){var e=a({},this.props,{onTouchStart:this.eventStart,onTouchMove:this.eventMove,onTouchEnd:this.eventEnd,onMouseDown:this.eventStart,onMouseMove:this.eventMove,onMouseUp:this.eventEnd});return delete e.onSwiped,delete e.onSwiping,delete e.onSwipingUp,delete e.onSwipingRight,delete e.onSwipingDown,delete e.onSwipingLeft,delete e.onSwipedUp,delete e.onSwipedRight,delete e.onSwipedDown,delete e.onSwipedLeft,delete e.onTap,delete e.flickThreshold,delete e.delta,delete e.preventDefaultTouchmoveEvent,delete e.stopPropagation,delete e.nodeName,delete e.children,delete e.trackMouse,s.createElement(this.props.nodeName,e,this.props.children)}});e.exports=r},291:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=i(3),u=n(o),d=function(e){var t=e.data;return u.default.createElement("div",{className:"commentscomponent-wrap-item col s12 m6"},u.default.createElement("div",{className:"testimonial-comment"},u.default.createElement("div",{className:"user-comment"},t.comment),u.default.createElement("div",{className:"user"},u.default.createElement("a",{target:"_blank",href:t.link},t.name))),u.default.createElement("div",{className:"testimonial-meta"},u.default.createElement("div",{className:"image"},u.default.createElement("img",{src:t.image}))))},c=function(e){function t(e){a(this,t);var i=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.renderItems=i.renderItems.bind(i),i}return r(t,e),l(t,[{key:"renderItems",value:function(){return this.props.items.map(function(e,t){return u.default.createElement(d,{key:t,data:e})})}},{key:"render",value:function(){return u.default.createElement("div",{className:"commentscomponent "},u.default.createElement("div",{className:"commentscomponent-wrap row"},this.renderItems()))}}]),t}(o.Component);t.default=c}});