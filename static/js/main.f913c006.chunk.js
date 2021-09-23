(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(t,e,n){t.exports={item:"ImageGalleryItem_item__8Uia7",image:"ImageGalleryItem_image__7l7lY"}},12:function(t,e,n){t.exports={overlay:"Modal_overlay__1Q6hU",modal:"Modal_modal__HFk5g"}},14:function(t,e,n){t.exports={button:"Button_button__xw7x2"}},16:function(t,e,n){t.exports={gallery:"ImageGallery_gallery__3DRaY"}},21:function(t,e,n){},22:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(21),n(3)),s=n(4),l=n(6),u=n(5),h=(n(22),n(9)),d=n.n(h),p=n(8),b=n(1),f=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={filter:""},t.onChangeInput=function(e){var n=e.currentTarget.value.trim();t.setState({filter:n})},t.onSubmitForm=function(e){e.preventDefault();var n=t.state.filter;if(""===n)return Object(p.b)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441");t.props.onSubmit(n)},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)("header",{className:d.a.searchbar,children:Object(b.jsxs)("form",{className:d.a.form,onSubmit:this.onSubmitForm,children:[Object(b.jsx)("button",{type:"submit",className:d.a.button,children:Object(b.jsx)("span",{className:d.a.label,children:"Search"})}),Object(b.jsx)("input",{className:d.a.input,type:"text",placeholder:"Search images and photos",onChange:this.onChangeInput,value:this.state.inputValue})]})})}}]),n}(a.Component),j=f,m=n(13),g=n(11),v=n.n(g),O=function(t){var e=t.url,n=t.name,a=t.onClick;return Object(b.jsx)("li",{className:v.a.item,onClick:a,children:Object(b.jsx)("img",{src:e,alt:n,className:v.a.image,loading:"lazy"})})},y=n(14),x=n.n(y),_=function(t){var e=t.onClick;return Object(b.jsx)("button",{type:"button",onClick:e,className:x.a.button,children:"Load more"})},w=n(15),S=n.n(w),k=n(12),C=n.n(k),M=document.querySelector("#modal-root"),N=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).handleKeyDown=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var t=this.props,e=t.src,n=t.alt,a=t.onClose;return Object(r.createPortal)(Object(b.jsxs)("div",{className:C.a.overlay,onClick:this.handleBackdropClick,children:[Object(b.jsx)("div",{className:C.a.modal,children:Object(b.jsx)("img",{src:e,alt:n,width:"1024",height:"768"})}),Object(b.jsx)("button",{type:"button",onClick:a,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]}),M)}}]),n}(a.Component),I=(n(44),n(16)),P=n.n(I),B="22441039-e3c3a22ef42346706974d6393",D="https://pixabay.com/api/",L={fetchPhotoes:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=new URLSearchParams({q:t,page:e,key:B,image_type:"photo",orientation:"horizontal",per_page:12});return fetch("".concat(D,"?").concat(n.toString())).then((function(t){return t.ok?t.json():Promise.rejected(new Error("Oops, something went wrong!"))}))}},F=L,U=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={page:null,photoes:[],totalHits:null,status:"idle",filter:"",index:null,showModal:!0},t.onLoadMore=function(){t.setState((function(t){return{page:t.page+1}}))},t.openModal=function(){t.setState({showModal:!0})},t.closeModal=function(){t.setState({showModal:!1,index:null})},t.scroll=function(){window.scrollTo({top:1e3,behavior:"smooth"})},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({filter:this.props.filter,page:1,index:null,showModal:!1}),this.getPhotoes()}},{key:"componentDidUpdate",value:function(t,e){var n=t.filter,a=this.props.filter,o=e.page,r=this.state.page;n!==a&&(this.setState({page:1,filter:a,status:"pending",photoes:[]}),this.getPhotoes()),o<r&&(this.setState({status:"pending"}),this.getPhotoes())}},{key:"getPhotoes",value:function(){var t=this,e=this.state,n=e.page,a=e.filter;F.fetchPhotoes(a,n).then((function(e){var a=e.hits,o=e.totalHits;t.setState({status:"resolved",totalHits:o}),n>1&&t.setState((function(t){return{photoes:[].concat(Object(m.a)(t.photoes),Object(m.a)(a))}})),1===n&&t.setState({photoes:a})})).catch((function(){return t.setState({status:"rejected"})}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.photoes,a=e.totalHits,o=e.status,r=e.index,c=e.showModal,i=Number(a)!==n.length;return"idle"===o?Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."})}):"rejected"===o?p.b.error("\u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"):"resolved"===o?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ul",{className:P.a.gallery,children:n.map((function(e,n){var a=e.webformatURL,o=e.tags;return Object(b.jsx)(O,{url:a,name:o,onClick:function(){t.setState({index:n}),t.openModal()}},n)}))}),i&&Object(b.jsx)(_,{onClick:this.onLoadMore}),c&&Object(b.jsx)(N,{src:n[r].largeImageURL,alt:n[r].tags,onClick:this.openModal,onClose:this.closeModal})]}):"pending"===o?Object(b.jsx)(S.a,{type:"Circles",color:"#00BFFF",height:80,width:80}):void 0}}]),n}(a.Component),A=U,E=(n(45),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={filter:""},t.onSearchBtn=function(e){t.setState({filter:e})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(j,{onSubmit:this.onSearchBtn}),t.length>0&&Object(b.jsx)(A,{filter:t}),Object(b.jsx)(p.a,{})]})}}]),n}(a.Component)),H=E;c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={searchbar:"Searchbar_searchbar__3uqMl",form:"Searchbar_form__29rVg",button:"Searchbar_button__2sY-i",label:"Searchbar_label__23tvq",input:"Searchbar_input__2yfIB"}}},[[46,1,2]]]);
//# sourceMappingURL=main.f913c006.chunk.js.map