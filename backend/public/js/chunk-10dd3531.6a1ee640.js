(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10dd3531"],{"117a":function(e,t,s){"use strict";s("3563")},2595:function(e,t,s){"use strict";s("eff1")},3563:function(e,t,s){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,s){var a=s("1d80"),n=s("5899"),i="["+n+"]",r=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),d=function(e){return function(t){var s=String(a(t));return 1&e&&(s=s.replace(r,"")),2&e&&(s=s.replace(c,"")),s}};e.exports={start:d(1),end:d(2),trim:d(3)}},"5bba":function(e,t,s){"use strict";s("99af");var a=s("7a23"),n={class:"task"},i={class:"main"},r={class:"header"},c={class:"id"},d=Object(a["f"])('<div class="menu"><a class="material-icons btn"> more_vert </a><div class="menu-options dropdown"><a href="#">Open</a><a href="#">Close</a><a href="#">Do this</a></div></div>',1),u={class:"title"},o={class:"footer"},l={class:"deadline"},b=Object(a["h"])("div",{class:"text"},"Deadline",-1),h={class:"view"},f=Object(a["h"])("span",{class:"material-icons"}," visibility ",-1),v={class:"status"};function p(e,t,s,p,O,j){var g=Object(a["x"])("router-link"),y=Object(a["x"])("WavePath");return Object(a["q"])(),Object(a["d"])("div",n,[Object(a["h"])("div",i,[Object(a["h"])("div",r,[Object(a["h"])("div",c,"Issue no: "+Object(a["z"])(s.issueNumber),1),Object(a["h"])("div",{class:j.getIssueStatusClass},Object(a["z"])(j.getIssueStatus),3),d]),Object(a["h"])("div",u,Object(a["z"])(j.getIssueTitle),1),Object(a["h"])("div",o,[Object(a["h"])("div",l,[b,Object(a["h"])("div",{class:["date","danger"===this.deadlineType?"danger":""]},Object(a["z"])(j.parsedDate),3)]),Object(a["h"])("div",h,[Object(a["h"])(g,{to:{name:"ViewIssue",params:{issue_id:s.issueNumber,index:s.index,type:s.type}}},{default:Object(a["E"])((function(){return[f]})),_:1},8,["to"])])])]),Object(a["h"])("div",v,[Object(a["h"])(y,{fill:j.svgFillColor,class:"hundred"===this.deadlineStatus?"remove-svg":""},null,8,["fill","class"]),Object(a["h"])("div",{class:["progress","".concat(this.deadlineStatus," ").concat(this.deadlineType)]},null,2)])])}s("a9e3"),s("fb6a"),s("9129");var O=s("c1df"),j=s.n(O),g=(s("cb29"),{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"});function y(e,t,s,n,i,r){return Object(a["q"])(),Object(a["d"])("svg",g,[Object(a["h"])("path",{fill:s.fill,"fill-opacity":"1",d:r.getRandomWavePath},null,8,["fill","d"])])}var C={name:"WavePath",props:["fill"],computed:{getRandomWavePath:function(){var e="M0,32L34.3,32C68.6,32,137,32,206,74.7C274.3,117,343,203,411,224C480,245,549,203,617,165.3C685.7,128,754,96,823,112C891.4,128,960,192,1029,181.3C1097.1,171,1166,85,1234,53.3C1302.9,21,1371,43,1406,53.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z",t="M0,128L21.8,128C43.6,128,87,128,131,144C174.5,160,218,192,262,176C305.5,160,349,96,393,106.7C436.4,117,480,203,524,208C567.3,213,611,139,655,106.7C698.2,75,742,85,785,112C829.1,139,873,181,916,176C960,171,1004,117,1047,106.7C1090.9,96,1135,128,1178,144C1221.8,160,1265,160,1309,144C1352.7,128,1396,96,1418,80L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z",s=[e,t];return s[Math.round(Math.random())]}}};C.render=y;var m=C,I={name:"IssueCard",data:function(){return{deadlineStatus:"",deadlineType:"success"}},components:{WavePath:m},props:{issueNumber:Number,title:String,deadline:String,startDate:String,issueStatus:String,index:Number,type:String},computed:{parsedDate:function(){var e=this.deadline,t=j()(e,"YYYY-MM-DD");return t.isValid()?t.toLocaleString().substring(0,16):"No deadline"},svgFillColor:function(){var e="#54F00A",t="#F0CB0A",s="#FF2300";switch(this.deadlineType){case"danger":return s;case"warning":return t;default:return e}},getIssueTitle:function(){return this.title.length>80?"".concat(this.title.substring(0,77),"..."):this.title},getIssueStatus:function(){return this.issueStatus[0].toUpperCase()+this.issueStatus.slice(1).toLowerCase()},getIssueStatusClass:function(){return this.issueStatus.toLowerCase()}},created:function(){if(void 0!==this.deadline&&void 0!==this.startDate){var e=j()(this.startDate),t=j()(this.deadline,"YYYY-MM-DD"),s=t.diff(j()(),"days"),a=t.diff(e,"days"),n=s/a*100,i=100-n;!Number.isNaN(i)&&t.isValid()&&"DONE"!==this.issueStatus?i>=100?(this.deadlineStatus="hundred",this.deadlineType="danger"):i>80?(this.deadlineStatus="eighty",this.deadlineType="danger"):i>60?(this.deadlineStatus="sixty",this.deadlineType="warning"):i>50?(this.deadlineStatus="fifty",this.deadlineType="warning"):this.deadlineStatus=i>20?"twenty":"ten":this.deadlineStatus="hundred"}else this.deadlineStatus="hundred"}};s("af6f");I.render=p;t["a"]=I},"6a2a":function(e,t,s){"use strict";s("c4e1")},7156:function(e,t,s){var a=s("861d"),n=s("d2bb");e.exports=function(e,t,s){var i,r;return n&&"function"==typeof(i=t.constructor)&&i!==s&&a(r=i.prototype)&&r!==s.prototype&&n(e,r),e}},"81d5":function(e,t,s){"use strict";var a=s("7b0b"),n=s("23cb"),i=s("50c4");e.exports=function(e){var t=a(this),s=i(t.length),r=arguments.length,c=n(r>1?arguments[1]:void 0,s),d=r>2?arguments[2]:void 0,u=void 0===d?s:n(d,s);while(u>c)t[c++]=e;return t}},9129:function(e,t,s){var a=s("23e7");a({target:"Number",stat:!0},{isNaN:function(e){return e!=e}})},"99af":function(e,t,s){"use strict";var a=s("23e7"),n=s("d039"),i=s("e8b5"),r=s("861d"),c=s("7b0b"),d=s("50c4"),u=s("8418"),o=s("65f0"),l=s("1dde"),b=s("b622"),h=s("2d00"),f=b("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",O=h>=51||!n((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),j=l("concat"),g=function(e){if(!r(e))return!1;var t=e[f];return void 0!==t?!!t:i(e)},y=!O||!j;a({target:"Array",proto:!0,forced:y},{concat:function(e){var t,s,a,n,i,r=c(this),l=o(r,0),b=0;for(t=-1,a=arguments.length;t<a;t++)if(i=-1===t?r:arguments[t],g(i)){if(n=d(i.length),b+n>v)throw TypeError(p);for(s=0;s<n;s++,b++)s in i&&u(l,b,i[s])}else{if(b>=v)throw TypeError(p);u(l,b++,i)}return l.length=b,l}})},a9e3:function(e,t,s){"use strict";var a=s("83ab"),n=s("da84"),i=s("94ca"),r=s("6eeb"),c=s("5135"),d=s("c6b6"),u=s("7156"),o=s("c04e"),l=s("d039"),b=s("7c73"),h=s("241c").f,f=s("06cf").f,v=s("9bf2").f,p=s("58a8").trim,O="Number",j=n[O],g=j.prototype,y=d(b(g))==O,C=function(e){var t,s,a,n,i,r,c,d,u=o(e,!1);if("string"==typeof u&&u.length>2)if(u=p(u),t=u.charCodeAt(0),43===t||45===t){if(s=u.charCodeAt(2),88===s||120===s)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+u}for(i=u.slice(2),r=i.length,c=0;c<r;c++)if(d=i.charCodeAt(c),d<48||d>n)return NaN;return parseInt(i,a)}return+u};if(i(O,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var m,I=function(e){var t=arguments.length<1?0:e,s=this;return s instanceof I&&(y?l((function(){g.valueOf.call(s)})):d(s)!=O)?u(new j(C(t)),s,I):C(t)},S=a?h(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;S.length>N;N++)c(j,m=S[N])&&!c(I,m)&&v(I,m,f(j,m));I.prototype=g,g.constructor=I,r(n,O,I)}},af6f:function(e,t,s){"use strict";s("df5e")},bb51:function(e,t,s){"use strict";s.r(t);var a=s("7a23"),n={class:"page-container"},i={key:0,class:"home"},r={class:"home-header"},c={class:"left"},d=Object(a["h"])("div",{class:"title"},"Welcome to your personal issue tracker",-1),u=Object(a["h"])("div",{class:"subtitle"}," Organize your tasks and never miss a deadline. ",-1),o={class:"cta"},l={class:"right"},b={class:"task-count-grid-container"},h={key:0,class:"next-tasks"},f=Object(a["h"])("div",{class:"section-title"},"Approaching deadline",-1),v={class:"section-items"},p={key:1,class:"next-tasks"},O=Object(a["h"])("div",{class:"section-title"},"Recent issue",-1),j={class:"section-items"},g={key:2,class:"next-tasks"},y=Object(a["h"])("div",{class:"section-title"},"Issue status",-1),C={class:"section-items"},m={key:1,class:"loading-container"};function I(e,t,s,I,S,N){var T=Object(a["x"])("Navbar"),x=Object(a["x"])("Topbar"),w=Object(a["x"])("IssueCount"),k=Object(a["x"])("IssueCard"),A=Object(a["x"])("IssueStatusInfoCard"),L=Object(a["x"])("Loading");return Object(a["q"])(),Object(a["d"])("div",null,[Object(a["h"])(T,{page:"home"}),Object(a["h"])("div",n,[Object(a["h"])(x),e.$store.state.isLoading?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("div",i,[Object(a["h"])("div",r,[Object(a["h"])("div",c,[d,u,Object(a["h"])("div",o,[Object(a["h"])("button",{class:"btn-primary",onClick:t[1]||(t[1]=function(t){return e.$router.push("/add-issue")})}," Add new issue "),Object(a["h"])("button",{class:"btn-primary",onClick:t[2]||(t[2]=function(t){return e.$router.push("/board")})}," View all issues ")])]),Object(a["h"])("div",l,[Object(a["h"])("div",b,[Object(a["h"])(w,{cardType:"total-card",count:e.$store.getters.getTaskCount.total,type:"Total"},null,8,["count"]),Object(a["h"])(w,{cardType:"count-card",count:e.$store.getters.getTaskCount.done,type:"Done"},null,8,["count"]),Object(a["h"])(w,{cardType:"count-card",count:e.$store.getters.getTaskCount.todo,type:"Todo"},null,8,["count"]),Object(a["h"])(w,{cardType:"count-card",count:e.$store.getters.getTaskCount.doing,type:"Doing"},null,8,["count"])])])]),e.$store.getters.hasDeadlineIssues?(Object(a["q"])(),Object(a["d"])("div",h,[f,Object(a["h"])("div",v,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(e.$store.state.deadlineIssues,(function(e,t){return Object(a["q"])(),Object(a["d"])("div",{key:e.id},[Object(a["h"])(k,{issueNumber:e.id,title:e.title,deadline:e.end_date,startDate:e.created_at,issueStatus:e.status,index:t,type:"deadline"},null,8,["issueNumber","title","deadline","startDate","issueStatus","index"])])})),128))])])):Object(a["e"])("",!0),e.$store.getters.hasRecentIssues?(Object(a["q"])(),Object(a["d"])("div",p,[O,Object(a["h"])("div",j,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(e.$store.state.recentIssues,(function(e,t){return Object(a["q"])(),Object(a["d"])("div",{key:e.id},[Object(a["h"])(k,{issueNumber:e.id,title:e.title,deadline:e.end_date,startDate:e.created_at,issueStatus:e.status,index:t,type:"recent"},null,8,["issueNumber","title","deadline","startDate","issueStatus","index"])])})),128))])])):Object(a["e"])("",!0),e.$store.getters.hasEmptyActionItems?(Object(a["q"])(),Object(a["d"])("div",g,[y,Object(a["h"])("div",C,[Object(a["h"])(A,{cardType:"deadline"}),Object(a["h"])(A,{cardType:"recent"})])])):Object(a["e"])("",!0)])),e.$store.state.isLoading?(Object(a["q"])(),Object(a["d"])("div",m,[Object(a["h"])(L)])):Object(a["e"])("",!0)])])}var S=s("d178"),N=s("ddc0"),T={class:"count"},x={class:"type"};function w(e,t,s,n,i,r){return Object(a["q"])(),Object(a["d"])("div",{class:["task-count","total-card"==s.cardType?"total":"task-count"]},[Object(a["h"])("div",null,[Object(a["h"])("div",T,Object(a["z"])(s.count),1),Object(a["h"])("div",x,Object(a["z"])(s.type),1)])],2)}s("a9e3");var k={name:"IssueCount",props:{cardType:String,count:Number,type:String}};s("117a");k.render=w;var A=k,L=s("5bba"),D={class:"task update"},E={class:"info"},M=Object(a["h"])("div",{class:"icon"},[Object(a["h"])("span",{class:"material-icons"}," thumb_up ")],-1),$={class:"meesage"};function _(e,t,s,n,i,r){return Object(a["q"])(),Object(a["d"])("div",D,[Object(a["h"])("div",E,[M,Object(a["h"])("div",$,Object(a["z"])(r.getMessage),1)])])}var q={name:"IssueStatusInfoCard",props:["cardType"],computed:{getMessage:function(){return"deadline"===this.cardType?"No deadline issues.":"No issues recently updated."}}};s("6a2a");q.render=_;var F=q,Y=s("3a5e"),z={name:"Home",components:{Navbar:S["a"],Topbar:N["a"],IssueCount:A,IssueCard:L["a"],IssueStatusInfoCard:F,Loading:Y["a"]},mounted:function(){this.$store.getters.isUserInfoLoaded||this.$store.dispatch("loadUserInfo")}};s("2595");z.render=I;t["default"]=z},c4e1:function(e,t,s){},cb29:function(e,t,s){var a=s("23e7"),n=s("81d5"),i=s("44d2");a({target:"Array",proto:!0},{fill:n}),i("fill")},df5e:function(e,t,s){},eff1:function(e,t,s){},fb6a:function(e,t,s){"use strict";var a=s("23e7"),n=s("861d"),i=s("e8b5"),r=s("23cb"),c=s("50c4"),d=s("fc6a"),u=s("8418"),o=s("b622"),l=s("1dde"),b=l("slice"),h=o("species"),f=[].slice,v=Math.max;a({target:"Array",proto:!0,forced:!b},{slice:function(e,t){var s,a,o,l=d(this),b=c(l.length),p=r(e,b),O=r(void 0===t?b:t,b);if(i(l)&&(s=l.constructor,"function"!=typeof s||s!==Array&&!i(s.prototype)?n(s)&&(s=s[h],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return f.call(l,p,O);for(a=new(void 0===s?Array:s)(v(O-p,0)),o=0;p<O;p++,o++)p in l&&u(a,o,l[p]);return a.length=o,a}})}}]);
//# sourceMappingURL=chunk-10dd3531.6a1ee640.js.map