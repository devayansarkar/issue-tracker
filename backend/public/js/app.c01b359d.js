(function(e){function t(t){for(var s,a,c=t[0],i=t[1],u=t[2],d=0,l=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);f&&f(t);while(l.length)l.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},o={app:0},r=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-33c20c30":"1dcd2e8f","chunk-3c5f4854":"3b5f5815","chunk-08dabaae":"27c3eea3","chunk-77d733ef":"93c4ae7e","chunk-b9db2696":"efd287ea","chunk-4509dfba":"2dbd46ef","chunk-9ac7d20a":"995e0d82"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-33c20c30":1,"chunk-3c5f4854":1,"chunk-08dabaae":1,"chunk-77d733ef":1,"chunk-b9db2696":1,"chunk-4509dfba":1,"chunk-9ac7d20a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var s="css/"+({}[e]||e)+"."+{"chunk-33c20c30":"8ed61fcb","chunk-3c5f4854":"aa50808e","chunk-08dabaae":"e2a81086","chunk-77d733ef":"1cd4f304","chunk-b9db2696":"ee861edf","chunk-4509dfba":"2b61b8ed","chunk-9ac7d20a":"b86cd4c9"}[e]+".css",o=i.p+s,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===s||d===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===s||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var s=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete a[e],f.parentNode.removeChild(f),n(r)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var s=o[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(t,n){s=o[e]=[t,n]}));t.push(s[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",l.name="ChunkLoadError",l.type=s,l.request=a,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0cec":function(e,t,n){},"3a5e":function(e,t,n){"use strict";var s=n("7a23"),a=Object(s["i"])("div",{class:"water"},null,-1),o=Object(s["i"])("div",{class:"loading"},"Loading...",-1);function r(e,t,n,r,c,i){return Object(s["r"])(),Object(s["e"])("div",null,[a,o])}var c={name:"Loading"};n("aa6a");c.render=r;t["a"]=c},4856:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23"),a=n("2106"),o=n.n(a);function r(e,t){var n=Object(s["y"])("router-view");return Object(s["r"])(),Object(s["e"])("div",null,[Object(s["i"])(n)])}n("d34b");const c={};c.render=r;var i=c,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),d={key:0,class:"auth-form-container"},l={class:"left-section"},f={class:"login-form-container"},p=Object(s["i"])("div",{class:"app-title"},"Issue Tracker",-1),h=Object(s["i"])("div",{class:"app-subtitle"},"Login in your portal",-1),m={class:"input-container"},g=Object(s["i"])("label",{for:"email",class:"form-field-label"},"Email",-1),b={class:"input-container"},k=Object(s["i"])("label",{for:"password",class:"form-field-label"},"Password",-1),O=Object(s["i"])("button",{class:"btn btn-primary","data-cy":"login-button"},"Login",-1),v=Object(s["i"])("div",{class:"sign-up-info"},"Do not have an account yet ?",-1),y=Object(s["i"])("button",{type:"submit",class:"btn btn-secondary","data-cy":"signup-button"}," Sign up ",-1),I=Object(s["i"])("div",{class:"right-section"},null,-1),S={key:1,class:"loading-container"};function j(e,t,n,a,o,r){var c=Object(s["y"])("router-link"),i=Object(s["y"])("Loading");return Object(s["r"])(),Object(s["e"])("div",null,[o.isLoading?Object(s["f"])("",!0):(Object(s["r"])(),Object(s["e"])("div",d,[Object(s["i"])("div",l,[Object(s["i"])("div",f,[o.message.text?(Object(s["r"])(),Object(s["e"])("div",{key:0,class:["info-message",o.message.type],"data-cy":"login-message"},Object(s["A"])(o.message.text),3)):Object(s["f"])("",!0),p,h,Object(s["i"])("form",{onSubmit:t[3]||(t[3]=Object(s["H"])((function(){return r.login&&r.login.apply(r,arguments)}),["prevent"]))},[Object(s["i"])("div",m,[g,Object(s["G"])(Object(s["i"])("input",{id:"email",type:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.email=e}),class:"form-field",placeholder:"Enter your email","data-cy":"email-input"},null,512),[[s["D"],o.email]])]),Object(s["i"])("div",b,[k,Object(s["G"])(Object(s["i"])("input",{id:"password",type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.password=e}),class:"form-field",placeholder:"Enter your password","data-cy":"password-input"},null,512),[[s["D"],o.password]])]),O],32),v,Object(s["i"])(c,{to:"/signup"},{default:Object(s["F"])((function(){return[y]})),_:1})])]),I])),o.isLoading?(Object(s["r"])(),Object(s["e"])("div",S,[Object(s["i"])(i)])):Object(s["f"])("",!0)])}n("5319"),n("ac1f");var _=n("3a5e"),L={name:"Login",data:function(){return{isLoading:!0,email:"",password:"",message:{type:"success",text:""}}},components:{Loading:_["a"]},methods:{login:function(){var e=this;this.isLoading=!0,this.$http.plain.post("/signin",{email:this.email,password:this.password}).then((function(t){return e.signinSuccessful(t)})).catch((function(t){return e.signinFailed(t)}))},signinSuccessful:function(e){this.addTokensToLocalStorage(e.data),this.$router.replace("/home")},signinFailed:function(e){var t=e.response&&e.response.data&&e.response.data.error||"Unable to sign user.";this.isLoading=!1,this.message={type:"error",text:t},this.removeTokensFromLocalStorage(),this.isLoading=!1},addTokensToLocalStorage:function(e){localStorage.access_token=e.access,localStorage.refresh_token=e.refresh,localStorage.access_expires_at=e.access_expires_at,localStorage.refresh_token_expires_at=e.refresh_expires_at},removeTokensFromLocalStorage:function(){delete localStorage.access_token,delete localStorage.refresh_token,delete localStorage.access_expires_at,delete localStorage.refresh_token_expires_at}},created:function(){var e=this;this.$http.secured.post("/refresh",{}).then((function(t){return e.signinSuccessful(t)})).catch((function(){e.removeTokensFromLocalStorage(),e.isLoading=!1}))}};n("6f89");L.render=j;var x=L,w=[{path:"/home",name:"Home",component:function(){return Promise.all([n.e("chunk-3c5f4854"),n.e("chunk-77d733ef")]).then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-4509dfba").then(n.bind(null,"f820"))}},{path:"/board",name:"Board",component:function(){return Promise.all([n.e("chunk-3c5f4854"),n.e("chunk-b9db2696")]).then(n.bind(null,"09b2"))}},{path:"/signup",name:"SignUp",component:function(){return n.e("chunk-9ac7d20a").then(n.bind(null,"34c3"))}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-33c20c30").then(n.bind(null,"c66d"))}},{path:"/add-issue",name:"AddIssue",component:function(){return Promise.all([n.e("chunk-3c5f4854"),n.e("chunk-08dabaae")]).then(n.bind(null,"1b10"))}},{path:"/view-issue/:issue_id",name:"ViewIssue",component:function(){return Promise.all([n.e("chunk-3c5f4854"),n.e("chunk-08dabaae")]).then(n.bind(null,"1b10"))}},{path:"/",name:"Login",component:x}],C=Object(u["a"])({history:Object(u["b"])("/"),routes:w}),E=C,T=n("5530"),D=(n("b0c0"),n("159b"),n("4ec9"),n("a4d3"),n("e01a"),n("5502")),U=n("bc3a"),N=n.n(U),P=N.a.create({baseURL:"/",withCredentials:!0,headers:{"Content-Type":"application/json"}}),A=N.a.create({baseURL:"/",withCredentials:!0,headers:{"Content-Type":"application/json"}});P.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(localStorage.access_token),e})),P.interceptors.response.use(null,(function(e){return e.response&&e.response.config&&401===e.response.status?A.post("/refresh",{},{headers:{Authorization:"Bearer ".concat(localStorage.access_token),x_refresh_token:"Bearer ".concat(localStorage.refresh_token)}}).then((function(t){var n=t.data;localStorage.access_token=n.access_token,localStorage.refresh_token=n.refresh,localStorage.access_expires_at=n.access_expires_at,localStorage.refresh_token_expires_at=n.refresh_expires_at;var s=e.response.config;return s.headers.Authorization="Bearer ".concat(localStorage.access_token),A.request(s)})).catch((function(e){return delete localStorage.access_token,delete localStorage.refresh_token,"/"!==location.pathname&&location.replace("/"),Promise.reject(e)})):Promise.reject(e)}));var F=Object(D["a"])({state:{isLoading:!1,user:{name:"",email:""},tasks:{todo:[],doing:[],done:[]},deadlineIssues:[],recentIssues:[],taskCount:{doing:-1,done:-1,todo:-1},message:{type:"success",text:""},issue:{id:"",title:"",description:"",endDate:"",lane:"",category:"",comments:[]}},mutations:{startLoader:function(e){e.isLoading=!0},loadUserInfoSuccess:function(e,t){e.user={name:t.name,email:t.email},e.taskCount={done:t.done,doing:t.inProgress,todo:t.todo},e.deadlineIssues=t.deadlineIssues,e.recentIssues=t.recentlyUpdatedIssues,e.isLoading=!1},loadUserInfoFailure:function(e){e.isLoading=!1},loadAllIssuesSuccess:function(e,t){var n=[],s=[],a=[];void 0!==t&&void 0!==t.issues&&t.issues.forEach((function(e){"TODO"===e.status?n.push(e):"INPROGRESS"===e.status?s.push(e):a.push(e)}));var o=function(e){var t,n=new Map,s=new Map,a=[];e.forEach((function(e,t){n.set(e.id,t),s.set(e.next_issue,t)})),n.forEach((function(e,n){void 0===s.get(n)&&(t=n)}));while(null!==t&&void 0!==t)a.push(e[n.get(t)]),t=e[n.get(t)].next_issue;return a};e.tasks={todo:o(n),doing:o(s),done:o(a)},e.isLoading=!1},loadAllIssuesFailure:function(e,t){e.isLoading=!1,void 0!==t&&void 0!==t.tasks&&t.tasks.forEach((function(e){console.log(e)}))},signoutSuccess:function(e){e.isLoading=!1,delete localStorage.access_token,delete localStorage.refresh_token,delete localStorage.access_expires_at,delete localStorage.refresh_token_expires_at},signoutFailure:function(e){e.isLoading=!0},issueOperationSuccess:function(e,t){e.isLoading=!1,e.message={type:"success",text:t},setTimeout((function(){e.message={type:"success",text:""}}),5e3)},issueOperationFailure:function(e,t){e.isLoading=!1,e.message={type:"error",text:t},setTimeout((function(){e.message={type:"error",text:""}}),5e3)},getIssueSuccess:function(e,t){e.isLoading=!1,e.issue=t},reOrderIssues:function(e,t){switch(t.lane){case"TODO":e.tasks.todo=t.issues;break;case"DOING":e.tasks.doing=t.issues;break;default:e.tasks.done=t.issues;break}},addCommentSuccess:function(e,t){var n=[],s=JSON.parse(JSON.stringify(e.issue.comments));s&&s.forEach((function(e){return n.push(e)})),n.push(t.comment),e.issue=Object(T["a"])(Object(T["a"])({},e.issue),{},{comments:n}),e.isLoading=!1},addCommentFailure:function(e,t){e.isLoading=!1,e.message={type:"error",text:t},setTimeout((function(){e.message={type:"error",text:""}}),5e3)},deleteCommentSuccess:function(e,t){var n=t.commentId,s=[],a=JSON.parse(JSON.stringify(e.issue.comments));a&&a.forEach((function(e){e.comment_number!==n&&s.push(e)})),e.issue=Object(T["a"])(Object(T["a"])({},e.issue),{},{comments:s}),e.isLoading=!1},deleteCommentFailure:function(e,t){e.isLoading=!1,e.message={type:"error",text:t},setTimeout((function(){e.message={type:"error",text:""}}),5e3)}},actions:{loadUserInfo:function(e,t){var n=e.commit;t||n("startLoader"),P.get("/api/v1/user").then((function(e){return n("loadUserInfoSuccess",e.data)})).catch((function(e){return n("loadUserInfoFailure",e)}))},loadAllIssues:function(e,t){var n=e.commit;t||n("startLoader"),P.get("/api/v1/issues").then((function(e){return n("loadAllIssuesSuccess",e.data)})).catch((function(e){return n("loadAllIssuesFailure",e)}))},logout:function(e){var t=e.commit;t("startLoader"),P.delete("/signin").then((function(){return t("signoutSuccess")})).catch((function(){return t("signoutFailure")}))},addNewIssue:function(e,t){var n=e.commit,s=e.dispatch;n("startLoader"),P.post("/api/v1/issues",t).then((function(){n("issueOperationSuccess","Issue is added successfully."),s("loadAllIssues",!0),s("loadUserInfo",!0)})).catch((function(){return n("issueOperationFailure","Unable to add the issue, please try again later.")}))},updateIssue:function(e,t){var n=e.commit,s=e.dispatch,a=t.payload,o=t.id;n("startLoader"),P.patch("/api/v1/issues/".concat(o),a).then((function(){n("issueOperationSuccess","Issue is updated successfully."),s("loadAllIssues",!0),s("loadUserInfo",!0)})).catch((function(e){console.log(e),n("issueOperationFailure","Unable to update the issue, please try again later")}))},updateIssueStatus:function(e,t){var n=e.commit,s=e.dispatch,a=t.status,o=t.id,r=a.toUpperCase();"Doing"===a&&(r="INPROGRESS"),n("startLoader"),P.patch("/api/v1/issues/".concat(o),{status:r}).then((function(){n("issueOperationSuccess","Issue is updated successfully."),s("loadAllIssues",!0),s("loadUserInfo",!0)})).catch((function(e){console.log(e),n("issueOperationFailure","Unable to update the issue, please try again later")}))},updateIssueStatusOnDrag:function(e,t){var n=e.state,s={};"TODO"===t.lane?s=t.newIndex!==n.tasks.todo.length-1?{issue:{next_issue:n.tasks.todo[t.newIndex+1].id,status:"TODO"}}:{issue:{next_issue:-1,status:"TODO"}}:"DONE"===t.lane?s=t.newIndex!==n.tasks.done.length-1?{issue:{next_issue:n.tasks.done[t.newIndex+1].id,status:"DONE"}}:{issue:{next_issue:-1,status:"DONE"}}:"DOING"===t.lane&&(s=t.newIndex!==n.tasks.doing.length-1?{issue:{next_issue:n.tasks.doing[t.newIndex+1].id,status:"INPROGRESS"}}:{issue:{next_issue:-1,status:"INPROGRESS"}}),P.patch("/api/v1/order/".concat(t.id),s).then((function(){console.log("Issue is updated.")})).catch((function(e){console.log(e)}))},getIssue:function(e,t){var n=e.commit,s=t.id;n("startLoader"),P.get("/api/v1/issues/".concat(s)).then((function(e){n("getIssueSuccess",e.data)})).catch((function(){return n("issueOperationFailure","Unable to fetch issue, please check the number or add a new one")}))},addComment:function(e,t){var n=e.commit,s=t.issueId,a=t.description;n("startLoader"),P.post("/api/v1/comments",{description:a,issue_id:s}).then((function(e){n("addCommentSuccess",{issueId:s,comment:e.data})})).catch((function(e){console.log(e),n("addCommentFailure","Unable to add new comment!")}))},deleteComment:function(e,t){var n=e.commit,s=t.issueId,a=t.commentId;n("startLoader"),P.delete("/api/v1/comments/".concat(a),{data:{issue_id:s}}).then((function(){n("deleteCommentSuccess",{issueId:s,commentId:a})})).catch((function(e){console.log(e),n("deleteCommentFailure","Unable to delete comment!")}))}},modules:{},getters:{getUser:function(e){return Object(T["a"])({},e.user)},hasDeadlineIssues:function(e){return e.deadlineIssues.length>0},hasRecentIssues:function(e){return e.recentIssues.length>0},hasEmptyActionItems:function(e){return 0===e.recentIssues.length||0===e.deadlineIssues.length},getTaskCount:function(e){return Object(T["a"])(Object(T["a"])({},e.taskCount),{},{total:e.taskCount.todo+e.taskCount.done+e.taskCount.doing})},getIssues:function(e){return function(t){return"TODO"===t?e.tasks.todo:"DOING"===t?e.tasks.doing:e.tasks.done}},isUserInfoLoaded:function(e){return e.taskCount.done>=0&&e.taskCount.doing>=0&&e.taskCount.todo>=0},areIssuesLoaded:function(e){return e.taskCount.todo<=e.tasks.todo.length&&e.taskCount.doing<=e.tasks.doing.length&&e.taskCount.done<=e.tasks.done.length},getIssue:function(e){return function(t){var n=t.type,s=t.index;switch(n){case"DEADLINE":return e.deadlineIssues[s];case"RECENT":return e.recentIssues[s];case"TODO":return e.tasks.todo[s];case"DOING":return e.tasks.doing[s];case"DONE":return e.tasks.done[s];default:return}}}}});Object(s["d"])(i).use(F).use(o.a,{secured:P,plain:A}).use(E).mount("#app")},"6f89":function(e,t,n){"use strict";n("4856")},a7a1:function(e,t,n){},aa6a:function(e,t,n){"use strict";n("a7a1")},d34b:function(e,t,n){"use strict";n("0cec")}});
//# sourceMappingURL=app.c01b359d.js.map