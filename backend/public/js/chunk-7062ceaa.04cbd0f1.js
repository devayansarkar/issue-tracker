(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7062ceaa"],{"117a":function(t,e,s){"use strict";s("3563")},2087:function(t,e,s){"use strict";s("377c")},3563:function(t,e,s){},"377c":function(t,e,s){},"40a3":function(t,e,s){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var n=s("1d80"),a=s("5899"),i="["+a+"]",c=RegExp("^"+i+i+"*"),r=RegExp(i+i+"*$"),u=function(t){return function(e){var s=String(n(e));return 1&t&&(s=s.replace(c,"")),2&t&&(s=s.replace(r,"")),s}};t.exports={start:u(1),end:u(2),trim:u(3)}},"5bba":function(t,e,s){"use strict";s("99af");var n=s("7a23"),a={class:"task"},i={class:"main"},c={class:"header"},r={class:"id"},u={class:"menu"},d={key:0,class:"menu-options dropdown"},o={class:"title"},l={class:"footer"},b={class:"deadline"},g=Object(n["g"])("div",{class:"text"},"Deadline",-1),p={class:"view"},f=Object(n["g"])("span",{class:"material-icons"}," visibility ",-1),O={class:"status"};function v(t,e,s,v,j,h){var y=Object(n["w"])("router-link"),C=Object(n["w"])("WavePath");return Object(n["p"])(),Object(n["d"])("div",a,[Object(n["g"])("div",i,[Object(n["g"])("div",c,[Object(n["g"])("div",r,"Issue no: "+Object(n["y"])(s.issueNumber),1),Object(n["g"])("div",{class:h.getIssueStatusClass},Object(n["y"])(h.getIssueStatus),3),Object(n["g"])("div",u,[Object(n["g"])("div",{class:"material-icons btn",onClick:e[1]||(e[1]=function(){return h.toggleMenu&&h.toggleMenu.apply(h,arguments)}),ref:"menu"}," more_vert ",512),j.isMenuOpen?(Object(n["p"])(),Object(n["d"])("div",d,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(h.getMenuOptions,(function(t,e){return Object(n["p"])(),Object(n["d"])("a",{href:"#",key:e,onClick:function(e){return h.updateStatus(t)}},Object(n["y"])(t),9,["onClick"])})),128))])):Object(n["e"])("",!0)])]),Object(n["g"])("div",o,Object(n["y"])(h.getIssueTitle),1),Object(n["g"])("div",l,[Object(n["g"])("div",b,[g,Object(n["g"])("div",{class:["date","danger"===this.deadlineType?"danger":""]},Object(n["y"])(h.parsedDate),3)]),Object(n["g"])("div",p,[Object(n["g"])(y,{to:{name:"ViewIssue",params:{issue_id:s.issueNumber,index:s.index,type:s.type}}},{default:Object(n["D"])((function(){return[f]})),_:1},8,["to"])])])]),Object(n["g"])("div",O,[Object(n["g"])(C,{fill:h.svgFillColor,class:"hundred"===this.deadlineStatus?"remove-svg":""},null,8,["fill","class"]),Object(n["g"])("div",{class:["progress","".concat(this.deadlineStatus," ").concat(this.deadlineType)]},null,2)])])}s("a9e3"),s("fb6a"),s("9129");var j=s("c1df"),h=s.n(j),y=(s("cb29"),{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"});function C(t,e,s,a,i,c){return Object(n["p"])(),Object(n["d"])("svg",y,[Object(n["g"])("path",{fill:s.fill,"fill-opacity":"1",d:c.getRandomWavePath},null,8,["fill","d"])])}var m={name:"WavePath",props:["fill"],computed:{getRandomWavePath:function(){var t="M0,32L34.3,32C68.6,32,137,32,206,74.7C274.3,117,343,203,411,224C480,245,549,203,617,165.3C685.7,128,754,96,823,112C891.4,128,960,192,1029,181.3C1097.1,171,1166,85,1234,53.3C1302.9,21,1371,43,1406,53.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z",e="M0,128L21.8,128C43.6,128,87,128,131,144C174.5,160,218,192,262,176C305.5,160,349,96,393,106.7C436.4,117,480,203,524,208C567.3,213,611,139,655,106.7C698.2,75,742,85,785,112C829.1,139,873,181,916,176C960,171,1004,117,1047,106.7C1090.9,96,1135,128,1178,144C1221.8,160,1265,160,1309,144C1352.7,128,1396,96,1418,80L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z",s=[t,e];return s[Math.round(Math.random())]}}};m.render=C;var S=m,I={name:"IssueCard",data:function(){return{deadlineStatus:"",deadlineType:"success",isMenuOpen:!1}},components:{WavePath:S},props:{issueNumber:Number,title:String,deadline:String,startDate:String,issueStatus:String,index:Number,type:String},methods:{toggleMenu:function(){var t=this,e=function e(s){t.catchOutsideClick(s,t.$refs.menu)&&(window.removeEventListener("click",e),t.isMenuOpen=!1)};window.addEventListener("click",e),this.isMenuOpen=!this.isMenuOpen},updateStatus:function(t){this.$store.dispatch("updateIssueStatus",{status:t,id:this.issueNumber})},catchOutsideClick:function(t,e){return e!==t.target&&(this.isMenuOpen&&t.target,!0)}},computed:{parsedDate:function(){var t=this.deadline,e=h()(t,"YYYY-MM-DD");return e.isValid()?e.toLocaleString().substring(0,16):"No deadline"},svgFillColor:function(){var t="#54F00A",e="#F0CB0A",s="#FF2300";switch(this.deadlineType){case"danger":return s;case"warning":return e;default:return t}},getIssueTitle:function(){return this.title.length>80?"".concat(this.title.substring(0,77),"..."):this.title},getIssueStatus:function(){return this.issueStatus[0].toUpperCase()+this.issueStatus.slice(1).toLowerCase()},getIssueStatusClass:function(){return this.issueStatus.toLowerCase()},getMenuOptions:function(){var t=["Edit"];return""!==this.issueStatus&&"TODO"===this.issueStatus?t.push("Doing","Done"):""!==this.issueStatus&&"INPROGRESS"===this.issueStatus?t.push("Todo","Done"):t.push("Todo","Doing"),t}},created:function(){if(void 0!==this.deadline&&void 0!==this.startDate){var t=h()(this.startDate),e=h()(this.deadline,"YYYY-MM-DD"),s=e.diff(h()(),"days"),n=e.diff(t,"days"),a=0!==s||0!==n?s/n*100:0,i=100-a;!Number.isNaN(i)&&e.isValid()&&"DONE"!==this.issueStatus?i>=100?(this.deadlineStatus="hundred",this.deadlineType="danger"):i>80?(this.deadlineStatus="eighty",this.deadlineType="danger"):i>60?(this.deadlineStatus="sixty",this.deadlineType="warning"):i>50?(this.deadlineStatus="fifty",this.deadlineType="warning"):this.deadlineStatus=i>20?"twenty":"ten":this.deadlineStatus="hundred"}else this.deadlineStatus="hundred"}};s("2087");I.render=v;e["a"]=I},"6a2a":function(t,e,s){"use strict";s("c4e1")},7156:function(t,e,s){var n=s("861d"),a=s("d2bb");t.exports=function(t,e,s){var i,c;return a&&"function"==typeof(i=e.constructor)&&i!==s&&n(c=i.prototype)&&c!==s.prototype&&a(t,c),t}},"727d":function(t,e,s){"use strict";s("40a3")},"81d5":function(t,e,s){"use strict";var n=s("7b0b"),a=s("23cb"),i=s("50c4");t.exports=function(t){var e=n(this),s=i(e.length),c=arguments.length,r=a(c>1?arguments[1]:void 0,s),u=c>2?arguments[2]:void 0,d=void 0===u?s:a(u,s);while(d>r)e[r++]=t;return e}},9129:function(t,e,s){var n=s("23e7");n({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},"99af":function(t,e,s){"use strict";var n=s("23e7"),a=s("d039"),i=s("e8b5"),c=s("861d"),r=s("7b0b"),u=s("50c4"),d=s("8418"),o=s("65f0"),l=s("1dde"),b=s("b622"),g=s("2d00"),p=b("isConcatSpreadable"),f=9007199254740991,O="Maximum allowed index exceeded",v=g>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),j=l("concat"),h=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},y=!v||!j;n({target:"Array",proto:!0,forced:y},{concat:function(t){var e,s,n,a,i,c=r(this),l=o(c,0),b=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?c:arguments[e],h(i)){if(a=u(i.length),b+a>f)throw TypeError(O);for(s=0;s<a;s++,b++)s in i&&d(l,b,i[s])}else{if(b>=f)throw TypeError(O);d(l,b++,i)}return l.length=b,l}})},a9e3:function(t,e,s){"use strict";var n=s("83ab"),a=s("da84"),i=s("94ca"),c=s("6eeb"),r=s("5135"),u=s("c6b6"),d=s("7156"),o=s("c04e"),l=s("d039"),b=s("7c73"),g=s("241c").f,p=s("06cf").f,f=s("9bf2").f,O=s("58a8").trim,v="Number",j=a[v],h=j.prototype,y=u(b(h))==v,C=function(t){var e,s,n,a,i,c,r,u,d=o(t,!1);if("string"==typeof d&&d.length>2)if(d=O(d),e=d.charCodeAt(0),43===e||45===e){if(s=d.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+d}for(i=d.slice(2),c=i.length,r=0;r<c;r++)if(u=i.charCodeAt(r),u<48||u>a)return NaN;return parseInt(i,n)}return+d};if(i(v,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var m,S=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof S&&(y?l((function(){h.valueOf.call(s)})):u(s)!=v)?d(new j(C(e)),s,S):C(e)},I=n?g(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;I.length>N;N++)r(j,m=I[N])&&!r(S,m)&&f(S,m,p(j,m));S.prototype=h,h.constructor=S,c(a,v,S)}},bb51:function(t,e,s){"use strict";s.r(e);var n=s("7a23"),a={class:"page-container"},i={key:0,class:"home"},c={class:"home-header"},r={class:"left"},u=Object(n["g"])("div",{class:"title"},"Welcome to your personal issue tracker",-1),d=Object(n["g"])("div",{class:"subtitle"}," Organize your tasks and never miss a deadline. ",-1),o={class:"cta"},l={class:"right"},b={class:"task-count-grid-container"},g={key:0,class:"next-tasks"},p=Object(n["g"])("div",{class:"section-title"},"Approaching deadline",-1),f={class:"section-items"},O={key:1,class:"next-tasks"},v=Object(n["g"])("div",{class:"section-title"},"Recent issue",-1),j={class:"section-items"},h={key:2,class:"next-tasks"},y=Object(n["g"])("div",{class:"section-title"},"Issue status",-1),C={class:"section-items"},m={key:1,class:"loading-container"};function S(t,e,s,S,I,N){var w=Object(n["w"])("Navbar"),T=Object(n["w"])("Topbar"),k=Object(n["w"])("IssueCount"),M=Object(n["w"])("IssueCard"),D=Object(n["w"])("IssueStatusInfoCard"),E=Object(n["w"])("Loading");return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])(w,{page:"home"}),Object(n["g"])("div",a,[Object(n["g"])(T),t.$store.state.isLoading?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("div",i,[Object(n["g"])("div",c,[Object(n["g"])("div",r,[u,d,Object(n["g"])("div",o,[Object(n["g"])("button",{class:"btn-primary",onClick:e[1]||(e[1]=function(e){return t.$router.push("/add-issue")})}," Add new issue "),Object(n["g"])("button",{class:"btn-primary",onClick:e[2]||(e[2]=function(e){return t.$router.push("/board")})}," View all issues ")])]),Object(n["g"])("div",l,[Object(n["g"])("div",b,[Object(n["g"])(k,{cardType:"total-card",count:t.$store.getters.getTaskCount.total,type:"Total"},null,8,["count"]),Object(n["g"])(k,{cardType:"count-card",count:t.$store.getters.getTaskCount.done,type:"Done"},null,8,["count"]),Object(n["g"])(k,{cardType:"count-card",count:t.$store.getters.getTaskCount.todo,type:"Todo"},null,8,["count"]),Object(n["g"])(k,{cardType:"count-card",count:t.$store.getters.getTaskCount.doing,type:"Doing"},null,8,["count"])])])]),t.$store.getters.hasDeadlineIssues?(Object(n["p"])(),Object(n["d"])("div",g,[p,Object(n["g"])("div",f,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.$store.state.deadlineIssues,(function(t,e){return Object(n["p"])(),Object(n["d"])("div",{key:t.id},[Object(n["g"])(M,{issueNumber:t.id,title:t.title,deadline:t.end_date,startDate:t.created_at,issueStatus:t.status,index:e,type:"DEADLINE"},null,8,["issueNumber","title","deadline","startDate","issueStatus","index"])])})),128))])])):Object(n["e"])("",!0),t.$store.getters.hasRecentIssues?(Object(n["p"])(),Object(n["d"])("div",O,[v,Object(n["g"])("div",j,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.$store.state.recentIssues,(function(t,e){return Object(n["p"])(),Object(n["d"])("div",{key:t.id},[Object(n["g"])(M,{issueNumber:t.id,title:t.title,deadline:t.end_date,startDate:t.created_at,issueStatus:t.status,index:e,type:"RECENT"},null,8,["issueNumber","title","deadline","startDate","issueStatus","index"])])})),128))])])):Object(n["e"])("",!0),t.$store.getters.hasEmptyActionItems?(Object(n["p"])(),Object(n["d"])("div",h,[y,Object(n["g"])("div",C,[Object(n["g"])(D,{cardType:"deadline"}),Object(n["g"])(D,{cardType:"recent"})])])):Object(n["e"])("",!0)])),t.$store.state.isLoading?(Object(n["p"])(),Object(n["d"])("div",m,[Object(n["g"])(E)])):Object(n["e"])("",!0)])])}var I=s("d178"),N=s("ddc0"),w={class:"count"},T={class:"type"};function k(t,e,s,a,i,c){return Object(n["p"])(),Object(n["d"])("div",{class:["task-count","total-card"==s.cardType?"total":"task-count"]},[Object(n["g"])("div",null,[Object(n["g"])("div",w,Object(n["y"])(s.count),1),Object(n["g"])("div",T,Object(n["y"])(s.type),1)])],2)}s("a9e3");var M={name:"IssueCount",props:{cardType:String,count:Number,type:String}};s("117a");M.render=k;var D=M,E=s("5bba"),x={class:"task update"},L={class:"info"},A=Object(n["g"])("div",{class:"icon"},[Object(n["g"])("span",{class:"material-icons"}," thumb_up ")],-1),$={class:"meesage"};function _(t,e,s,a,i,c){return Object(n["p"])(),Object(n["d"])("div",x,[Object(n["g"])("div",L,[A,Object(n["g"])("div",$,Object(n["y"])(c.getMessage),1)])])}var F={name:"IssueStatusInfoCard",props:["cardType"],computed:{getMessage:function(){return"deadline"===this.cardType?"No deadline issues.":"No issues recently updated."}}};s("6a2a");F.render=_;var R=F,Y=s("3a5e"),P={name:"Home",components:{Navbar:I["a"],Topbar:N["a"],IssueCount:D,IssueCard:E["a"],IssueStatusInfoCard:R,Loading:Y["a"]},mounted:function(){this.$store.getters.isUserInfoLoaded||this.$store.dispatch("loadUserInfo")}};s("727d");P.render=S;e["default"]=P},c4e1:function(t,e,s){},cb29:function(t,e,s){var n=s("23e7"),a=s("81d5"),i=s("44d2");n({target:"Array",proto:!0},{fill:a}),i("fill")},fb6a:function(t,e,s){"use strict";var n=s("23e7"),a=s("861d"),i=s("e8b5"),c=s("23cb"),r=s("50c4"),u=s("fc6a"),d=s("8418"),o=s("b622"),l=s("1dde"),b=l("slice"),g=o("species"),p=[].slice,f=Math.max;n({target:"Array",proto:!0,forced:!b},{slice:function(t,e){var s,n,o,l=u(this),b=r(l.length),O=c(t,b),v=c(void 0===e?b:e,b);if(i(l)&&(s=l.constructor,"function"!=typeof s||s!==Array&&!i(s.prototype)?a(s)&&(s=s[g],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return p.call(l,O,v);for(n=new(void 0===s?Array:s)(f(v-O,0)),o=0;O<v;O++,o++)O in l&&d(n,o,l[O]);return n.length=o,n}})}}]);
//# sourceMappingURL=chunk-7062ceaa.04cbd0f1.js.map