(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(e,t,a){e.exports=a(341)},207:function(e,t,a){},208:function(e,t,a){},341:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),o=a(24),c=a(33),l=(a(206),a(207),a(51)),s=a.n(l),m=a(52),u=a.n(m),p=a(23),d=a.n(p),g=(a(208),a(123)),h=a(124),E=a(126),f=a(125),y=a(127),v=a(16),b=a(47),w=a.n(b),j=a(48),C=a.n(j),S=a(49),T=a.n(S),N=a(50),O=a.n(N),R=a(34),_=a.n(R),P=a(25),x=a.n(P),A=a(8),B={Production:{"Circular Design":{description:"Re-shaping the first stage of an industrial process (Product design) in order to reduce the waste generated AND/OR increase the life of the final product",metric:"Kg/year of virgin material avoided through the new process AND/OR by the prolongation of the product's life",additionalParameter:"Economic value of  the virgin material (\u20ac/Kg)"},'New production process accepting "secondary raw material"':{description:'Replacement , total or partial, of virgin material with "secondary raw material" ',metric:"Kg/year of virgin material avoided through the new process",additionalParameter:"Economic value of  the virgin material (\u20ac/Kg)"}},Consumtion:{"Re-Use, Re-Manufacturing, Refurbishment, Repair":{description:"Prolongation of the life of a certain product that otherwise will be\n      disposed",metric:"Kg/year of virgin material avoided by the prolongation of the product's life",additionalParameter:"Economic value of  the virgin material (\u20ac/Kg)"},"Waste reduction":{description:"The new process generates less waste",metric:"Kg/year",additionalParameter:"Cost of disposal (\u20ac/Kg)"}},Disposal:{"Industrial simbiosys: mass of waste resources recovered and reintroduced in a production cycle as secondary raw material":{description:"The new process generates waste that can be re-used in the same\n      process or in another production process",metric:"Kg/year",additionalParameter:"Economic value of the secondary raw material(\u20ac/Kg)minus Cost of its transport to the production site (\u20ac/Kg)"},"Project promoting waste recycling":{description:"Promotional campaign with a specific target producing a specific\n      waste",metric:"Waste collected by the target Kg/year",additionalParameter:"Cost of disposal (\u20ac/Kg)"}}},D=["Select project type","Add metric and additional parameters","Climate metric","Employment metric","Circular procurment or educational project"],k=Object(v.withStyles)(function(){return{formTypeControl:{width:"10%",margin:"auto"},formSubTypeControl:{width:"30%",margin:"auto"},paper:{marginTop:"10px",width:"40%",padding:"10px",boxSizing:"border-box",margin:"auto"}}})(Object(o.b)(function(e){var t=e.projectReducer;return{type:t.type||"",subtype:t.subtype||""}},function(e){return{onTypeChange:function(t){return e({type:"SET_TYPE",projectType:t})},onSubTypeChange:function(t){return e({type:"SET_SUBTYPE",subType:t})}}})(function(e){var t=e.type,a=e.subtype,n=e.onTypeChange,i=e.onSubTypeChange,o=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(A.b,{variant:"outlined",className:o.formTypeControl},r.a.createElement(A.d,{htmlFor:"outlined-project-simple"},"Project Type"),r.a.createElement(A.h,{value:t,onChange:function(e){return n(e.target.value)},input:r.a.createElement(A.f,{labelWidth:87,name:"project",id:"outlined-project-simple"})},Object.keys(B).map(function(e){return r.a.createElement(A.e,{value:e},e)}))),t&&r.a.createElement(A.b,{variant:"outlined",className:o.formSubTypeControl},r.a.createElement(A.d,{htmlFor:"outlined-project-simple"},"Project Subtype"),r.a.createElement(A.h,{value:a,onChange:function(e){return i(e.target.value)},input:r.a.createElement(A.f,{labelWidth:113,name:"project",id:"outlined-project-simple"})},Object.keys(B[t]).map(function(e){return r.a.createElement(A.e,{key:e,value:e},e)})))),a&&r.a.createElement(A.g,{className:o.paper,elevation:1},r.a.createElement(A.j,{variant:"h6",component:"h3"},a),r.a.createElement(A.j,{component:"p"},B[t][a].description)))})),I=Object(v.withStyles)(function(){return{paper:{width:"40%",padding:"10px",boxSizing:"border-box",margin:"auto",display:"flex",flexDirection:"column"}}})(function(e){var t=e.classes,a=r.a.createElement("a",{href:"http://ec.europa.eu/environment/gpp/circular_procurement_en.htm"},"CIRCULAR PROCUREMENT");return r.a.createElement(A.g,{className:t.paper,elevation:1},r.a.createElement(A.c,{control:r.a.createElement(A.a,{checked:!1,onChange:void 0,value:"checkedB",color:"primary"}),label:r.a.createElement("span",null,"Implementation of ",a," in the project")}),r.a.createElement(A.c,{control:r.a.createElement(A.a,{checked:!1,onChange:void 0,value:"checkedB",color:"primary"}),label:"Educational projects targeted to relevant stakeholders"}))}),K=Object(v.withStyles)(function(){return{paper:{marginTop:"10px",width:"40%",padding:"10px",boxSizing:"border-box",margin:"auto"},metricDescription:{textAlign:"left"},metricBody:{display:"flex",justifyContent:"space-between"}}})(Object(o.b)(function(e){var t=e.projectReducer;return{type:t.type||"",subtype:t.subtype||""}},function(e){return{onMetricChange:function(t){return e({type:"SET_METRIC",metric:t.target.value})},onAdditionalParameterChange:function(t){return e({type:"SET_ADDITIONAL_PARAMETER",additionalParameter:t.target.value})}}})(function(e){var t=e.type,a=e.subtype,n=e.onMetricChange,i=e.onAdditionalParameterChange,o=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.g,{className:o.paper,elevation:1},r.a.createElement(A.j,{variant:"h6",component:"h3"},"Metric"),r.a.createElement("div",{className:o.metricBody},r.a.createElement(A.j,{component:"p",className:o.metricDescription},t&&a&&B[t][a].metric),r.a.createElement(A.i,{onChange:n}))),r.a.createElement(A.g,{className:o.paper,elevation:1},r.a.createElement(A.j,{variant:"h6",component:"h3"},"Additional Parameters"),r.a.createElement("div",{className:o.metricBody},r.a.createElement(A.j,{component:"p",className:o.metricDescription},t&&a&&B[t][a].additionalParameter),r.a.createElement(A.i,{onChange:i}))))})),M=Object(v.withStyles)(function(){return{paper:{marginTop:"10px",width:"40%",padding:"10px",boxSizing:"border-box",margin:"auto"},climateDescription:{textAlign:"left"},climateBody:{display:"flex",justifyContent:"space-between"}}})(Object(o.b)(null,function(e){return{onBalanceChange:function(t){return e({type:"SET_ENERGY_BALANCE",energyBalance:t.target.value})},onEmissionChange:function(t){return e({type:"SET_EMISSION_REDUCTION",emissionReduction:t.target.value})}}})(function(e){var t=e.onBalanceChange,a=e.onEmissionChange,n=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.g,{className:n.paper,elevation:1},r.a.createElement(A.j,{variant:"h6",component:"h3"},"\u201cNet Energy balance respect to the previous system\u201d or \u201cAmount of energy recovered\u201d"),r.a.createElement("div",{className:n.climateBody},r.a.createElement(A.j,{component:"p",className:n.climateDescription},"Energy (KWh) used in the old process per unit of product divided by energy used in the new process for the same unit of product"),r.a.createElement(A.i,{onChange:t}))),r.a.createElement(A.g,{className:n.paper,elevation:1},r.a.createElement(A.j,{variant:"h6",component:"h3"},"Reduction of emissions"),r.a.createElement("div",{className:n.climateBody},r.a.createElement(A.j,{component:"p",className:n.climateDescription},"Emissions of CO2 generated by the old process per unit of productdivided by emissions used in the new process for the same unit of product"),r.a.createElement(A.i,{onChange:a}))))})),U=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).state={activeStep:0},a.handleNext=function(){a.setState(function(e){return{activeStep:e.activeStep+1}})},a.handleBack=function(){a.setState(function(e){return{activeStep:e.activeStep-1}})},a.handleReset=function(){a.setState({activeStep:0})},a.getStepContent=function(e){switch(e){case 0:return r.a.createElement(k,null);case 1:return r.a.createElement(K,null);case 2:return r.a.createElement(M,null);case 3:return"Employment metrics";default:return r.a.createElement(I,null)}},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.activeStep;return r.a.createElement("div",{className:t.root,style:{paddingTop:"10px",margin:"auto"}},r.a.createElement(w.a,{activeStep:a,orientation:"vertical"},D.map(function(n,i){return r.a.createElement(C.a,{key:n},r.a.createElement(T.a,null,n),r.a.createElement(O.a,null,e.getStepContent(i),r.a.createElement("div",{className:t.actionsContainer},r.a.createElement("div",null,r.a.createElement(_.a,{disabled:0===a,onClick:e.handleBack,type:"button",className:t.button},"Back"),r.a.createElement(_.a,{variant:"contained",color:"primary",type:"submit",onClick:e.handleNext,className:t.button},a===D.length-1?"Finish":"Next")))))})),a===D.length&&r.a.createElement(x.a,{square:!0,elevation:0,className:t.resetContainer},r.a.createElement(d.a,null,"All steps completed - you're finished"),r.a.createElement(_.a,{onClick:this.handleReset,type:"button",className:t.button},"Reset")))}}]),t}(n.Component),F=Object(v.withStyles)(function(e){return{root:{width:"90%"},button:{marginTop:e.spacing.unit,marginRight:e.spacing.unit},actionsContainer:{marginBottom:2*e.spacing.unit},resetContainer:{padding:3*e.spacing.unit}}})(U),L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{position:"static",color:"default"},r.a.createElement(u.a,null,r.a.createElement(d.a,{variant:"h6",color:"inherit"},"SCREEN Online Assessment"))),r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TYPE":return Object.assign({},e,{type:t.projectType});case"SET_SUBTYPE":return Object.assign({},e,{subtype:t.subType});default:return e}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_METRIC":return Object.assign({},e,{metric:t.metric});case"SET_ADDITIONAL_PARAMETER":return Object.assign({},e,{additionalParameter:t.additionalParameter});default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ENERGY_BALANCE":return Object.assign({},e,{energyBalance:t.energyBalance});case"SET_EMISSION_REDUCTION":return Object.assign({},e,{emissionReduction:t.emissionReduction});default:return e}},X=Object(c.b)({projectReducer:W,metricReducer:Y,climateReducer:z});"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()});var G=Object(c.c)(X,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(i.render)(r.a.createElement(o.a,{store:G},r.a.createElement(L,null)),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.cb2fcd4e.chunk.js.map