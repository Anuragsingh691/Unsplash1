(this["webpackJsonpgallery-app"]=this["webpackJsonpgallery-app"]||[]).push([[0],{18:function(e,a,t){e.exports=t(43)},23:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),l=t.n(c),o=(t(23),t(2)),s=t(14),i=t(15),u=t(17),m=t(16),d=t(3),h=t.n(d),g=(t(41),t(42),function(e){var a=e.gallery,t=e.loadMore,n=e.launchModal,c=e.selectedImage,l=e.searchedQuery;return console.log("gallery = ",a),r.a.createElement("div",{className:"content"},r.a.createElement("section",{className:"grid"},a.length?a.map((function(e,a){return r.a.createElement("div",{key:e.id,className:"item item-".concat(Math.ceil(e.height/e.width))},r.a.createElement("img",{src:e.urls.small,alt:e.description,"data-toggle":"modal","data-target":"#selected-img-modal",onClick:function(){return n(a)}}))})):r.a.createElement("div",{className:"error card text-danger mb-3 mx-auto",style:{maxWidth:"18rem"}},r.a.createElement("div",{className:"card-body bg-pink"},""===l?r.a.createElement("p",{className:"card-text"},"Your entry is not valid. Please try again."):r.a.createElement("p",{className:"card-text"},"An error has occured or this app has reached its rate limit allowed by ",r.a.createElement("a",{href:"https://unsplash.com/documentation",target:"_blank",rel:"noopener noreferrer"},"Unsplash"),". Please try again in a few minutes.")))),r.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:t},"Load more..."),r.a.createElement("div",{className:"modal fade",id:"selected-img-modal",tabIndex:"-1",role:"dialog","aria-labelledby":"selected-img-modal-Label","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-lg",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:c.src,alt:c.description,className:"mx-auto d-block img-fluid high-res-img"})),r.a.createElement("hr",null),r.a.createElement("p",null,c.description),r.a.createElement("p",null,"Photo by ",r.a.createElement("a",{href:c.page+"?utm_source=find-inspiration",target:"_blank",rel:"noopener noreferrer"},c.username)," on ",r.a.createElement("a",{href:"https://unsplash.com/?utm_source=find-inspiration`",target:"_blank",rel:"noopener noreferrer"},"Unsplash")))))))}),p=function(e){var a=e.fetchInitialImages,t=e.handleChange,n=e.handleSubmit,c=e.currentQuery;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"navbar-brand",onClick:a,style:{cursor:"pointer"}},"Find Inspiration"),r.a.createElement("form",{className:"form-inline my-2 my-lg-0 ml-auto",onSubmit:n},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search","aria-label":"Search",value:c,onChange:t,autoFocus:!0}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))},y=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).ROOT="https://api.unsplash.com/",n.KEY="?client_id=Ec1n2AKEb00jiprb4C_6LFncc57yZHxst8TYXNPvp7s",n.PERPAGE="&per_page=30",n.fetchInitialImages=function(){n.setState({searchedQuery:"Curated Collection"}),h.a.get("".concat(n.ROOT,"photos").concat(n.KEY).concat(n.PERPAGE,"&page=1")).then((function(e){var a=e.data;console.log("results = ",a),n.setState((function(){return{gallery:Object(o.a)(a)}}))})).catch((function(e){return console.log(e)}))},n.launchModal=function(e){n.setState((function(a){return{selectedImage:{description:a.gallery[e].description,src:a.gallery[e].urls.regular,username:a.gallery[e].user.username,page:a.gallery[e].user.links.html}}}))},n.loadMore=function(){n.setState((function(e){return{page:e.page+1}}),(function(){h.a.get("".concat(n.ROOT,"search/photos").concat(n.KEY,"&query=").concat(n.state.searchedQuery).concat(n.PERPAGE,"&page=").concat(n.state.page)).then((function(e){var a=e.data.results;console.log("results = ",a),n.setState((function(e){return{gallery:[].concat(Object(o.a)(e.gallery),Object(o.a)(a))}}))})).catch((function(e){return console.log(e)}))}))},n.handleChange=function(e){n.setState({currentQuery:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),console.log("currentQuery: ",n.state.currentQuery),n.setState((function(e){return{searchedQuery:e.currentQuery}})),h.a.get("".concat(n.ROOT,"search/photos").concat(n.KEY,"&query=").concat(n.state.currentQuery).concat(n.PERPAGE)).then((function(e){var a=e.data.results;n.setState({gallery:Object(o.a)(a),currentQuery:""})})).catch((function(e){return console.log(e)}))},n.state={gallery:[],currentQuery:"",searchedQuery:"",page:1,selectedImage:{description:"",src:"",username:"",page:""}},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchInitialImages()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{fetchInitialImages:this.fetchInitialImages,handleChange:this.handleChange,handleSubmit:this.handleSubmit,currentQuery:this.state.currentQuery}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center"},this.state.searchedQuery),r.a.createElement(g,{gallery:this.state.gallery,loadMore:this.loadMore,launchModal:this.launchModal,selectedImage:this.state.selectedImage,searchedQuery:this.state.searchedQuery})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.a1281749.chunk.js.map