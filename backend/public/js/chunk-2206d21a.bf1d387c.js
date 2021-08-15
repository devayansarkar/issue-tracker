(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2206d21a"],{"1b10":function(e,t,i){"use strict";i.r(t);i("a4d3"),i("e01a");var a=i("7a23"),s={class:"page-container"},n={key:0,class:"add-issue"},o={class:"page-type"},r={class:"issue"},d={class:"input-container"},c=Object(a["g"])("label",{for:"title",class:"form-field-label"},"Title",-1),l={class:"input-container"},u=Object(a["g"])("label",{for:"description",class:"form-field-label"},"Description",-1),p={class:"issue-info"},b={class:"input-container"},g=Object(a["g"])("label",{for:"date",class:"form-field-label"},"End date",-1),f={class:"input-container"},y=Object(a["g"])("label",{for:"lane",class:"form-field-label"},"Add to lane",-1),h=Object(a["g"])("option",{value:"TODO"},"Todo",-1),m=Object(a["g"])("option",{value:"INPROGRESS"},"Doing",-1),O=Object(a["g"])("option",{value:"DONE"},"Done",-1),j={class:"input-container"},v=Object(a["g"])("label",{for:"category",class:"form-field-label"},"Category",-1),E={class:"issue-cta"},I={key:1,class:"loading-container"};function k(e,t,i,k,$,D){var w=Object(a["w"])("Navbar"),T=Object(a["w"])("Topbar"),S=Object(a["w"])("Loading");return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])(w,{page:D.getCurrentPage},null,8,["page"]),Object(a["g"])("div",s,[Object(a["g"])(T),e.$store.state.isLoading?Object(a["e"])("",!0):(Object(a["p"])(),Object(a["d"])("div",n,[e.$store.state.message.text?(Object(a["p"])(),Object(a["d"])("div",{key:0,class:["info-message",e.$store.state.message.type]},Object(a["y"])(e.$store.state.message.text),3)):Object(a["e"])("",!0),Object(a["g"])("div",o,Object(a["y"])(D.getPageTitle),1),Object(a["g"])("div",r,[Object(a["g"])("form",{onSubmit:t[11]||(t[11]=Object(a["F"])((function(){return D.saveIssue&&D.saveIssue.apply(D,arguments)}),["prevent"]))},[Object(a["g"])("div",d,[c,Object(a["E"])(Object(a["g"])("input",{onClick:t[1]||(t[1]=function(){return D.makeEditable&&D.makeEditable.apply(D,arguments)}),readonly:$.isReadonly,id:"title",type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return $.title=e}),class:"form-field",placeholder:"Enter issue title"},null,8,["readonly"]),[[a["B"],$.title]])]),Object(a["g"])("div",l,[u,Object(a["E"])(Object(a["g"])("textarea",{readonly:$.isReadonly,onClick:t[3]||(t[3]=function(){return D.makeEditable&&D.makeEditable.apply(D,arguments)}),id:"description","onUpdate:modelValue":t[4]||(t[4]=function(e){return $.description=e}),type:"description",placeholder:"Add your description here",cols:"30",rows:"8"},null,8,["readonly"]),[[a["B"],$.description]])]),Object(a["g"])("div",p,[Object(a["g"])("div",b,[g,Object(a["E"])(Object(a["g"])("input",{min:D.getCurrentDate,readonly:$.isReadonly,onClick:t[5]||(t[5]=function(){return D.makeEditable&&D.makeEditable.apply(D,arguments)}),id:"date",type:"date","onUpdate:modelValue":t[6]||(t[6]=function(e){return $.endDate=e}),class:"form-field",placeholder:"Enter issue date"},null,8,["min","readonly"]),[[a["B"],$.endDate]])]),Object(a["g"])("div",f,[y,Object(a["E"])(Object(a["g"])("select",{readonly:$.isReadonly,onClick:t[7]||(t[7]=function(){return D.makeEditable&&D.makeEditable.apply(D,arguments)}),id:"lane","onUpdate:modelValue":t[8]||(t[8]=function(e){return $.lane=e}),placeholder:"Add your lane",name:"lane",class:$.isReadonly?"read-only-select":""},[h,m,O],10,["readonly"]),[[a["A"],$.lane]])]),Object(a["g"])("div",j,[v,Object(a["E"])(Object(a["g"])("input",{readonly:$.isReadonly,onClick:t[9]||(t[9]=function(){return D.makeEditable&&D.makeEditable.apply(D,arguments)}),id:"category",type:"text","onUpdate:modelValue":t[10]||(t[10]=function(e){return $.category=e}),class:"form-field",placeholder:"Enter issue category"},null,8,["readonly"]),[[a["B"],$.category]])])]),Object(a["g"])("div",E,[$.isReadonly?Object(a["e"])("",!0):(Object(a["p"])(),Object(a["d"])("button",{key:0,disabled:D.isFormIncomplete,class:"btn btn-primary"},Object(a["y"])(D.getButtonName),9,["disabled"]))])],32)])])),e.$store.state.isLoading?(Object(a["p"])(),Object(a["d"])("div",I,[Object(a["g"])(S)])):Object(a["e"])("",!0)])])}i("b0c0"),i("d3b7"),i("25f0");var $=i("d178"),D=i("ddc0"),w=i("3a5e"),T=i("c1df"),S=i.n(T),R={name:"AddNewIssue",components:{Navbar:$["a"],Topbar:D["a"],Loading:w["a"]},data:function(){return{id:0,title:"",description:"",endDate:"",lane:"TODO",category:"",pageType:this.$route.name,isReadonly:"ViewIssue"===this.$route.name}},computed:{isFormIncomplete:function(){return""===this.title||""===this.description},getButtonName:function(){return"AddIssue"===this.pageType?"Save":"Update"},getPageTitle:function(){if("AddIssue"===this.pageType)return"Add issue";if("ViewIssue"===this.pageType){var e=this.$route.params&&this.$route.params.issue_id;return"Viewing issue : ".concat(e)}if("UpdateIssue"===this.pageType){var t=this.$route.params&&this.$route.params.issue_id;return"Updating issue : ".concat(t)}return"Update issue"},getCurrentDate:function(){return S()().format("YYYY-MM-DD").toString()},getCurrentPage:function(){return"AddIssue"===this.pageType||"UpdateIssue"===this.pageType?"addIssue":"viewIssue"}},methods:{saveIssue:function(){var e=S()(this.endDate,"YYYY-MM-DD").format("DD/MM/YYYY");"UpdateIssue"===this.pageType?this.$store.dispatch("updateIssue",{id:this.id,payload:{title:this.title,description:this.description,category:this.category,end_date:e,status:this.lane}}):this.$store.dispatch("addNewIssue",{title:this.title,description:this.description,category:this.category,end_date:e,status:this.lane})},makeEditable:function(){this.isReadonly=!1,"AddIssue"!==this.pageType&&(this.pageType="UpdateIssue")}},created:function(){var e=this;if(this.$route.params&&this.$route.params.issue_id){var t=this.$route.params;if(void 0===t.index||void 0===t.type)this.$store.dispatch("getIssue",{id:t.issue_id});else{var i=this.$store.getters.getIssue({type:t.type,index:t.index});this.$store.commit("getIssueSuccess",i),this.title=i.title,this.description=i.description,this.endDate=i.end_date,this.lane=i.status,this.category=i.category,this.id=i.id}}this.$store.watch((function(e){return e.issue}),(function(t){""!==t.title&&(e.title=t.title,e.description=t.description,e.endDate=t.end_date,e.lane=t.status,e.category=t.category,e.id=t.id)}))}};i("b294");R.render=k;t["default"]=R},"25f0":function(e,t,i){"use strict";var a=i("6eeb"),s=i("825a"),n=i("d039"),o=i("ad6d"),r="toString",d=RegExp.prototype,c=d[r],l=n((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),u=c.name!=r;(l||u)&&a(RegExp.prototype,r,(function(){var e=s(this),t=String(e.source),i=e.flags,a=String(void 0===i&&e instanceof RegExp&&!("flags"in d)?o.call(e):i);return"/"+t+"/"+a}),{unsafe:!0})},ab52:function(e,t,i){},b294:function(e,t,i){"use strict";i("ab52")},e01a:function(e,t,i){"use strict";var a=i("23e7"),s=i("83ab"),n=i("da84"),o=i("5135"),r=i("861d"),d=i("9bf2").f,c=i("e893"),l=n.Symbol;if(s&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var u={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new l(e):void 0===e?l():l(e);return""===e&&(u[t]=!0),t};c(p,l);var b=p.prototype=l.prototype;b.constructor=p;var g=b.toString,f="Symbol(test)"==String(l("test")),y=/^Symbol\((.*)\)[^)]+$/;d(b,"description",{configurable:!0,get:function(){var e=r(this)?this.valueOf():this,t=g.call(e);if(o(u,e))return"";var i=f?t.slice(7,-1):t.replace(y,"$1");return""===i?void 0:i}}),a({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=chunk-2206d21a.bf1d387c.js.map