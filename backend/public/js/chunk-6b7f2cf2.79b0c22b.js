(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b7f2cf2"],{"0951":function(e,t,s){"use strict";s("f228")},"09b2":function(e,t,s){"use strict";s.r(t);var a=s("7a23"),i={class:"page-container"},n=Object(a["h"])("div",{class:"board-title"},"Board",-1),c={key:0},r={class:"mobile"},d={class:"mobile-container"},u=Object(a["h"])("div",{class:"lane-selector"},"Now showing issues in :",-1),l={class:"status-group"},o={class:"lane"},b={class:"lane-header"},O={class:"lane-title"},h={class:"lane-items"},f={key:0,class:"lane-no-item"},v={class:"desktop"},j={class:"lane-container"},p={class:"lane"},g={class:"lane-header"},m=Object(a["h"])("div",{class:"lane-title"},"TODO",-1),C={class:"lane-items"},N={key:0,class:"lane-no-item"},y={class:"lane"},I=Object(a["h"])("div",{class:"lane-header"},[Object(a["h"])("div",{class:"lane-title"},"DOING")],-1),k={class:"lane-items"},S={key:0,class:"lane-no-item"},D={class:"lane"},w=Object(a["h"])("div",{class:"lane-header"},[Object(a["h"])("div",{class:"lane-title"},"DONE")],-1),L={class:"lane-items"},x={key:0,class:"lane-no-item"},T={key:1,class:"loading-container"};function E(e,t,s,E,M,A){var q=Object(a["x"])("Navbar"),_=Object(a["x"])("Topbar"),F=Object(a["x"])("IssueCard"),$=Object(a["x"])("Loading");return Object(a["q"])(),Object(a["d"])("div",null,[Object(a["h"])(q,{page:"board"}),Object(a["h"])("div",i,[Object(a["h"])(_),n,e.$store.state.isLoading?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("div",c,[Object(a["h"])("div",r,[Object(a["h"])("div",d,[u,Object(a["h"])("div",l,[Object(a["h"])("div",{class:["status","TODO"===M.task?"status-active":""],onClick:t[1]||(t[1]=function(e){return A.updateActiveIssueFilter("TODO")})}," Todo ",2),Object(a["h"])("div",{class:["status","DOING"===M.task?"status-active":""],onClick:t[2]||(t[2]=function(e){return A.updateActiveIssueFilter("DOING")})}," Doing ",2),Object(a["h"])("div",{class:["status","DONE"===M.task?"status-active":""],onClick:t[3]||(t[3]=function(e){return A.updateActiveIssueFilter("DONE")})}," Done ",2)]),Object(a["h"])("div",o,[Object(a["h"])("div",b,[Object(a["h"])("div",O,Object(a["z"])(M.task),1),"TODO"===M.task?(Object(a["q"])(),Object(a["d"])("button",{key:0,class:"btn-primary-small",onClick:t[4]||(t[4]=function(t){return e.$router.push("/add-issue")})}," + ")):Object(a["e"])("",!0)]),Object(a["h"])("div",h,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(A.getLaneItems(M.task),(function(e,t){return Object(a["q"])(),Object(a["d"])("div",{key:e.id},[Object(a["h"])(F,{issueNumber:e.id,title:e.title,deadline:e.end_date,startDate:e.created_at,issueStatus:e.status,type:M.task,index:t},null,8,["issueNumber","title","deadline","startDate","issueStatus","type","index"])])})),128)),0===A.getLaneItems(M.task).length?(Object(a["q"])(),Object(a["d"])("div",f," No tasks ")):Object(a["e"])("",!0)])])])]),Object(a["h"])("div",v,[Object(a["h"])("div",j,[Object(a["h"])("div",p,[Object(a["h"])("div",g,[m,Object(a["h"])("button",{class:"btn-primary-small",onClick:t[5]||(t[5]=function(t){return e.$router.push("/add-issue")})}," + ")]),Object(a["h"])("div",C,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(A.getLaneItems("TODO"),(function(e,t){return Object(a["q"])(),Object(a["d"])("div",{key:e.id},[Object(a["h"])(F,{issueNumber:e.id,title:e.title,deadline:e.end_date,startDate:e.created_at,issueStatus:e.status,index:t,type:"TODO"},null,8,["issueNumber","title","deadline","startDate","issueStatus","index"])])})),128)),0===A.getLaneItems(M.task).length?(Object(a["q"])(),Object(a["d"])("div",N," No tasks ")):Object(a["e"])("",!0)])]),Object(a["h"])("div",y,[I,Object(a["h"])("div",k,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(A.getLaneItems("DOING"),(function(e,t){return Object(a["q"])(),Object(a["d"])("div",{key:e.id},[Object(a["h"])(F,{issueNumber:e.id,title:e.title,deadline:e.end_date,startDate:e.created_at,issueStatus:e.status,index:t,type:"DOING"},null,8,["issueNumber","title","deadline","startDate","issueStatus","index"])])})),128)),0===A.getLaneItems(M.task).length?(Object(a["q"])(),Object(a["d"])("div",S," No tasks ")):Object(a["e"])("",!0)])]),Object(a["h"])("div",D,[w,Object(a["h"])("div",L,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(A.getLaneItems("DONE"),(function(e,t){return Object(a["q"])(),Object(a["d"])("div",{key:e.id},[Object(a["h"])(F,{issueNumber:e.id,title:e.title,deadline:e.end_date,startDate:e.created_at,issueStatus:e.status,index:t,type:"DONE"},null,8,["issueNumber","title","deadline","startDate","issueStatus","index"])])})),128)),0===A.getLaneItems(M.task).length?(Object(a["q"])(),Object(a["d"])("div",x," No tasks ")):Object(a["e"])("",!0)])])])])])),e.$store.state.isLoading?(Object(a["q"])(),Object(a["d"])("div",T,[Object(a["h"])($)])):Object(a["e"])("",!0)])])}var M=s("d178"),A=s("ddc0"),q=s("3a5e"),_=s("5bba"),F={name:"IssuesBoard",components:{Navbar:M["a"],Topbar:A["a"],Loading:q["a"],IssueCard:_["a"]},data:function(){return{task:"TODO"}},methods:{updateActiveIssueFilter:function(e){this.task=e},getLaneItems:function(e){return this.$store.getters.getIssues(e)}},created:function(){this.$store.getters.areIssuesLoaded&&this.$store.getters.isUserInfoLoaded||this.$store.dispatch("loadAllIssues")}};s("0951");F.render=E;t["default"]=F},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,s){var a=s("1d80"),i=s("5899"),n="["+i+"]",c=RegExp("^"+n+n+"*"),r=RegExp(n+n+"*$"),d=function(e){return function(t){var s=String(a(t));return 1&e&&(s=s.replace(c,"")),2&e&&(s=s.replace(r,"")),s}};e.exports={start:d(1),end:d(2),trim:d(3)}},"5bba":function(e,t,s){"use strict";s("99af");var a=s("7a23"),i={class:"task"},n={class:"main"},c={class:"header"},r={class:"id"},d={class:"menu"},u={key:0,class:"menu-options dropdown"},l={class:"title"},o={class:"footer"},b={class:"deadline"},O=Object(a["h"])("div",{class:"text"},"Deadline",-1),h={class:"view"},f=Object(a["h"])("span",{class:"material-icons"}," visibility ",-1),v={class:"status"};function j(e,t,s,j,p,g){var m=Object(a["x"])("router-link"),C=Object(a["x"])("WavePath");return Object(a["q"])(),Object(a["d"])("div",i,[Object(a["h"])("div",n,[Object(a["h"])("div",c,[Object(a["h"])("div",r,"Issue : "+Object(a["z"])(s.issueNumber),1),Object(a["h"])("div",{class:g.getIssueStatusClass},Object(a["z"])(g.getIssueStatus),3),Object(a["h"])("div",d,[Object(a["h"])("div",{class:"material-icons btn",onClick:t[1]||(t[1]=function(){return g.toggleMenu&&g.toggleMenu.apply(g,arguments)}),ref:"menu"}," more_vert ",512),p.isMenuOpen?(Object(a["q"])(),Object(a["d"])("div",u,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(g.getMenuOptions,(function(e,t){return Object(a["q"])(),Object(a["d"])("a",{href:"#",key:t,onClick:function(t){return g.updateStatus(e)}},Object(a["z"])(e),9,["onClick"])})),128))])):Object(a["e"])("",!0)])]),Object(a["h"])("div",l,Object(a["z"])(g.getIssueTitle),1),Object(a["h"])("div",o,[Object(a["h"])("div",b,[O,Object(a["h"])("div",{class:["date","danger"===this.deadlineType?"danger":""]},Object(a["z"])(g.parsedDate),3)]),Object(a["h"])("div",h,[Object(a["h"])(m,{to:{name:"ViewIssue",params:{issue_id:s.issueNumber,index:s.index,type:s.type}}},{default:Object(a["E"])((function(){return[f]})),_:1},8,["to"])])])]),Object(a["h"])("div",v,[Object(a["h"])(C,{fill:g.svgFillColor,class:"hundred"===this.deadlineStatus?"remove-svg":""},null,8,["fill","class"]),Object(a["h"])("div",{class:["progress","".concat(this.deadlineStatus," ").concat(this.deadlineType)]},null,2)])])}s("a9e3"),s("fb6a"),s("9129");var p=s("c1df"),g=s.n(p),m=(s("cb29"),{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"});function C(e,t,s,i,n,c){return Object(a["q"])(),Object(a["d"])("svg",m,[Object(a["h"])("path",{fill:s.fill,"fill-opacity":"1",d:c.getRandomWavePath},null,8,["fill","d"])])}var N={name:"WavePath",props:["fill"],computed:{getRandomWavePath:function(){var e="M0,32L34.3,32C68.6,32,137,32,206,74.7C274.3,117,343,203,411,224C480,245,549,203,617,165.3C685.7,128,754,96,823,112C891.4,128,960,192,1029,181.3C1097.1,171,1166,85,1234,53.3C1302.9,21,1371,43,1406,53.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z",t="M0,128L21.8,128C43.6,128,87,128,131,144C174.5,160,218,192,262,176C305.5,160,349,96,393,106.7C436.4,117,480,203,524,208C567.3,213,611,139,655,106.7C698.2,75,742,85,785,112C829.1,139,873,181,916,176C960,171,1004,117,1047,106.7C1090.9,96,1135,128,1178,144C1221.8,160,1265,160,1309,144C1352.7,128,1396,96,1418,80L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z",s=[e,t];return s[Math.round(Math.random())]}}};N.render=C;var y=N,I={name:"IssueCard",data:function(){return{deadlineStatus:"",deadlineType:"success",isMenuOpen:!1}},components:{WavePath:y},props:{issueNumber:Number,title:String,deadline:String,startDate:String,issueStatus:String,index:Number,type:String},methods:{toggleMenu:function(){var e=this,t=function t(s){e.catchOutsideClick(s,e.$refs.menu)&&(window.removeEventListener("click",t),e.isMenuOpen=!1)};window.addEventListener("click",t),this.isMenuOpen=!this.isMenuOpen},updateStatus:function(e){this.$store.dispatch("updateIssueStatus",{status:e,id:this.issueNumber})},catchOutsideClick:function(e,t){return t!==e.target&&(this.isMenuOpen&&e.target,!0)}},computed:{parsedDate:function(){var e=this.deadline,t=g()(e,"YYYY-MM-DD");return t.isValid()?t.toLocaleString().substring(0,16):"No deadline"},svgFillColor:function(){var e="#54F00A",t="#F0CB0A",s="#FF2300";switch(this.deadlineType){case"danger":return s;case"warning":return t;default:return e}},getIssueTitle:function(){return this.title.length>80?"".concat(this.title.substring(0,77),"..."):this.title},getIssueStatus:function(){return this.issueStatus[0].toUpperCase()+this.issueStatus.slice(1).toLowerCase()},getIssueStatusClass:function(){return this.issueStatus.toLowerCase()},getMenuOptions:function(){var e=["Edit"];return""!==this.issueStatus&&"TODO"===this.issueStatus?e.push("Doing","Done"):""!==this.issueStatus&&"INPROGRESS"===this.issueStatus?e.push("Todo","Done"):e.push("Todo","Doing"),e}},created:function(){if(void 0!==this.deadline&&void 0!==this.startDate){var e=g()(this.startDate),t=g()(this.deadline,"YYYY-MM-DD"),s=t.diff(g()(),"days"),a=t.diff(e,"days"),i=0!==s||0!==a?s/a*100:0,n=100-i;!Number.isNaN(n)&&t.isValid()&&"DONE"!==this.issueStatus?n>=100?(this.deadlineStatus="hundred",this.deadlineType="danger"):n>80?(this.deadlineStatus="eighty",this.deadlineType="danger"):n>60?(this.deadlineStatus="sixty",this.deadlineType="warning"):n>50?(this.deadlineStatus="fifty",this.deadlineType="warning"):this.deadlineStatus=n>20?"twenty":"ten":this.deadlineStatus="hundred"}else this.deadlineStatus="hundred"}};s("bb00");I.render=j;t["a"]=I},7156:function(e,t,s){var a=s("861d"),i=s("d2bb");e.exports=function(e,t,s){var n,c;return i&&"function"==typeof(n=t.constructor)&&n!==s&&a(c=n.prototype)&&c!==s.prototype&&i(e,c),e}},"7c8f":function(e,t,s){},"81d5":function(e,t,s){"use strict";var a=s("7b0b"),i=s("23cb"),n=s("50c4");e.exports=function(e){var t=a(this),s=n(t.length),c=arguments.length,r=i(c>1?arguments[1]:void 0,s),d=c>2?arguments[2]:void 0,u=void 0===d?s:i(d,s);while(u>r)t[r++]=e;return t}},9129:function(e,t,s){var a=s("23e7");a({target:"Number",stat:!0},{isNaN:function(e){return e!=e}})},"99af":function(e,t,s){"use strict";var a=s("23e7"),i=s("d039"),n=s("e8b5"),c=s("861d"),r=s("7b0b"),d=s("50c4"),u=s("8418"),l=s("65f0"),o=s("1dde"),b=s("b622"),O=s("2d00"),h=b("isConcatSpreadable"),f=9007199254740991,v="Maximum allowed index exceeded",j=O>=51||!i((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),p=o("concat"),g=function(e){if(!c(e))return!1;var t=e[h];return void 0!==t?!!t:n(e)},m=!j||!p;a({target:"Array",proto:!0,forced:m},{concat:function(e){var t,s,a,i,n,c=r(this),o=l(c,0),b=0;for(t=-1,a=arguments.length;t<a;t++)if(n=-1===t?c:arguments[t],g(n)){if(i=d(n.length),b+i>f)throw TypeError(v);for(s=0;s<i;s++,b++)s in n&&u(o,b,n[s])}else{if(b>=f)throw TypeError(v);u(o,b++,n)}return o.length=b,o}})},a9e3:function(e,t,s){"use strict";var a=s("83ab"),i=s("da84"),n=s("94ca"),c=s("6eeb"),r=s("5135"),d=s("c6b6"),u=s("7156"),l=s("c04e"),o=s("d039"),b=s("7c73"),O=s("241c").f,h=s("06cf").f,f=s("9bf2").f,v=s("58a8").trim,j="Number",p=i[j],g=p.prototype,m=d(b(g))==j,C=function(e){var t,s,a,i,n,c,r,d,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=v(u),t=u.charCodeAt(0),43===t||45===t){if(s=u.charCodeAt(2),88===s||120===s)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+u}for(n=u.slice(2),c=n.length,r=0;r<c;r++)if(d=n.charCodeAt(r),d<48||d>i)return NaN;return parseInt(n,a)}return+u};if(n(j,!p(" 0o1")||!p("0b1")||p("+0x1"))){for(var N,y=function(e){var t=arguments.length<1?0:e,s=this;return s instanceof y&&(m?o((function(){g.valueOf.call(s)})):d(s)!=j)?u(new p(C(t)),s,y):C(t)},I=a?O(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;I.length>k;k++)r(p,N=I[k])&&!r(y,N)&&f(y,N,h(p,N));y.prototype=g,g.constructor=y,c(i,j,y)}},bb00:function(e,t,s){"use strict";s("7c8f")},cb29:function(e,t,s){var a=s("23e7"),i=s("81d5"),n=s("44d2");a({target:"Array",proto:!0},{fill:i}),n("fill")},f228:function(e,t,s){},fb6a:function(e,t,s){"use strict";var a=s("23e7"),i=s("861d"),n=s("e8b5"),c=s("23cb"),r=s("50c4"),d=s("fc6a"),u=s("8418"),l=s("b622"),o=s("1dde"),b=o("slice"),O=l("species"),h=[].slice,f=Math.max;a({target:"Array",proto:!0,forced:!b},{slice:function(e,t){var s,a,l,o=d(this),b=r(o.length),v=c(e,b),j=c(void 0===t?b:t,b);if(n(o)&&(s=o.constructor,"function"!=typeof s||s!==Array&&!n(s.prototype)?i(s)&&(s=s[O],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return h.call(o,v,j);for(a=new(void 0===s?Array:s)(f(j-v,0)),l=0;v<j;v++,l++)v in o&&u(a,l,o[v]);return a.length=l,a}})}}]);
//# sourceMappingURL=chunk-6b7f2cf2.79b0c22b.js.map