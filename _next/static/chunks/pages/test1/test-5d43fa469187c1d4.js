(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[206],{4639:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test1/test",function(){return c(19)}])},19:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return i}});var d=c(5893),e=c(1664),f=c.n(e),g=c(7294),h=c(9937);function i(){var a=function(){e(c+1)},b=(0,g.useState)(0),c=b[0],e=b[1];return h.console.log(c),(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:"First Post "}),(0,d.jsxs)("button",{onClick:a,children:["Likes (",c,")"]}),(0,d.jsx)(f(),{href:"/",children:"back"})]})}},9937:function(a){var b,c,d,e,f,g,h,i=Object.create,j=Object.defineProperty,k=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,m=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,o=(a,b)=>j(a,"name",{value:b,configurable:!0}),p=(a,b,c,d)=>{if(b&&"object"==typeof b||"function"==typeof b)for(let e of l(b))n.call(a,e)||e===c||j(a,e,{get:()=>b[e],enumerable:!(d=k(b,e))||d.enumerable});return a},q=(b={"<define:process>"(){}},function(){return b&&(c=(0,b[l(b)[0]])(b=0)),c}),r=(d={"../format/dist/index.js"(a){"use strict";function b(a={}){void 0===a.customInspectSymbol&&(a.customInspectSymbol=Symbol.for("edge-runtime.inspect.custom")),void 0===a.formatError&&(a.formatError=a=>`[${Error.prototype.toString.call(a)}]`);let{formatError:b,customInspectSymbol:k}=a;function l(...a){let[b]=a;if(!e(b,"string"))return d(b,k)?l(b[k]()):a.map(a=>n(a,{customInspectSymbol:k})).join(" ");let c=1,f=String(b).replace(/%[sjdOoif%]/g,b=>{if("%%"===b)return"%";if(c>=a.length)return b;switch(b){case"%s":{let e=a[c++];return d(e,k)?l(e[k]()):String(e)}case"%j":return j(a[c++]);case"%d":return String(Number(a[c++]));case"%O":return n(a[c++],{customInspectSymbol:k});case"%o":return n(a[c++],{customInspectSymbol:k,showHidden:!0,depth:4});case"%i":return String(parseInt(a[c++],10));case"%f":return String(parseFloat(a[c++]));default:return b}});for(let g=a[c];c<a.length;g=a[++c])null!==g&&e(g,"object")?f+=" "+n(g):f+=" "+g;return f}function m(a,j,m){if(d(j,k))return l(j[k]());let n=c(j);if(void 0!==n)return n;let o=Object.getOwnPropertySymbols(j);o.length>0&&o.forEach(a=>{let b=j,c=`[${a.toString()}]`;b[c]=b[a],delete b[a]});let r=a.showHidden?Object.getOwnPropertyNames(j):Object.keys(j),s=new Set;if(r.forEach(a=>s.add(a)),0===r.length){if(e(j,"function"))return`[Function${j.name?": "+j.name:""}]`;if(f(j))return RegExp.prototype.toString.call(j);if(g(j))return Date.prototype.toString.call(j);if(h(j))return b(j);else if(d(j,a.customInspectSymbol))return l(j[a.customInspectSymbol]())}let t=e(j,"function"),u=Array.isArray(j),v="";t?v=`[Function${j.name?": "+j.name:""}]`:f(j)?v=" "+RegExp.prototype.toString.call(j):g(j)?v=" "+Date.prototype.toUTCString.call(j):h(j)?v=" "+b(j):d(j,a.customInspectSymbol)&&(v=" "+j[a.customInspectSymbol]());let w=u?["[","]"]:t?["",""]:["{","}"];if(0===r.length&&(!u||0===j.length))return w[0]+v+w[1];if(m&&m<0)return f(j)?RegExp.prototype.toString.call(j):"[Object]";a.seen.push(j);let x=u?q(a,j,m,s,r):r.map(b=>p(a,j,m,s,b,!1));return a.seen.pop(),i(x,v,w,t)}function n(a,b){return m(b=Object.assign({seen:[],depth:2},b),a,b.depth)}function p(a,b,c,d,e,f){let g,h,i=Object.getOwnPropertyDescriptor(b,e)||{value:b[e]};return(i.get?h=i.set?"[Getter/Setter]":"[Getter]":i.set&&(h="[Setter]"),d.has(e)||(g="["+e+"]"),!h&&(0>a.seen.indexOf(i.value)?(h=m(a,i.value,null==c?null:c-1)).indexOf("\n")> -1&&(h=f?h.split("\n").map(a=>`  ${a}`).join("\n").slice(2):"\n"+h.split("\n").map(a=>`   ${a}`).join("\n")):h="[Circular]"),void 0===g&&f&&e.match(/^\d+$/))?h:`${e}: ${h}`}function q(a,b,c,d,e){let f=[];for(let g=0;g<b.length;++g)Object.prototype.hasOwnProperty.call(b,String(g))?f.push(p(a,b,c,d,String(g),!0)):f.push("");return e.forEach(e=>{e.match(/^\d+$/)||f.push(p(a,b,c,d,e,!0))}),f}return o(l,"format"),o(m,"formatValue"),o(n,"inspect"),o(p,"formatProperty"),o(q,"formatArray"),l}function c(a){return null===a?"null":void 0===a?"undefined":e(a,"string")?`'${JSON.stringify(a).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')}'`:e(a,"boolean")||e(a,"number")||e(a,"bigint")?""+a:e(a,"symbol")?a.toString():void 0}function d(a,b){return null!==a&&e(a,"object")&&b in a&&e(a[b],"function")}function e(a,b){return typeof a===b}function f(a){return e(a,"object")&&"[object RegExp]"===Object.prototype.toString.call(a)}function g(a){return e(a,"object")&&"[object Date]"===Object.prototype.toString.call(a)}function h(a){return e(a,"object")&&("[object Error]"===Object.prototype.toString.call(a)||a instanceof Error)}function i(a,b,c,d){let e=a.reduce((a,b)=>a+b.replace(/\u001b\[\d\d?m/g,"").length+1,0);if(e>60){let f=d?" {":"",g=d?"\n}":" ";return c[0]+(""===b?"":b+f+"\n ")+` ${a.join(",\n  ")}`+g+c[1]}return(c[0]+b+(d?" { ":" ")+a.join(", ")+(d?" } ":" ")+c[1]).trim()}function j(a){return Array.isArray(a)&&(a=a.map(a=>JSON.parse(JSON.stringify(a,k())))),JSON.stringify(a,k())}function k(){let a=new WeakSet;return(b,c)=>{if(null!==c&&e(c,"object")){if(a.has(c))return"[Circular]";a.add(c)}return c}}q(),Object.defineProperty(a,"__esModule",{value:!0}),a.createFormat=void 0,o(b,"createFormat"),a.createFormat=b,o(c,"formatPrimitive"),o(d,"hasCustomSymbol"),o(e,"kind"),o(f,"isRegExp"),o(g,"isDate"),o(h,"isError"),o(i,"reduceToSingleString"),o(j,"safeStringify"),o(k,"makeCircularReplacer")}},function(){return e||(0,d[l(d)[0]])((e={exports:{}}).exports,e),e.exports}),s={};((a,b)=>{for(var c in b)j(a,c,{get:b[c],enumerable:!0})})(s,{console:()=>D}),a.exports=(f=s,p(j({},"__esModule",{value:!0}),f)),q();var t=(0,(h=null!=(g=r())?i(m(g)):{},p(g&&g.__esModule?h:j(h,"default",{value:g,enumerable:!0}),g)).createFormat)(),u=console.error.bind(console),v=console.log.bind(console),w=console.assert.bind(console),x=console.time.bind(console),y=console.timeEnd.bind(console),z=console.timeLog.bind(console),A=console.trace.bind(console),B=o((...a)=>u(t(...a)),"error"),C=o((...a)=>v(t(...a)),"log"),D={assert:(a,...b)=>w(a,t(...b)),count:console.count.bind(console),dir:console.dir.bind(console),error:B,info:C,log:C,time:(...a)=>x(t(...a)),timeEnd:(...a)=>y(t(...a)),timeLog:z,trace:A,warn:B}}},function(a){a.O(0,[664,774,888,179],function(){var b;return a(a.s=4639)}),_N_E=a.O()}])