(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77d733ef"],{"00ef":function(e,t,s){"use strict";s("66d4")},"09f2":function(e,t,s){},"117a":function(e,t,s){"use strict";s("3563")},3563:function(e,t,s){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,s){var i=s("1d80"),n=s("5899"),a="["+n+"]",c=RegExp("^"+a+a+"*"),r=RegExp(a+a+"*$"),u=function(e){return function(t){var s=String(i(t));return 1&e&&(s=s.replace(c,"")),2&e&&(s=s.replace(r,"")),s}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5bba":function(e,t,s){"use strict";s("99af");var i=s("7a23"),n={class:"task"},a={class:"main"},c={class:"header"},r={class:"id"},u={class:"menu"},d={key:0,class:"menu-options dropdown"},o={class:"title"},l={class:"footer"},b={class:"deadline"},f=Object(i["i"])("div",{class:"text"},"Deadline",-1),O={class:"view"},p=Object(i["i"])("span",{class:"material-icons"}," visibility ",-1),j={class:"status"};function h(e,t,s,h,v,g){var y=Object(i["y"])("router-link"),C=Object(i["y"])("WavePath");return Object(i["r"])(),Object(i["e"])("div",n,[Object(i["i"])("div",a,[Object(i["i"])("div",c,[Object(i["i"])("div",r,"Issue : "+Object(i["A"])(s.issueNumber),1),Object(i["i"])("div",{class:g.getIssueStatusClass},Object(i["A"])(g.getIssueStatus),3),Object(i["i"])("div",u,[Object(i["i"])("div",{class:"material-icons btn",onClick:t[1]||(t[1]=function(){return g.toggleMenu&&g.toggleMenu.apply(g,arguments)}),ref:"menu"}," more_vert ",512),v.isMenuOpen?(Object(i["r"])(),Object(i["e"])("div",d,[(Object(i["r"])(!0),Object(i["e"])(i["a"],null,Object(i["x"])(g.getMenuOptions,(function(e,t){return Object(i["r"])(),Object(i["e"])("a",{href:"#",key:t,onClick:function(t){return g.updateStatus(e)}},Object(i["A"])(e),9,["onClick"])})),128))])):Object(i["f"])("",!0)])]),Object(i["i"])("div",o,Object(i["A"])(g.getIssueTitle),1),Object(i["i"])("div",l,[Object(i["i"])("div",b,[f,Object(i["i"])("div",{class:["date","danger"===this.deadlineType?"danger":""]},Object(i["A"])(g.parsedDate),3)]),Object(i["i"])("div",O,[Object(i["i"])(y,{to:{name:"ViewIssue",params:{issue_id:s.issueNumber,index:s.index,type:s.type}}},{default:Object(i["F"])((function(){return[p]})),_:1},8,["to"])])])]),Object(i["i"])("div",j,[Object(i["i"])(C,{fill:g.svgFillColor,class:"hundred"===this.deadlineStatus?"remove-svg":""},null,8,["fill","class"]),Object(i["i"])("div",{class:["progress","".concat(this.deadlineStatus," ").concat(this.deadlineType)]},null,2)])])}s("a9e3"),s("fb6a"),s("9129");var v=s("c1df"),g=s.n(v),y=(s("cb29"),{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"});function C(e,t,s,n,a,c){return Object(i["r"])(),Object(i["e"])("svg",y,[Object(i["i"])("path",{fill:s.fill,"fill-opacity":"1",d:c.getRandomWavePath},null,8,["fill","d"])])}var m={name:"WavePath",props:["fill"],computed:{getRandomWavePath:function(){var e="M0,32L34.3,32C68.6,32,137,32,206,74.7C274.3,117,343,203,411,224C480,245,549,203,617,165.3C685.7,128,754,96,823,112C891.4,128,960,192,1029,181.3C1097.1,171,1166,85,1234,53.3C1302.9,21,1371,43,1406,53.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z",t="M0,128L21.8,128C43.6,128,87,128,131,144C174.5,160,218,192,262,176C305.5,160,349,96,393,106.7C436.4,117,480,203,524,208C567.3,213,611,139,655,106.7C698.2,75,742,85,785,112C829.1,139,873,181,916,176C960,171,1004,117,1047,106.7C1090.9,96,1135,128,1178,144C1221.8,160,1265,160,1309,144C1352.7,128,1396,96,1418,80L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z",s=[e,t];return s[Math.round(Math.random())]}}};m.render=C;var I=m,S={name:"IssueCard",data:function(){return{deadlineStatus:"",deadlineType:"success",isMenuOpen:!1}},components:{WavePath:I},props:{issueNumber:Number,title:String,deadline:String,startDate:String,issueStatus:String,index:Number,type:String},methods:{toggleMenu:function(){var e=this,t=function t(s){e.catchOutsideClick(s,e.$refs.menu)&&(window.removeEventListener("click",t),e.isMenuOpen=!1)};window.addEventListener("click",t),this.isMenuOpen=!this.isMenuOpen},updateStatus:function(e){"Edit"===e?this.$router.push({name:"ViewIssue",params:{issue_id:this.issueNumber,index:this.index,type:this.type}}):this.$store.dispatch("updateIssueStatus",{status:e,id:this.issueNumber})},catchOutsideClick:function(e,t){return t!==e.target&&(this.isMenuOpen&&e.target,!0)}},computed:{parsedDate:function(){var e=this.deadline,t=g()(e,"YYYY-MM-DD");return t.isValid()?t.toLocaleString().substring(0,16):"No deadline"},svgFillColor:function(){var e="#54F00A",t="#F0CB0A",s="#FF2300";switch(this.deadlineType){case"danger":return s;case"warning":return t;default:return e}},getIssueTitle:function(){return this.title.length>80?"".concat(this.title.substring(0,77),"..."):this.title},getIssueStatus:function(){return this.issueStatus[0].toUpperCase()+this.issueStatus.slice(1).toLowerCase()},getIssueStatusClass:function(){return this.issueStatus.toLowerCase()},getMenuOptions:function(){var e=["Edit"];return""!==this.issueStatus&&"TODO"===this.issueStatus?e.push("Doing","Done"):""!==this.issueStatus&&"INPROGRESS"===this.issueStatus?e.push("Todo","Done"):e.push("Todo","Doing"),e}},created:function(){if(void 0!==this.deadline&&void 0!==this.startDate){var e=g()(this.startDate),t=g()(this.deadline,"YYYY-MM-DD"),s=t.diff(g()(),"days"),i=t.diff(e,"days"),n=0!==s||0!==i?s/i*100:0,a=100-n;!Number.isNaN(a)&&t.isValid()&&"DONE"!==this.issueStatus?a>=100?(this.deadlineStatus="hundred",this.deadlineType="danger"):a>80?(this.deadlineStatus="eighty",this.deadlineType="danger"):a>60?(this.deadlineStatus="sixty",this.deadlineType="warning"):a>50?(this.deadlineStatus="fifty",this.deadlineType="warning"):this.deadlineStatus=a>20?"twenty":"ten":this.deadlineStatus="hundred"}else this.deadlineStatus="hundred"}};s("00ef");S.render=h;t["a"]=S},"66d4":function(e,t,s){},"6a2a":function(e,t,s){"use strict";s("c4e1")},"81d5":function(e,t,s){"use strict";var i=s("7b0b"),n=s("23cb"),a=s("50c4");e.exports=function(e){var t=i(this),s=a(t.length),c=arguments.length,r=n(c>1?arguments[1]:void 0,s),u=c>2?arguments[2]:void 0,d=void 0===u?s:n(u,s);while(d>r)t[r++]=e;return t}},9129:function(e,t,s){var i=s("23e7");i({target:"Number",stat:!0},{isNaN:function(e){return e!=e}})},"99af":function(e,t,s){"use strict";var i=s("23e7"),n=s("d039"),a=s("e8b5"),c=s("861d"),r=s("7b0b"),u=s("50c4"),d=s("8418"),o=s("65f0"),l=s("1dde"),b=s("b622"),f=s("2d00"),O=b("isConcatSpreadable"),p=9007199254740991,j="Maximum allowed index exceeded",h=f>=51||!n((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),v=l("concat"),g=function(e){if(!c(e))return!1;var t=e[O];return void 0!==t?!!t:a(e)},y=!h||!v;i({target:"Array",proto:!0,forced:y},{concat:function(e){var t,s,i,n,a,c=r(this),l=o(c,0),b=0;for(t=-1,i=arguments.length;t<i;t++)if(a=-1===t?c:arguments[t],g(a)){if(n=u(a.length),b+n>p)throw TypeError(j);for(s=0;s<n;s++,b++)s in a&&d(l,b,a[s])}else{if(b>=p)throw TypeError(j);d(l,b++,a)}return l.length=b,l}})},a9e3:function(e,t,s){"use strict";var i=s("83ab"),n=s("da84"),a=s("94ca"),c=s("6eeb"),r=s("5135"),u=s("c6b6"),d=s("7156"),o=s("c04e"),l=s("d039"),b=s("7c73"),f=s("241c").f,O=s("06cf").f,p=s("9bf2").f,j=s("58a8").trim,h="Number",v=n[h],g=v.prototype,y=u(b(g))==h,C=function(e){var t,s,i,n,a,c,r,u,d=o(e,!1);if("string"==typeof d&&d.length>2)if(d=j(d),t=d.charCodeAt(0),43===t||45===t){if(s=d.charCodeAt(2),88===s||120===s)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+d}for(a=d.slice(2),c=a.length,r=0;r<c;r++)if(u=a.charCodeAt(r),u<48||u>n)return NaN;return parseInt(a,i)}return+d};if(a(h,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var m,I=function(e){var t=arguments.length<1?0:e,s=this;return s instanceof I&&(y?l((function(){g.valueOf.call(s)})):u(s)!=h)?d(new v(C(t)),s,I):C(t)},S=i?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;S.length>N;N++)r(v,m=S[N])&&!r(I,m)&&p(I,m,O(v,m));I.prototype=g,g.constructor=I,c(n,h,I)}},b538:function(e,t,s){"use strict";s("09f2")},bb51:function(e,t,s){"use strict";s.r(t);var i=s("7a23"),n={class:"page-container"},a={key:0,class:"home"},c={class:"home-header"},r={class:"left"},u=Object(i["i"])("div",{class:"title","data-cy":"home-title"}," Welcome to your personal issue tracker ",-1),d=Object(i["i"])("div",{class:"subtitle"}," Organize your tasks and never miss a deadline. ",-1),o={class:"cta"},l={class:"right"},b={class:"task-count-grid-container"},f={key:0,class:"next-tasks"},O=Object(i["i"])("div",{class:"section-title"},"Approaching deadline",-1),p={class:"section-items"},j={key:1,class:"next-tasks"},h=Object(i["i"])("div",{class:"section-title"},"Recent issue",-1),v={class:"section-items"},g={key:2,class:"next-tasks"},y=Object(i["i"])("div",{class:"section-title"},"Issue status",-1),C={class:"section-items"},m={key:1,class:"loading-container"};function I(e,t,s,I,S,N){var T=Object(i["y"])("Navbar"),k=Object(i["y"])("Topbar"),w=Object(i["y"])("IssueCount"),x=Object(i["y"])("IssueCard"),A=Object(i["y"])("IssueStatusInfoCard"),E=Object(i["y"])("Loading");return Object(i["r"])(),Object(i["e"])("div",null,[Object(i["i"])(T,{page:"home"}),Object(i["i"])("div",n,[Object(i["i"])(k),e.$store.state.isLoading?Object(i["f"])("",!0):(Object(i["r"])(),Object(i["e"])("div",a,[Object(i["i"])("div",c,[Object(i["i"])("div",r,[u,d,Object(i["i"])("div",o,[Object(i["i"])("button",{class:"btn-primary",onClick:t[1]||(t[1]=function(t){return e.$router.push("/add-issue")})}," Add new issue "),Object(i["i"])("button",{class:"btn-primary",onClick:t[2]||(t[2]=function(t){return e.$router.push("/board")})}," View all issues ")])]),Object(i["i"])("div",l,[Object(i["i"])("div",b,[Object(i["i"])(w,{cardType:"total-card",count:e.$store.getters.getTaskCount.total,type:"Total"},null,8,["count"]),Object(i["i"])(w,{cardType:"count-card",count:e.$store.getters.getTaskCount.done,type:"Done"},null,8,["count"]),Object(i["i"])(w,{cardType:"count-card",count:e.$store.getters.getTaskCount.todo,type:"Todo"},null,8,["count"]),Object(i["i"])(w,{cardType:"count-card",count:e.$store.getters.getTaskCount.doing,type:"Doing"},null,8,["count"])])])]),e.$store.getters.hasDeadlineIssues?(Object(i["r"])(),Object(i["e"])("div",f,[O,Object(i["i"])("div",p,[(Object(i["r"])(!0),Object(i["e"])(i["a"],null,Object(i["x"])(e.$store.state.deadlineIssues,(function(e,t){return Object(i["r"])(),Object(i["e"])("div",{key:e.id},[Object(i["i"])(x,{issueNumber:e.id,title:e.title,deadline:e.end_date,startDate:e.created_at,issueStatus:e.status,index:t,type:"DEADLINE"},null,8,["issueNumber","title","deadline","startDate","issueStatus","index"])])})),128))])])):Object(i["f"])("",!0),e.$store.getters.hasRecentIssues?(Object(i["r"])(),Object(i["e"])("div",j,[h,Object(i["i"])("div",v,[(Object(i["r"])(!0),Object(i["e"])(i["a"],null,Object(i["x"])(e.$store.state.recentIssues,(function(e,t){return Object(i["r"])(),Object(i["e"])("div",{key:e.id},[Object(i["i"])(x,{issueNumber:e.id,title:e.title,deadline:e.end_date,startDate:e.created_at,issueStatus:e.status,index:t,type:"RECENT"},null,8,["issueNumber","title","deadline","startDate","issueStatus","index"])])})),128))])])):Object(i["f"])("",!0),e.$store.getters.hasEmptyActionItems?(Object(i["r"])(),Object(i["e"])("div",g,[y,Object(i["i"])("div",C,[Object(i["i"])(A,{cardType:"deadline"}),Object(i["i"])(A,{cardType:"recent"})])])):Object(i["f"])("",!0)])),e.$store.state.isLoading?(Object(i["r"])(),Object(i["e"])("div",m,[Object(i["i"])(E)])):Object(i["f"])("",!0)])])}var S=s("d178"),N=s("ddc0"),T={class:"count"},k={class:"type"};function w(e,t,s,n,a,c){return Object(i["r"])(),Object(i["e"])("div",{class:["task-count","total-card"==s.cardType?"total":"task-count"]},[Object(i["i"])("div",null,[Object(i["i"])("div",T,Object(i["A"])(s.count),1),Object(i["i"])("div",k,Object(i["A"])(s.type),1)])],2)}s("a9e3");var x={name:"IssueCount",props:{cardType:String,count:Number,type:String}};s("117a");x.render=w;var A=x,E=s("5bba"),M={class:"task update"},D={class:"info"},L=Object(i["i"])("div",{class:"icon"},[Object(i["i"])("span",{class:"material-icons"}," thumb_up ")],-1),$={class:"meesage"};function _(e,t,s,n,a,c){return Object(i["r"])(),Object(i["e"])("div",M,[Object(i["i"])("div",D,[L,Object(i["i"])("div",$,Object(i["A"])(c.getMessage),1)])])}var F={name:"IssueStatusInfoCard",props:["cardType"],computed:{getMessage:function(){return"deadline"===this.cardType?"No deadline issues.":"No issues recently updated."}}};s("6a2a");F.render=_;var R=F,Y=s("3a5e"),V={name:"Home",components:{Navbar:S["a"],Topbar:N["a"],IssueCount:A,IssueCard:E["a"],IssueStatusInfoCard:R,Loading:Y["a"]},mounted:function(){this.$store.getters.isUserInfoLoaded||this.$store.dispatch("loadUserInfo")}};s("b538");V.render=I;t["default"]=V},c4e1:function(e,t,s){},cb29:function(e,t,s){var i=s("23e7"),n=s("81d5"),a=s("44d2");i({target:"Array",proto:!0},{fill:n}),a("fill")}}]);
//# sourceMappingURL=chunk-77d733ef.93c4ae7e.js.map