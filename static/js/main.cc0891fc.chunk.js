(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){},26:function(e,t,a){e.exports=a(42)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),o=a.n(s),i=a(2),c=a(3),l=a(5),m=a(4),u=a(6),p=(a(14),a(7)),d=Object(n.createContext)(),h=function(e){var t={id:"init id",name:localStorage.getItem("name"),authenticated:localStorage.getItem("authenticated")};return r.a.createElement(d.Provider,{value:[t,function(e,a){t.id=e,t.authenticated=a},[],!1,"","Sign Up",function(e){t.name=e}]},e.children)},g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).authenticate=function(){var e=localStorage.getItem("name");!0===a.context[0].athenticated||"true"===a.context[0].athenticated?a.setState({auth:!0},function(){!0!==a.state.auth&&"true"!==a.state.auth||(document.location="./play",console.log("headerright's balling!"+a.state.auth))}):!1!==a.context[0].athenticated&&"false"!==a.context[0].athenticated||a.setState({auth:!1},function(){!1!==a.state.auth&&"false"!==a.state.auth||(document.location="./",console.log("headerright's!"+a.state.auth))}),a.setState({name:e})},a.signout=function(){localStorage.setItem("authenticated",!1),localStorage.removeItem("id"),localStorage.removeItem("name"),localStorage.removeItem("token"),a.setState({auth:localStorage.getItem("authenticated")},function(){a.context[1]("",!1),"false"!==a.state.auth&&!1!==a.state.auth||(document.location="./")}),console.log("auth is now: "+a.state.auth)},a.activateForceUpdate=function(){a.setState({auth:!0}),a.setState({name:localStorage.getItem("name")})},a.state={auth:"",name:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({auth:this.context[0].authenticated})}},{key:"render",value:function(){return"true"===this.state.auth||!0===this.state.auth?(console.log("THIS IS WHAT AUTH HAS BECOME: "+this.state.auth),r.a.createElement("div",{className:"header-right"},r.a.createElement("div",{style:{display:"none"}},r.a.createElement("button",{id:"updateHeaderRight",onClick:this.activateForceUpdate})),r.a.createElement("div",{className:"name"},r.a.createElement("img",{src:"/shufflelele/uploads/profileimages/default.png",alt:"profile pic"}),localStorage.getItem("name")),r.a.createElement("div",{className:"sign-out",onClick:this.signout},"Sign Out"))):r.a.createElement("div",{className:"header-right"},r.a.createElement("div",{style:{display:"none"}},r.a.createElement("button",{id:"updateHeaderRight",onClick:this.activateForceUpdate})),r.a.createElement("div",{className:"sign-up"},r.a.createElement(p.b,{to:"./signup"},"Sign Up")),r.a.createElement("div",{className:"sign-in"},r.a.createElement(p.b,{to:"./"},"Sign In")))}}]),t}(n.Component);g.contextType=d;var f=g,y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={msg:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({msg:this.context[0].id})}},{key:"render",value:function(){return r.a.createElement("div",{className:"header-middle"})}}]),t}(n.Component);y.contextType=d;var b=y,E=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo"},"Shuffling"),r.a.createElement(b,null),r.a.createElement(f,null))},v=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("footer",{className:"footer text-center"},"Invite your friends from Facebook and Twitter to join Cariprop.com.",r.a.createElement("br",null),"Cariprop @2019 ",r.a.createElement(p.b,{to:"./terms"},"Cariprop's Terms of Use and Privacy Policy")))},S=a(11),N=a(15),j=a(12),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).signup=function(e){e.preventDefault(),fetch("https://immense-sierra-36950.herokuapp.com/signup",{method:"POST",body:JSON.stringify({email:a.state.email,password:a.state.password,firstname:a.state.firstname,lastname:a.state.lastname,displayedname:a.state.displayedname,dateofbirth:a.state.dateofbirth,gender:a.state.gender}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return"You were just signed up!"===e.response_msg?a.movingToAd(e.id):a.setState({error:e.response_msg})}).catch(function(e){console.log("Error message: "+e)})},a.movingToAd=function(e){localStorage.setItem("authenticated",!0),localStorage.setItem("token",1),localStorage.setItem("id",e),window.location="/play"},a.state={email:"",password:"",firstname:"",lastname:"",displayedname:"",gender:"",dateofbirth:"",error:""},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target.id,a=e.target.value;this.setState(Object(N.a)({},t,a))}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"auth-scontainer",style:{backgroundImage:"url(/shufflelele/background.png)",backgroundRepeat:"no-repeat",backgroundSize:"100%"}},r.a.createElement("div",{className:"auth"},r.a.createElement("div",{className:"error_msg"},this.state.error),r.a.createElement("form",{onSubmit:this.signup,className:"form-signup"},r.a.createElement("h5",{className:"h3 mb-3 font-weight-normal"},"Sign up for Cariprop"),r.a.createElement("label",{className:"sr-only"},"Email address"),r.a.createElement("input",{type:"email",id:"email",className:"form-control",placeholder:"Email address",onChange:this.handleChange,required:!0,autoFocus:!0}),r.a.createElement("label",{className:"sr-only"},"Password"),r.a.createElement("input",{type:"password",id:"password",className:"form-control",placeholder:"Password",onChange:this.handleChange,required:!0}),r.a.createElement("label",{className:"sr-only"},"First Name"),r.a.createElement("input",{type:"text",id:"firstname",className:"form-control",placeholder:"First Name",onChange:this.handleChange,required:!0}),r.a.createElement("label",{className:"sr-only"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastname",className:"form-control",placeholder:"Last Name",onChange:this.handleChange,required:!0}),r.a.createElement("label",{className:"sr-only"},"Displayed Name"),r.a.createElement("input",{type:"text",id:"displayedname",className:"form-control",placeholder:"Displayed Name (What others will see)",onChange:this.handleChange,required:!0}),r.a.createElement("select",{id:"gender",className:"custom-select",onChange:this.handleChange,required:!0},r.a.createElement("option",{defaultValue:!0},"Gender"),r.a.createElement("option",null),r.a.createElement("option",null,"Female"),r.a.createElement("option",null,"Male")),r.a.createElement("label",{className:"sr-only"},"Date of Birth"),r.a.createElement("input",{type:"date",id:"dateofbirth",className:"form-control",placeholder:"MM/DD/YYYY",onChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"checkbox mb-3"},r.a.createElement("label",null,"By signing up you agree to the ",r.a.createElement(p.b,{to:"./terms",target:"_blank"},"Terms of Use and Privacy Policies of Cariprop"),".")),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Sign Up"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.b,{to:"/"},"Back Sign In"))))}}]),t}(n.Component),k=(a(39),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).authenticate=function(e){e.preventDefault(),fetch("https://immense-sierra-36950.herokuapp.com/auth",{method:"POST",body:JSON.stringify({email:a.state.email,password:a.state.password}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return"You are authorized to proceed!"===e.response_msg?a.setState({id:e.id,name:e.name,token:e.token,isauthenticated:!0}):a.setState({error:"The email or password is incorrect."})})},a.state={id:"",email:"",password:"",name:"",token:"",error:"",isauthenticated:!1},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target.id,a=e.target.value;this.setState(Object(N.a)({},t,a))}},{key:"componentDidMount",value:function(){console.log("context in login: "+this.context[0].authenticated)}},{key:"render",value:function(){return!0===this.state.isauthenticated?(localStorage.setItem("id",this.state.id),localStorage.setItem("name",this.state.name),localStorage.setItem("authenticated","true"),localStorage.setItem("token",this.state.token),this.context[1](this.state.id,!0),this.context[6](this.state.name),document.getElementById("updateHeaderRight").click(),r.a.createElement("div",null,r.a.createElement(S.a,{to:{pathname:"/play",state:""}}))):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"auth-scontainer",style:{backgroundImage:"url(/shufflelele/background.png)",backgroundRepeat:"no-repeat",backgroundSize:"100%"}},r.a.createElement("div",{className:"succint-hiw"},"Watch an ad for the chance to win some money for yourself and a charity."),r.a.createElement("div",{className:"auth"},r.a.createElement("div",{className:"error_msg"},this.state.error),r.a.createElement("form",{onSubmit:this.authenticate,className:"form-signin"},r.a.createElement("h5",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),r.a.createElement("label",{className:"sr-only"},"Email address"),r.a.createElement("input",{type:"email",id:"email",className:"form-control",placeholder:"Email address",onChange:this.handleChange,required:!0,autoFocus:!0}),r.a.createElement("label",{className:"sr-only"},"Password"),r.a.createElement("input",{type:"password",id:"password",className:"form-control",placeholder:"Password",onChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"checkbox mb-3"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"remember-me"})," Remember me")),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Sign In"})),r.a.createElement(p.b,{to:"/signup"},"Create an account!")),r.a.createElement("div",{className:"hiw"},r.a.createElement("h4",null,"How it works!"),r.a.createElement("p",null,"Sign in, watch an ad to earn some money credits, put yours and 9 other people's credits in a pool and vote for who takes it all, cash out and give any percentage of your winnings (could be 1% could be 100%) to a selected charity, that's it. Even if someone else wins a round, you have just contributed towards a good charity. You've done some good. And also, you can play as many times as you want."))))}}]),t}(n.Component));k.contextType=d;var C=k,w=(a(17),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).setMessage=function(e){var t=e.target.value;a.setState({message:t})},a.message=function(){var e=localStorage.getItem("id"),t=localStorage.getItem("name"),n=document.getElementById("message").value,r=a.props.name;document.getElementById("message").value="",fetch("https://immense-sierra-36950.herokuapp.com/message",{method:"POST",body:JSON.stringify({id:e,name:t,message:n,propping_id:r}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){return"Message was successfully inserted!"===e.response_msg?console.log("Message sent!"):console.log("could not retrieve players")})},a.state={message:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("input",{type:"text",onKeyPress:this.setMessage,id:"message",className:"comment_input",placeholder:"Say something!"}),r.a.createElement("input",{type:"button",onClick:this.message,className:"btn btn-primary",value:">>"}))}}]),t}(n.Component)),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).subtractCredit=function(e){var t=a.state.credit;fetch("https://immense-sierra-36950.herokuapp.com/subtractcredit",{method:"POST",body:JSON.stringify({id:e,credit:t}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){return"Subtracting credit successful!"===e.response_msg?console.log(t+" subtracted successfully!"):console.log("could not subtract credit")})},a.fectchPlayers=function(e){a.setState({propping_id:e}),fetch("https://immense-sierra-36950.herokuapp.com/players",{method:"POST",body:JSON.stringify({propping_id:e}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){return"Here are the players!"===e.response_msg?a.setState({players:e.players}):console.log("could not retrieve players")})},a.fectchMessages=function(e){fetch("https://immense-sierra-36950.herokuapp.com/fetchmessages",{method:"POST",body:JSON.stringify({propping_id:e}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){return"Here are the messages!"===e.response_msg?a.setState({messages:e.messages}):console.log("could not retrieve messages")})},a.runFetchMessages=function(){console.log("We're in messages:"),a.props.name[1]>2&&setTimeout(function(){a.fectchMessages(a.props.name[0]),a.runFetchMessages()},2e3)},a.state={id:localStorage.getItem("id"),players:[],messages:[],fectchplayers:!1,runfetchmessages:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.name[0],a=this.props.name[2]/10;this.setState({propping_id:t}),this.setState({credit:a},function(){e.subtractCredit(e.state.id)}),this.fectchPlayers(t),this.runFetchMessages()}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"messages"},this.state.messages.map(function(e,t){return r.a.createElement("div",{key:t,className:"message"},e.name+" | ",e.message)})),r.a.createElement("div",{className:"players"},this.state.players.map(function(e,t){return r.a.createElement("div",{key:t,className:"player"},r.a.createElement("div",{className:"name"},r.a.createElement("img",{src:"/shufflelele/uploads/profileimages/default.png",alt:"profile"}),e.displayedname),r.a.createElement("div",{className:"vote"}))})))}}]),t}(n.Component);I.contextType=d;var T=I,_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).addplayer=function(){var e=localStorage.getItem("id"),t=localStorage.getItem("name");fetch("https://immense-sierra-36950.herokuapp.com/addplayer",{method:"POST",body:JSON.stringify({id:e,name:t}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){return"Player Added"===e.response_msg?a.checkPropping(e.propping_id):console.log("could not add player!")})},a.isProppingReady=function(e,t){t<1?(a.setState({numberofplayers:t}),setTimeout(a.checkPropping(e),2e3)):(a.context[3]=!0,a.context[4]=e,a.setState({propping_id:e}),a.setState({fetchplayers:!0}))},a.checkPropping=function(e){fetch("https://immense-sierra-36950.herokuapp.com/playersfrompropping",{method:"POST",body:JSON.stringify({propping_id:e}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){return"Here are the players!"===e.response_msg?a.isProppingReady(e.players[0]._id,e.players[0].numberofplayers):console.log("could not retrieve players")})},a.state={id:1,email:"email1",numberofplayers:0,playerids:[],players:[],time:60,propping_id:0,fetchplayers:!1,creditearned:0,winner:{name:""},prize:0,prize_w_currency:"",new_prize:0,credit_now_available:0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.addplayer()}},{key:"render",value:function(){return!0===this.state.fetchplayers?r.a.createElement("section",null,r.a.createElement("div",{className:"play-container"},r.a.createElement("div",{className:"play-instructions"},r.a.createElement("h6",null,"We're shuffling... Say hi!")),r.a.createElement("div",{className:"play-comment"},r.a.createElement(w,{name:this.state.propping_id})),r.a.createElement("div",{className:"play-chat"},r.a.createElement(T,{name:[this.state.propping_id,this.state.time,this.state.prize]})))):r.a.createElement("section",null,r.a.createElement("div",{className:"play-container"},r.a.createElement("div",{className:"play-instructions"},r.a.createElement("h6",null,"Waiting for ",2-this.state.numberofplayers," other people to join..."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",null,"If it's taking too long, invite your friends from Facebook and Twitter to join Cariprop.com."))))}}]),t}(n.Component);_.contextType=d;var x=_,P=(a(40),function(){return r.a.createElement("div",{className:"terms-container"},r.a.createElement("div",{className:"terms"},r.a.createElement("h4",null,"Terms of Use and Privacy Policy"),r.a.createElement("p",null,"Cariprop reserves the right to suspend the conversion of credits into payments to users of this site.")))}),M=(a(41),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(h,null,r.a.createElement("div",null,r.a.createElement(E,null)),r.a.createElement(S.b,{exact:!0,path:"/",component:C}),r.a.createElement(S.b,{path:"/signup",component:O}),r.a.createElement(S.b,{path:"/play",component:x}),r.a.createElement(S.b,{path:"/terms",component:P}),r.a.createElement("div",null,r.a.createElement(v,null))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.cc0891fc.chunk.js.map