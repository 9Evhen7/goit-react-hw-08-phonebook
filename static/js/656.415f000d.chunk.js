"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[656],{656:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,o,i,c,s,d,l=t(2791),u=t(9434),m=t(8494),h=t(168),p=t(6444),x=p.ZP.button(r||(r=(0,h.Z)(["\n  border: none;\n  border-radius: 4px;\n  background-color: transparent;\n  &:hover {\n    background-color: #8787e8;\n  }\n"]))),b=p.ZP.li(a||(a=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),f=(p.ZP.ul(o||(o=(0,h.Z)(["\n  margin-bottom: 0;\n  padding: 0;\n"]))),t(3634)),g=function(n){return n.contacts.items},j=function(n){return n.contacts.loading},Z=t(184),v=function(){var n=(0,u.v9)(g),e=(0,u.I0)();console.log(n);var t=function(t){e((0,f.GK)(t.currentTarget.id));var r=t.currentTarget.id;console.log(r);var a=n.find((function(n){return n.id===r}));console.log(a)};return(0,Z.jsx)(Z.Fragment,{children:n.length>0?n.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,Z.jsxs)(b,{children:[r,": ",a," ",(0,Z.jsx)(x,{id:e,onClick:t,children:(0,Z.jsx)(m._51,{})})]},e)})):(0,Z.jsx)("p",{children:"No contacts"})})},k=t(5705),y=(0,p.ZP)(k.l0)(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px;\n"]))),_=p.ZP.button(c||(c=(0,h.Z)(["\n  width: fit-content;\n  border-radius: 4px;\n  padding: 4px;\n  border: none;\n  &:hover {\n    background-color: #8787e8;\n  }\n"]))),w=p.ZP.label(s||(s=(0,h.Z)(["\n  margin-bottom: 8px;\n"]))),F=(0,p.ZP)(k.gN)(d||(d=(0,h.Z)(["\n  margin-bottom: 20px;\n"]))),P=function(){var n=(0,u.I0)(),e=(0,u.v9)((function(n){return n.contacts.items})).map((function(n){return n.name}));return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(k.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){e.includes(t.name)?alert("Contact whith the same name already exist!"):n((0,f.uK)(t)),r.resetForm()},children:(0,Z.jsxs)(y,{autoComplete:"off",children:[(0,Z.jsx)(w,{htmlFor:"name",children:"Name"}),(0,Z.jsx)(F,{type:"text",name:"name",placeholder:"Evhen Melnicuk",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,Z.jsx)(w,{htmlFor:"number",children:"Number"}),(0,Z.jsx)(F,{type:"tel",name:"number",placeholder:"777-21-09",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,Z.jsx)(_,{type:"submit",children:"Add contact"})]})})})};function C(){var n=(0,u.I0)(),e=(0,u.v9)(j);return(0,l.useEffect)((function(){n((0,f.yF)())}),[n]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(P,{}),(0,Z.jsx)("div",{children:e&&"Request in progress..."}),(0,Z.jsx)(v,{})]})}}}]);
//# sourceMappingURL=656.415f000d.chunk.js.map