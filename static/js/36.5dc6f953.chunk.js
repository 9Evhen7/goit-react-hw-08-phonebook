"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[36],{7036:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,a,i,o,s,c,d,l,u=t(2791),h=t(9434),m=t(168),p=t(6444),x=p.ZP.button(r||(r=(0,m.Z)(["\n  border: none;\n  border-radius: 4px;\n  background-color: transparent;\n  color: white;\n  cursor: pointer;\n  &:hover {\n    scale: 1.1;\n  }\n"]))),b=p.ZP.li(a||(a=(0,m.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  padding: 4px;\n  &:hover {\n    color: #000000;\n    background-color: rgb(239, 239, 239);\n    border-radius: 5px;\n\n    & button {\n      color: #e84a5f;\n    }\n  }\n"]))),f=p.ZP.ul(i||(i=(0,m.Z)(["\n  text-align: center;\n  padding: 0;\n  max-width: 100%;\n"]))),g=t(3634),j=function(n){return n.contacts.items},Z=function(n){return n.contacts.loading},v=t(184),w=function(){var n=(0,h.v9)(j),e=(0,h.I0)(),t=function(n){e((0,g.GK)(n.currentTarget.id))};return(0,v.jsx)(v.Fragment,{children:n.length>0?n.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,v.jsxs)(b,{children:[(0,v.jsxs)("div",{children:[r,": ",a," "]}),(0,v.jsx)(x,{id:e,onClick:t,children:"Delete"})]},e)})):(0,v.jsx)("p",{children:"No contacts"})})},y=function(){return(0,v.jsx)(f,{children:(0,v.jsx)(w,{})})},k=t(5705),F=(0,p.ZP)(k.l0)(o||(o=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px;\n  margin-bottom: 20px;\n"]))),P=p.ZP.button(s||(s=(0,m.Z)(["\n  width: fit-content;\n  border-radius: 4px;\n  padding: 4px;\n  border: none;\n  &:hover {\n    background-color: #e84a5f;\n  }\n"]))),_=p.ZP.label(c||(c=(0,m.Z)(["\n  width: 60%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),C=(0,p.ZP)(k.gN)(d||(d=(0,m.Z)(["\n  margin-bottom: 10px;\n"]))),A=function(){var n=(0,h.I0)(),e=(0,h.v9)((function(n){return n.contacts.items})).map((function(n){return n.name}));return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(k.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){e.includes(t.name)?alert("Contact whith the same name already exist!"):n((0,g.uK)(t)),r.resetForm()},children:(0,v.jsxs)(F,{autoComplete:"off",children:[(0,v.jsxs)(_,{htmlFor:"name",children:[(0,v.jsx)(v.Fragment,{children:"Name"}),(0,v.jsx)(C,{type:"text",name:"name",placeholder:"Evhen Melnicuk",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsxs)(_,{htmlFor:"number",children:[(0,v.jsx)(v.Fragment,{children:"Number"}),(0,v.jsx)(C,{type:"tel",name:"number",placeholder:"777-21-09",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsx)(P,{type:"submit",children:"Add contact"})]})})})},N=p.ZP.div(l||(l=(0,m.Z)(["\n  width: 400px;\n"])));function z(){var n=(0,h.I0)(),e=(0,h.v9)(Z);return(0,u.useEffect)((function(){n((0,g.yF)())}),[n]),(0,v.jsxs)(N,{children:[(0,v.jsx)(A,{}),(0,v.jsx)("div",{children:e&&"Request in progress..."}),(0,v.jsx)(y,{})]})}}}]);
//# sourceMappingURL=36.5dc6f953.chunk.js.map