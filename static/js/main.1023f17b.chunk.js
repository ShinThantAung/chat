(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{115:function(e,t,a){e.exports=a(161)},161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),i=a.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(46),c=a(11),u=a(12),l=a.n(u),p=a(24),m=a(16),h=a(17),d=a(19),g=a(18),f=a(45),b=function(e){return{main:Object(f.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},noAccountHeader:{width:"100%"},signUpLink:{width:"100%",textDecoration:"none",color:"#303f9f",fontWeight:"bolder"},errorText:{color:"red",textAlign:"center"}}},w=a(191),x=a(201),v=a(192),E=a(190),C=a(69),y=a.n(C),k=a(188),S=a(74),O=a(193),j=a(50),T=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value})}},e.submitLogin=function(){var t=Object(p.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,j.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(){e.props.history.push("/dashboard")}),(function(t){e.setState({serverError:!0}),console.log("Error logging in: ",t)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={email:null,password:null,serverError:!1},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(k.a,null),r.a.createElement(E.a,{className:t.paper},r.a.createElement(S.a,{component:"h1",variant:"h5"},"Log In!"),r.a.createElement("form",{onSubmit:function(t){return e.submitLogin(t)},className:t.form},r.a.createElement(w.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(x.a,{htmlFor:"login-email-input"},"Enter Your Email"),r.a.createElement(v.a,{autoComplete:"email",autoFocus:!0,onChange:function(t){return e.userTyping("email",t)},id:"login-email-input"})),r.a.createElement(w.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(x.a,{htmlFor:"login-password-input"},"Enter Your Password"),r.a.createElement(v.a,{autoComplete:"current-password",type:"password",onChange:function(t){return e.userTyping("password",t)},id:"login-password-input"})),r.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Log In")),this.state.serverError?r.a.createElement(S.a,{className:t.errorText,component:"h5",variant:"h6"},"Incorrect Login Information"):null,r.a.createElement("h5",{className:t.noAccountHeader},"Don't Have An Account?"),r.a.createElement(o.b,{className:t.signUpLink,to:"/signup"},"Sign Up!")))}}]),a}(r.a.Component),N=y()(b)(T),F=function(e){return{main:Object(f.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},hasAccountHeader:{width:"100%"},logInLink:{width:"100%",textDecoration:"none",color:"#303f9f",fontWeight:"bolder"},errorText:{color:"red",textAlign:"center"}}},I=a(50),W=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value});break;case"passwordConfirmation":e.setState({passwordConfirmation:a.target.value})}},e.formIsValid=function(){return e.state.password===e.state.passwordConfirmation},e.submitSignup=function(t){t.preventDefault(),e.formIsValid()?I.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){var a={email:t.user.email,friends:[],messages:[]};I.firestore().collection("users").doc(e.state.email).set(a).then((function(){e.props.history.push("/dashboard")}),(function(t){console.log("Failed to add user to the database: ",t),e.setState({signupError:"Failed to add user"})}))}),(function(t){console.log("Failed to create user: ",t),e.setState({signupError:"Failed to add user"})})):e.setState({signupError:"Passwords do not match"})},e.state={email:null,password:null,passwordConfirmation:null,signupError:""},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(k.a,null),r.a.createElement(E.a,{className:t.paper},r.a.createElement(S.a,{component:"h1",variant:"h5"},"Sign Up!"),r.a.createElement("form",{onSubmit:function(t){return e.submitSignup(t)},className:t.form},r.a.createElement(w.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(x.a,{htmlFor:"signup-email-input"},"Enter Your Email"),r.a.createElement(v.a,{autoComplete:"email",autoFocus:!0,onChange:function(t){return e.userTyping("email",t)},id:"signup-email-input"})),r.a.createElement(w.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(x.a,{htmlFor:"signup-password-input"},"Create A Password"),r.a.createElement(v.a,{type:"password",onChange:function(t){return e.userTyping("password",t)},id:"signup-password-input"})),r.a.createElement(w.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(x.a,{htmlFor:"signup-password-confirmation-input"},"Confirm Your Password"),r.a.createElement(v.a,{type:"password",onChange:function(t){return e.userTyping("passwordConfirmation",t)},id:"signup-password-confirmation-input"})),r.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Submit")),this.state.signupError?r.a.createElement(S.a,{className:t.errorText,component:"h5",variant:"h6"},this.state.signupError):null,r.a.createElement("h5",{className:t.hasAccountHeader},"Already Have An Account?"),r.a.createElement(o.b,{className:t.logInLink,to:"/login"},"Log In!")))}}]),a}(r.a.Component),D=y()(F)(W),A=a(5),B=function(e){return{main:Object(f.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px"),position:"absolute",width:"350px",top:"50px",left:"calc(50% + 150px - 175px)"},input:{},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},errorText:{color:"red",textAlign:"center"}}},L=a(50),M=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).userTyping=function(t,a){switch(t){case"username":e.setState({username:a.target.value});break;case"message":e.setState({message:a.target.value})}},e.submitNewChat=function(){var t=Object(p.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e.userExists();case 3:if(!t.sent){t.next=9;break}return t.next=7,e.chatExists();case 7:t.sent?e.goToChat():e.createChat();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.buildDocKey=function(){return[L.auth().currentUser.email,e.state.username].sort().join(":")},e.createChat=function(){e.props.newChatSubmitFn({sendTo:e.state.username,message:e.state.message})},e.goToChat=function(){return e.props.goToChatFn(e.buildDocKey(),e.state.message)},e.chatExists=Object(p.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.buildDocKey(),t.next=3,L.firestore().collection("chats").doc(a).get();case 3:return n=t.sent,console.log(n.exists),t.abrupt("return",n.exists);case 6:case"end":return t.stop()}}),t)}))),e.userExists=Object(p.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.firestore().collection("users").get();case 2:return a=t.sent,n=a.docs.map((function(e){return e.data().email})).includes(e.state.username),e.setState({serverError:!n}),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)}))),e.state={username:null,message:null},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(k.a,null),r.a.createElement(E.a,{className:t.paper},r.a.createElement(S.a,{component:"h1",variant:"h5"},"Send A Message!"),r.a.createElement("form",{className:t.form,onSubmit:function(t){return e.submitNewChat(t)}},r.a.createElement(w.a,{fullWidth:!0},r.a.createElement(x.a,{htmlFor:"new-chat-username"},"Enter Your Friend's Email"),r.a.createElement(v.a,{required:!0,className:t.input,autoFocus:!0,onChange:function(t){return e.userTyping("username",t)},id:"new-chat-username"})),r.a.createElement(w.a,{fullWidth:!0},r.a.createElement(x.a,{htmlFor:"new-chat-message"},"Enter Your Message"),r.a.createElement(v.a,{required:!0,className:t.input,onChange:function(t){return e.userTyping("message",t)},id:"new-chat-message"})),r.a.createElement(O.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,type:"submit"},"Send")),this.state.serverError?r.a.createElement(S.a,{component:"h5",variant:"h6",className:t.errorText},"Unable to locate the user"):null))}},{key:"componentWillMount",value:function(){L.auth().currentUser||this.props.history.push("/login")}}]),a}(r.a.Component),R=Object(A.a)(B)(M),H=a(194),V=a(195),K=a(197),U=a(196),Y=a(202),z=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"auto",position:"absolute",left:"0",width:"auto",boxShadow:"1px 1px 1px green"},listItem:{cursor:"pointer"},newChatBtn:{borderRadius:"0px"},unreadMessage:{color:"green",position:"absolute",top:"0",right:"5px"}}},q=a(199),P=a(198),G=a(103),J=a.n(G),Q=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).userIsSender=function(t){return t.messages[t.messages.length-1].sender===e.props.userEmail},e.newChat=function(){return e.props.newChatBtnFn()},e.selectChat=function(t){return e.props.selectChatFn(t)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return this.props.chats.length>0?r.a.createElement("div",{className:t.root},r.a.createElement(O.a,{variant:"contained",fullWidth:!0,color:"primary",onClick:this.newChat,className:t.newChatBtn},"New Message"),r.a.createElement(H.a,null,this.props.chats.map((function(a,n){return r.a.createElement("div",{key:n},r.a.createElement(V.a,{onClick:function(){return e.selectChat(n)},className:t.listItem,selected:e.props.selectedChatIndex===n,alignItems:"flex-start"},r.a.createElement(U.a,null,r.a.createElement(Y.a,{alt:"Remy Sharp"},a.users.filter((function(t){return t!==e.props.userEmail}))[0].split("")[0])),r.a.createElement(K.a,{primary:a.users.filter((function(t){return t!==e.props.userEmail}))[0],secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{component:"span",color:"textPrimary"},a.messages[a.messages.length-1].message.substring(0,30)+" ..."))}),!1!==a.receiverHasRead||e.userIsSender(a)?null:r.a.createElement(P.a,null,r.a.createElement(J.a,{className:t.unreadMessage}))),r.a.createElement(q.a,null))})))):r.a.createElement("div",{className:t.root},r.a.createElement(O.a,{variant:"contained",fullWidth:!0,color:"primary",onClick:this.newChat,className:t.newChatBtn},"New Message"),r.a.createElement(H.a,null))}}]),a}(r.a.Component),Z=Object(A.a)(z)(Q),$=function(e){return{content:{height:"calc(100vh - 100px)",overflow:"auto",padding:"25px",marginLeft:"300px",boxSizing:"border-box",overflowY:"scroll",top:"50px",width:"calc(100% - 300px)",position:"absolute"},userSent:{float:"right",clear:"both",padding:"20px",boxSizing:"border-box",wordWrap:"break-word",marginTop:"10px",backgroundColor:"#707BC4",color:"white",width:"300px",borderRadius:"10px"},friendSent:{float:"left",clear:"both",padding:"20px",boxSizing:"border-box",wordWrap:"break-word",marginTop:"10px",backgroundColor:"#707BC4",color:"white",width:"300px",borderRadius:"10px"},chatHeader:{width:"calc(100% - 301px)",height:"30px",backgroundColor:"#344195",position:"fixed",marginLeft:"301px",fontSize:"10px",textAlign:"center",color:"white",paddingTop:"10px",boxSizing:"border-box"}}},X=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){var e=document.getElementById("chatview-container");e&&e.scrollTo(0,e.scrollHeight)},e.componentDidUpdate=function(){var e=document.getElementById("chatview-container");e&&e.scrollTo(0,e.scrollHeight)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return void 0===this.props.chat?r.a.createElement("main",{className:t.content}):void 0!==this.props.chat?r.a.createElement("div",null,r.a.createElement("div",{className:t.chatHeader},"Your conversation with ",this.props.chat.users.filter((function(t){return t!==e.props.user}))[0]),r.a.createElement("main",{id:"chatview-container",className:t.content},this.props.chat.messages.map((function(a,n){return r.a.createElement("div",{key:n,className:a.sender===e.props.user?t.userSent:t.friendSent},a.message)})))):r.a.createElement("div",{className:"chatview-container"},"Loading...")}}]),a}(r.a.Component),_=Object(A.a)($)(X),ee=a(200),te=a(104),ae=a.n(te),ne=function(e){return{sendBtn:{color:"blue",cursor:"pointer","&:hover":{color:"gray"}},chatTextBoxContainer:{position:"absolute",bottom:"15px",left:"315px",boxSizing:"border-box",overflow:"auto",width:"calc(100% - 300px - 50px)"},chatTextBox:{width:"calc(100% - 25px)"}}},re=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).userTyping=function(t){return 13===t.keyCode?e.submitMessage():e.setState({chatText:t.target.value})},e.messageValid=function(e){return e&&e.replace(/\s/g,"").length},e.userClickedInput=function(){return e.props.userClickedInputFn()},e.submitMessage=function(){e.messageValid(e.state.chatText)&&(e.props.submitMessageFn(e.state.chatText),document.getElementById("chattextbox").value="")},e.state={chatText:""},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.chatTextBoxContainer},r.a.createElement(ee.a,{placeholder:"Type your message..",onKeyUp:function(t){return e.userTyping(t)},id:"chattextbox",className:t.chatTextBox,onFocus:this.userClickedInput}),r.a.createElement(ae.a,{onClick:this.submitMessage,className:t.sendBtn}))}}]),a}(r.a.Component),se=Object(A.a)(ne)(re),ie=function(e){return{signOutBtn:{position:"absolute",bottom:"0px",left:"0px",width:"300px",borderRadius:"0px",backgroundColor:"#227092",height:"35px",boxShadow:"0px 0px 2px black",color:"white"}}},oe=a(50),ce=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).signOut=function(){return oe.auth().signOut()},e.submitMessage=function(t){var a=e.buildDocKey(e.state.chats[e.state.selectedChat].users.filter((function(t){return t!==e.state.email}))[0]);oe.firestore().collection("chats").doc(a).update({messages:oe.firestore.FieldValue.arrayUnion({sender:e.state.email,message:t,timestamp:Date.now()}),receiverHasRead:!1})},e.buildDocKey=function(t){return[e.state.email,t].sort().join(":")},e.newChatBtnClicked=function(){return e.setState({newChatFormVisible:!0,selectedChat:null})},e.newChatSubmit=function(){var t=Object(p.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.buildDocKey(a.sendTo),t.next=3,oe.firestore().collection("chats").doc(n).set({messages:[{message:a.message,sender:e.state.email}],users:[e.state.email,a.sendTo],receiverHasRead:!1});case 3:e.setState({newChatFormVisible:!1}),e.selectChat(e.state.chats.length-1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectChat=function(){var t=Object(p.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedChat:a,newChatFormVisible:!1});case 2:e.messageRead();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.goToChat=function(){var t=Object(p.a)(l.a.mark((function t(a,n){var r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.split(":"),s=e.state.chats.find((function(e){return r.every((function(t){return e.users.includes(t)}))})),e.setState({newChatFormVisible:!1}),t.next=5,e.selectChat(e.state.chats.indexOf(s));case 5:e.submitMessage(n);case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.messageRead=function(){var t=e.state.selectedChat,a=e.buildDocKey(e.state.chats[t].users.filter((function(t){return t!==e.state.email}))[0]);e.clickedMessageWhereNotSender(t)?oe.firestore().collection("chats").doc(a).update({receiverHasRead:!0}):console.log("Clicked message where the user was the sender")},e.clickedMessageWhereNotSender=function(t){return e.state.chats[t].messages[e.state.chats[t].messages.length-1].sender!==e.state.email},e.componentWillMount=function(){oe.auth().onAuthStateChanged(function(){var t=Object(p.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=4;break}e.props.history.push("/login"),t.next=6;break;case 4:return t.next=6,oe.firestore().collection("chats").where("users","array-contains",a.email).onSnapshot(function(){var t=Object(p.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.docs.map((function(e){return e.data()})),t.next=3,e.setState({email:a.email,chats:r,friends:[]});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},e.state={selectedChat:null,newChatFormVisible:!1,email:null,friends:[],chats:[]},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.classes;return this.state.email?r.a.createElement("div",{className:"dashboard-container",id:"dashboard-container"},r.a.createElement(Z,{history:this.props.history,userEmail:this.state.email,selectChatFn:this.selectChat,chats:this.state.chats,selectedChatIndex:this.state.selectedChat,newChatBtnFn:this.newChatBtnClicked}),this.state.newChatFormVisible?null:r.a.createElement(_,{user:this.state.email,chat:this.state.chats[this.state.selectedChat]}),null===this.state.selectedChat||this.state.newChatFormVisible?null:r.a.createElement(se,{userClickedInputFn:this.messageRead,submitMessageFn:this.submitMessage}),this.state.newChatFormVisible?r.a.createElement(R,{goToChatFn:this.goToChat,newChatSubmitFn:this.newChatSubmit}):null,r.a.createElement(O.a,{onClick:this.signOut,className:e.signOutBtn},"LogOut")):r.a.createElement("div",null,"LOADING....")}}]),a}(r.a.Component),ue=Object(A.a)(ie)(ce),le=a(50);a(160),le.initializeApp({apiKey:"AIzaSyDS-knD91grk11ncjxKIDIJ8kg5f3WMQKo",authDomain:"chatapp-41400.firebaseapp.com",databaseURL:"https://chatapp-41400.firebaseio.com",projectId:"chatapp-41400",storageBucket:"chatapp-41400.appspot.com",messagingSenderId:"83377735851",appId:"1:83377735851:web:d4c4535f522b1b1be78fee",measurementId:"G-HQYVDFKZ9G"});var pe=r.a.createElement(o.a,null,r.a.createElement("div",{id:"routing-container"},r.a.createElement(c.a,{path:"/chat",component:N}),r.a.createElement(c.a,{path:"/login",component:N}),r.a.createElement(c.a,{path:"/signup",component:D}),r.a.createElement(c.a,{path:"/dashboard",component:ue})));i.a.render(pe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.1023f17b.chunk.js.map