import{D as n}from"./vendor-eef82a10.js";const a=n([]),l=n("joylat"),s=o=>{a.update(e=>[...e,{text:o,completed:!1,id:Date.now()}])},i=o=>{a.update(e=>e.filter(t=>t.id!==o))},c=o=>{a.update(e=>{let t=-1;for(let d=0;d<e.length;d++)if(e[d].id==o){t=d;break}return t!==-1&&(e[t].completed=!e[t].completed),e})};export{s as a,c as b,i as d,l as r,a as t};