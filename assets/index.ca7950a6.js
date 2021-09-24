var e=Object.defineProperty,s=(s,i,l)=>(((s,i,l)=>{i in s?e(s,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[i]=l})(s,"symbol"!=typeof i?i+"":i,l),l);import{j as i,r as l,R as t,a as r}from"./vendor.c1e03e1b.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?s.credentials="include":"anonymous"===e.crossorigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();class o{constructor(e,i,l){s(this,"update"),s(this,"isMarked",!1),s(this,"isCrossed",!1),s(this,"isValid",!0),this.grid=e,this.row=i,this.column=l,this.isCrossed=i%2==0}toggle(){this.isMarked=!this.isMarked;let e=this.up();for(;e;)e.recalculateState(),e=e.up();for(this.recalculateState(),e=this.down();e;)e.recalculateState(),e=e.down();for(this.recalculateState(),e=this.up();e;)e.recalculateState(),e=e.up()}up(){return this.grid.getCell(this.row-1,this.column)}down(){return this.grid.getCell(this.row+1,this.column)}left(){return this.grid.getCell(this.row,this.column-1)}right(){return this.grid.getCell(this.row,this.column+1)}recalculateState(){var e,s,i,l,t,r,o,n,d,c,a,u,h,p,f,m,v;const g=this.isCrossed,w=this.isValid;this.isMarked?!(null==(i=this.up())?void 0:i.isMarked)&&(null==(l=this.down())?void 0:l.isMarked)&&(null==(r=null==(t=this.down())?void 0:t.down())?void 0:r.isMarked)?this.isCrossed=!0:this.isCrossed=!1:(null==(e=this.down())?void 0:e.isCrossed)||(null==(s=this.up())?void 0:s.isCrossed)?this.isCrossed=!1:this.isCrossed=this.row%2==0,!this.isMarked||(null==(o=this.up())?void 0:o.isMarked)&&(null==(n=this.down())?void 0:n.isMarked)?this.isValid=!0:(null==(d=this.up())?void 0:d.isMarked)?(null==(h=this.down())?void 0:h.isMarked)||(this.isValid=!(!(null==(p=this.up())?void 0:p.isMarked)||!(null==(m=null==(f=this.up())?void 0:f.up())?void 0:m.isMarked))):this.isValid=!(!(null==(c=this.down())?void 0:c.isMarked)||!(null==(u=null==(a=this.down())?void 0:a.down())?void 0:u.isMarked)),this.isCrossed===g&&this.isValid===w||null==(v=this.update)||v.call(this)}}const n=i.exports.jsx,d=new class{constructor(e=100,i=100){s(this,"cells",[]),this.setDimensions(e,i)}setDimensions(e,s){var i;for(let l=0;l<e;l++){this.cells[l]||(this.cells[l]=[]);for(let e=0;e<s;e++)this.cells[l][e]=null!=(i=this.cells[l][e])?i:new o(this,l,e);this.cells[l].length>s&&(this.cells[l]=this.cells[l].slice(0,s))}this.cells.length>e&&(this.cells=this.cells.slice(0,e))}getCell(e,s){var i;return null==(i=this.cells[e])?void 0:i[s]}}(50,40);function c(){return n("div",{className:"grid",children:d.cells.flatMap(((e,s)=>e.map(((e,i)=>n(a,{cell:e},`${s}_${i}}`)))))})}function a(e){const s=l.exports.useReducer((e=>e+1),0)[1];l.exports.useEffect((()=>(e.cell.update=s,()=>e.cell.update=void 0)),[s,e.cell]);const i=["cell"];return e.cell.isMarked&&i.push("marked"),e.cell.isCrossed&&i.push("crossed"),i.push(e.cell.isValid?"valid":"invalid"),n("div",{onClick:()=>{e.cell.toggle(),s()},id:`${e.cell.row}_${e.cell.column}`,style:{top:32*e.cell.row,left:32*e.cell.column},className:i.join(" "),children:n("span",{className:"cell-text",children:e.cell.isCrossed?"x":""})},`${e.cell.row}_${e.cell.column}`)}t.render(n(r.StrictMode,{children:n(c,{})}),document.getElementById("root"));
//# sourceMappingURL=index.ca7950a6.js.map