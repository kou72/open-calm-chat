(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4738)}])},4738:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),s=n(7294),o=n(6154);const a=(e,t)=>{try{window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error(n)}},l=e=>{let t=e.map(((e,t)=>(t%2===0?"Q:":"A:")+e)).join("");return t+="A:",t},c=()=>{const e=["\u3053\u3093\u306b\u3061\u306f","\u3053\u3093\u306b\u3061\u306f\uff01\u4f55\u304b\u304a\u624b\u4f1d\u3044\u3067\u304d\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u304b\uff1f"],[t,n]=(0,s.useState)(""),[r,c]=(0,s.useState)(e);(0,s.useEffect)((()=>{const t=(e=>{try{const t=window.localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){console.log(t)}})("chat");t&&c(t),0===t.length&&c(e)}),[]);const i=async e=>{try{return(await o.Z.post("https://opencalm.ngrok.app",{instruction:e},{headers:{"Content-Type":"application/json"}})).data}catch(t){console.error(t)}};return{input:t,chat:r,setInput:n,addChat:async e=>{let t;0==r.length?(c([e,"\u30ea\u30af\u30a8\u30b9\u30c8\u4e2d..."]),t=l([e])):(c([...r,e,"\u30ea\u30af\u30a8\u30b9\u30c8\u4e2d..."]),t=l([...r,e]));const n=await i(t),s=(o=n,u=t.length,o.substring(u));var o,u;c([...r,e,s]),a("chat",[...r,e,s]),console.log("request",t),console.log("response",n)},resetChat:()=>{c([]),a("chat",[])}}};function i(){const{input:e,chat:t,setInput:n,addChat:s,resetChat:o}=c();return(0,r.jsx)("div",{className:"bg-green-100 min-h-screen",children:(0,r.jsxs)("div",{className:"h-[calc(100vh-160px)] flex flex-col items-center overflow-y-auto",children:[(0,r.jsx)("div",{className:"flex justify-center text-4xl font-mono font-extrabold text-gray-700 py-12 w-full",children:"open-calm-chat"}),(0,r.jsx)("div",{className:"w-[80%] sm:w-[512px] flex flex-col justify-center gap-4 text-sm mb-8",children:t.map(((e,t)=>(0,r.jsx)("div",{className:"rounded-3xl py-2 px-4 ".concat(t%2===0?"bg-white":"bg-gray-300"),children:e},t)))}),(0,r.jsx)("div",{className:"w-[80%] sm:w-[512px] fixed bottom-0 mb-16",children:(0,r.jsx)("textarea",{className:"w-full h-24 py-2 px-4 text-sm border-2 border-gray-400 focus:border-gray-500 rounded-xl resize-none",style:{outline:"none",boxShadow:"none"},placeholder:"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5165\u529b",value:e,onChange:e=>n(e.target.value),onKeyDown:t=>{var r;"Enter"===(r=t).key&&(r.ctrlKey||r.metaKey)&&(e&&s(e),n(""))}})}),(0,r.jsx)("div",{className:"w-full h-12 flex justify-center fixed bottom-0 bg-white border-t border-gray-300 ",children:(0,r.jsxs)("div",{className:"w-80 flex justify-evenly items-center h-full",children:[(0,r.jsx)("button",{className:"w-28 bg-white border border-green-500 rounded-full py-1",onClick:()=>o(),children:"\u5c65\u6b74\u30ea\u30bb\u30c3\u30c8"}),(0,r.jsx)("button",{className:"w-28 bg-green-300 rounded-full py-1",onClick:()=>{e&&s(e),n("")},children:"\u9001\u4fe1"})]})})]})})}}},function(e){e.O(0,[154,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);