(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d41af9e"],{"09b2":function(e,t,s){"use strict";s.r(t);var a=s("7a23"),i={class:"page-container"},n=Object(a["h"])("div",{class:"board-title"},"Board",-1),r={key:0},c={class:"mobile"},d={class:"mobile-container"},u=Object(a["h"])("div",{class:"lane-selector"},"Now showing issues in :",-1),l={class:"status-group"},o={class:"lane"},b={class:"lane-header"},h={class:"lane-title"},O={class:"lane-items"},f={key:0,class:"lane-no-item"},v={class:"desktop"},j={class:"lane-container"},g={class:"lane"},p={class:"lane-header"},m=Object(a["h"])("div",{class:"lane-title"},"TODO",-1),C={class:"lane-items"},N={key:0,class:"lane-no-item"},I={class:"lane"},y=Object(a["h"])("div",{class:"lane-header"},[Object(a["h"])("div",{class:"lane-title"},"DOING")],-1),S={class:"lane-items"},k={key:0,class:"lane-no-item"},D={class:"lane"},w=Object(a["h"])("div",{class:"lane-header"},[Object(a["h"])("div",{class:"lane-title"},"DONE")],-1),L={class:"lane-items"},T={key:0,class:"lane-no-item"},x={key:1,class:"loading-container"};function A(e,t,s,A,E,_){var q=Object(a["x"])("Navbar"),F=Object(a["x"])("Topbar"),M=Object(a["x"])("IssueCard"),Y=Object(a["x"])("Loading");return Object(a["q"])(),Object(a["d"])("div",null,[Object(a["h"])(q,{page:"board"}),Object(a["h"])("div",i,[Object(a["h"])(F),n,e.$store.state.isLoading?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("div",r,[Object(a["h"])("div",c,[Object(a["h"])("div",d,[u,Object(a["h"])("div",l,[Object(a["h"])("div",{class:["status","TODO"===E.task?"status-active":""],onClick:t[1]||(t[1]=function(e){return _.updateActiveIssueFilter("TODO")})}," Todo ",2),Object(a["h"])("div",{class:["status","DOING"===E.task?"status-active":""],onClick:t[2]||(t[2]=function(e){return _.updateActiveIssueFilter("DOING")})}," Doing ",2),Object(a["h"])("div",{class:["status","DONE"===E.task?"status-active":""],onClick:t[3]||(t[3]=function(e){return _.updateActiveIssueFilter("DONE")})}," Done ",2)]),Object(a["h"])("div",o,[Object(a["h"])("div",b,[Object(a["h"])("div",h,Object(a["z"])(E.task),1),"TODO"===E.task?(Object(a["q"])(),Object(a["d"])("button",{key:0,class:"btn-primary-small",onClick:t[4]||(t[4]=function(t){return e.$router.push("/add-issue")})}," + ")):Object(a["e"])("",!0)]),Object(a["h"])("div",O,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(_.getLaneItems(E.task),(function(e){return Object(a["q"])(),Object(a["d"])("div",{key:e.id},[Object(a["h"])(M,{issueNumber:e.id,title:e.title,deadline:e.end_date,startDate:e.created_at,issueStatus:e.status},null,8,["issueNumber","title","deadline","startDate","issueStatus"])])})),128)),0===_.getLaneItems(E.task).length?(Object(a["q"])(),Object(a["d"])("div",f," No tasks ")):Object(a["e"])("",!0)])])])]),Object(a["h"])("div",v,[Object(a["h"])("div",j,[Object(a["h"])("div",g,[Object(a["h"])("div",p,[m,Object(a["h"])("button",{class:"btn-primary-small",onClick:t[5]||(t[5]=function(t){return e.$router.push("/add-issue")})}," + ")]),Object(a["h"])("div",C,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(_.getLaneItems("TODO"),(function(e){return Object(a["q"])(),Object(a["d"])("div",{key:e.id},[Object(a["h"])(M,{issueNumber:e.id,title:e.title,deadline:e.end_date,startDate:e.created_at,issueStatus:e.status},null,8,["issueNumber","title","deadline","startDate","issueStatus"])])})),128)),0===_.getLaneItems(E.task).length?(Object(a["q"])(),Object(a["d"])("div",N," No tasks ")):Object(a["e"])("",!0)])]),Object(a["h"])("div",I,[y,Object(a["h"])("div",S,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(_.getLaneItems("DOING"),(function(e){return Object(a["q"])(),Object(a["d"])("div",{key:e.id},[Object(a["h"])(M,{issueNumber:e.id,title:e.title,deadline:e.end_date,startDate:e.created_at,issueStatus:e.status},null,8,["issueNumber","title","deadline","startDate","issueStatus"])])})),128)),0===_.getLaneItems(E.task).length?(Object(a["q"])(),Object(a["d"])("div",k," No tasks ")):Object(a["e"])("",!0)])]),Object(a["h"])("div",D,[w,Object(a["h"])("div",L,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(_.getLaneItems("DONE"),(function(e){return Object(a["q"])(),Object(a["d"])("div",{key:e.id},[Object(a["h"])(M,{issueNumber:e.id,title:e.title,deadline:e.end_date,startDate:e.created_at,issueStatus:e.status},null,8,["issueNumber","title","deadline","startDate","issueStatus"])])})),128)),0===_.getLaneItems(E.task).length?(Object(a["q"])(),Object(a["d"])("div",T," No tasks ")):Object(a["e"])("",!0)])])])])])),e.$store.state.isLoading?(Object(a["q"])(),Object(a["d"])("div",x,[Object(a["h"])(Y)])):Object(a["e"])("",!0)])])}var E=s("d178"),_=s("ddc0"),q=s("3a5e"),F=s("5bba"),M={name:"IssuesBoard",components:{Navbar:E["a"],Topbar:_["a"],Loading:q["a"],IssueCard:F["a"]},data:function(){return{task:"TODO"}},methods:{updateActiveIssueFilter:function(e){this.task=e},getLaneItems:function(e){return this.$store.getters.getIssues(e)}},created:function(){this.$store.getters.areIssuesLoaded&&this.$store.getters.isUserInfoLoaded||this.$store.dispatch("loadAllIssues")}};s("afa0");M.render=A;t["default"]=M},4310:function(e,t,s){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,s){var a=s("1d80"),i=s("5899"),n="["+i+"]",r=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),d=function(e){return function(t){var s=String(a(t));return 1&e&&(s=s.replace(r,"")),2&e&&(s=s.replace(c,"")),s}};e.exports={start:d(1),end:d(2),trim:d(3)}},"5bba":function(e,t,s){"use strict";s("99af");var a=s("7a23"),i={class:"task"},n={class:"main"},r={class:"header"},c={class:"id"},d=Object(a["f"])('<div class="menu"><a class="material-icons btn"> more_vert </a><div class="menu-options dropdown"><a href="#">Open</a><a href="#">Close</a><a href="#">Do this</a></div></div>',1),u={class:"title"},l={class:"footer"},o={class:"deadline"},b=Object(a["h"])("div",{class:"text"},"Deadline",-1),h={class:"view"},O=Object(a["h"])("span",{class:"material-icons"}," visibility ",-1),f={class:"status"};function v(e,t,s,v,j,g){var p=Object(a["x"])("router-link"),m=Object(a["x"])("WavePath");return Object(a["q"])(),Object(a["d"])("div",i,[Object(a["h"])("div",n,[Object(a["h"])("div",r,[Object(a["h"])("div",c,"Issue no: "+Object(a["z"])(s.issueNumber),1),Object(a["h"])("div",{class:g.getIssueStatusClass},Object(a["z"])(g.getIssueStatus),3),d]),Object(a["h"])("div",u,Object(a["z"])(g.getIssueTitle),1),Object(a["h"])("div",l,[Object(a["h"])("div",o,[b,Object(a["h"])("div",{class:["date","danger"===this.deadlineType?"danger":""]},Object(a["z"])(g.parsedDate),3)]),Object(a["h"])("div",h,[Object(a["h"])(p,{to:{name:"ViewIssue",params:{issue_id:s.issueNumber,index:s.index,type:s.type}}},{default:Object(a["E"])((function(){return[O]})),_:1},8,["to"])])])]),Object(a["h"])("div",f,[Object(a["h"])(m,{fill:g.svgFillColor,class:"hundred"===this.deadlineStatus?"remove-svg":""},null,8,["fill","class"]),Object(a["h"])("div",{class:["progress","".concat(this.deadlineStatus," ").concat(this.deadlineType)]},null,2)])])}s("a9e3"),s("fb6a"),s("9129");var j=s("c1df"),g=s.n(j),p=(s("cb29"),{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"});function m(e,t,s,i,n,r){return Object(a["q"])(),Object(a["d"])("svg",p,[Object(a["h"])("path",{fill:s.fill,"fill-opacity":"1",d:r.getRandomWavePath},null,8,["fill","d"])])}var C={name:"WavePath",props:["fill"],computed:{getRandomWavePath:function(){var e="M0,32L34.3,32C68.6,32,137,32,206,74.7C274.3,117,343,203,411,224C480,245,549,203,617,165.3C685.7,128,754,96,823,112C891.4,128,960,192,1029,181.3C1097.1,171,1166,85,1234,53.3C1302.9,21,1371,43,1406,53.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z",t="M0,128L21.8,128C43.6,128,87,128,131,144C174.5,160,218,192,262,176C305.5,160,349,96,393,106.7C436.4,117,480,203,524,208C567.3,213,611,139,655,106.7C698.2,75,742,85,785,112C829.1,139,873,181,916,176C960,171,1004,117,1047,106.7C1090.9,96,1135,128,1178,144C1221.8,160,1265,160,1309,144C1352.7,128,1396,96,1418,80L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z",s=[e,t];return s[Math.round(Math.random())]}}};C.render=m;var N=C,I={name:"IssueCard",data:function(){return{deadlineStatus:"",deadlineType:"success"}},components:{WavePath:N},props:{issueNumber:Number,title:String,deadline:String,startDate:String,issueStatus:String,index:Number,type:String},computed:{parsedDate:function(){var e=this.deadline,t=g()(e,"YYYY-MM-DD");return t.isValid()?t.toLocaleString().substring(0,16):"No deadline"},svgFillColor:function(){var e="#54F00A",t="#F0CB0A",s="#FF2300";switch(this.deadlineType){case"danger":return s;case"warning":return t;default:return e}},getIssueTitle:function(){return this.title.length>80?"".concat(this.title.substring(0,77),"..."):this.title},getIssueStatus:function(){return this.issueStatus[0].toUpperCase()+this.issueStatus.slice(1).toLowerCase()},getIssueStatusClass:function(){return this.issueStatus.toLowerCase()}},created:function(){if(void 0!==this.deadline&&void 0!==this.startDate){var e=g()(this.startDate),t=g()(this.deadline,"YYYY-MM-DD"),s=t.diff(g()(),"days"),a=t.diff(e,"days"),i=s/a*100,n=100-i;!Number.isNaN(n)&&t.isValid()&&"DONE"!==this.issueStatus?n>=100?(this.deadlineStatus="hundred",this.deadlineType="danger"):n>80?(this.deadlineStatus="eighty",this.deadlineType="danger"):n>60?(this.deadlineStatus="sixty",this.deadlineType="warning"):n>50?(this.deadlineStatus="fifty",this.deadlineType="warning"):this.deadlineStatus=n>20?"twenty":"ten":this.deadlineStatus="hundred"}else this.deadlineStatus="hundred"}};s("af6f");I.render=v;t["a"]=I},7156:function(e,t,s){var a=s("861d"),i=s("d2bb");e.exports=function(e,t,s){var n,r;return i&&"function"==typeof(n=t.constructor)&&n!==s&&a(r=n.prototype)&&r!==s.prototype&&i(e,r),e}},"81d5":function(e,t,s){"use strict";var a=s("7b0b"),i=s("23cb"),n=s("50c4");e.exports=function(e){var t=a(this),s=n(t.length),r=arguments.length,c=i(r>1?arguments[1]:void 0,s),d=r>2?arguments[2]:void 0,u=void 0===d?s:i(d,s);while(u>c)t[c++]=e;return t}},9129:function(e,t,s){var a=s("23e7");a({target:"Number",stat:!0},{isNaN:function(e){return e!=e}})},"99af":function(e,t,s){"use strict";var a=s("23e7"),i=s("d039"),n=s("e8b5"),r=s("861d"),c=s("7b0b"),d=s("50c4"),u=s("8418"),l=s("65f0"),o=s("1dde"),b=s("b622"),h=s("2d00"),O=b("isConcatSpreadable"),f=9007199254740991,v="Maximum allowed index exceeded",j=h>=51||!i((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),g=o("concat"),p=function(e){if(!r(e))return!1;var t=e[O];return void 0!==t?!!t:n(e)},m=!j||!g;a({target:"Array",proto:!0,forced:m},{concat:function(e){var t,s,a,i,n,r=c(this),o=l(r,0),b=0;for(t=-1,a=arguments.length;t<a;t++)if(n=-1===t?r:arguments[t],p(n)){if(i=d(n.length),b+i>f)throw TypeError(v);for(s=0;s<i;s++,b++)s in n&&u(o,b,n[s])}else{if(b>=f)throw TypeError(v);u(o,b++,n)}return o.length=b,o}})},a9e3:function(e,t,s){"use strict";var a=s("83ab"),i=s("da84"),n=s("94ca"),r=s("6eeb"),c=s("5135"),d=s("c6b6"),u=s("7156"),l=s("c04e"),o=s("d039"),b=s("7c73"),h=s("241c").f,O=s("06cf").f,f=s("9bf2").f,v=s("58a8").trim,j="Number",g=i[j],p=g.prototype,m=d(b(p))==j,C=function(e){var t,s,a,i,n,r,c,d,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=v(u),t=u.charCodeAt(0),43===t||45===t){if(s=u.charCodeAt(2),88===s||120===s)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+u}for(n=u.slice(2),r=n.length,c=0;c<r;c++)if(d=n.charCodeAt(c),d<48||d>i)return NaN;return parseInt(n,a)}return+u};if(n(j,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var N,I=function(e){var t=arguments.length<1?0:e,s=this;return s instanceof I&&(m?o((function(){p.valueOf.call(s)})):d(s)!=j)?u(new g(C(t)),s,I):C(t)},y=a?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;y.length>S;S++)c(g,N=y[S])&&!c(I,N)&&f(I,N,O(g,N));I.prototype=p,p.constructor=I,r(i,j,I)}},af6f:function(e,t,s){"use strict";s("df5e")},afa0:function(e,t,s){"use strict";s("4310")},cb29:function(e,t,s){var a=s("23e7"),i=s("81d5"),n=s("44d2");a({target:"Array",proto:!0},{fill:i}),n("fill")},df5e:function(e,t,s){},fb6a:function(e,t,s){"use strict";var a=s("23e7"),i=s("861d"),n=s("e8b5"),r=s("23cb"),c=s("50c4"),d=s("fc6a"),u=s("8418"),l=s("b622"),o=s("1dde"),b=o("slice"),h=l("species"),O=[].slice,f=Math.max;a({target:"Array",proto:!0,forced:!b},{slice:function(e,t){var s,a,l,o=d(this),b=c(o.length),v=r(e,b),j=r(void 0===t?b:t,b);if(n(o)&&(s=o.constructor,"function"!=typeof s||s!==Array&&!n(s.prototype)?i(s)&&(s=s[h],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return O.call(o,v,j);for(a=new(void 0===s?Array:s)(f(j-v,0)),l=0;v<j;v++,l++)v in o&&u(a,l,o[v]);return a.length=l,a}})}}]);
//# sourceMappingURL=chunk-2d41af9e.fb32a855.js.map