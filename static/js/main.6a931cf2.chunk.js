(this.webpackJsonplobster=this.webpackJsonplobster||[]).push([[0],{38:function(e,t,i){},56:function(e,t,i){},61:function(e,t,i){"use strict";i.r(t);var n=i(2),c=i(0),a=i.n(c),s=i(11),r=i.n(s),l=(i(56),i(14)),o=i(7),h={HOME:"/lobster/",TEAM:"/lobster/team",MOTIVATION:"/lobster/motivation",DASHBOARD:"/lobster/dashboard",APP:"/lobster/mobile-app",PROGRESS:"/lobster/progress"},j=h,d={IMAGE_PROCESSING:h.PROGRESS+"/image-processing"},b=i(79),m=i.p+"static/media/logo.a481be68.png",u=Object(b.a)({root:{backgroundColor:"#0F4C5C",minHeight:30,padding:10},logo:{height:20,width:20,padding:10,float:"left",transform:[{rotate:"90deg"}]},linkBox:{textAlign:"end",float:"right"},link:{color:"white",margin:10},activeLink:{color:"#E36414"}}),x=function(){var e=u();return Object(n.jsxs)("nav",{className:e.root,children:[Object(n.jsx)(l.b,{to:j.HOME,children:Object(n.jsx)("img",{src:m,className:[e.logo]})}),Object(n.jsxs)("div",{className:e.linkBox,children:[Object(n.jsx)(l.c,{to:j.MOTIVATION,exact:!0,className:e.link,activeClassName:e.activeLink,children:"Posture Crisis"}),Object(n.jsx)(l.c,{to:j.TEAM,className:e.link,activeClassName:e.activeLink,children:"Our Team"}),Object(n.jsx)(l.c,{to:j.PROGRESS,exact:!0,className:e.link,activeClassName:e.activeLink,children:"Our Journey"}),Object(n.jsx)(l.c,{to:j.APP,exact:!0,className:e.link,activeClassName:e.activeLink,children:"Our App"}),Object(n.jsx)(l.c,{to:j.DASHBOARD,exact:!0,className:e.link,activeClassName:e.activeLink,children:"My Posture"})]})]})},O=(i(38),function(){return Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsx)("h1",{children:"Welcome to the Lobster"}),Object(n.jsx)("img",{src:m,className:"App-logo",alt:"logo"})]})}),g=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("h1",{children:"Posture Crisis"})})},p=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("h1",{children:"Download our mobile app!"})})},k=i(84),f=i(88),w=i(83),v=i(81),y=i(85),A=i(82),N=Object(b.a)((function(){return{root:{width:"90%",maxWidth:600,display:"flex",textAlign:"start"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{minWidth:200,height:300}}})),S=function(e){var t=e.image,i=e.title,c=e.text,a=e.link,s=N();return Object(n.jsxs)(f.a,{className:s.root,children:[Object(n.jsx)("div",{className:s.details,children:Object(n.jsxs)(v.a,{className:s.content,children:[Object(n.jsx)(A.a,{component:"h5",variant:"h5",children:i}),Object(n.jsx)(A.a,{variant:"subtitle1",color:"textSecondary",children:c}),Object(n.jsx)(w.a,{children:Object(n.jsx)(l.b,{to:a,children:Object(n.jsx)(k.a,{size:"small",color:"primary",children:"Read more"})})})]})}),Object(n.jsx)(y.a,{className:s.cover,image:t,title:i})]})},C=i.p+"static/media/posture-tracking-chris.f353a37a.png",P=function(){return Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsx)("h1",{children:"Our Journey"}),E.map((function(e){return Object(n.jsx)(S,{title:e.title,image:e.image,text:e.summary})}))]})},E=[{title:"Image Processing Script",image:C,summary:"This is the summary of the blog. Kinda like an executive summary, where it tells the user what was built, how it was built, and what was achieved",link:d.IMAGE_PROCESSING,author:["Daniel"],date:new Date("2020-12-29"),label:["back-end","image-processing"]}],M=i(86),T=i(87),D=Object(b.a)({root:{width:345,margin:50},media:{height:140}}),R=function(e){var t=e.image,i=e.name,c=e.skills,a=e.hobbies,s=e.github,r=e.description,l=e.linkedin,o=D();return Object(n.jsxs)(f.a,{className:o.root,children:[Object(n.jsxs)(M.a,{children:[Object(n.jsx)(y.a,{className:o.media,image:t,title:i}),Object(n.jsxs)(v.a,{children:[Object(n.jsx)(T.a,{title:a,arrow:!0,placement:"right",children:Object(n.jsx)(A.a,{gutterBottom:!0,variant:"h5",component:"h2",children:i})}),Object(n.jsx)(T.a,{title:c,arrow:!0,placement:"left",children:Object(n.jsx)(A.a,{variant:"body2",color:"textSecondary",component:"p",children:r})})]})]}),Object(n.jsxs)(w.a,{children:[Object(n.jsx)(k.a,{size:"small",color:"primary",onClick:function(){return window.open(s)},children:"GitHub"}),Object(n.jsx)(k.a,{size:"small",color:"primary",onClick:function(){return window.open(l)},children:"Linkedin"})]})]})},I=i.p+"static/media/chris.5f1dd342.jpg",F=function(){return Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsx)("h1",{children:"The Team"}),Object(n.jsx)("p",{children:"Some words about the team! We all study Mechantronics Engineering at the University of Waterloo. This has been an interseting project to conduct remotely over virtual meetings due to COVID-19."}),Object(n.jsx)("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center"},children:L.map((function(e){return Object(n.jsx)(R,{name:e.name,image:e.image,hobbies:e.hobbies,description:e.description,github:e.github,linkedin:e.linkedin})}))})]})},L=[{name:"Alec",image:I,hobbies:["\ud83d\udcf7","\ud83c\udfa3"],skills:["PLC","C++","Arduino"],description:"Frimware Guru",linkedin:"https://www.linkedin.com/in/bojunalecli/",github:"https://github.com/BojunAlecLi"},{name:"Chris",image:I,hobbies:["\ud83e\uddd7","\ud83c\udfcb\ufe0f"],skills:"JS, React",description:"Project Manager",linkedin:"https://www.linkedin.com/in/christian-mourad-a35710192/",github:"https://github.com/cymourad"},{name:"Daniel",image:I,hobbies:["\ud83c\udfc3\u200d\u2642\ufe0f","\ud83c\udfce\ufe0f"],skills:["Pyton","AWS","Flask"],description:"Back End Sense",linkedin:"https://www.linkedin.com/in/danielsalib/",github:"https://github.com/DanSalib"},{name:"Hussein",image:I,hobbies:["\ud83e\uddf7","\ud83d\udd25"],skills:["JS","React Native"],description:"Front End Master",linkedin:"https://www.linkedin.com/in/hussein-alkasake/",github:"https://github.com/husseinalkasake"},{name:"Jason",image:I,hobbies:["\u26be","\ud83c\udfcb\ufe0f"],skills:["CAD","3D Print"],description:"King of All Mechanical Things",linkedin:"https://www.linkedin.com/in/jason-james-hunter/",github:"https://github.com/JasonHu24"}],H=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("h1",{children:"Coming Soon"})})},B=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Oops!"}),Object(n.jsx)("p",{children:"Not too sure what you are looking for :/"}),Object(n.jsxs)("p",{children:["Try going to ",Object(n.jsx)(l.b,{to:j.HOME,children:"our home page"}),", maybe you will find what you are looking for there ;)"]})]})};var G=function(){return Object(n.jsxs)(l.a,{children:[Object(n.jsx)(x,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:j.HOME,children:Object(n.jsx)(O,{})}),Object(n.jsx)(o.a,{exact:!0,path:j.MOTIVATION,children:Object(n.jsx)(g,{})}),Object(n.jsx)(o.a,{exact:!0,path:j.TEAM,children:Object(n.jsx)(F,{})}),Object(n.jsx)(o.a,{exact:!0,path:j.APP,children:Object(n.jsx)(p,{})}),Object(n.jsx)(o.a,{exact:!0,path:j.DASHBOARD,children:Object(n.jsx)(H,{})}),Object(n.jsx)(o.a,{exact:!0,path:j.PROGRESS,children:Object(n.jsx)(P,{})}),Object(n.jsx)(o.a,{children:Object(n.jsx)(B,{})})]})]})},J=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,90)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),n(e),c(e),a(e),s(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root")),J()}},[[61,1,2]]]);
//# sourceMappingURL=main.6a931cf2.chunk.js.map