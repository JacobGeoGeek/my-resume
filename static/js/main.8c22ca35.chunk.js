(this["webpackJsonpmy-resume"]=this["webpackJsonpmy-resume"]||[]).push([[0],{4:function(e,t,a){},44:function(e){e.exports=JSON.parse('{"title":"Graduated Full stack developer student","email":"Email","homePhone":"Home phone","mobilePhone":"Mobile phone","aboutMe":"About me","introduction":"A graduated computer scientist student who is/has","workExperience":"Work experience","description":"Description","technologieUsed":"Technologies used","skills":"Skills","geomatics":"Geomatics","programming":"Programming","framework":"Framework","tools":"Tools","languages":"Languages","education":"Education","events":"Events","credit":"Resume template designed by","export":"Export Resume"}')},45:function(e){e.exports=JSON.parse('{"title":"\xc9tudiant dipl\xf4m\xe9: d\xe9veloppeur Full stack","email":"Courriel","homePhone":"T\xe9l\xe9phone maison","mobilePhone":"T\xe9l\xe9phone mobile","aboutMe":"\xc0 propos de moi","introduction":"Un \xe9tudiant gradu\xe9 en informatique qui est/a","workExperience":"Exp\xe9rience de travail","description":"Description","technologieUsed":"Technologies utilis\xe9es","skills":"Comp\xe9tences","geomatics":"G\xe9omatique","programming":"Programmation","framework":"Librairie","tools":"Outils","languages":"langues","education":"\xc9ducation","events":"\xc9v\xe9nements","credit":"Le design du CV est con\xe7u par","export":"Exporter CV"}')},52:function(e,t,a){e.exports=a(68)},58:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(16),s=a.n(i),l=(a(4),a(22)),c=a.n(l),o=a(31),m=a(17),u=a(24),d=a(47),g=a(48),p=(a(58),a(86)),h=function(){var e=Object(p.a)().t;return r.a.createElement("footer",{className:"footer text-center pt-2 pb-5"},r.a.createElement("small",{className:"copyright"},e("credit")+" ",r.a.createElement("a",{href:"http://themes.3rdwavemedia.com",target:"_blank",rel:"noopener noreferrer"},"Xiaoying Riley")))},E=a(85),f=function(e){return r.a.createElement(E.a,{color:"primary","aria-label":"add",style:{position:"fixed",bottom:"10px",right:"50px",backgroundColor:"#22A162"},onClick:e.changeLanguage},e.language)},b=a(42),v=function(e){var t=Object(p.a)().t;return r.a.createElement(E.a,{color:"primary","aria-label":"add",style:{position:"fixed",bottom:"10px",left:"50px",backgroundColor:"#22A162"}},r.a.createElement("a",{href:e.pdfURL,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(b.a,{size:"2em",style:{color:"white"},title:t("export")})))},k=function(){function e(){Object(m.a)(this,e)}return Object(u.a)(e,[{key:"createGeneralInformation",value:function(e){return e||{address:"",city:"",email:"",firstName:"",githubURL:"",homePhone:"",lastName:"",mobilePhone:"",postalCode:"",province:""}}},{key:"createSkills",value:function(e){return e||{languages:[],technical:{office:[],computerScience:{frameworks:[],programmingLanguages:[],tools:[]},geomatics:{CAD:[],GIS:[],other:[]}}}}},{key:"initializeResume",value:function(){return{educations:[],generalInformation:this.createGeneralInformation(),events:[],skills:this.createSkills(),workingExperiences:[],aboutMe:[],PDF:""}}},{key:"createResume",value:function(e){return{educations:e.education?e.education:[],generalInformation:this.createGeneralInformation(e.generalInformation),events:e.events?e.events:[],skills:this.createSkills(e.skills),workingExperiences:e.workingExperiences?e.workingExperiences:[],aboutMe:e.aboutMe?e.aboutMe:[],PDF:e.PDF?e.PDF:""}}}]),e}(),N=function(e){var t=Object(p.a)().t;return r.a.createElement("section",{className:"resume-section summary-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},t("aboutMe")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("p",null,t("introduction")+": ",e.aboutMe.join(" - "))))},w=function(e){var t=Object(p.a)().t,a=e.description.map((function(e,t){return r.a.createElement("li",{key:t},e)})),n=e.stacks.map((function(e,t){return r.a.createElement("li",{key:t,className:"list-inline-item"},r.a.createElement("span",{className:"badge badge-primary badge-pill"},e))}));return r.a.createElement("div",{className:"resume-timeline-item-desc"},r.a.createElement("h4",{className:"resume-timeline-item-desc-heading font-weight-bold"},t("description")),r.a.createElement("ul",null,a),r.a.createElement("h4",{className:"resume-timeline-item-desc-heading font-weight-bold"},t("technologieUsed")),r.a.createElement("ul",{className:"list-inline"},n))},x=function(e){return r.a.createElement("div",{className:"resume-timeline-item-header mb-2"},r.a.createElement("div",{className:"d-flex flex-column flex-md-row"},r.a.createElement("h3",{className:"resume-position-title font-weight-bold mb-1"},e.title),r.a.createElement("div",{className:"resume-company-name ml-auto"},e.compagny+", "+e.city)),r.a.createElement("div",{className:"resume-position-time"},e.startMonth+" "+e.startYear+" - "+e.endMonth+" "+e.endYear))},y=function(e){return r.a.createElement("article",{className:"resume-timeline-item position-relative pb-5"},r.a.createElement(x,{title:e.workingExperience.title,compagny:e.workingExperience.compagny,city:e.workingExperience.city,startMonth:e.workingExperience.startMonth,startYear:e.workingExperience.startYear,endMonth:e.workingExperience.endMonth,endYear:e.workingExperience.endYear}),r.a.createElement(w,{description:e.workingExperience.description,stacks:e.workingExperience.Stacks}))},M=function(e){var t=Object(p.a)().t,a=e.workingExperieces.map((function(e,t){return r.a.createElement(y,{workingExperience:e,key:t})}));return r.a.createElement("section",{className:"resume-section experience-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},t("workExperience")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("div",{className:"resume-timeline position-relative"},a)))},P=function(e){var t=e.languages.map((function(e,t){return r.a.createElement("li",{className:"mb-2",key:t},r.a.createElement("span",{className:"resume-lang-name font-weight-bold"},e," "))}));return r.a.createElement("ul",{className:"list-unstyled resume-lang-list"},t)},R=function(e){var t=e.skills.map((function(e,t){return r.a.createElement("li",{className:"list-inline-item",key:t},r.a.createElement("span",{className:"badge badge-light"},e))}));return r.a.createElement("div",{className:"resume-skill-item"},r.a.createElement("h4",{className:"resume-skills-cat font-weight-bold"},e.title),r.a.createElement("ul",{className:"list-inline"},t))},j=function(e){var t=e.technical.geomatics.CAD.concat(e.technical.geomatics.GIS,e.technical.geomatics.other),a=Object(p.a)().t;return r.a.createElement("div",null,r.a.createElement("section",{className:"resume-section skills-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},a("skills")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement(R,{title:"Office",skills:e.technical.office}),r.a.createElement(R,{title:a("geomatics"),skills:t}),r.a.createElement(R,{title:a("programming"),skills:e.technical.computerScience.programmingLanguages}),r.a.createElement(R,{title:a("framework"),skills:e.technical.computerScience.frameworks}),r.a.createElement(R,{title:a("tools"),skills:e.technical.computerScience.tools}))),r.a.createElement("section",{className:"resume-section skills-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},a("languages")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement(P,{languages:e.languages}))))},D=function(e){var t=Object(p.a)().t,a=e.education.map((function(e,t){return r.a.createElement("li",{className:"mb-2",key:t},r.a.createElement("div",{className:"resume-degree font-weight-bold"},e.degree),r.a.createElement("div",{className:"resume-degree-org"},e.schoolName+",  "+e.city),r.a.createElement("div",{className:"resume-degree-time"},e.startYear+" - "+e.endYear))}));return r.a.createElement("section",{className:"resume-section education-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},t("education")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("ul",{className:"list-unstyled"},a)))},O=function(e){var t=Object(p.a)().t,a=e.description.map((function(e,t){return r.a.createElement("li",{key:t},e)}));return r.a.createElement("article",{className:"position-relative pb-5"},r.a.createElement("div",{className:"resume-timeline-item-header mb-2"},r.a.createElement("div",{className:"d-flex flex-column flex-md-row"},r.a.createElement("h3",{className:"resume-position-title font-weight-bold mb-1"},e.title),r.a.createElement("div",{className:"resume-company-name ml-auto"},e.location.building+", "+e.location.address)),r.a.createElement("div",{className:"resume-position-time"},e.startDate+" - "+e.endDate)),r.a.createElement("div",{className:"resume-timeline-item-desc"},r.a.createElement("h4",{className:"resume-timeline-item-desc-heading font-weight-bold"},t("description")),r.a.createElement("ul",null,a)))},F=function(e){var t=Object(p.a)().t,a=e.events.map((function(e,t){return r.a.createElement(O,{key:t,title:e.title,description:e.description,location:e.location,startDate:e.startDate,endDate:e.endDate})}));return r.a.createElement("section",{className:"resume-section reference-section mb-5"},r.a.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},t("events")),r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("div",{className:"position-relative"},a)))},I=function(e){return r.a.createElement("div",{className:"resume-body p-5"},r.a.createElement(N,{aboutMe:e.aboutMe}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-9"},r.a.createElement(M,{workingExperieces:e.workingExperiences}),r.a.createElement(F,{events:e.events})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(j,{languages:e.skills.languages,technical:e.skills.technical}),r.a.createElement(D,{education:e.educations}))))},L=a(30),C=a(43),S=function(e){var t=e.icon;return r.a.createElement("li",{className:"mb-2"},r.a.createElement("a",{href:(e.isEMail?"mailto:":"tel:")+e.value},r.a.createElement(t,{className:"fa-fw mr-2",size:"1.2em",title:e.title}),e.value))},U=function(e){var t=e.icon;return r.a.createElement("li",{className:"mb-3"},r.a.createElement("a",{href:e.URL},r.a.createElement("span",{className:"fa-container text-center mr-2"},r.a.createElement(t,{className:"fa-fw",size:"1.5em",title:e.title})),e.URL))},A=function(e){var t=Object(p.a)().t;return r.a.createElement("header",{className:"resume-header pt-4 pt-md-0"},r.a.createElement("div",{className:"media flex-column flex-md-row"},r.a.createElement("img",{className:"mr-3 img-fluid picture mx-auto",src:"https://i.picsum.photos/id/501/480/480.jpg?hmac=8g-6-RpnvXpl1PmFBp-mJhkQa64DR7cxGJzJCXvxv6k",alt:"profile"}),r.a.createElement("div",{className:"media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0"},r.a.createElement("div",{className:"primary-info"},r.a.createElement("h1",{className:"name mt-0 mb-1 text-white text-uppercase"},e.firstName+" "+e.lastName),r.a.createElement("div",{className:"title mb-3"},t("title")),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(S,{icon:L.c,title:t("email"),value:e.email,isEMail:!0}),r.a.createElement(S,{icon:L.b,title:t("homePhone"),value:e.homePhone,isEMail:!1}),r.a.createElement(S,{icon:L.a,title:t("mobilePhone"),value:e.mobilePhone,isEMail:!1}))),r.a.createElement("div",{className:"secondary-info ml-md-auto mt-2"},r.a.createElement("ul",{className:"resume-social list-unstyled"},r.a.createElement(U,{icon:C.a,title:"Github",URL:e.githubURL}))))))},G=function(e){return r.a.createElement("article",{className:"resume-wrapper text-center position-relative"},r.a.createElement("div",{className:"resume-wrapper-inner mx-auto text-left bg-white shadow-lg"},r.a.createElement(A,{firstName:e.generalInformation.firstName,lastName:e.generalInformation.lastName,address:e.generalInformation.address,city:e.generalInformation.city,province:e.generalInformation.province,postalCode:e.generalInformation.postalCode,mobilePhone:e.generalInformation.mobilePhone,homePhone:e.generalInformation.homePhone,email:e.generalInformation.email,githubURL:e.generalInformation.githubURL}),r.a.createElement(I,{educations:e.educations,aboutMe:e.aboutMe,skills:e.skills,workingExperiences:e.workingExperiences,events:e.events})))},Y=function e(){Object(m.a)(this,e)};Y.API_URL="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?"http://localhost:3001":"https://jacob-resume-backend.herokuapp.com",Y.headers={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","content-type":"application/json"};var J,z=function(e){return fetch("".concat(Y.API_URL,"/").concat(e),{method:"get",headers:Y.headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)}))},T=a(87),_=a(46),q=a(84),B=Object(_.a)({overrides:{MuiLinearProgress:{barColorPrimary:{backgroundColor:"#22A162"},colorPrimary:{backgroundColor:"#b2dfdb"}}}}),V=function(){return r.a.createElement(q.a,{theme:B},r.a.createElement(T.a,null))},W=function(e){return r.a.createElement("div",null,0!==e.resume.aboutMe.length?r.a.createElement(G,{aboutMe:e.resume.aboutMe,educations:e.resume.educations,events:e.resume.events,generalInformation:e.resume.generalInformation,skills:e.resume.skills,workingExperiences:e.resume.workingExperiences,PDF:e.resume.PDF}):r.a.createElement(V,null))};!function(e){e.EN="EN",e.FR="FR"}(J||(J={}));var X=a(32),H=a(23),Q={EN:{translation:a(44)},FR:{translation:a(45)}};X.a.use(H.e).init({resources:Q,lng:"EN",keySeparator:!1,debug:!0,interpolation:{escapeValue:!1}});var $=X.a,K=function(e){return e===J.EN?($.changeLanguage(J.FR),J.FR):($.changeLanguage(J.EN),J.EN)},Z=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(m.a)(this,a),(e=t.call(this,n)).resumeFactory=void 0,e.resumeFactory=new k,e.state={resumeData:e.resumeFactory.initializeResume(),language:J.FR,changeLanguage:function(){return e.state.language===J.EN?e.setState({language:J.FR}):e.setState({language:J.EN})}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(K(this.state.language));case 2:t=e.sent,this.setState({resumeData:this.resumeFactory.createResume(t)});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.language===a.language){e.next=5;break}return e.next=3,z(K(this.state.language));case 3:n=e.sent,this.setState({resumeData:this.resumeFactory.createResume(n)});case 5:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,{resume:this.state.resumeData}),r.a.createElement(h,null),r.a.createElement(f,{language:this.state.language,changeLanguage:this.state.changeLanguage}),r.a.createElement(v,{pdfURL:this.state.resumeData.PDF}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.8c22ca35.chunk.js.map