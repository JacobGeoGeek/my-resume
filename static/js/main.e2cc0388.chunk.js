(this["webpackJsonpmy-resume"]=this["webpackJsonpmy-resume"]||[]).push([[0],{4:function(e,t,a){},45:function(e){e.exports=JSON.parse('{"title":"Graduated Full stack developer student","email":"Email","homePhone":"Home phone","mobilePhone":"Mobile phone","aboutMe":"About me","introduction":"A graduated computer scientist student who is/has","workExperience":"Work experience","description":"Description","technologieUsed":"Technologies used","skills":"Skills","geomatics":"Geomatics","programming":"Programming","framework":"Framework","tools":"Tools","languages":"Languages","education":"Education","events":"Events","credit":"Resume template designed by"}')},46:function(e){e.exports=JSON.parse('{"title":"\xc9tudiant dipl\xf4m\xe9: d\xe9veloppeur Full stack","email":"Courriel","homePhone":"T\xe9l\xe9phone maison","mobilePhone":"T\xe9l\xe9phone mobile","aboutMe":"\xc0 propos de moi","introduction":"Un \xe9tudiant gradu\xe9 en informatique qui est/a","workExperience":"Exp\xe9rience de travail","description":"Description","technologieUsed":"Technologies utilis\xe9es","skills":"Comp\xe9tences","geomatics":"G\xe9omatique","programming":"Programmation","framework":"Librairie","tools":"Outils","languages":"langues","education":"\xc9ducation","events":"\xc9v\xe9nements","credit":"Le design du CV est con\xe7u par"}')},50:function(e,t,a){e.exports=a(66)},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(17),s=a.n(i),c=(a(4),a(12)),l=a(18),o=a(30),m=a(31),u=a(23),d=a.n(u),g=a(33),p=function e(){Object(c.a)(this,e)};p.API_URL="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?"http://localhost:3001":"https://jacob-resume-backend.herokuapp.com",p.headers={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","content-type":"application/json"};var h=function(e){return fetch("".concat(p.API_URL,"/").concat(e),{method:"get",headers:p.headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)}))},E=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"createGeneralInformation",value:function(e){return e||{address:"",city:"",email:"",firstName:"",githubURL:"",homePhone:"",lastName:"",mobilePhone:"",postalCode:"",province:""}}},{key:"createSkills",value:function(e){return e||{languages:[],technical:{office:[],computerScience:{frameworks:[],programmingLanguages:[],tools:[]},geomatics:{CAD:[],GIS:[],other:[]}}}}},{key:"initializeResume",value:function(){return{educations:[],generalInformation:this.createGeneralInformation(),events:[],skills:this.createSkills(),workingExperiences:[],aboutMe:[]}}},{key:"createResume",value:function(e){return{educations:e.education?e.education:[],generalInformation:this.createGeneralInformation(e.generalInformation),events:e.events?e.events:[],skills:this.createSkills(e.skills),workingExperiences:e.workingExperiences?e.workingExperiences:[],aboutMe:e.aboutMe?e.aboutMe:[]}}}]),e}(),f=a(85),b=function(e){var t=Object(f.a)().t;return r.a.createElement("section",{className:"resume-section summary-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},t("aboutMe")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("p",null,t("introduction")+": ",e.aboutMe.join(" - "))))},v=function(e){var t=Object(f.a)().t,a=e.description.map((function(e,t){return r.a.createElement("li",{key:t},e)})),n=e.stacks.map((function(e,t){return r.a.createElement("li",{key:t,className:"list-inline-item"},r.a.createElement("span",{className:"badge badge-primary badge-pill"},e))}));return r.a.createElement("div",{className:"resume-timeline-item-desc"},r.a.createElement("h4",{className:"resume-timeline-item-desc-heading font-weight-bold"},t("description")),r.a.createElement("ul",null,a),r.a.createElement("h4",{className:"resume-timeline-item-desc-heading font-weight-bold"},t("technologieUsed")),r.a.createElement("ul",{className:"list-inline"},n))},N=function(e){return r.a.createElement("div",{className:"resume-timeline-item-header mb-2"},r.a.createElement("div",{className:"d-flex flex-column flex-md-row"},r.a.createElement("h3",{className:"resume-position-title font-weight-bold mb-1"},e.title),r.a.createElement("div",{className:"resume-company-name ml-auto"},e.compagny+", "+e.city)),r.a.createElement("div",{className:"resume-position-time"},e.startMonth+" "+e.startYear+" - "+e.endMonth+" "+e.endYear))},k=function(e){return r.a.createElement("article",{className:"resume-timeline-item position-relative pb-5"},r.a.createElement(N,{title:e.workingExperience.title,compagny:e.workingExperience.compagny,city:e.workingExperience.city,startMonth:e.workingExperience.startMonth,startYear:e.workingExperience.startYear,endMonth:e.workingExperience.endMonth,endYear:e.workingExperience.endYear}),r.a.createElement(v,{description:e.workingExperience.description,stacks:e.workingExperience.Stacks}))},w=function(e){var t=Object(f.a)().t,a=e.workingExperieces.map((function(e,t){return r.a.createElement(k,{workingExperience:e,key:t})}));return r.a.createElement("section",{className:"resume-section experience-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},t("workExperience")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("div",{className:"resume-timeline position-relative"},a)))},x=function(e){var t=e.languages.map((function(e,t){return r.a.createElement("li",{className:"mb-2",key:t},r.a.createElement("span",{className:"resume-lang-name font-weight-bold"},e," "))}));return r.a.createElement("ul",{className:"list-unstyled resume-lang-list"},t)},y=function(e){var t=e.skills.map((function(e,t){return r.a.createElement("li",{className:"list-inline-item",key:t},r.a.createElement("span",{className:"badge badge-light"},e))}));return r.a.createElement("div",{className:"resume-skill-item"},r.a.createElement("h4",{className:"resume-skills-cat font-weight-bold"},e.title),r.a.createElement("ul",{className:"list-inline"},t))},M=function(e){var t=e.technical.geomatics.CAD.concat(e.technical.geomatics.GIS,e.technical.geomatics.other),a=Object(f.a)().t;return r.a.createElement("div",null,r.a.createElement("section",{className:"resume-section skills-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},a("skills")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement(y,{title:"Office",skills:e.technical.office}),r.a.createElement(y,{title:a("geomatics"),skills:t}),r.a.createElement(y,{title:a("programming"),skills:e.technical.computerScience.programmingLanguages}),r.a.createElement(y,{title:a("framework"),skills:e.technical.computerScience.frameworks}),r.a.createElement(y,{title:a("tools"),skills:e.technical.computerScience.tools}))),r.a.createElement("section",{className:"resume-section skills-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},a("languages")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement(x,{languages:e.languages}))))},j=function(e){var t=Object(f.a)().t,a=e.education.map((function(e,t){return r.a.createElement("li",{className:"mb-2",key:t},r.a.createElement("div",{className:"resume-degree font-weight-bold"},e.degree),r.a.createElement("div",{className:"resume-degree-org"},e.schoolName+",  "+e.city),r.a.createElement("div",{className:"resume-degree-time"},e.startYear+" - "+e.endYear))}));return r.a.createElement("section",{className:"resume-section education-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},t("education")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("ul",{className:"list-unstyled"},a)))},O=function(e){var t=Object(f.a)().t,a=e.description.map((function(e,t){return r.a.createElement("li",{key:t},e)}));return r.a.createElement("article",{className:"position-relative pb-5"},r.a.createElement("div",{className:"resume-timeline-item-header mb-2"},r.a.createElement("div",{className:"d-flex flex-column flex-md-row"},r.a.createElement("h3",{className:"resume-position-title font-weight-bold mb-1"},e.title),r.a.createElement("div",{className:"resume-company-name ml-auto"},e.location.building+", "+e.location.address)),r.a.createElement("div",{className:"resume-position-time"},e.startDate+" - "+e.endDate)),r.a.createElement("div",{className:"resume-timeline-item-desc"},r.a.createElement("h4",{className:"resume-timeline-item-desc-heading font-weight-bold"},t("description")),r.a.createElement("ul",null,a)))},R=function(e){var t=Object(f.a)().t,a=e.events.map((function(e,t){return r.a.createElement(O,{key:t,title:e.title,description:e.description,location:e.location,startDate:e.startDate,endDate:e.endDate})}));return r.a.createElement("section",{className:"resume-section reference-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},t("events")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("div",{className:"position-relative"},a)))},I=function(e){return r.a.createElement("div",{className:"resume-body p-5"},r.a.createElement(b,{aboutMe:e.aboutMe}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-9"},r.a.createElement(w,{workingExperieces:e.workingExperiences}),r.a.createElement(R,{events:e.events})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(M,{languages:e.skills.languages,technical:e.skills.technical}),r.a.createElement(j,{education:e.educations}))))},P=a(32),L=a(40),S=function(e){var t=e.icon;return r.a.createElement("li",{className:"mb-2"},r.a.createElement("a",{href:e.isEMail?"mailto:"+e.value:"#"},r.a.createElement(t,{className:"fa-fw mr-2",size:"1.2em",title:e.title}),e.value))},C=function(e){var t=e.icon;return r.a.createElement("li",{className:"mb-3"},r.a.createElement("a",{href:e.URL},r.a.createElement("span",{className:"fa-container text-center mr-2"},r.a.createElement(t,{className:"fa-fw",size:"1.5em",title:e.title})),e.URL))},F=function(e){var t=Object(f.a)().t;return r.a.createElement("header",{className:"resume-header pt-4 pt-md-0"},r.a.createElement("div",{className:"media flex-column flex-md-row"},r.a.createElement("img",{className:"mr-3 img-fluid picture mx-auto",src:"https://i.picsum.photos/id/501/480/480.jpg?hmac=8g-6-RpnvXpl1PmFBp-mJhkQa64DR7cxGJzJCXvxv6k",alt:"profile"}),r.a.createElement("div",{className:"media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0"},r.a.createElement("div",{className:"primary-info"},r.a.createElement("h1",{className:"name mt-0 mb-1 text-white text-uppercase"},e.firstName+" "+e.lastName),r.a.createElement("div",{className:"title mb-3"},t("title")),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(S,{icon:P.c,title:t("email"),value:e.email,isEMail:!0}),r.a.createElement(S,{icon:P.b,title:t("homePhone"),value:e.homePhone,isEMail:!1}),r.a.createElement(S,{icon:P.a,title:t("mobilePhone"),value:e.mobilePhone,isEMail:!1}))),r.a.createElement("div",{className:"secondary-info ml-md-auto mt-2"},r.a.createElement("ul",{className:"resume-social list-unstyled"},r.a.createElement(C,{icon:L.a,title:"Github",URL:e.githubURL}))))))},U=function(e){return r.a.createElement("article",{className:"resume-wrapper text-center position-relative"},r.a.createElement("div",{className:"resume-wrapper-inner mx-auto text-left bg-white shadow-lg"},r.a.createElement(F,{firstName:e.generalInformation.firstName,lastName:e.generalInformation.lastName,address:e.generalInformation.address,city:e.generalInformation.city,province:e.generalInformation.province,postalCode:e.generalInformation.postalCode,mobilePhone:e.generalInformation.mobilePhone,homePhone:e.generalInformation.homePhone,email:e.generalInformation.email,githubURL:e.generalInformation.githubURL}),r.a.createElement(I,{educations:e.educations,aboutMe:e.aboutMe,skills:e.skills,workingExperiences:e.workingExperiences,events:e.events})))},A=a(86),D=a(47),G=a(83),Y=Object(D.a)({overrides:{MuiLinearProgress:{barColorPrimary:{backgroundColor:"#22A162"},colorPrimary:{backgroundColor:"#b2dfdb"}}}}),J=function(){return r.a.createElement(G.a,{theme:Y},r.a.createElement(A.a,null))},z=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).resumeFactory=void 0,n.resumeFactory=new E,n.state=n.resumeFactory.initializeResume(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(this.props.language);case 2:t=e.sent,this.setState(this.resumeFactory.createResume(t));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(g.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.language===t.language){e.next=5;break}return e.next=3,h(this.props.language);case 3:a=e.sent,this.setState(this.resumeFactory.createResume(a));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,this.state?r.a.createElement(U,{aboutMe:this.state.aboutMe,educations:this.state.educations,events:this.state.events,generalInformation:this.state.generalInformation,skills:this.state.skills,workingExperiences:this.state.workingExperiences}):r.a.createElement(J,null))}}]),a}(r.a.Component),T=(a(65),function(){var e=Object(f.a)().t;return r.a.createElement("footer",{className:"footer text-center pt-2 pb-5"},r.a.createElement("small",{className:"copyright"},e("credit")+" ",r.a.createElement("a",{href:"http://themes.3rdwavemedia.com",target:"_blank",rel:"noopener noreferrer"},"Xiaoying Riley")))}),q=a(84),B=function(e){return r.a.createElement(q.a,{color:"primary","aria-label":"add",style:{position:"fixed",bottom:"10px",right:"50px",backgroundColor:"#22A162"},onClick:e.changeLanguage},e.language)},W=a(34),X=a(24),_={EN:{translation:a(45)},FR:{translation:a(46)}};W.a.use(X.e).init({resources:_,lng:"EN",keySeparator:!1,debug:!0,interpolation:{escapeValue:!1}});var V,H=W.a;!function(e){e.EN="EN",e.FR="FR"}(V||(V={}));var Q=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={language:V.FR,changeLanguage:function(){return e.state.language===V.EN?e.setState({language:V.FR}):e.setState({language:V.EN})}},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z,{language:(e=this.state.language,e===V.EN?(H.changeLanguage(V.FR),V.FR):(H.changeLanguage(V.EN),V.EN))}),r.a.createElement(T,null),r.a.createElement(B,{language:this.state.language,changeLanguage:this.state.changeLanguage}));var e}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.e2cc0388.chunk.js.map