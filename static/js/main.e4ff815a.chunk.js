(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){e.exports=n(251)},107:function(e,t,n){},108:function(e,t,n){},251:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(15),i=n.n(o),c=(n(106),n(107),n(35)),l=n(36),s=n(38),u=n(37),m=n(39),p=n(99),d=n.n(p),h=n(100),v=n.n(h),f=n(22),E=n.n(f),g=(n(108),n(55)),C=n(95),w=n.n(C),y=n(96),b=n.n(y),S=n(97),k=n.n(S),j=n(98),N=n.n(j),O=n(41),A=n.n(O),x=n(26),B=n.n(x),R=n(93),F=n.n(R),P=n(40),T=n.n(P),D=n(94),I=n.n(D),W=n(90),J=n.n(W),q=n(92),L=n.n(q);var U=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={activeStep:0,type:""},n.handleNext=function(){n.setState(function(e){return{activeStep:e.activeStep+1}})},n.handleBack=function(){n.setState(function(e){return{activeStep:e.activeStep-1}})},n.handleReset=function(){n.setState({activeStep:0})},n.handleChange=function(e){n.setState({type:e.target.value})},n.getStepContent=function(e){var t=n.props.classes,a=n.state.type;switch(e){case 0:return r.a.createElement(J.a,{variant:"outlined",className:t.formControl},r.a.createElement(L.a,{ref:function(e){n.InputLabelRef=e},htmlFor:"outlined-project-simple"},"Project Type"),r.a.createElement(F.a,{value:a,onChange:n.handleChange,input:r.a.createElement(I.a,{labelWidth:"87",name:"project",id:"outlined-project-simple"})},r.a.createElement(T.a,{value:10},"Production"),r.a.createElement(T.a,{value:20},"Consumtion"),r.a.createElement(T.a,{value:30},"Disposal")));case 1:return"An ad group contains one or more ads which target a shared set of keywords.";case 2:return"Try out different ad text to see what brings in the most customers,\n                and learn how to enhance your ads using features like ad extensions.\n                If you run into any problems with your ads, find out how to tell if\n                they're running and how to resolve approval issues.";default:return"Unknown step"}},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,n=["Select project type","Add metrics and additional parameters","Climate metrics","Employment metrics","Circular procurment or educational project"],a=this.state.activeStep;return r.a.createElement("div",{className:t.root,style:{paddingTop:"10px",margin:"auto"}},r.a.createElement(w.a,{activeStep:a,orientation:"vertical"},n.map(function(o,i){return r.a.createElement(b.a,{key:o},r.a.createElement(k.a,null,o),r.a.createElement(N.a,null,r.a.createElement(E.a,null,e.getStepContent(i)),r.a.createElement("div",{className:t.actionsContainer},r.a.createElement("div",null,r.a.createElement(A.a,{disabled:0===a,onClick:e.handleBack,className:t.button},"Back"),r.a.createElement(A.a,{variant:"contained",color:"primary",onClick:e.handleNext,className:t.button},a===n.length-1?"Finish":"Next")))))})),a===n.length&&r.a.createElement(B.a,{square:!0,elevation:0,className:t.resetContainer},r.a.createElement(E.a,null,"All steps completed - you're finished"),r.a.createElement(A.a,{onClick:this.handleReset,className:t.button},"Reset")))}}]),t}(r.a.Component),V=Object(g.withStyles)(function(e){return{root:{width:"90%"},button:{marginTop:e.spacing.unit,marginRight:e.spacing.unit},actionsContainer:{marginBottom:2*e.spacing.unit},resetContainer:{padding:3*e.spacing.unit},formControl:{width:"150px",margin:"auto"}}})(U),$=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).calcAssesmentValue=function(){var e=n.state,t=e.relevantStakeholders,a=(e.circularProcurment,n.state),r=a.Cn,o=a.Dn,i=a.Fn;t&&(i*=1.1);var c=r*o*i*a.C7*a.C8*a.E9;n.setState({Av:c})},n.state={Av:1,Cn:1,Dn:1,Fn:1,C7:1,C8:1,E9:1,description:"",relevantStakeholders:!1,circularProcurment:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{position:"static",color:"default"},r.a.createElement(v.a,null,r.a.createElement(E.a,{variant:"h6",color:"inherit"},"SCREEN Online Assessment"))),r.a.createElement(V,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[101,1,2]]]);
//# sourceMappingURL=main.e4ff815a.chunk.js.map