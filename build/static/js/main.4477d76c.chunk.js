(this["webpackJsonp2.6-2.10"]=this["webpackJsonp2.6-2.10"]||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(2),l=t(0),r=t.n(l),u=t(13),c=t.n(u),o=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"add a new"),r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},i=function(e){var n=e.persons,t=e.filterWord;return r.a.createElement("div",null,r.a.createElement("ul",null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(n){return r.a.createElement("li",{key:n.id},n.name," ",r.a.createElement("button",{onClick:function(){return e.deleteUserr(n.id,n.name)}},"delete"))}))))},m=function(e){return r.a.createElement("div",null,"filter shown with:",r.a.createElement("input",{value:e.filterWord,onChange:e.handleFilterChange}))},d=t(3),s=t.n(d),f="https://hidden-coast-71590.herokuapp.com/api/persons",h=function(){return s.a.get(f).then((function(e){return e.data}))},E=function(e){return s.a.post(f,e).then((function(e){return e.data}))},b=(t(36),function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)}),g=function(){var e=Object(l.useState)([]),n=Object(a.a)(e,2),t=n[0],u=n[1],c=Object(l.useState)(""),d=Object(a.a)(c,2),g=d[0],v=d[1],p=Object(l.useState)(""),w=Object(a.a)(p,2),C=w[0],j=w[1],O=Object(l.useState)(""),N=Object(a.a)(O,2),k=N[0],S=N[1],y=Object(l.useState)(null),W=Object(a.a)(y,2),P=W[0],D=W[1];Object(l.useEffect)((function(){h().then((function(e){console.log(e),u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(b,{message:P}),r.a.createElement(m,{filterWord:k,handleFilterChange:function(e){console.log(e.target.value),S(e.target.value)}}),r.a.createElement(o,{addPerson:function(e){(e.preventDefault(),0==t.filter((function(e){return e.name===g})).length)?E({name:g,number:C}).then((function(e){u(t.concat(e)),v(""),j(""),D("Added ".concat(e.name)),setTimeout((function(){D(null)}),5e3)})):(alert("".concat(g," is already added to phonebook")),v(""))},newName:g,newNumber:C,handleNumberChange:function(e){console.log(e.target.value),j(e.target.value)},handleNameChange:function(e){console.log(e.target.value),v(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),t.length>0?r.a.createElement(i,{persons:t,filterWord:k,deleteUserr:function(e,n){window.confirm("Delete ".concat(n,"?"))&&(!function(e){s.a.delete("".concat(f,"/").concat(e))}(e),h().then((function(e){u(e)})))}}):r.a.createElement("div",null))};c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4477d76c.chunk.js.map