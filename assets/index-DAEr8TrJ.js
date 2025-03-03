var zl=Object.defineProperty;var ql=(n,e,t)=>e in n?zl(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var be=(n,e,t)=>ql(n,typeof e!="symbol"?e+"":e,t);import{r as Hl,a as Gl,b as U,u as Kl,c as Pn,m as gt}from"./vendor-BOdX4RRU.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Lr={exports:{}},qt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mi;function Wl(){if(Mi)return qt;Mi=1;var n=Hl(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(h,f,m){var _,T={},R=null,P=null;m!==void 0&&(R=""+m),f.key!==void 0&&(R=""+f.key),f.ref!==void 0&&(P=f.ref);for(_ in f)r.call(f,_)&&!o.hasOwnProperty(_)&&(T[_]=f[_]);if(h&&h.defaultProps)for(_ in f=h.defaultProps,f)T[_]===void 0&&(T[_]=f[_]);return{$$typeof:e,type:h,key:R,ref:P,props:T,_owner:i.current}}return qt.Fragment=t,qt.jsx=l,qt.jsxs=l,qt}var Oi;function Ql(){return Oi||(Oi=1,Lr.exports=Wl()),Lr.exports}var u=Ql(),Vn={},Li;function Xl(){if(Li)return Vn;Li=1;var n=Gl();return Vn.createRoot=n.createRoot,Vn.hydrateRoot=n.hydrateRoot,Vn}var Yl=Xl(),Jl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Zl=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Y=(n,e)=>{const t=U.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:l,children:h,...f},m)=>U.createElement("svg",{ref:m,...Jl,width:i,height:i,stroke:r,strokeWidth:l?Number(o)*24/Number(i):o,className:`lucide lucide-${Zl(n)}`,...f},[...e.map(([_,T])=>U.createElement(_,T)),...(Array.isArray(h)?h:[h])||[]]));return t.displayName=`${n}`,t},ec=Y("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Oo=Y("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Yt=Y("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),tc=Y("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]),nc=Y("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]),Lo=Y("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]),rc=Y("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),sc=Y("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),Wr=Y("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]),Fo=Y("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]),Bo=Y("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),ic=Y("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),Uo=Y("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),sr=Y("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),oc=Y("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),ac=Y("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),lc=Y("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),cc=Y("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),uc=Y("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),hc=Y("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),$o=Y("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),zo=Y("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),dc=Y("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),hs=Y("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function ds({onNavigate:n}){const e=[{name:"About",href:"/crotonite-beta/about"},{name:"Products",href:"#products"},{name:"Contact",href:"/crotonite-beta/contact"}],t=i=>{n&&(i.preventDefault(),n("/crotonite-beta/signup"))},r=i=>{n&&(i.preventDefault(),n("/crotonite-beta/login"))};return u.jsx("div",{className:"fixed w-full top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4",children:u.jsx("nav",{className:"bg-gray-900/60 backdrop-blur-lg rounded-2xl border border-gray-800/50",children:u.jsx("div",{className:"max-w-4xl mx-auto px-4",children:u.jsxs("div",{className:"flex justify-between h-16",children:[u.jsx("div",{className:"flex items-center",children:u.jsxs("a",{href:"/crotonite-beta/",className:"flex items-center",children:[u.jsx(hs,{className:"h-6 w-6 text-blue-400"}),u.jsx("span",{className:"ml-2 text-lg font-medium text-white",children:"Crotonite"})]})}),u.jsxs("div",{className:"flex items-center space-x-6",children:[e.map(i=>u.jsx("a",{href:i.href,className:"text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors",children:i.name},i.name)),u.jsx("a",{href:"/crotonite-beta/login",onClick:r,className:"bg-gray-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700/80 transition-colors",children:"Log In"}),u.jsx("a",{href:"/crotonite-beta/signup",onClick:t,className:"bg-blue-500/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600/80 transition-colors",children:"Sign Up"})]})]})})})})}function fc(){const n="/crotonite-beta";return u.jsx("footer",{className:"bg-[#0a0a0f] border-t border-gray-800",children:u.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx(hs,{className:"h-6 w-6 text-blue-400"}),u.jsx("span",{className:"ml-2 text-lg font-medium text-white",children:"Crotonite"})]}),u.jsx("p",{className:"mt-4 text-sm text-gray-400",children:"Making electron accelerator technology accessible to research institutions, universities, and laboratories worldwide."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm font-semibold text-gray-300 uppercase tracking-wider",children:"Contact"}),u.jsxs("ul",{className:"mt-4 space-y-2",children:[u.jsxs("li",{className:"flex items-center text-sm",children:[u.jsx(sr,{className:"h-4 w-4 mr-2 text-gray-400"}),u.jsx("a",{href:"mailto:sales@crotonite.com",className:"text-gray-400 hover:text-white",children:"akantarip30@gmail.com"})]}),u.jsxs("li",{className:"flex items-center text-sm",children:[u.jsx(cc,{className:"h-4 w-4 mr-2 text-gray-400"}),u.jsx("span",{className:"text-gray-400",children:"+91 94799 76753"})]}),u.jsxs("li",{className:"flex items-center text-sm",children:[u.jsx(oc,{className:"h-4 w-4 mr-2 text-gray-400"}),u.jsx("span",{className:"text-gray-400",children:"Indore,India"})]})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm font-semibold text-gray-300 uppercase tracking-wider",children:"Links"}),u.jsxs("ul",{className:"mt-4 space-y-2",children:[u.jsx("li",{children:u.jsx("a",{href:`${n}/about`,className:"text-sm text-gray-400 hover:text-white",children:"About Us"})}),u.jsx("li",{children:u.jsx("a",{href:`${n}/technology`,className:"text-sm text-gray-400 hover:text-white",children:"Technology"})}),u.jsx("li",{children:u.jsx("a",{href:`${n}/products`,className:"text-sm text-gray-400 hover:text-white",children:"Products"})}),u.jsx("li",{children:u.jsx("a",{href:`${n}/contact`,className:"text-sm text-gray-400 hover:text-white",children:"Support"})})]})]})]}),u.jsx("div",{className:"mt-8 pt-8 border-t border-gray-800",children:u.jsxs("p",{className:"text-center text-sm text-gray-400",children:["© ",new Date().getFullYear()," Crotonite. All rights reserved."]})})]})})}function Fr({children:n,onNavigate:e}){return u.jsxs("div",{className:"min-h-screen flex flex-col bg-gradient-to-b from-[#0a0a0f] via-[#0f172a] to-[#0a0a0f] relative z-10",children:[u.jsx(ds,{onNavigate:e}),u.jsx("main",{className:"flex-grow relative z-10",children:n}),u.jsx(fc,{})]})}function mc({onNavigate:n}){const e=t=>{t.preventDefault(),n&&n("/signup")};return u.jsxs("div",{className:"relative hero-gradient overflow-hidden pt-20",children:[u.jsx("div",{className:"absolute inset-0 z-0",children:u.jsxs("div",{className:"relative h-full w-full",children:[u.jsx("div",{className:"absolute h-96 w-96 rounded-full bg-blue-500/10 animate-pulse",style:{top:"10%",left:"50%",transform:"translateX(-50%)"}}),u.jsx("div",{className:"absolute h-64 w-64 rounded-full bg-blue-600/5 animate-pulse delay-300",style:{top:"30%",left:"30%"}}),u.jsx("div",{className:"absolute h-80 w-80 rounded-full bg-indigo-500/5 animate-pulse delay-700",style:{top:"20%",left:"70%"}})]})}),u.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[u.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 w-24 h-48 bg-gradient-to-r from-gray-800 to-gray-900 rounded-r-3xl border-r-4 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]",children:u.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 w-4 h-12 bg-blue-500/20 rounded-full blur-sm"})}),u.jsx("div",{className:"electron-particle absolute h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-electron-1",style:{top:"45%",left:"10%"},children:u.jsx("div",{className:"absolute inset-0 bg-blue-400 rounded-full animate-pulse"})}),u.jsx("div",{className:"electron-particle absolute h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-electron-2",style:{top:"48%",left:"5%"},children:u.jsx("div",{className:"absolute inset-0 bg-blue-400 rounded-full animate-pulse"})}),u.jsx("div",{className:"electron-particle absolute h-5 w-5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] animate-electron-3",style:{top:"52%",left:"8%"},children:u.jsx("div",{className:"absolute inset-0 bg-blue-400 rounded-full animate-pulse"})}),u.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 left-24 w-full h-1 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full blur-sm"}),u.jsx("div",{className:"absolute top-[45%] -translate-y-1/2 left-24 w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent rounded-full blur-sm"}),u.jsx("div",{className:"absolute top-[55%] -translate-y-1/2 left-24 w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent rounded-full blur-sm"})]}),u.jsx("style",{children:`
        @keyframes electron-move-1 {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(1500px); opacity: 0; }
        }
        @keyframes electron-move-2 {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(1500px); opacity: 0; }
        }
        @keyframes electron-move-3 {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(1500px); opacity: 0; }
        }
        .animate-electron-1 {
          animation: electron-move-1 8s infinite;
        }
        .animate-electron-2 {
          animation: electron-move-2 8s infinite 2s;
        }
        .animate-electron-3 {
          animation: electron-move-3 8s infinite 4s;
        }
      `}),u.jsx("style",{children:`
        /* Custom Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.3);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 5px;
          border: 2px solid rgba(15, 23, 42, 0.2);
          transition: all 0.3s ease;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
      `}),u.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[u.jsx("div",{className:"absolute h-20 w-20 rounded-lg bg-blue-500/10 floating-element",style:{top:"15%",left:"15%",transform:"rotate(15deg)",animationDelay:"0.5s"}}),u.jsx("div",{className:"absolute h-16 w-16 rounded-lg bg-blue-400/10 floating-element",style:{top:"60%",left:"80%",transform:"rotate(-10deg)",animationDelay:"1.5s"}}),u.jsx("div",{className:"absolute h-24 w-24 rounded-lg bg-indigo-500/10 floating-element",style:{top:"70%",left:"25%",transform:"rotate(30deg)",animationDelay:"1s"}})]}),u.jsx("div",{className:"relative max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-8",children:[u.jsxs("div",{className:"text-center md:text-left md:flex-1",children:[u.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg",children:[u.jsx("span",{className:"block transform transition-transform hover:scale-105 duration-500",children:"Support the Future"}),u.jsx("span",{className:"block text-blue-400 mt-2 transform transition-transform hover:scale-105 duration-500",children:"of Particle Physics"}),u.jsx("span",{className:"block text-gray-300 text-2xl sm:text-3xl md:text-4xl mt-3 font-medium transform transition-transform hover:scale-105 duration-500",children:"Electron Accelerators For Everyone"})]}),u.jsx("p",{className:"mt-8 text-xl text-gray-300 max-w-2xl",children:"Join our crowdfunding campaign to revolutionize particle physics. Help us reach our goal of $250,000!"}),u.jsx("div",{className:"mt-10 flex justify-center md:justify-start",children:u.jsxs("a",{href:"/signup",onClick:e,className:"bg-blue-500 inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white hover:bg-blue-600 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg",children:["Get Started",u.jsx(Yt,{className:"ml-2 h-5 w-5"})]})})]}),u.jsxs("div",{className:"md:flex-1 w-full md:w-auto space-y-4",children:[u.jsxs("div",{className:"bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 floating-element transform hover:scale-105 transition-all duration-300 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/10",style:{animationDelay:"0.7s"},children:[u.jsxs("div",{className:"flex justify-between text-sm text-gray-300 mb-2",children:[u.jsx("span",{children:"$0 raised"}),u.jsx("span",{children:"$250,000 goal"})]}),u.jsx("div",{className:"h-4 bg-gray-700/50 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-blue-500 rounded-full",style:{width:"0%"}})}),u.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"Be one of the first backers to support this project"})]}),u.jsxs("div",{className:"bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 transform hover:scale-105 transition-all duration-300 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/10",children:[u.jsx("h2",{className:"text-3xl font-bold text-white mb-2",children:"Crowd Fund Us"}),u.jsx("p",{className:"text-xl text-gray-300 mb-8",children:"Join the Revolution in Particle Physics"}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsx("a",{href:"https://www.indiegogo.com",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center px-6 py-4 border border-gray-700 rounded-xl bg-[#eb1478]/90 backdrop-blur-xl text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 font-semibold",children:"Indiegogo"}),u.jsx("a",{href:"https://www.kickstarter.com",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center px-6 py-4 border border-gray-700 rounded-xl bg-[#05ce78]/90 backdrop-blur-xl text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 font-semibold",children:"Kickstarter"})]}),u.jsx("p",{className:"text-gray-400 text-sm mt-6 text-center",children:"Help us revolutionize particle physics education and research. Every contribution brings us closer to our goal!"})]})]})]})}),u.jsx("div",{className:"wave-divider",children:u.jsx("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:u.jsx("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",fill:"#0a0a0f",fillOpacity:"0.8"})})})]})}const pc=[{title:"Affordable",description:"Revolutionary pricing starting at $49,999, making electron acceleration accessible to more institutions.",icon:Wr},{title:"Easy to Use",description:"Simplified controls and intuitive interface designed for researchers of all experience levels.",icon:zo},{title:"Low Maintenance",description:"Minimal upkeep requirements and readily available replacement parts.",icon:dc},{title:"Compact Design",description:"Fits in standard laboratory spaces while maintaining professional-grade performance.",icon:Fo}];function gc(){return u.jsxs("div",{className:"relative py-24 bg-[#0a0a0f] overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f172a] to-[#0a0a0f] opacity-90"}),u.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[u.jsx("div",{className:"absolute h-40 w-40 rounded-full bg-blue-500/5 floating-element",style:{top:"10%",left:"5%",animationDelay:"0.2s"}}),u.jsx("div",{className:"absolute h-60 w-60 rounded-full bg-indigo-500/5 floating-element",style:{bottom:"10%",right:"5%",animationDelay:"1.2s"}})]}),u.jsxs("div",{className:"relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center",children:[u.jsx("h2",{className:"text-3xl font-bold text-white sm:text-4xl drop-shadow-md",children:"Democratizing Particle Physics"}),u.jsx("p",{className:"mt-4 text-xl text-gray-300",children:"Professional-grade electron acceleration at a fraction of the cost"})]}),u.jsx("div",{className:"mt-20",children:u.jsx("div",{className:"grid grid-cols-1 gap-12 sm:grid-cols-2",children:pc.map((n,e)=>u.jsxs("div",{className:"flex items-start transform transition-all duration-500 hover:translate-y-[-5px]",style:{animationDelay:`${e*.2}s`},children:[u.jsx("div",{className:"flex-shrink-0 p-3 bg-blue-900/20 rounded-xl shadow-lg",children:u.jsx(n.icon,{className:"h-8 w-8 text-blue-400"})}),u.jsxs("div",{className:"ml-6",children:[u.jsx("h3",{className:"text-lg font-semibold text-white",children:n.title}),u.jsx("p",{className:"mt-2 text-base text-gray-300",children:n.description})]})]},n.title))})})]}),u.jsx("div",{className:"section-divider",children:u.jsx("div",{className:"wave-divider",children:u.jsx("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:u.jsx("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",fill:"#0a0a0f",fillOpacity:"0.9"})})})})]})}const yc=[{name:"EA-100",description:"Entry-level electron accelerator perfect for educational institutions and small research labs.",price:"$49,999",features:["Energy range: 100 keV - 1 MeV","Compact 2m x 1m footprint","Basic beam control","Standard safety features"],icon:hs},{name:"EA-500",description:"Professional-grade accelerator with advanced controls and higher energy range.",price:"$99,999",features:["Energy range: 500 keV - 5 MeV","Precision beam steering","Advanced diagnostics","Remote operation capability"],icon:Fo,featured:!0},{name:"EA-1000",description:"Research-grade system for advanced applications and specialized research.",price:"$199,999",features:["Energy range: 1 MeV - 10 MeV","Full spectrum diagnostics","Multi-beam configuration","Custom beam profiles"],icon:hc}];function _c(){const n=U.useRef(null);return U.useEffect(()=>{const e=document.querySelectorAll(".product-card"),t=i=>{const o=i.currentTarget,l=o.getBoundingClientRect(),h=i.clientX-l.left,f=i.clientY-l.top;o.style.setProperty("--mouse-x",`${h}px`),o.style.setProperty("--mouse-y",`${f}px`);const m=l.width/2,_=l.height/2,T=(h-m)/m*5,R=(_-f)/_*5;o.style.transform=`perspective(1000px) rotateX(${R}deg) rotateY(${T}deg) translateZ(0)`},r=i=>{const o=i.currentTarget;o.style.transform="perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"};return e.forEach(i=>{i.addEventListener("mousemove",t),i.addEventListener("mouseleave",r)}),()=>{e.forEach(i=>{i.removeEventListener("mousemove",t),i.removeEventListener("mouseleave",r)})}},[]),u.jsxs("div",{id:"products",className:"relative py-24 bg-[#0a0a0f] overflow-hidden",ref:n,children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f172a] to-[#0a0a0f] opacity-90"}),u.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[u.jsx("div",{className:"absolute h-32 w-32 rounded-lg bg-blue-500/5 floating-element",style:{top:"20%",right:"10%",transform:"rotate(15deg)",animationDelay:"0.7s"}}),u.jsx("div",{className:"absolute h-24 w-24 rounded-lg bg-indigo-500/5 floating-element",style:{bottom:"15%",left:"10%",transform:"rotate(-10deg)",animationDelay:"1.3s"}})]}),u.jsxs("div",{className:"relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center",children:[u.jsx("h2",{className:"text-3xl font-bold text-white sm:text-4xl drop-shadow-md",children:"Choose Your Accelerator"}),u.jsx("p",{className:"mt-4 text-xl text-gray-300",children:"Professional-grade electron accelerators at revolutionary prices"})]}),u.jsx("div",{className:"mt-20 grid grid-cols-1 gap-8 md:grid-cols-3",children:yc.map((e,t)=>u.jsxs("div",{className:`product-card relative rounded-2xl border ${e.featured?"featured border-blue-500/20 bg-gray-900/60":"border-gray-800/20 bg-gray-900/30"} p-8 shadow-lg backdrop-blur-sm`,style:{transformStyle:"preserve-3d",transition:"transform 0.3s ease",animationDelay:`${t*.2}s`},children:[e.featured&&u.jsx("div",{className:"absolute -top-4 left-1/2 -translate-x-1/2 z-10",children:u.jsx("span",{className:"bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg",children:"Most Popular"})}),u.jsxs("div",{className:"card-content",children:[u.jsx("div",{className:"flex items-center justify-center",children:u.jsx("div",{className:`p-4 rounded-full ${e.featured?"bg-blue-900/20":"bg-gray-800/30"} shadow-inner`,children:u.jsx(e.icon,{className:`h-12 w-12 ${e.featured?"text-blue-400":"text-gray-400"}`})})}),u.jsx("h3",{className:"mt-6 text-xl font-semibold text-center text-white",children:e.name}),u.jsx("div",{className:"mt-4 text-center",children:u.jsx("span",{className:"text-2xl font-bold text-white",children:e.price})}),u.jsx("p",{className:"mt-4 text-sm text-gray-300 text-center",children:e.description}),u.jsx("ul",{className:"mt-8 space-y-3",children:e.features.map(r=>u.jsxs("li",{className:"flex items-center text-sm text-gray-300",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"}),r]},r))}),u.jsx("div",{className:"mt-8",children:u.jsx("a",{href:"/contact",className:`block w-full text-center py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${e.featured?"bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20":"border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 hover:shadow-lg hover:shadow-gray-700/10"}`,children:"Contact Sales"})})]})]},e.name))})]})]})}function $e({colors:n=["#3b82f6","#6366f1","#8b5cf6"],size:e=600,opacity:t=.3,blur:r=100,transitionSpeed:i=.2}){const o=U.useRef(null),l=U.useRef({x:0,y:0}),h=U.useRef(!1),f=U.useRef(null);U.useEffect(()=>{const _=P=>{l.current={x:P.clientX,y:P.clientY},h.current||(h.current=!0,f.current=requestAnimationFrame(R))},T=P=>{P.touches.length>0&&(l.current={x:P.touches[0].clientX,y:P.touches[0].clientY},h.current||(h.current=!0,f.current=requestAnimationFrame(R)))},R=()=>{if(o.current){const{x:P,y:k}=l.current;o.current.style.transform=`translate3d(${P-e/2}px, ${k-e/2}px, 0)`}f.current=requestAnimationFrame(R)};return o.current&&typeof window<"u"&&(l.current={x:window.innerWidth/2,y:window.innerHeight/2},f.current=requestAnimationFrame(R)),window.addEventListener("mousemove",_,{passive:!0}),window.addEventListener("touchmove",T,{passive:!0}),()=>{window.removeEventListener("mousemove",_),window.removeEventListener("touchmove",T),f.current&&cancelAnimationFrame(f.current)}},[e]);const m=`radial-gradient(circle, ${n.join(", ")})`;return u.jsx("div",{ref:o,className:"pointer-events-none fixed z-0",style:{width:`${e}px`,height:`${e}px`,background:m,opacity:t,filter:`blur(${r}px)`,transition:`opacity ${i}s ease`,willChange:"transform",mixBlendMode:"lighten"},"aria-hidden":"true"})}function vc({onNavigate:n}){const[e,t]=U.useState({name:"",organization:"",email:"",password:""}),r=[{quote:"The future of particle physics is now accessible to everyone. Revolutionary technology at an unbeatable price.",author:"Dr. Sarah Chen",role:"Research Director at MIT"},{quote:"Crotonite has transformed how we approach particle physics education. Our students now have hands-on experience.",author:"Prof. James Miller",role:"Physics Department, Stanford"}],[i,o]=U.useState(0),l=_=>{_.preventDefault(),console.log("Form submitted:",e)},h=_=>{t({...e,[_.target.name]:_.target.value})},f=()=>{console.log("Google sign up clicked")},m=()=>{console.log("GitHub sign up clicked")};return u.jsxs("div",{className:"min-h-screen flex flex-col hero-gradient",children:[u.jsx($e,{colors:["#3b82f6","#6366f1","#8b5cf6"],size:800,opacity:.15,blur:120}),u.jsx(ds,{}),u.jsxs("div",{className:"flex-1 flex min-h-screen pt-24",children:[u.jsx("div",{className:"flex-1 flex items-center justify-center p-8",children:u.jsxs("div",{className:"w-full max-w-md space-y-8",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-3xl font-bold text-white",children:"Welcome Techies"}),u.jsx("p",{className:"mt-2 text-gray-300",children:"Please enter your account details"})]}),u.jsxs("form",{onSubmit:l,className:"mt-8 space-y-6",children:[u.jsxs("div",{className:"space-y-5",children:[u.jsx("div",{children:u.jsxs("div",{className:"relative",children:[u.jsx("input",{id:"name",name:"name",type:"text",required:!0,value:e.name,onChange:h,className:"w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20",placeholder:"Full Name"}),u.jsx($o,{className:"absolute right-4 top-3.5 h-5 w-5 text-gray-400"})]})}),u.jsx("div",{children:u.jsxs("div",{className:"relative",children:[u.jsx("input",{id:"organization",name:"organization",type:"text",required:!0,value:e.organization,onChange:h,className:"w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20",placeholder:"Organization"}),u.jsx(Lo,{className:"absolute right-4 top-3.5 h-5 w-5 text-gray-400"})]})}),u.jsx("div",{children:u.jsxs("div",{className:"relative",children:[u.jsx("input",{id:"email",name:"email",type:"email",required:!0,value:e.email,onChange:h,className:"w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20",placeholder:"Email address"}),u.jsx(sr,{className:"absolute right-4 top-3.5 h-5 w-5 text-gray-400"})]})}),u.jsx("div",{children:u.jsxs("div",{className:"relative",children:[u.jsx("input",{id:"password",name:"password",type:"password",required:!0,value:e.password,onChange:h,className:"w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20",placeholder:"Password"}),u.jsx(Uo,{className:"absolute right-4 top-3.5 h-5 w-5 text-gray-400"})]})})]}),u.jsx("div",{children:u.jsxs("button",{type:"submit",className:"w-full flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-colors duration-200 font-medium",children:["Create Account",u.jsx(Yt,{className:"ml-2 h-5 w-5"})]})}),u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-0 flex items-center",children:u.jsx("div",{className:"w-full border-t border-gray-700"})}),u.jsx("div",{className:"relative flex justify-center text-sm",children:u.jsx("span",{className:"px-2 bg-[#0a0a0f] text-gray-400",children:"Or continue with"})})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("button",{type:"button",onClick:f,className:"flex items-center justify-center px-4 py-3 border border-gray-700 rounded-xl bg-black/40 backdrop-blur-xl text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300",children:[u.jsxs("svg",{className:"w-5 h-5 mr-2",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),u.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),u.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),u.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),"Google"]}),u.jsxs("button",{type:"button",onClick:m,className:"flex items-center justify-center px-4 py-3 border border-gray-700 rounded-xl bg-black/40 backdrop-blur-xl text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300",children:[u.jsx(Bo,{className:"w-5 h-5 mr-2"}),"GitHub"]})]})]})]})}),u.jsx("div",{className:"hidden lg:flex flex-1 items-center justify-center p-8 bg-black/30 backdrop-blur-sm",children:u.jsx("div",{className:"max-w-md",children:u.jsxs("div",{className:"relative",children:[u.jsxs("div",{className:"text-xl text-white italic mb-4",children:['"',r[i].quote,'"']}),u.jsx("div",{className:"text-blue-400 font-medium",children:r[i].author}),u.jsx("div",{className:"text-gray-400 text-sm",children:r[i].role}),u.jsxs("div",{className:"flex space-x-4 mt-8",children:[u.jsx("button",{onClick:()=>o(_=>_===0?r.length-1:_-1),className:"p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-white transition-colors",children:u.jsx(Oo,{className:"h-5 w-5"})}),u.jsx("button",{onClick:()=>o(_=>_===r.length-1?0:_+1),className:"p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-white transition-colors",children:u.jsx(Yt,{className:"h-5 w-5"})})]})]})})})]})]})}function xc({onNavigate:n}){const[e,t]=U.useState({email:"",password:""}),r=[{quote:"The future of particle physics is now accessible to everyone. Revolutionary technology at an unbeatable price.",author:"Dr. Sarah Chen",role:"Research Director at MIT"},{quote:"Crotonite has transformed how we approach particle physics education. Our students now have hands-on experience.",author:"Prof. James Miller",role:"Physics Department, Stanford"}],[i,o]=U.useState(0),l=_=>{_.preventDefault(),console.log("Form submitted:",e)},h=_=>{t({...e,[_.target.name]:_.target.value})},f=()=>{console.log("Google login clicked")},m=()=>{console.log("GitHub login clicked")};return u.jsxs("div",{className:"min-h-screen flex flex-col hero-gradient",children:[u.jsx($e,{colors:["#3b82f6","#6366f1","#8b5cf6"],size:800,opacity:.15,blur:120}),u.jsx(ds,{}),u.jsxs("div",{className:"flex-1 flex min-h-screen pt-24",children:[u.jsx("div",{className:"flex-1 flex items-center justify-center p-8",children:u.jsxs("div",{className:"w-full max-w-md space-y-8",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-3xl font-bold text-white",children:"Welcome Back"}),u.jsx("p",{className:"mt-2 text-gray-300",children:"Please enter your credentials"})]}),u.jsxs("form",{onSubmit:l,className:"mt-8 space-y-6",children:[u.jsxs("div",{className:"space-y-5",children:[u.jsx("div",{children:u.jsxs("div",{className:"relative",children:[u.jsx("input",{id:"email",name:"email",type:"email",required:!0,value:e.email,onChange:h,className:"w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20",placeholder:"Email address"}),u.jsx(sr,{className:"absolute right-4 top-3.5 h-5 w-5 text-gray-400"})]})}),u.jsx("div",{children:u.jsxs("div",{className:"relative",children:[u.jsx("input",{id:"password",name:"password",type:"password",required:!0,value:e.password,onChange:h,className:"w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20",placeholder:"Password"}),u.jsx(Uo,{className:"absolute right-4 top-3.5 h-5 w-5 text-gray-400"})]})})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 rounded border-gray-600 bg-black/80 text-green-500 focus:ring-green-500 focus:ring-offset-0 transition-colors duration-200 checked:bg-green-500 checked:border-green-500"}),u.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-300",children:"Remember me"})]}),u.jsx("div",{className:"text-sm",children:u.jsx("a",{href:"#",className:"text-blue-400 hover:text-blue-300",children:"Forgot your password?"})})]}),u.jsx("div",{children:u.jsxs("button",{type:"submit",className:"w-full flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-colors duration-200 font-medium",children:["Sign In",u.jsx(Yt,{className:"ml-2 h-5 w-5"})]})}),u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-0 flex items-center",children:u.jsx("div",{className:"w-full border-t border-gray-700"})}),u.jsx("div",{className:"relative flex justify-center text-sm",children:u.jsx("span",{className:"px-2 bg-[#0a0a0f] text-gray-400",children:"Or continue with"})})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("button",{type:"button",onClick:f,className:"flex items-center justify-center px-4 py-3 border border-gray-700 rounded-xl bg-black/40 backdrop-blur-xl text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300",children:[u.jsxs("svg",{className:"w-5 h-5 mr-2",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),u.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),u.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),u.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),"Google"]}),u.jsxs("button",{type:"button",onClick:m,className:"flex items-center justify-center px-4 py-3 border border-gray-700 rounded-xl bg-black/40 backdrop-blur-xl text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300",children:[u.jsx(Bo,{className:"w-5 h-5 mr-2"}),"GitHub"]})]}),u.jsx("div",{className:"text-center",children:u.jsxs("p",{className:"text-sm text-gray-400",children:["Don't have an account?"," ",u.jsx("a",{href:"/signup",className:"text-blue-400 hover:text-blue-300",children:"Sign up"})]})})]})]})}),u.jsx("div",{className:"hidden lg:flex flex-1 items-center justify-center p-8 bg-black/30 backdrop-blur-sm",children:u.jsx("div",{className:"max-w-md",children:u.jsxs("div",{className:"relative",children:[u.jsxs("div",{className:"text-xl text-white italic mb-4",children:['"',r[i].quote,'"']}),u.jsx("div",{className:"text-blue-400 font-medium",children:r[i].author}),u.jsx("div",{className:"text-gray-400 text-sm",children:r[i].role}),u.jsxs("div",{className:"flex space-x-4 mt-8",children:[u.jsx("button",{onClick:()=>o(_=>_===0?r.length-1:_-1),className:"p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-white transition-colors",children:u.jsx(Oo,{className:"h-5 w-5"})}),u.jsx("button",{onClick:()=>o(_=>_===r.length-1?0:_+1),className:"p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-white transition-colors",children:u.jsx(Yt,{className:"h-5 w-5"})})]})]})})})]})]})}function Br({isVisible:n,onComplete:e,duration:t=1e3}){const r=U.useRef(null),i=U.useRef(null),o=U.useRef(null);return U.useEffect(()=>{if(!n)return;const l=r.current;if(!l)return;const h=l.getContext("2d");if(!h)return;const f=()=>{l&&i.current&&(l.width=i.current.clientWidth,l.height=i.current.clientHeight)};f(),window.addEventListener("resize",f);class m{constructor(M,L,B,W,_e){be(this,"x");be(this,"y");be(this,"radius");be(this,"color");be(this,"velocity");be(this,"life");be(this,"opacity");this.x=M,this.y=L,this.radius=B,this.color=W,this.velocity=_e,this.life=100,this.opacity=1}draw(){h&&(h.save(),h.globalAlpha=this.opacity,h.beginPath(),h.arc(this.x,this.y,this.radius,0,Math.PI*2),h.fillStyle=this.color,h.fill(),h.closePath(),h.restore())}update(){this.draw(),this.x+=this.velocity.x,this.y+=this.velocity.y,this.life-=1,this.opacity=this.life/100}}class _{constructor(M,L,B,W){be(this,"x");be(this,"y");be(this,"width");be(this,"targetX");be(this,"particles");be(this,"color");this.x=M,this.y=L,this.width=B,this.targetX=W,this.particles=[],this.color="#3b82f6"}draw(){if(!h||!l)return;h.save(),h.beginPath(),h.moveTo(this.x,this.y),h.lineTo(this.targetX,this.y);const M=h.createLinearGradient(this.x,this.y,this.targetX,this.y);if(M.addColorStop(0,"rgba(59, 130, 246, 0.8)"),M.addColorStop(.5,"rgba(99, 102, 241, 0.9)"),M.addColorStop(1,"rgba(139, 92, 246, 0.8)"),h.strokeStyle=M,h.lineWidth=this.width,h.lineCap="round",h.shadowColor="#3b82f6",h.shadowBlur=20,h.stroke(),h.closePath(),h.restore(),Math.random()<.3){const L=this.x+Math.random()*(this.targetX-this.x),B=this.y+(Math.random()-.5)*this.width*.8,W=Math.random()*2+1,_e=`hsl(${210+Math.random()*30}, 100%, 70%)`,ne={x:(Math.random()-.5)*2,y:(Math.random()-.5)*2};this.particles.push(new m(L,B,W,_e,ne))}this.particles.forEach((L,B)=>{L.update(),L.life<=0&&this.particles.splice(B,1)})}update(){this.draw()}}const T=new _(0,l.height/2,6,l.width);let R=0;const P=Date.now(),k=()=>{if(!h||!l)return;h.clearRect(0,0,l.width,l.height),h.fillStyle="rgba(10, 10, 15, 1)",h.fillRect(0,0,l.width,l.height),T.update();const V=Date.now()-P;R=Math.min(V/t,1),h.save(),h.fillStyle="#ffffff",h.font="16px monospace",h.textAlign="center",h.fillText(`${Math.floor(R*100)}%`,l.width/2,l.height/2+40),h.restore(),S(h,l.width,l.height),R<1?o.current=requestAnimationFrame(k):setTimeout(()=>{e&&e()},200)},S=(V,M,L)=>{const W=M/6;for(let _e=1;_e<=5;_e++){const ne=_e*W;V.save(),V.beginPath(),V.rect(ne-15,L/2-20,30,40),V.fillStyle="rgba(30, 30, 40, 0.8)",V.strokeStyle="rgba(59, 130, 246, 0.6)",V.lineWidth=2,V.fill(),V.stroke(),V.closePath(),V.beginPath(),V.arc(ne,L/2,5,0,Math.PI*2),V.fillStyle="rgba(59, 130, 246, 0.8)",V.shadowColor="#3b82f6",V.shadowBlur=15,V.fill(),V.closePath(),V.restore()}};return o.current=requestAnimationFrame(k),()=>{window.removeEventListener("resize",f),o.current&&cancelAnimationFrame(o.current)}},[n,t,e]),n?u.jsxs("div",{ref:i,className:"fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0f]",style:{opacity:n?1:0,transition:"opacity 0.3s ease"},children:[u.jsx("div",{className:"w-full h-full",children:u.jsx("canvas",{ref:r,className:"w-full h-full"})}),u.jsx("div",{className:"absolute bottom-10 left-0 right-0 text-center",children:u.jsx("p",{className:"text-blue-400 text-lg font-medium",children:"Initializing Electron Accelerator"})})]}):null}function bc(){const n=U.useRef(null),[e,t]=U.useState(!1),[r,i]=U.useState(0),{scrollYProgress:o}=Kl({target:n,offset:["start end","end start"]});U.useEffect(()=>{const _=new IntersectionObserver(([T])=>{t(T.isIntersecting)},{threshold:.1});return n.current&&_.observe(n.current),()=>_.disconnect()},[]),U.useEffect(()=>{const _=()=>{if(!n.current)return;const T=n.current.querySelectorAll(".timeline-item"),R=n.current.getBoundingClientRect().top,P=window.innerHeight;let k=0;T.forEach((S,V)=>{S.getBoundingClientRect().top-R<P*.6&&(k=V)}),i(k)};return window.addEventListener("scroll",_),_(),()=>window.removeEventListener("scroll",_)},[]);const l=[{year:"2024",title:"Project Inception",description:"Initial concept development and theoretical framework established."},{year:"2025 Jan(Phase I Build)",title:"Gathering the Work and Phase work ",description:"First of the Crotonite accelerator designed and simulated."},{year:"2025 March - April",title:"Funding Crowdfunding and Investment",description:"Major funding milestone achieved, enabling full-scale development."},{year:"2025 April - Sept",title:"Development and Testing Phase",description:"Detailed development and testing of the accelerator."},{year:"2025 Nov",title:"Pre-order and launch",description:"The first accelerator consumer level is now on the market."},{year:"2026",title:"Development on Parts and Documentation",description:"The accelerator is now in development for the next phase of the project."},{year:"2026 - 2027",title:"Phase 2 Development",description:"To Develop and grow  Crotonite"}],h=Pn(o,[0,1],["0%","100%"]),f=Pn(o,[0,.5,1],[.8,1.2,.8]),m=Pn(o,[0,.5,1],[.5,1,.5]);return u.jsx("div",{className:"perspective-container",ref:n,children:u.jsxs("div",{className:"timeline-container",children:[u.jsxs("div",{className:"text-center mb-16",children:[u.jsx("h2",{className:"text-4xl font-bold text-white tracking-tight drop-shadow-lg mb-4",children:"Our Journey"}),u.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"Follow the evolution of the Crotonite project from concept to breakthrough discoveries."})]}),u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"timeline-line"}),u.jsx(gt.div,{className:"electron",style:{y:h,scale:f,filter:Pn(m,_=>`brightness(${_})`),position:"absolute",left:"50%",transform:"translate(-50%, -50%)",zIndex:20,top:"0",height:"100%",transition:"transform 0.3s ease"},initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:u.jsxs("div",{className:"w-5 h-5 bg-blue-400 rounded-full shadow-lg shadow-blue-500/50 relative",children:[u.jsx("div",{className:"absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"}),u.jsx("div",{className:"absolute -inset-2 bg-blue-400/30 rounded-full animate-pulse"}),u.jsx("div",{className:"absolute -inset-4 bg-blue-400/20 rounded-full animate-pulse",style:{animationDelay:"0.5s"}})]})}),u.jsx("div",{className:"timeline-grid",children:l.map((_,T)=>{let R="timeline-item ";return T===r?R+="active":T<r?R+="before":R+="after",u.jsx(gt.div,{className:R,initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:T*.1},children:u.jsxs("div",{className:"timeline-content",children:[u.jsx("div",{className:"text-blue-400 font-bold text-xl mb-2",children:_.year}),u.jsx("h3",{className:"text-white font-semibold text-lg mb-2",children:_.title}),u.jsx("p",{className:"text-gray-300 text-sm",children:_.description})]})},T)})})]})]})})}function wc(){const n=[{name:"Antarip Kar",role:"Founder & Techinician",description:"A student to aspire the particles to the next level and a embedded dev",icon:tc},{name:"Arjav Singhai",role:"Reseaarcher ",description:"My friend who has great theory and passion to make it happen.",icon:ic}];return u.jsxs("div",{className:"relative min-h-screen bg-[#0a0a0f] overflow-hidden py-24",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f172a] to-[#0a0a0f] opacity-90"}),u.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[u.jsx("div",{className:"absolute h-40 w-40 rounded-lg bg-blue-500/5 floating-element",style:{top:"15%",right:"15%",transform:"rotate(15deg)",animationDelay:"0.5s"}}),u.jsx("div",{className:"absolute h-32 w-32 rounded-lg bg-indigo-500/5 floating-element",style:{bottom:"20%",left:"10%",transform:"rotate(-10deg)",animationDelay:"1.1s"}})]}),u.jsxs("div",{className:"relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center mb-16",children:[u.jsx("h1",{className:"text-4xl font-bold text-white sm:text-5xl drop-shadow-lg mb-6",children:"Revolutionizing Particle Acceleration"}),u.jsx("p",{className:"text-xl text-gray-300 max-w-2xl mx-auto",children:"At Crotonite, we're pushing the boundaries of particle accelerator technology, making it more accessible, efficient, and sustainable than ever before."})]}),u.jsxs("div",{className:"relative bg-gray-900/40 rounded-2xl p-8 backdrop-blur-sm border border-gray-800/50 mb-16 transform hover:scale-[1.02] transition-transform duration-300",children:[u.jsx("h2",{className:"text-2xl font-semibold text-white mb-4",children:"Our Mission"}),u.jsx("p",{className:"text-gray-300 leading-relaxed",children:"We believe that advanced particle acceleration technology should be accessible to research institutions worldwide. Our mission is to democratize scientific research by providing cutting-edge accelerator solutions at a fraction of the traditional cost, while maintaining the highest standards of safety and reliability."})]}),u.jsxs("div",{className:"mb-16",children:[u.jsx("h2",{className:"text-2xl font-semibold text-white mb-8 text-center",children:"Meet Our Team"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center",children:n.map((e,t)=>u.jsx("div",{className:"product-card w-full max-w-sm relative rounded-xl border border-gray-800/20 bg-gray-900/30 p-6 backdrop-blur-sm flex flex-col items-center",style:{transformStyle:"preserve-3d",transition:"transform 0.3s ease",animationDelay:`${t*.2}s`},children:u.jsxs("div",{className:"card-content w-full flex flex-col items-center",children:[u.jsx("div",{className:"flex items-center justify-center mb-4",children:u.jsx("div",{className:"p-3 rounded-full bg-gray-800/30 shadow-inner",children:u.jsx(e.icon,{className:"h-8 w-8 text-blue-400"})})}),u.jsx("h3",{className:"text-lg font-semibold text-white text-center mb-2",children:e.name}),u.jsx("p",{className:"text-blue-400 text-sm text-center mb-3",children:e.role}),u.jsx("p",{className:"text-gray-400 text-sm text-center",children:e.description})]})},e.name))})]}),u.jsxs("div",{className:"relative bg-gray-900/40 rounded-2xl p-8 backdrop-blur-sm border border-gray-800/50 transform hover:scale-[1.02] transition-transform duration-300 mb-16",children:[u.jsx("h2",{className:"text-2xl font-semibold text-white mb-4",children:"Our Vision"}),u.jsx("p",{className:"text-gray-300 leading-relaxed",children:"We envision a future where particle accelerator technology plays a pivotal role in solving humanity's greatest challenges - from cancer treatment to clean energy solutions. Through continuous innovation and dedication to excellence, we're making this future a reality."})]}),u.jsx(bc,{})]}),u.jsxs("div",{className:"fixed bottom-8 right-8 bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 transform hover:scale-105 transition-all duration-300 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/10 z-50",children:[u.jsx("h3",{className:"text-lg font-semibold text-white mb-3",children:"Support Us On"}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("a",{href:"https://www.kickstarter.com",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-[#05ce78] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#05b76c] transition-colors",children:"Kickstarter"}),u.jsx("a",{href:"https://www.indiegogo.com",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-[#eb1478] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#d31069] transition-colors",children:"Indiegogo"})]})]})]})}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=()=>{};var Fi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Tc=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],l=n[t++],h=n[t++],f=((i&7)<<18|(o&63)<<12|(l&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[t++],l=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return e.join("")},Ho={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,h=l?n[i+1]:0,f=i+2<n.length,m=f?n[i+2]:0,_=o>>2,T=(o&3)<<4|h>>4;let R=(h&15)<<2|m>>6,P=m&63;f||(P=64,l||(R=64)),r.push(t[_],t[T],t[R],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(qo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Tc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],h=i<n.length?t[n.charAt(i)]:0;++i;const m=i<n.length?t[n.charAt(i)]:64;++i;const T=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||h==null||m==null||T==null)throw new Ac;const R=o<<2|h>>4;if(r.push(R),m!==64){const P=h<<4&240|m>>2;if(r.push(P),T!==64){const k=m<<6&192|T;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ac extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ic=function(n){const e=qo(n);return Ho.encodeByteArray(e,!0)},$n=function(n){return Ic(n).replace(/\./g,"")},Rc=function(n){try{return Ho.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=()=>Nc().__FIREBASE_DEFAULTS__,Sc=()=>{if(typeof process>"u"||typeof Fi>"u")return;const n=Fi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Rc(n[1]);return e&&JSON.parse(e)},fs=()=>{try{return Ec()||Cc()||Sc()||Pc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vc=n=>{var e,t;return(t=(e=fs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},kc=n=>{const e=Vc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Go=()=>{var n;return(n=fs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[$n(JSON.stringify(t)),$n(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oc(){var n;const e=(n=fs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lc(){return!Oc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fc(){try{return typeof indexedDB=="object"}catch{return!1}}function Bc(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="FirebaseError";class Tt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Uc,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ko.prototype.create)}}class Ko{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],l=o?$c(o,r):"Error",h=`${this.serviceName}: ${l} (${i}).`;return new Tt(i,h,r)}}function $c(n,e){return n.replace(zc,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zc=/\{\$([^}]+)}/g;function zn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],l=e[i];if(Bi(o)&&Bi(l)){if(!zn(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Bi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(n){return n&&n._delegate?n._delegate:n}class Zt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new jc;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gc(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&l.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hc(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hc(n){return n===et?void 0:n}function Gc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Wc={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Qc=z.INFO,Xc={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Yc=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Xc[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wo{constructor(e){this.name=e,this._logLevel=Qc,this._logHandler=Yc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const Jc=(n,e)=>e.some(t=>n instanceof t);let Ui,$i;function Zc(){return Ui||(Ui=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eu(){return $i||($i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qo=new WeakMap,Qr=new WeakMap,Xo=new WeakMap,Ur=new WeakMap,ms=new WeakMap;function tu(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{t(ze(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&Qo.set(t,n)}).catch(()=>{}),ms.set(e,n),e}function nu(n){if(Qr.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{t(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Qr.set(n,e)}let Xr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Xo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ze(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ru(n){Xr=n(Xr)}function su(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call($r(this),e,...t);return Xo.set(r,e.sort?e.sort():[e]),ze(r)}:eu().includes(n)?function(...e){return n.apply($r(this),e),ze(Qo.get(this))}:function(...e){return ze(n.apply($r(this),e))}}function iu(n){return typeof n=="function"?su(n):(n instanceof IDBTransaction&&nu(n),Jc(n,Zc())?new Proxy(n,Xr):n)}function ze(n){if(n instanceof IDBRequest)return tu(n);if(Ur.has(n))return Ur.get(n);const e=iu(n);return e!==n&&(Ur.set(n,e),ms.set(e,n)),e}const $r=n=>ms.get(n);function ou(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,e),h=ze(l);return r&&l.addEventListener("upgradeneeded",f=>{r(ze(l.result),f.oldVersion,f.newVersion,ze(l.transaction),f)}),t&&l.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",m=>i(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const au=["get","getKey","getAll","getAllKeys","count"],lu=["put","add","delete","clear"],zr=new Map;function zi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(zr.get(e))return zr.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=lu.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||au.includes(t)))return;const o=async function(l,...h){const f=this.transaction(l,i?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(h.shift())),(await Promise.all([m[t](...h),i&&f.done]))[0]};return zr.set(e,o),o}ru(n=>({...n,get:(e,t,r)=>zi(e,t)||n.get(e,t,r),has:(e,t)=>!!zi(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uu(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function uu(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yr="@firebase/app",qi="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new Wo("@firebase/app"),hu="@firebase/app-compat",du="@firebase/analytics-compat",fu="@firebase/analytics",mu="@firebase/app-check-compat",pu="@firebase/app-check",gu="@firebase/auth",yu="@firebase/auth-compat",_u="@firebase/database",vu="@firebase/data-connect",xu="@firebase/database-compat",bu="@firebase/functions",wu="@firebase/functions-compat",Eu="@firebase/installations",Tu="@firebase/installations-compat",Au="@firebase/messaging",Iu="@firebase/messaging-compat",Ru="@firebase/performance",Nu="@firebase/performance-compat",Cu="@firebase/remote-config",Su="@firebase/remote-config-compat",Pu="@firebase/storage",Vu="@firebase/storage-compat",ku="@firebase/firestore",ju="@firebase/vertexai",Du="@firebase/firestore-compat",Mu="firebase",Ou="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="[DEFAULT]",Lu={[Yr]:"fire-core",[hu]:"fire-core-compat",[fu]:"fire-analytics",[du]:"fire-analytics-compat",[pu]:"fire-app-check",[mu]:"fire-app-check-compat",[gu]:"fire-auth",[yu]:"fire-auth-compat",[_u]:"fire-rtdb",[vu]:"fire-data-connect",[xu]:"fire-rtdb-compat",[bu]:"fire-fn",[wu]:"fire-fn-compat",[Eu]:"fire-iid",[Tu]:"fire-iid-compat",[Au]:"fire-fcm",[Iu]:"fire-fcm-compat",[Ru]:"fire-perf",[Nu]:"fire-perf-compat",[Cu]:"fire-rc",[Su]:"fire-rc-compat",[Pu]:"fire-gcs",[Vu]:"fire-gcs-compat",[ku]:"fire-fst",[Du]:"fire-fst-compat",[ju]:"fire-vertex","fire-js":"fire-js",[Mu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new Map,Fu=new Map,Zr=new Map;function Hi(n,e){try{n.container.addComponent(e)}catch(t){Oe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Hn(n){const e=n.name;if(Zr.has(e))return Oe.debug(`There were multiple attempts to register component ${e}.`),!1;Zr.set(e,n);for(const t of qn.values())Hi(t,n);for(const t of Fu.values())Hi(t,n);return!0}function Bu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Uu(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qe=new Ko("app","Firebase",$u);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=Ou;function Yo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qe.create("bad-app-name",{appName:String(i)});if(t||(t=Go()),!t)throw qe.create("no-options");const o=qn.get(i);if(o){if(zn(t,o.options)&&zn(r,o.config))return o;throw qe.create("duplicate-app",{appName:i})}const l=new Kc(i);for(const f of Zr.values())l.addComponent(f);const h=new zu(t,r,l);return qn.set(i,h),h}function Hu(n=Jr){const e=qn.get(n);if(!e&&n===Jr&&Go())return Yo();if(!e)throw qe.create("no-app",{appName:n});return e}function yt(n,e,t){var r;let i=(r=Lu[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oe.warn(h.join(" "));return}Hn(new Zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="firebase-heartbeat-database",Ku=1,en="firebase-heartbeat-store";let qr=null;function Jo(){return qr||(qr=ou(Gu,Ku,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(en)}catch(t){console.warn(t)}}}}).catch(n=>{throw qe.create("idb-open",{originalErrorMessage:n.message})})),qr}async function Wu(n){try{const t=(await Jo()).transaction(en),r=await t.objectStore(en).get(Zo(n));return await t.done,r}catch(e){if(e instanceof Tt)Oe.warn(e.message);else{const t=qe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oe.warn(t.message)}}}async function Gi(n,e){try{const r=(await Jo()).transaction(en,"readwrite");await r.objectStore(en).put(e,Zo(n)),await r.done}catch(t){if(t instanceof Tt)Oe.warn(t.message);else{const r=qe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Oe.warn(r.message)}}}function Zo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=1024,Xu=30;class Yu{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zu(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ki();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Xu){const l=eh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Oe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ki(),{heartbeatsToSend:r,unsentEntries:i}=Ju(this._heartbeatsCache.heartbeats),o=$n(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Oe.warn(t),""}}}function Ki(){return new Date().toISOString().substring(0,10)}function Ju(n,e=Qu){const t=[];let r=n.slice();for(const i of n){const o=t.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Wi(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Wi(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Zu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fc()?Bc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Wu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wi(n){return $n(JSON.stringify({version:2,heartbeats:n})).length}function eh(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(n){Hn(new Zt("platform-logger",e=>new cu(e),"PRIVATE")),Hn(new Zt("heartbeat",e=>new Yu(e),"PRIVATE")),yt(Yr,qi,n),yt(Yr,qi,"esm2017"),yt("fire-js","")}th("");var nh="firebase",rh="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt(nh,rh,"app");var Qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ps;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,p){function y(){}y.prototype=p.prototype,b.D=p.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(v,x,E){for(var g=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)g[Ve-2]=arguments[Ve];return p.prototype[x].apply(v,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,p,y){y||(y=0);var v=Array(16);if(typeof p=="string")for(var x=0;16>x;++x)v[x]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(x=0;16>x;++x)v[x]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=b.g[0],y=b.g[1],x=b.g[2];var E=b.g[3],g=p+(E^y&(x^E))+v[0]+3614090360&4294967295;p=y+(g<<7&4294967295|g>>>25),g=E+(x^p&(y^x))+v[1]+3905402710&4294967295,E=p+(g<<12&4294967295|g>>>20),g=x+(y^E&(p^y))+v[2]+606105819&4294967295,x=E+(g<<17&4294967295|g>>>15),g=y+(p^x&(E^p))+v[3]+3250441966&4294967295,y=x+(g<<22&4294967295|g>>>10),g=p+(E^y&(x^E))+v[4]+4118548399&4294967295,p=y+(g<<7&4294967295|g>>>25),g=E+(x^p&(y^x))+v[5]+1200080426&4294967295,E=p+(g<<12&4294967295|g>>>20),g=x+(y^E&(p^y))+v[6]+2821735955&4294967295,x=E+(g<<17&4294967295|g>>>15),g=y+(p^x&(E^p))+v[7]+4249261313&4294967295,y=x+(g<<22&4294967295|g>>>10),g=p+(E^y&(x^E))+v[8]+1770035416&4294967295,p=y+(g<<7&4294967295|g>>>25),g=E+(x^p&(y^x))+v[9]+2336552879&4294967295,E=p+(g<<12&4294967295|g>>>20),g=x+(y^E&(p^y))+v[10]+4294925233&4294967295,x=E+(g<<17&4294967295|g>>>15),g=y+(p^x&(E^p))+v[11]+2304563134&4294967295,y=x+(g<<22&4294967295|g>>>10),g=p+(E^y&(x^E))+v[12]+1804603682&4294967295,p=y+(g<<7&4294967295|g>>>25),g=E+(x^p&(y^x))+v[13]+4254626195&4294967295,E=p+(g<<12&4294967295|g>>>20),g=x+(y^E&(p^y))+v[14]+2792965006&4294967295,x=E+(g<<17&4294967295|g>>>15),g=y+(p^x&(E^p))+v[15]+1236535329&4294967295,y=x+(g<<22&4294967295|g>>>10),g=p+(x^E&(y^x))+v[1]+4129170786&4294967295,p=y+(g<<5&4294967295|g>>>27),g=E+(y^x&(p^y))+v[6]+3225465664&4294967295,E=p+(g<<9&4294967295|g>>>23),g=x+(p^y&(E^p))+v[11]+643717713&4294967295,x=E+(g<<14&4294967295|g>>>18),g=y+(E^p&(x^E))+v[0]+3921069994&4294967295,y=x+(g<<20&4294967295|g>>>12),g=p+(x^E&(y^x))+v[5]+3593408605&4294967295,p=y+(g<<5&4294967295|g>>>27),g=E+(y^x&(p^y))+v[10]+38016083&4294967295,E=p+(g<<9&4294967295|g>>>23),g=x+(p^y&(E^p))+v[15]+3634488961&4294967295,x=E+(g<<14&4294967295|g>>>18),g=y+(E^p&(x^E))+v[4]+3889429448&4294967295,y=x+(g<<20&4294967295|g>>>12),g=p+(x^E&(y^x))+v[9]+568446438&4294967295,p=y+(g<<5&4294967295|g>>>27),g=E+(y^x&(p^y))+v[14]+3275163606&4294967295,E=p+(g<<9&4294967295|g>>>23),g=x+(p^y&(E^p))+v[3]+4107603335&4294967295,x=E+(g<<14&4294967295|g>>>18),g=y+(E^p&(x^E))+v[8]+1163531501&4294967295,y=x+(g<<20&4294967295|g>>>12),g=p+(x^E&(y^x))+v[13]+2850285829&4294967295,p=y+(g<<5&4294967295|g>>>27),g=E+(y^x&(p^y))+v[2]+4243563512&4294967295,E=p+(g<<9&4294967295|g>>>23),g=x+(p^y&(E^p))+v[7]+1735328473&4294967295,x=E+(g<<14&4294967295|g>>>18),g=y+(E^p&(x^E))+v[12]+2368359562&4294967295,y=x+(g<<20&4294967295|g>>>12),g=p+(y^x^E)+v[5]+4294588738&4294967295,p=y+(g<<4&4294967295|g>>>28),g=E+(p^y^x)+v[8]+2272392833&4294967295,E=p+(g<<11&4294967295|g>>>21),g=x+(E^p^y)+v[11]+1839030562&4294967295,x=E+(g<<16&4294967295|g>>>16),g=y+(x^E^p)+v[14]+4259657740&4294967295,y=x+(g<<23&4294967295|g>>>9),g=p+(y^x^E)+v[1]+2763975236&4294967295,p=y+(g<<4&4294967295|g>>>28),g=E+(p^y^x)+v[4]+1272893353&4294967295,E=p+(g<<11&4294967295|g>>>21),g=x+(E^p^y)+v[7]+4139469664&4294967295,x=E+(g<<16&4294967295|g>>>16),g=y+(x^E^p)+v[10]+3200236656&4294967295,y=x+(g<<23&4294967295|g>>>9),g=p+(y^x^E)+v[13]+681279174&4294967295,p=y+(g<<4&4294967295|g>>>28),g=E+(p^y^x)+v[0]+3936430074&4294967295,E=p+(g<<11&4294967295|g>>>21),g=x+(E^p^y)+v[3]+3572445317&4294967295,x=E+(g<<16&4294967295|g>>>16),g=y+(x^E^p)+v[6]+76029189&4294967295,y=x+(g<<23&4294967295|g>>>9),g=p+(y^x^E)+v[9]+3654602809&4294967295,p=y+(g<<4&4294967295|g>>>28),g=E+(p^y^x)+v[12]+3873151461&4294967295,E=p+(g<<11&4294967295|g>>>21),g=x+(E^p^y)+v[15]+530742520&4294967295,x=E+(g<<16&4294967295|g>>>16),g=y+(x^E^p)+v[2]+3299628645&4294967295,y=x+(g<<23&4294967295|g>>>9),g=p+(x^(y|~E))+v[0]+4096336452&4294967295,p=y+(g<<6&4294967295|g>>>26),g=E+(y^(p|~x))+v[7]+1126891415&4294967295,E=p+(g<<10&4294967295|g>>>22),g=x+(p^(E|~y))+v[14]+2878612391&4294967295,x=E+(g<<15&4294967295|g>>>17),g=y+(E^(x|~p))+v[5]+4237533241&4294967295,y=x+(g<<21&4294967295|g>>>11),g=p+(x^(y|~E))+v[12]+1700485571&4294967295,p=y+(g<<6&4294967295|g>>>26),g=E+(y^(p|~x))+v[3]+2399980690&4294967295,E=p+(g<<10&4294967295|g>>>22),g=x+(p^(E|~y))+v[10]+4293915773&4294967295,x=E+(g<<15&4294967295|g>>>17),g=y+(E^(x|~p))+v[1]+2240044497&4294967295,y=x+(g<<21&4294967295|g>>>11),g=p+(x^(y|~E))+v[8]+1873313359&4294967295,p=y+(g<<6&4294967295|g>>>26),g=E+(y^(p|~x))+v[15]+4264355552&4294967295,E=p+(g<<10&4294967295|g>>>22),g=x+(p^(E|~y))+v[6]+2734768916&4294967295,x=E+(g<<15&4294967295|g>>>17),g=y+(E^(x|~p))+v[13]+1309151649&4294967295,y=x+(g<<21&4294967295|g>>>11),g=p+(x^(y|~E))+v[4]+4149444226&4294967295,p=y+(g<<6&4294967295|g>>>26),g=E+(y^(p|~x))+v[11]+3174756917&4294967295,E=p+(g<<10&4294967295|g>>>22),g=x+(p^(E|~y))+v[2]+718787259&4294967295,x=E+(g<<15&4294967295|g>>>17),g=y+(E^(x|~p))+v[9]+3951481745&4294967295,b.g[0]=b.g[0]+p&4294967295,b.g[1]=b.g[1]+(x+(g<<21&4294967295|g>>>11))&4294967295,b.g[2]=b.g[2]+x&4294967295,b.g[3]=b.g[3]+E&4294967295}r.prototype.u=function(b,p){p===void 0&&(p=b.length);for(var y=p-this.blockSize,v=this.B,x=this.h,E=0;E<p;){if(x==0)for(;E<=y;)i(this,b,E),E+=this.blockSize;if(typeof b=="string"){for(;E<p;)if(v[x++]=b.charCodeAt(E++),x==this.blockSize){i(this,v),x=0;break}}else for(;E<p;)if(v[x++]=b[E++],x==this.blockSize){i(this,v),x=0;break}}this.h=x,this.o+=p},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var p=1;p<b.length-8;++p)b[p]=0;var y=8*this.o;for(p=b.length-8;p<b.length;++p)b[p]=y&255,y/=256;for(this.u(b),b=Array(16),p=y=0;4>p;++p)for(var v=0;32>v;v+=8)b[y++]=this.g[p]>>>v&255;return b};function o(b,p){var y=h;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=p(b)}function l(b,p){this.h=p;for(var y=[],v=!0,x=b.length-1;0<=x;x--){var E=b[x]|0;v&&E==p||(y[x]=E,v=!1)}this.g=y}var h={};function f(b){return-128<=b&&128>b?o(b,function(p){return new l([p|0],0>p?-1:0)}):new l([b|0],0>b?-1:0)}function m(b){if(isNaN(b)||!isFinite(b))return T;if(0>b)return V(m(-b));for(var p=[],y=1,v=0;b>=y;v++)p[v]=b/y|0,y*=4294967296;return new l(p,0)}function _(b,p){if(b.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(b.charAt(0)=="-")return V(_(b.substring(1),p));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=m(Math.pow(p,8)),v=T,x=0;x<b.length;x+=8){var E=Math.min(8,b.length-x),g=parseInt(b.substring(x,x+E),p);8>E?(E=m(Math.pow(p,E)),v=v.j(E).add(m(g))):(v=v.j(y),v=v.add(m(g)))}return v}var T=f(0),R=f(1),P=f(16777216);n=l.prototype,n.m=function(){if(S(this))return-V(this).m();for(var b=0,p=1,y=0;y<this.g.length;y++){var v=this.i(y);b+=(0<=v?v:4294967296+v)*p,p*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(k(this))return"0";if(S(this))return"-"+V(this).toString(b);for(var p=m(Math.pow(b,6)),y=this,v="";;){var x=W(y,p).g;y=M(y,x.j(p));var E=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=x,k(y))return E+v;for(;6>E.length;)E="0"+E;v=E+v}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function k(b){if(b.h!=0)return!1;for(var p=0;p<b.g.length;p++)if(b.g[p]!=0)return!1;return!0}function S(b){return b.h==-1}n.l=function(b){return b=M(this,b),S(b)?-1:k(b)?0:1};function V(b){for(var p=b.g.length,y=[],v=0;v<p;v++)y[v]=~b.g[v];return new l(y,~b.h).add(R)}n.abs=function(){return S(this)?V(this):this},n.add=function(b){for(var p=Math.max(this.g.length,b.g.length),y=[],v=0,x=0;x<=p;x++){var E=v+(this.i(x)&65535)+(b.i(x)&65535),g=(E>>>16)+(this.i(x)>>>16)+(b.i(x)>>>16);v=g>>>16,E&=65535,g&=65535,y[x]=g<<16|E}return new l(y,y[y.length-1]&-2147483648?-1:0)};function M(b,p){return b.add(V(p))}n.j=function(b){if(k(this)||k(b))return T;if(S(this))return S(b)?V(this).j(V(b)):V(V(this).j(b));if(S(b))return V(this.j(V(b)));if(0>this.l(P)&&0>b.l(P))return m(this.m()*b.m());for(var p=this.g.length+b.g.length,y=[],v=0;v<2*p;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var x=0;x<b.g.length;x++){var E=this.i(v)>>>16,g=this.i(v)&65535,Ve=b.i(x)>>>16,Rt=b.i(x)&65535;y[2*v+2*x]+=g*Rt,L(y,2*v+2*x),y[2*v+2*x+1]+=E*Rt,L(y,2*v+2*x+1),y[2*v+2*x+1]+=g*Ve,L(y,2*v+2*x+1),y[2*v+2*x+2]+=E*Ve,L(y,2*v+2*x+2)}for(v=0;v<p;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=p;v<2*p;v++)y[v]=0;return new l(y,0)};function L(b,p){for(;(b[p]&65535)!=b[p];)b[p+1]+=b[p]>>>16,b[p]&=65535,p++}function B(b,p){this.g=b,this.h=p}function W(b,p){if(k(p))throw Error("division by zero");if(k(b))return new B(T,T);if(S(b))return p=W(V(b),p),new B(V(p.g),V(p.h));if(S(p))return p=W(b,V(p)),new B(V(p.g),p.h);if(30<b.g.length){if(S(b)||S(p))throw Error("slowDivide_ only works with positive integers.");for(var y=R,v=p;0>=v.l(b);)y=_e(y),v=_e(v);var x=ne(y,1),E=ne(v,1);for(v=ne(v,2),y=ne(y,2);!k(v);){var g=E.add(v);0>=g.l(b)&&(x=x.add(y),E=g),v=ne(v,1),y=ne(y,1)}return p=M(b,x.j(p)),new B(x,p)}for(x=T;0<=b.l(p);){for(y=Math.max(1,Math.floor(b.m()/p.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),E=m(y),g=E.j(p);S(g)||0<g.l(b);)y-=v,E=m(y),g=E.j(p);k(E)&&(E=R),x=x.add(E),b=M(b,g)}return new B(x,b)}n.A=function(b){return W(this,b).h},n.and=function(b){for(var p=Math.max(this.g.length,b.g.length),y=[],v=0;v<p;v++)y[v]=this.i(v)&b.i(v);return new l(y,this.h&b.h)},n.or=function(b){for(var p=Math.max(this.g.length,b.g.length),y=[],v=0;v<p;v++)y[v]=this.i(v)|b.i(v);return new l(y,this.h|b.h)},n.xor=function(b){for(var p=Math.max(this.g.length,b.g.length),y=[],v=0;v<p;v++)y[v]=this.i(v)^b.i(v);return new l(y,this.h^b.h)};function _e(b){for(var p=b.g.length+1,y=[],v=0;v<p;v++)y[v]=b.i(v)<<1|b.i(v-1)>>>31;return new l(y,b.h)}function ne(b,p){var y=p>>5;p%=32;for(var v=b.g.length-y,x=[],E=0;E<v;E++)x[E]=0<p?b.i(E+y)>>>p|b.i(E+y+1)<<32-p:b.i(E+y);return new l(x,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=m,l.fromString=_,ps=l}).apply(typeof Qi<"u"?Qi:typeof self<"u"?self:typeof window<"u"?window:{});var kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ea,Gt,ta,Ln,es,na,ra,sa;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof kn=="object"&&kn];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=t(this);function i(s,a){if(a)e:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var w=s[d];if(!(w in c))break e;c=c[w]}s=s[s.length-1],d=c[s],a=a(d),a!=d&&a!=null&&e(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,d=!1,w={next:function(){if(!d&&c<s.length){var A=c++;return{value:a(A,s[A]),done:!1}}return d=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function m(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,c){return s.call.apply(s.bind,arguments)}function T(s,a,c){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,d),s.apply(a,w)}}return function(){return s.apply(a,arguments)}}function R(s,a,c){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:T,R.apply(null,arguments)}function P(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function k(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(d,w,A){for(var C=Array(arguments.length-2),G=2;G<arguments.length;G++)C[G-2]=arguments[G];return a.prototype[w].apply(d,C)}}function S(s){const a=s.length;if(0<a){const c=Array(a);for(let d=0;d<a;d++)c[d]=s[d];return c}return[]}function V(s,a){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(f(d)){const w=s.length||0,A=d.length||0;s.length=w+A;for(let C=0;C<A;C++)s[w+C]=d[C]}else s.push(d)}}class M{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function L(s){return/^[\s\xa0]*$/.test(s)}function B(){var s=h.navigator;return s&&(s=s.userAgent)?s:""}function W(s){return W[" "](s),s}W[" "]=function(){};var _e=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function ne(s,a,c){for(const d in s)a.call(c,s[d],d,s)}function b(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function p(s){const a={};for(const c in s)a[c]=s[c];return a}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,a){let c,d;for(let w=1;w<arguments.length;w++){d=arguments[w];for(c in d)s[c]=d[c];for(let A=0;A<y.length;A++)c=y[A],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function x(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function E(s){h.setTimeout(()=>{throw s},0)}function g(){var s=mr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Ve{constructor(){this.h=this.g=null}add(a,c){const d=Rt.get();d.set(a,c),this.h?this.h.next=d:this.g=d,this.h=d}}var Rt=new M(()=>new ll,s=>s.reset());class ll{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Nt,Ct=!1,mr=new Ve,Ms=()=>{const s=h.Promise.resolve(void 0);Nt=()=>{s.then(cl)}};var cl=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(c){E(c)}var a=Rt;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Ct=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var ul=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};h.addEventListener("test",c,a),h.removeEventListener("test",c,a)}catch{}return s}();function St(s,a){if(he.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(_e){e:{try{W(a.nodeName);var w=!0;break e}catch{}w=!1}w||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:hl[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&St.aa.h.call(this)}}k(St,he);var hl={2:"touch",3:"pen",4:"mouse"};St.prototype.h=function(){St.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),dl=0;function fl(s,a,c,d,w){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!d,this.ha=w,this.key=++dl,this.da=this.fa=!1}function fn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function mn(s){this.src=s,this.g={},this.h=0}mn.prototype.add=function(s,a,c,d,w){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var C=gr(s,a,d,w);return-1<C?(a=s[C],c||(a.fa=!1)):(a=new fl(a,this.src,A,!!d,w),a.fa=c,s.push(a)),a};function pr(s,a){var c=a.type;if(c in s.g){var d=s.g[c],w=Array.prototype.indexOf.call(d,a,void 0),A;(A=0<=w)&&Array.prototype.splice.call(d,w,1),A&&(fn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function gr(s,a,c,d){for(var w=0;w<s.length;++w){var A=s[w];if(!A.da&&A.listener==a&&A.capture==!!c&&A.ha==d)return w}return-1}var yr="closure_lm_"+(1e6*Math.random()|0),_r={};function Os(s,a,c,d,w){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Os(s,a[A],c,d,w);return null}return c=Bs(c),s&&s[dn]?s.K(a,c,m(d)?!!d.capture:!1,w):ml(s,a,c,!1,d,w)}function ml(s,a,c,d,w,A){if(!a)throw Error("Invalid event type");var C=m(w)?!!w.capture:!!w,G=xr(s);if(G||(s[yr]=G=new mn(s)),c=G.add(a,c,d,C,A),c.proxy)return c;if(d=pl(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)ul||(w=C),w===void 0&&(w=!1),s.addEventListener(a.toString(),d,w);else if(s.attachEvent)s.attachEvent(Fs(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function pl(){function s(c){return a.call(s.src,s.listener,c)}const a=gl;return s}function Ls(s,a,c,d,w){if(Array.isArray(a))for(var A=0;A<a.length;A++)Ls(s,a[A],c,d,w);else d=m(d)?!!d.capture:!!d,c=Bs(c),s&&s[dn]?(s=s.i,a=String(a).toString(),a in s.g&&(A=s.g[a],c=gr(A,c,d,w),-1<c&&(fn(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete s.g[a],s.h--)))):s&&(s=xr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=gr(a,c,d,w)),(c=-1<s?a[s]:null)&&vr(c))}function vr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[dn])pr(a.i,s);else{var c=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(c,d,s.capture):a.detachEvent?a.detachEvent(Fs(c),d):a.addListener&&a.removeListener&&a.removeListener(d),(c=xr(a))?(pr(c,s),c.h==0&&(c.src=null,a[yr]=null)):fn(s)}}}function Fs(s){return s in _r?_r[s]:_r[s]="on"+s}function gl(s,a){if(s.da)s=!0;else{a=new St(a,this);var c=s.listener,d=s.ha||s.src;s.fa&&vr(s),s=c.call(d,a)}return s}function xr(s){return s=s[yr],s instanceof mn?s:null}var br="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bs(s){return typeof s=="function"?s:(s[br]||(s[br]=function(a){return s.handleEvent(a)}),s[br])}function de(){Le.call(this),this.i=new mn(this),this.M=this,this.F=null}k(de,Le),de.prototype[dn]=!0,de.prototype.removeEventListener=function(s,a,c,d){Ls(this,s,a,c,d)};function ve(s,a){var c,d=s.F;if(d)for(c=[];d;d=d.F)c.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new he(a,s);else if(a instanceof he)a.target=a.target||s;else{var w=a;a=new he(d,s),v(a,w)}if(w=!0,c)for(var A=c.length-1;0<=A;A--){var C=a.g=c[A];w=pn(C,d,!0,a)&&w}if(C=a.g=s,w=pn(C,d,!0,a)&&w,w=pn(C,d,!1,a)&&w,c)for(A=0;A<c.length;A++)C=a.g=c[A],w=pn(C,d,!1,a)&&w}de.prototype.N=function(){if(de.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],d=0;d<c.length;d++)fn(c[d]);delete s.g[a],s.h--}}this.F=null},de.prototype.K=function(s,a,c,d){return this.i.add(String(s),a,!1,c,d)},de.prototype.L=function(s,a,c,d){return this.i.add(String(s),a,!0,c,d)};function pn(s,a,c,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var w=!0,A=0;A<a.length;++A){var C=a[A];if(C&&!C.da&&C.capture==c){var G=C.listener,oe=C.ha||C.src;C.fa&&pr(s.i,C),w=G.call(oe,d)!==!1&&w}}return w&&!d.defaultPrevented}function Us(s,a,c){if(typeof s=="function")c&&(s=R(s,c));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:h.setTimeout(s,a||0)}function $s(s){s.g=Us(()=>{s.g=null,s.i&&(s.i=!1,$s(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class yl extends Le{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:$s(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pt(s){Le.call(this),this.h=s,this.g={}}k(Pt,Le);var zs=[];function qs(s){ne(s.g,function(a,c){this.g.hasOwnProperty(c)&&vr(a)},s),s.g={}}Pt.prototype.N=function(){Pt.aa.N.call(this),qs(this)},Pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wr=h.JSON.stringify,_l=h.JSON.parse,vl=class{stringify(s){return h.JSON.stringify(s,void 0)}parse(s){return h.JSON.parse(s,void 0)}};function Er(){}Er.prototype.h=null;function Hs(s){return s.h||(s.h=s.i())}function Gs(){}var Vt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Tr(){he.call(this,"d")}k(Tr,he);function Ar(){he.call(this,"c")}k(Ar,he);var Xe={},Ks=null;function gn(){return Ks=Ks||new de}Xe.La="serverreachability";function Ws(s){he.call(this,Xe.La,s)}k(Ws,he);function kt(s){const a=gn();ve(a,new Ws(a))}Xe.STAT_EVENT="statevent";function Qs(s,a){he.call(this,Xe.STAT_EVENT,s),this.stat=a}k(Qs,he);function xe(s){const a=gn();ve(a,new Qs(a,s))}Xe.Ma="timingevent";function Xs(s,a){he.call(this,Xe.Ma,s),this.size=a}k(Xs,he);function jt(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){s()},a)}function Dt(){this.g=!0}Dt.prototype.xa=function(){this.g=!1};function xl(s,a,c,d,w,A){s.info(function(){if(s.g)if(A)for(var C="",G=A.split("&"),oe=0;oe<G.length;oe++){var q=G[oe].split("=");if(1<q.length){var fe=q[0];q=q[1];var me=fe.split("_");C=2<=me.length&&me[1]=="type"?C+(fe+"="+q+"&"):C+(fe+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+d+") [attempt "+w+"]: "+a+`
`+c+`
`+C})}function bl(s,a,c,d,w,A,C){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+w+"]: "+a+`
`+c+`
`+A+" "+C})}function ut(s,a,c,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+El(s,c)+(d?" "+d:"")})}function wl(s,a){s.info(function(){return"TIMEOUT: "+a})}Dt.prototype.info=function(){};function El(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var d=c[s];if(!(2>d.length)){var w=d[1];if(Array.isArray(w)&&!(1>w.length)){var A=w[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<w.length;C++)w[C]=""}}}}return wr(c)}catch{return a}}var yn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ys={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ir;function _n(){}k(_n,Er),_n.prototype.g=function(){return new XMLHttpRequest},_n.prototype.i=function(){return{}},Ir=new _n;function Fe(s,a,c,d){this.j=s,this.i=a,this.l=c,this.R=d||1,this.U=new Pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Js}function Js(){this.i=null,this.g="",this.h=!1}var Zs={},Rr={};function Nr(s,a,c){s.L=1,s.v=wn(ke(a)),s.m=c,s.P=!0,ei(s,null)}function ei(s,a){s.F=Date.now(),vn(s),s.A=ke(s.v);var c=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),mi(c.i,"t",d),s.C=0,c=s.j.J,s.h=new Js,s.g=Vi(s.j,c?a:null,!s.m),0<s.O&&(s.M=new yl(R(s.Y,s,s.g),s.O)),a=s.U,c=s.g,d=s.ca;var w="readystatechange";Array.isArray(w)||(w&&(zs[0]=w.toString()),w=zs);for(var A=0;A<w.length;A++){var C=Os(c,w[A],d||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),kt(),xl(s.i,s.u,s.A,s.l,s.R,s.m)}Fe.prototype.ca=function(s){s=s.target;const a=this.M;a&&je(s)==3?a.j():this.Y(s)},Fe.prototype.Y=function(s){try{if(s==this.g)e:{const me=je(this.g);var a=this.g.Ba();const ft=this.g.Z();if(!(3>me)&&(me!=3||this.g&&(this.h.h||this.g.oa()||bi(this.g)))){this.J||me!=4||a==7||(a==8||0>=ft?kt(3):kt(2)),Cr(this);var c=this.g.Z();this.X=c;t:if(ti(this)){var d=bi(this.g);s="";var w=d.length,A=je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ye(this),Mt(this);var C="";break t}this.h.i=new h.TextDecoder}for(a=0;a<w;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(A&&a==w-1)});d.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=c==200,bl(this.i,this.u,this.A,this.l,this.R,me,c),this.o){if(this.T&&!this.K){t:{if(this.g){var G,oe=this.g;if((G=oe.g?oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(G)){var q=G;break t}}q=null}if(c=q)ut(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sr(this,c);else{this.o=!1,this.s=3,xe(12),Ye(this),Mt(this);break e}}if(this.P){c=!0;let Ae;for(;!this.J&&this.C<C.length;)if(Ae=Tl(this,C),Ae==Rr){me==4&&(this.s=4,xe(14),c=!1),ut(this.i,this.l,null,"[Incomplete Response]");break}else if(Ae==Zs){this.s=4,xe(15),ut(this.i,this.l,C,"[Invalid Chunk]"),c=!1;break}else ut(this.i,this.l,Ae,null),Sr(this,Ae);if(ti(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),me!=4||C.length!=0||this.h.h||(this.s=1,xe(16),c=!1),this.o=this.o&&c,!c)ut(this.i,this.l,C,"[Invalid Chunked Response]"),Ye(this),Mt(this);else if(0<C.length&&!this.W){this.W=!0;var fe=this.j;fe.g==this&&fe.ba&&!fe.M&&(fe.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Mr(fe),fe.M=!0,xe(11))}}else ut(this.i,this.l,C,null),Sr(this,C);me==4&&Ye(this),this.o&&!this.J&&(me==4?Ni(this.j,this):(this.o=!1,vn(this)))}else Ul(this.g),c==400&&0<C.indexOf("Unknown SID")?(this.s=3,xe(12)):(this.s=0,xe(13)),Ye(this),Mt(this)}}}catch{}finally{}};function ti(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Tl(s,a){var c=s.C,d=a.indexOf(`
`,c);return d==-1?Rr:(c=Number(a.substring(c,d)),isNaN(c)?Zs:(d+=1,d+c>a.length?Rr:(a=a.slice(d,d+c),s.C=d+c,a)))}Fe.prototype.cancel=function(){this.J=!0,Ye(this)};function vn(s){s.S=Date.now()+s.I,ni(s,s.I)}function ni(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=jt(R(s.ba,s),a)}function Cr(s){s.B&&(h.clearTimeout(s.B),s.B=null)}Fe.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(wl(this.i,this.A),this.L!=2&&(kt(),xe(17)),Ye(this),this.s=2,Mt(this)):ni(this,this.S-s)};function Mt(s){s.j.G==0||s.J||Ni(s.j,s)}function Ye(s){Cr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,qs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Sr(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||Pr(c.h,s))){if(!s.K&&Pr(c.h,s)&&c.G==3){try{var d=c.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var w=d;if(w[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)Nn(c),In(c);else break e;Dr(c),xe(18)}}else c.za=w[1],0<c.za-c.T&&37500>w[2]&&c.F&&c.v==0&&!c.C&&(c.C=jt(R(c.Za,c),6e3));if(1>=ii(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Ze(c,11)}else if((s.K||c.g==s)&&Nn(c),!L(a))for(w=c.Da.g.parse(a),a=0;a<w.length;a++){let q=w[a];if(c.T=q[0],q=q[1],c.G==2)if(q[0]=="c"){c.K=q[1],c.ia=q[2];const fe=q[3];fe!=null&&(c.la=fe,c.j.info("VER="+c.la));const me=q[4];me!=null&&(c.Aa=me,c.j.info("SVER="+c.Aa));const ft=q[5];ft!=null&&typeof ft=="number"&&0<ft&&(d=1.5*ft,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Ae=s.g;if(Ae){const Sn=Ae.g?Ae.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sn){var A=d.h;A.g||Sn.indexOf("spdy")==-1&&Sn.indexOf("quic")==-1&&Sn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Vr(A,A.h),A.h=null))}if(d.D){const Or=Ae.g?Ae.g.getResponseHeader("X-HTTP-Session-Id"):null;Or&&(d.ya=Or,Q(d.I,d.D,Or))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var C=s;if(d.qa=Pi(d,d.J?d.ia:null,d.W),C.K){oi(d.h,C);var G=C,oe=d.L;oe&&(G.I=oe),G.B&&(Cr(G),vn(G)),d.g=C}else Ii(d);0<c.i.length&&Rn(c)}else q[0]!="stop"&&q[0]!="close"||Ze(c,7);else c.G==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?Ze(c,7):jr(c):q[0]!="noop"&&c.l&&c.l.ta(q),c.v=0)}}kt(4)}catch{}}var Al=class{constructor(s,a){this.g=s,this.map=a}};function ri(s){this.l=s||10,h.PerformanceNavigationTiming?(s=h.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function si(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ii(s){return s.h?1:s.g?s.g.size:0}function Pr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Vr(s,a){s.g?s.g.add(a):s.h=a}function oi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ri.prototype.cancel=function(){if(this.i=ai(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ai(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return S(s.i)}function Il(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(f(s)){for(var a=[],c=s.length,d=0;d<c;d++)a.push(s[d]);return a}a=[],c=0;for(d in s)a[c++]=s[d];return a}function Rl(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(f(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const d in s)a[c++]=d;return a}}}function li(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(f(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=Rl(s),d=Il(s),w=d.length,A=0;A<w;A++)a.call(void 0,d[A],c&&c[A],s)}var ci=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nl(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var d=s[c].indexOf("="),w=null;if(0<=d){var A=s[c].substring(0,d);w=s[c].substring(d+1)}else A=s[c];a(A,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Je(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Je){this.h=s.h,xn(this,s.j),this.o=s.o,this.g=s.g,bn(this,s.s),this.l=s.l;var a=s.i,c=new Ft;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),ui(this,c),this.m=s.m}else s&&(a=String(s).match(ci))?(this.h=!1,xn(this,a[1]||"",!0),this.o=Ot(a[2]||""),this.g=Ot(a[3]||"",!0),bn(this,a[4]),this.l=Ot(a[5]||"",!0),ui(this,a[6]||"",!0),this.m=Ot(a[7]||"")):(this.h=!1,this.i=new Ft(null,this.h))}Je.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Lt(a,hi,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Lt(a,hi,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Lt(c,c.charAt(0)=="/"?Pl:Sl,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Lt(c,kl)),s.join("")};function ke(s){return new Je(s)}function xn(s,a,c){s.j=c?Ot(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function bn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function ui(s,a,c){a instanceof Ft?(s.i=a,jl(s.i,s.h)):(c||(a=Lt(a,Vl)),s.i=new Ft(a,s.h))}function Q(s,a,c){s.i.set(a,c)}function wn(s){return Q(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ot(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Lt(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Cl),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Cl(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var hi=/[#\/\?@]/g,Sl=/[#\?:]/g,Pl=/[#\?]/g,Vl=/[#\?@]/g,kl=/#/g;function Ft(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Be(s){s.g||(s.g=new Map,s.h=0,s.i&&Nl(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=Ft.prototype,n.add=function(s,a){Be(this),this.i=null,s=ht(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function di(s,a){Be(s),a=ht(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function fi(s,a){return Be(s),a=ht(s,a),s.g.has(a)}n.forEach=function(s,a){Be(this),this.g.forEach(function(c,d){c.forEach(function(w){s.call(a,w,d,this)},this)},this)},n.na=function(){Be(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let d=0;d<a.length;d++){const w=s[d];for(let A=0;A<w.length;A++)c.push(a[d])}return c},n.V=function(s){Be(this);let a=[];if(typeof s=="string")fi(this,s)&&(a=a.concat(this.g.get(ht(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},n.set=function(s,a){return Be(this),this.i=null,s=ht(this,s),fi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function mi(s,a,c){di(s,a),0<c.length&&(s.i=null,s.g.set(ht(s,a),S(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var d=a[c];const A=encodeURIComponent(String(d)),C=this.V(d);for(d=0;d<C.length;d++){var w=A;C[d]!==""&&(w+="="+encodeURIComponent(String(C[d]))),s.push(w)}}return this.i=s.join("&")};function ht(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function jl(s,a){a&&!s.j&&(Be(s),s.i=null,s.g.forEach(function(c,d){var w=d.toLowerCase();d!=w&&(di(this,d),mi(this,w,c))},s)),s.j=a}function Dl(s,a){const c=new Dt;if(h.Image){const d=new Image;d.onload=P(Ue,c,"TestLoadImage: loaded",!0,a,d),d.onerror=P(Ue,c,"TestLoadImage: error",!1,a,d),d.onabort=P(Ue,c,"TestLoadImage: abort",!1,a,d),d.ontimeout=P(Ue,c,"TestLoadImage: timeout",!1,a,d),h.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Ml(s,a){const c=new Dt,d=new AbortController,w=setTimeout(()=>{d.abort(),Ue(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(A=>{clearTimeout(w),A.ok?Ue(c,"TestPingServer: ok",!0,a):Ue(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(w),Ue(c,"TestPingServer: error",!1,a)})}function Ue(s,a,c,d,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),d(c)}catch{}}function Ol(){this.g=new vl}function Ll(s,a,c){const d=c||"";try{li(s,function(w,A){let C=w;m(w)&&(C=wr(w)),a.push(d+A+"="+encodeURIComponent(C))})}catch(w){throw a.push(d+"type="+encodeURIComponent("_badmap")),w}}function En(s){this.l=s.Ub||null,this.j=s.eb||!1}k(En,Er),En.prototype.g=function(){return new Tn(this.l,this.j)},En.prototype.i=function(s){return function(){return s}}({});function Tn(s,a){de.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Tn,de),n=Tn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Ut(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||h).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bt(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ut(this)),this.g&&(this.readyState=3,Ut(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function pi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Bt(this):Ut(this),this.readyState==3&&pi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Bt(this))},n.Qa=function(s){this.g&&(this.response=s,Bt(this))},n.ga=function(){this.g&&Bt(this)};function Bt(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ut(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function Ut(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function gi(s){let a="";return ne(s,function(c,d){a+=d,a+=":",a+=c,a+=`\r
`}),a}function kr(s,a,c){e:{for(d in c){var d=!1;break e}d=!0}d||(c=gi(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):Q(s,a,c))}function J(s){de.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(J,de);var Fl=/^https?$/i,Bl=["POST","PUT"];n=J.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ir.g(),this.v=this.o?Hs(this.o):Hs(Ir),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){yi(this,A);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var w in d)c.set(w,d[w]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())c.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),w=h.FormData&&s instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Bl,a,void 0))||d||w||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of c)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xi(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){yi(this,A)}};function yi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,_i(s),An(s)}function _i(s){s.A||(s.A=!0,ve(s,"complete"),ve(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,ve(this,"complete"),ve(this,"abort"),An(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),An(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?vi(this):this.bb())},n.bb=function(){vi(this)};function vi(s){if(s.h&&typeof l<"u"&&(!s.v[1]||je(s)!=4||s.Z()!=2)){if(s.u&&je(s)==4)Us(s.Ea,0,s);else if(ve(s,"readystatechange"),je(s)==4){s.h=!1;try{const C=s.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var c;if(!(c=a)){var d;if(d=C===0){var w=String(s.D).match(ci)[1]||null;!w&&h.self&&h.self.location&&(w=h.self.location.protocol.slice(0,-1)),d=!Fl.test(w?w.toLowerCase():"")}c=d}if(c)ve(s,"complete"),ve(s,"success");else{s.m=6;try{var A=2<je(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",_i(s)}}finally{An(s)}}}}function An(s,a){if(s.g){xi(s);const c=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||ve(s,"ready");try{c.onreadystatechange=d}catch{}}}function xi(s){s.I&&(h.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function je(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<je(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),_l(a)}};function bi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ul(s){const a={};s=(s.g&&2<=je(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(L(s[d]))continue;var c=x(s[d]);const w=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=a[w]||[];a[w]=A,A.push(c)}b(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $t(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function wi(s){this.Aa=0,this.i=[],this.j=new Dt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$t("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$t("baseRetryDelayMs",5e3,s),this.cb=$t("retryDelaySeedMs",1e4,s),this.Wa=$t("forwardChannelMaxRetries",2,s),this.wa=$t("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ri(s&&s.concurrentRequestLimit),this.Da=new Ol,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=wi.prototype,n.la=8,n.G=1,n.connect=function(s,a,c,d){xe(0),this.W=s,this.H=a||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=Pi(this,null,this.W),Rn(this)};function jr(s){if(Ei(s),s.G==3){var a=s.U++,c=ke(s.I);if(Q(c,"SID",s.K),Q(c,"RID",a),Q(c,"TYPE","terminate"),zt(s,c),a=new Fe(s,s.j,a),a.L=2,a.v=wn(ke(c)),c=!1,h.navigator&&h.navigator.sendBeacon)try{c=h.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&h.Image&&(new Image().src=a.v,c=!0),c||(a.g=Vi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),vn(a)}Si(s)}function In(s){s.g&&(Mr(s),s.g.cancel(),s.g=null)}function Ei(s){In(s),s.u&&(h.clearTimeout(s.u),s.u=null),Nn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&h.clearTimeout(s.s),s.s=null)}function Rn(s){if(!si(s.h)&&!s.s){s.s=!0;var a=s.Ga;Nt||Ms(),Ct||(Nt(),Ct=!0),mr.add(a,s),s.B=0}}function $l(s,a){return ii(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=jt(R(s.Ga,s,a),Ci(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const w=new Fe(this,this.j,s);let A=this.o;if(this.S&&(A?(A=p(A),v(A,this.S)):A=this.S),this.m!==null||this.O||(w.H=A,A=null),this.P)e:{for(var a=0,c=0;c<this.i.length;c++){t:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=c;break e}if(a===4096||c===this.i.length-1){a=c+1;break e}}a=1e3}else a=1e3;a=Ai(this,w,a),c=ke(this.I),Q(c,"RID",s),Q(c,"CVER",22),this.D&&Q(c,"X-HTTP-Session-Id",this.D),zt(this,c),A&&(this.O?a="headers="+encodeURIComponent(String(gi(A)))+"&"+a:this.m&&kr(c,this.m,A)),Vr(this.h,w),this.Ua&&Q(c,"TYPE","init"),this.P?(Q(c,"$req",a),Q(c,"SID","null"),w.T=!0,Nr(w,c,null)):Nr(w,c,a),this.G=2}}else this.G==3&&(s?Ti(this,s):this.i.length==0||si(this.h)||Ti(this))};function Ti(s,a){var c;a?c=a.l:c=s.U++;const d=ke(s.I);Q(d,"SID",s.K),Q(d,"RID",c),Q(d,"AID",s.T),zt(s,d),s.m&&s.o&&kr(d,s.m,s.o),c=new Fe(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ai(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Vr(s.h,c),Nr(c,d,a)}function zt(s,a){s.H&&ne(s.H,function(c,d){Q(a,d,c)}),s.l&&li({},function(c,d){Q(a,d,c)})}function Ai(s,a,c){c=Math.min(s.i.length,c);var d=s.l?R(s.l.Na,s.l,s):null;e:{var w=s.i;let A=-1;for(;;){const C=["count="+c];A==-1?0<c?(A=w[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let G=!0;for(let oe=0;oe<c;oe++){let q=w[oe].g;const fe=w[oe].map;if(q-=A,0>q)A=Math.max(0,w[oe].g-100),G=!1;else try{Ll(fe,C,"req"+q+"_")}catch{d&&d(fe)}}if(G){d=C.join("&");break e}}}return s=s.i.splice(0,c),a.D=s,d}function Ii(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Nt||Ms(),Ct||(Nt(),Ct=!0),mr.add(a,s),s.v=0}}function Dr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=jt(R(s.Fa,s),Ci(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Ri(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=jt(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xe(10),In(this),Ri(this))};function Mr(s){s.A!=null&&(h.clearTimeout(s.A),s.A=null)}function Ri(s){s.g=new Fe(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=ke(s.qa);Q(a,"RID","rpc"),Q(a,"SID",s.K),Q(a,"AID",s.T),Q(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Q(a,"TO",s.ja),Q(a,"TYPE","xmlhttp"),zt(s,a),s.m&&s.o&&kr(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=wn(ke(a)),c.m=null,c.P=!0,ei(c,s)}n.Za=function(){this.C!=null&&(this.C=null,In(this),Dr(this),xe(19))};function Nn(s){s.C!=null&&(h.clearTimeout(s.C),s.C=null)}function Ni(s,a){var c=null;if(s.g==a){Nn(s),Mr(s),s.g=null;var d=2}else if(Pr(s.h,a))c=a.D,oi(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var w=s.B;d=gn(),ve(d,new Xs(d,c)),Rn(s)}else Ii(s);else if(w=a.s,w==3||w==0&&0<a.X||!(d==1&&$l(s,a)||d==2&&Dr(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),w){case 1:Ze(s,5);break;case 4:Ze(s,10);break;case 3:Ze(s,6);break;default:Ze(s,2)}}}function Ci(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function Ze(s,a){if(s.j.info("Error code "+a),a==2){var c=R(s.fb,s),d=s.Xa;const w=!d;d=new Je(d||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||xn(d,"https"),wn(d),w?Dl(d.toString(),c):Ml(d.toString(),c)}else xe(2);s.G=0,s.l&&s.l.sa(a),Si(s),Ei(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function Si(s){if(s.G=0,s.ka=[],s.l){const a=ai(s.h);(a.length!=0||s.i.length!=0)&&(V(s.ka,a),V(s.ka,s.i),s.h.i.length=0,S(s.i),s.i.length=0),s.l.ra()}}function Pi(s,a,c){var d=c instanceof Je?ke(c):new Je(c);if(d.g!="")a&&(d.g=a+"."+d.g),bn(d,d.s);else{var w=h.location;d=w.protocol,a=a?a+"."+w.hostname:w.hostname,w=+w.port;var A=new Je(null);d&&xn(A,d),a&&(A.g=a),w&&bn(A,w),c&&(A.l=c),d=A}return c=s.D,a=s.ya,c&&a&&Q(d,c,a),Q(d,"VER",s.la),zt(s,d),d}function Vi(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new J(new En({eb:c})):new J(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ki(){}n=ki.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Cn(){}Cn.prototype.g=function(s,a){return new Te(s,a)};function Te(s,a){de.call(this),this.g=new wi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!L(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!L(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new dt(this)}k(Te,de),Te.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Te.prototype.close=function(){jr(this.g)},Te.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=wr(s),s=c);a.i.push(new Al(a.Ya++,s)),a.G==3&&Rn(a)},Te.prototype.N=function(){this.g.l=null,delete this.j,jr(this.g),delete this.g,Te.aa.N.call(this)};function ji(s){Tr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){e:{for(const c in a){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(ji,Tr);function Di(){Ar.call(this),this.status=1}k(Di,Ar);function dt(s){this.g=s}k(dt,ki),dt.prototype.ua=function(){ve(this.g,"a")},dt.prototype.ta=function(s){ve(this.g,new ji(s))},dt.prototype.sa=function(s){ve(this.g,new Di)},dt.prototype.ra=function(){ve(this.g,"b")},Cn.prototype.createWebChannel=Cn.prototype.g,Te.prototype.send=Te.prototype.o,Te.prototype.open=Te.prototype.m,Te.prototype.close=Te.prototype.close,sa=function(){return new Cn},ra=function(){return gn()},na=Xe,es={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yn.NO_ERROR=0,yn.TIMEOUT=8,yn.HTTP_ERROR=6,Ln=yn,Ys.COMPLETE="complete",ta=Ys,Gs.EventType=Vt,Vt.OPEN="a",Vt.CLOSE="b",Vt.ERROR="c",Vt.MESSAGE="d",de.prototype.listen=de.prototype.K,Gt=Gs,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,ea=J}).apply(typeof kn<"u"?kn:typeof self<"u"?self:typeof window<"u"?window:{});const Xi="@firebase/firestore",Yi="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ge.UNAUTHENTICATED=new ge(null),ge.GOOGLE_CREDENTIALS=new ge("google-credentials-uid"),ge.FIRST_PARTY=new ge("first-party-uid"),ge.MOCK_USER=new ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let At="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new Wo("@firebase/firestore");function mt(){return st.logLevel}function j(n,...e){if(st.logLevel<=z.DEBUG){const t=e.map(gs);st.debug(`Firestore (${At}): ${n}`,...t)}}function it(n,...e){if(st.logLevel<=z.ERROR){const t=e.map(gs);st.error(`Firestore (${At}): ${n}`,...t)}}function ir(n,...e){if(st.logLevel<=z.WARN){const t=e.map(gs);st.warn(`Firestore (${At}): ${n}`,...t)}}function gs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n="Unexpected state"){const e=`FIRESTORE (${At}) INTERNAL ASSERTION FAILED: `+n;throw it(e),new Error(e)}function ee(n,e){n||F()}function K(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Tt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ge.UNAUTHENTICATED))}shutdown(){}}class ih{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class oh{constructor(e){this.t=e,this.currentUser=ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0);let r=this.i;const i=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let o=new nt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new nt,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const f=o;e.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},h=f=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new nt)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new ia(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new ge(e)}}class ah{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ge.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class lh{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ah(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ji{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ch{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Uu(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ee(this.o===void 0);const r=o=>{o.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,j("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ji(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string"),this.R=t.token,new Ji(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=uh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function vt(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=-62135596800,eo=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*eo);return new ie(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Zi)throw new D(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/eo}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Zi;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new ie(0,0))}static max(){return new X(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="__name__";class Ce{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(),r===void 0?r=e.length-t:r>e.length-t&&F(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ce.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ce?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Ce.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Ce.isNumericId(e),i=Ce.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ce.extractNumericId(e).compare(Ce.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ps.fromString(e.substring(4,e.length-2))}}class Z extends Ce{construct(e,t,r){return new Z(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Z(t)}static emptyPath(){return new Z([])}}const hh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends Ce{construct(e,t,r){return new ce(e,t,r)}static isValidIdentifier(e){return hh.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===to}static keyField(){return new ce([to])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new D(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;i<e.length;){const h=e[i];if(h==="\\"){if(i+1===e.length)throw new D(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new D(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,i+=2}else h==="`"?(l=!l,i++):h!=="."||l?(r+=h,i++):(o(),i++)}if(o(),l)throw new D(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ce(t)}static emptyPath(){return new ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(Z.fromString(e))}static fromName(e){return new O(Z.fromString(e).popFirst(5))}static empty(){return new O(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new Z(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=-1;function dh(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new ie(t+1,0):new ie(t,r));return new Ge(i,O.empty(),e)}function fh(n){return new Ge(n.readTime,n.key,tn)}class Ge{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ge(X.min(),O.empty(),tn)}static max(){return new Ge(X.max(),O.empty(),tn)}}function mh(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==ph)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof I?t:I.resolve(t)}catch(t){return I.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):I.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):I.reject(t)}static resolve(e){return new I((t,r)=>{t(e)})}static reject(e){return new I((t,r)=>{r(e)})}static waitFor(e){return new I((t,r)=>{let i=0,o=0,l=!1;e.forEach(h=>{++i,h.next(()=>{++o,l&&o===i&&t()},f=>r(f))}),l=!0,o===i&&t()})}static or(e){let t=I.resolve(!1);for(const r of e)t=t.next(i=>i?I.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new I((r,i)=>{const o=e.length,l=new Array(o);let h=0;for(let f=0;f<o;f++){const m=f;t(e[m]).next(_=>{l[m]=_,++h,h===o&&r(l)},_=>i(_))}})}static doWhile(e,t){return new I((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function yh(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function an(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}_s.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=-1;function xs(n){return n==null}function Gn(n){return n===0&&1/n==-1/0}function _h(n){return typeof n=="number"&&Number.isInteger(n)&&!Gn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="";function vh(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=no(e)),e=xh(n.get(t),e);return no(e)}function xh(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case aa:t+="";break;default:t+=o}}return t}function no(n){return n+aa+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function It(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function la(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.comparator=e,this.root=t||ae.EMPTY}insert(e,t){return new Ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jn(this.root,e,this.comparator,!1)}getReverseIterator(){return new jn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jn(this.root,e,this.comparator,!0)}}class jn{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ae{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??ae.RED,this.left=i??ae.EMPTY,this.right=o??ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new ae(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,r,i,o){return this}insert(e,t,r){return new ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new so(this.data.getIterator())}getIteratorFrom(e){return new so(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class so{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.fields=e,e.sort(ce.comparator)}static empty(){return new Ne([])}unionWith(e){let t=new ue(ce.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ne(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new bh("Invalid base64 string: "+o):o}}(e);return new Se(t)}static fromUint8Array(e){const t=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const wh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ot(n){if(ee(!!n),typeof n=="string"){let e=0;const t=wh.exec(n);if(ee(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xt(n){return typeof n=="string"?Se.fromBase64String(n):Se.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="server_timestamp",ua="__type__",ha="__previous_value__",da="__local_write_time__";function bs(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ua])===null||t===void 0?void 0:t.stringValue)===ca}function ws(n){const e=n.mapValue.fields[ha];return bs(e)?ws(e):e}function Kn(n){const e=ot(n.mapValue.fields[da].timestampValue);return new ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t,r,i,o,l,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=m}}const Wn="(default)";class Qn{constructor(e,t){this.projectId=e,this.database=t||Wn}static empty(){return new Qn("","")}get isDefaultDatabase(){return this.database===Wn}isEqual(e){return e instanceof Qn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="__type__",Th="__max__",Dn={mapValue:{}},ma="__vector__",ts="value";function at(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bs(n)?4:Ih(n)?9007199254740991:Ah(n)?10:11:F()}function Pe(n,e){if(n===e)return!0;const t=at(n);if(t!==at(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Kn(n).isEqual(Kn(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=ot(i.timestampValue),h=ot(o.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return xt(i.bytesValue).isEqual(xt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return le(i.geoPointValue.latitude)===le(o.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return le(i.integerValue)===le(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=le(i.doubleValue),h=le(o.doubleValue);return l===h?Gn(l)===Gn(h):isNaN(l)&&isNaN(h)}return!1}(n,e);case 9:return vt(n.arrayValue.values||[],e.arrayValue.values||[],Pe);case 10:case 11:return function(i,o){const l=i.mapValue.fields||{},h=o.mapValue.fields||{};if(ro(l)!==ro(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!Pe(l[f],h[f])))return!1;return!0}(n,e);default:return F()}}function nn(n,e){return(n.values||[]).find(t=>Pe(t,e))!==void 0}function bt(n,e){if(n===e)return 0;const t=at(n),r=at(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(o,l){const h=le(o.integerValue||o.doubleValue),f=le(l.integerValue||l.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,e);case 3:return io(n.timestampValue,e.timestampValue);case 4:return io(Kn(n),Kn(e));case 5:return H(n.stringValue,e.stringValue);case 6:return function(o,l){const h=xt(o),f=xt(l);return h.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(o,l){const h=o.split("/"),f=l.split("/");for(let m=0;m<h.length&&m<f.length;m++){const _=H(h[m],f[m]);if(_!==0)return _}return H(h.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,l){const h=H(le(o.latitude),le(l.latitude));return h!==0?h:H(le(o.longitude),le(l.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return oo(n.arrayValue,e.arrayValue);case 10:return function(o,l){var h,f,m,_;const T=o.fields||{},R=l.fields||{},P=(h=T[ts])===null||h===void 0?void 0:h.arrayValue,k=(f=R[ts])===null||f===void 0?void 0:f.arrayValue,S=H(((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0,((_=k==null?void 0:k.values)===null||_===void 0?void 0:_.length)||0);return S!==0?S:oo(P,k)}(n.mapValue,e.mapValue);case 11:return function(o,l){if(o===Dn.mapValue&&l===Dn.mapValue)return 0;if(o===Dn.mapValue)return 1;if(l===Dn.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),m=l.fields||{},_=Object.keys(m);f.sort(),_.sort();for(let T=0;T<f.length&&T<_.length;++T){const R=H(f[T],_[T]);if(R!==0)return R;const P=bt(h[f[T]],m[_[T]]);if(P!==0)return P}return H(f.length,_.length)}(n.mapValue,e.mapValue);default:throw F()}}function io(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=ot(n),r=ot(e),i=H(t.seconds,r.seconds);return i!==0?i:H(t.nanos,r.nanos)}function oo(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=bt(t[i],r[i]);if(o)return o}return H(t.length,r.length)}function wt(n){return ns(n)}function ns(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ot(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return xt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=ns(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${ns(t.fields[l])}`;return i+"}"}(n.mapValue):F()}function Fn(n){switch(at(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ws(n);return e?16+Fn(e):16;case 5:return 2*n.stringValue.length;case 6:return xt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Fn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return It(r.fields,(o,l)=>{i+=o.length+Fn(l)}),i}(n.mapValue);default:throw F()}}function rs(n){return!!n&&"integerValue"in n}function Es(n){return!!n&&"arrayValue"in n}function Bn(n){return!!n&&"mapValue"in n}function Ah(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[fa])===null||t===void 0?void 0:t.stringValue)===ma}function Kt(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return It(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Kt(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Kt(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ih(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Th}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Bn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kt(t)}setAll(e){let t=ce.emptyPath(),r={},i=[];e.forEach((l,h)=>{if(!t.isImmediateParentOf(h)){const f=this.getFieldsMap(t);this.applyChanges(f,r,i),r={},i=[],t=h.popLast()}l?r[h.lastSegment()]=Kt(l):i.push(h.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Bn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Bn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){It(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Re(Kt(this.value))}}function pa(n){const e=[];return It(n.fields,(t,r)=>{const i=new ce([t]);if(Bn(r)){const o=pa(r.mapValue).fields;if(o.length===0)e.push(i);else for(const l of o)e.push(i.child(l))}else e.push(i)}),new Ne(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,r,i,o,l,h){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=h}static newInvalidDocument(e){return new Ie(e,0,X.min(),X.min(),X.min(),Re.empty(),0)}static newFoundDocument(e,t,r,i){return new Ie(e,1,t,X.min(),r,i,0)}static newNoDocument(e,t){return new Ie(e,2,t,X.min(),X.min(),Re.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,X.min(),X.min(),Re.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){this.position=e,this.inclusive=t}}function ao(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],l=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(l.referenceValue),t.key):r=bt(l,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function lo(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Pe(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Rh(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{}class se extends ga{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ch(e,t,r):t==="array-contains"?new Vh(e,r):t==="in"?new kh(e,r):t==="not-in"?new jh(e,r):t==="array-contains-any"?new Dh(e,r):new se(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Sh(e,r):new Ph(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(bt(t,this.value)):t!==null&&at(this.value)===at(t)&&this.matchesComparison(bt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ke extends ga{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Ke(e,t)}matches(e){return ya(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function ya(n){return n.op==="and"}function _a(n){return Nh(n)&&ya(n)}function Nh(n){for(const e of n.filters)if(e instanceof Ke)return!1;return!0}function ss(n){if(n instanceof se)return n.field.canonicalString()+n.op.toString()+wt(n.value);if(_a(n))return n.filters.map(e=>ss(e)).join(",");{const e=n.filters.map(t=>ss(t)).join(",");return`${n.op}(${e})`}}function va(n,e){return n instanceof se?function(r,i){return i instanceof se&&r.op===i.op&&r.field.isEqual(i.field)&&Pe(r.value,i.value)}(n,e):n instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,l,h)=>o&&va(l,i.filters[h]),!0):!1}(n,e):void F()}function xa(n){return n instanceof se?function(t){return`${t.field.canonicalString()} ${t.op} ${wt(t.value)}`}(n):n instanceof Ke?function(t){return t.op.toString()+" {"+t.getFilters().map(xa).join(" ,")+"}"}(n):"Filter"}class Ch extends se{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class Sh extends se{constructor(e,t){super(e,"in",t),this.keys=ba("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ph extends se{constructor(e,t){super(e,"not-in",t),this.keys=ba("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ba(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>O.fromName(r.referenceValue))}class Vh extends se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Es(t)&&nn(t.arrayValue,this.value)}}class kh extends se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&nn(this.value.arrayValue,t)}}class jh extends se{constructor(e,t){super(e,"not-in",t)}matches(e){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!nn(this.value.arrayValue,t)}}class Dh extends se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Es(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>nn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t=null,r=[],i=[],o=null,l=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=h,this.le=null}}function co(n,e=null,t=[],r=[],i=null,o=null,l=null){return new Mh(n,e,t,r,i,o,l)}function Ts(n){const e=K(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ss(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),xs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>wt(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>wt(r)).join(",")),e.le=t}return e.le}function As(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Rh(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!va(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!lo(n.startAt,e.startAt)&&lo(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t=null,r=[],i=[],o=null,l="F",h=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=h,this.endAt=f,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Oh(n,e,t,r,i,o,l,h){return new or(n,e,t,r,i,o,l,h)}function Lh(n){return new or(n)}function uo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fh(n){return n.collectionGroup!==null}function Wt(n){const e=K(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new ue(ce.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(h=h.add(m.field))})}),h})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new Yn(o,r))}),t.has(ce.keyField().canonicalString())||e.he.push(new Yn(ce.keyField(),r))}return e.he}function rt(n){const e=K(n);return e.Pe||(e.Pe=Bh(e,Wt(n))),e.Pe}function Bh(n,e){if(n.limitType==="F")return co(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Yn(i.field,o)});const t=n.endAt?new Xn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Xn(n.startAt.position,n.startAt.inclusive):null;return co(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function is(n,e,t){return new or(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function wa(n,e){return As(rt(n),rt(e))&&n.limitType===e.limitType}function Ea(n){return`${Ts(rt(n))}|lt:${n.limitType}`}function Ht(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>xa(i)).join(", ")}]`),xs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>wt(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>wt(i)).join(",")),`Target(${r})`}(rt(n))}; limitType=${n.limitType})`}function Is(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Wt(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(l,h,f){const m=ao(l,h,f);return l.inclusive?m<=0:m<0}(r.startAt,Wt(r),i)||r.endAt&&!function(l,h,f){const m=ao(l,h,f);return l.inclusive?m>=0:m>0}(r.endAt,Wt(r),i))}(n,e)}function Uh(n){return(e,t)=>{let r=!1;for(const i of Wt(n)){const o=$h(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function $h(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(o,l,h){const f=l.data.field(o),m=h.data.field(o);return f!==null&&m!==null?bt(f,m):F()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){It(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return la(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new Ee(O.comparator);function Jn(){return zh}const Ta=new Ee(O.comparator);function Mn(...n){let e=Ta;for(const t of n)e=e.insert(t.key,t);return e}function Aa(n){let e=Ta;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function tt(){return Qt()}function Ia(){return Qt()}function Qt(){return new lt(n=>n.toString(),(n,e)=>n.isEqual(e))}const qh=new Ee(O.comparator),Hh=new ue(O.comparator);function ye(...n){let e=Hh;for(const t of n)e=e.add(t);return e}const Gh=new ue(H);function Kh(){return Gh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gn(e)?"-0":e}}function Ra(n){return{integerValue:""+n}}function Wh(n,e){return _h(e)?Ra(e):Rs(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this._=void 0}}function Qh(n,e,t){return n instanceof Zn?function(i,o){const l={fields:{[ua]:{stringValue:ca},[da]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&bs(o)&&(o=ws(o)),o&&(l.fields[ha]=o),{mapValue:l}}(t,e):n instanceof rn?Ca(n,e):n instanceof sn?Sa(n,e):function(i,o){const l=Na(i,o),h=ho(l)+ho(i.Ie);return rs(l)&&rs(i.Ie)?Ra(h):Rs(i.serializer,h)}(n,e)}function Xh(n,e,t){return n instanceof rn?Ca(n,e):n instanceof sn?Sa(n,e):t}function Na(n,e){return n instanceof er?function(r){return rs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Zn extends ar{}class rn extends ar{constructor(e){super(),this.elements=e}}function Ca(n,e){const t=Pa(e);for(const r of n.elements)t.some(i=>Pe(i,r))||t.push(r);return{arrayValue:{values:t}}}class sn extends ar{constructor(e){super(),this.elements=e}}function Sa(n,e){let t=Pa(e);for(const r of n.elements)t=t.filter(i=>!Pe(i,r));return{arrayValue:{values:t}}}class er extends ar{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function ho(n){return le(n.integerValue||n.doubleValue)}function Pa(n){return Es(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Yh(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof rn&&i instanceof rn||r instanceof sn&&i instanceof sn?vt(r.elements,i.elements,Pe):r instanceof er&&i instanceof er?Pe(r.Ie,i.Ie):r instanceof Zn&&i instanceof Zn}(n.transform,e.transform)}class Jh{constructor(e,t){this.version=e,this.transformResults=t}}class De{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new De}static exists(e){return new De(void 0,e)}static updateTime(e){return new De(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Un(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class lr{}function Va(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ja(n.key,De.none()):new ln(n.key,n.data,De.none());{const t=n.data,r=Re.empty();let i=new ue(ce.comparator);for(let o of e.fields)if(!i.has(o)){let l=t.field(o);l===null&&o.length>1&&(o=o.popLast(),l=t.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new ct(n.key,r,new Ne(i.toArray()),De.none())}}function Zh(n,e,t){n instanceof ln?function(i,o,l){const h=i.value.clone(),f=mo(i.fieldTransforms,o,l.transformResults);h.setAll(f),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,e,t):n instanceof ct?function(i,o,l){if(!Un(i.precondition,o))return void o.convertToUnknownDocument(l.version);const h=mo(i.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(ka(i)),f.setAll(h),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,e,t):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,t)}function Xt(n,e,t,r){return n instanceof ln?function(o,l,h,f){if(!Un(o.precondition,l))return h;const m=o.value.clone(),_=po(o.fieldTransforms,f,l);return m.setAll(_),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof ct?function(o,l,h,f){if(!Un(o.precondition,l))return h;const m=po(o.fieldTransforms,f,l),_=l.data;return _.setAll(ka(o)),_.setAll(m),l.convertToFoundDocument(l.version,_).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,e,t,r):function(o,l,h){return Un(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h}(n,e,t)}function ed(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=Na(r.transform,i||null);o!=null&&(t===null&&(t=Re.empty()),t.set(r.field,o))}return t||null}function fo(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vt(r,i,(o,l)=>Yh(o,l))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ln extends lr{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ct extends lr{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ka(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function mo(n,e,t){const r=new Map;ee(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],l=o.transform,h=e.data.field(o.field);r.set(o.field,Xh(l,h,t[i]))}return r}function po(n,e,t){const r=new Map;for(const i of n){const o=i.transform,l=t.data.field(i.field);r.set(i.field,Qh(o,l,e))}return r}class ja extends lr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class td extends lr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Zh(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Xt(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Xt(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ia();return this.mutations.forEach(i=>{const o=e.get(i.key),l=o.overlayedDocument;let h=this.applyToLocalView(l,o.mutatedFields);h=t.has(i.key)?null:h;const f=Va(l,h);f!==null&&r.set(i.key,f),l.isValidDocument()||l.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ye())}isEqual(e){return this.batchId===e.batchId&&vt(this.mutations,e.mutations,(t,r)=>fo(t,r))&&vt(this.baseMutations,e.baseMutations,(t,r)=>fo(t,r))}}class Ns{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ee(e.mutations.length===r.length);let i=function(){return qh}();const o=e.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new Ns(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te,$;function sd(n){switch(n){case N.OK:return F();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return F()}}function id(n){if(n===void 0)return it("GRPC error has no .code"),N.UNKNOWN;switch(n){case te.OK:return N.OK;case te.CANCELLED:return N.CANCELLED;case te.UNKNOWN:return N.UNKNOWN;case te.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case te.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case te.INTERNAL:return N.INTERNAL;case te.UNAVAILABLE:return N.UNAVAILABLE;case te.UNAUTHENTICATED:return N.UNAUTHENTICATED;case te.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case te.NOT_FOUND:return N.NOT_FOUND;case te.ALREADY_EXISTS:return N.ALREADY_EXISTS;case te.PERMISSION_DENIED:return N.PERMISSION_DENIED;case te.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case te.ABORTED:return N.ABORTED;case te.OUT_OF_RANGE:return N.OUT_OF_RANGE;case te.UNIMPLEMENTED:return N.UNIMPLEMENTED;case te.DATA_LOSS:return N.DATA_LOSS;default:return F()}}($=te||(te={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ps([4294967295,4294967295],0);class od{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function os(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ad(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ld(n,e){return os(n,e.toTimestamp())}function _t(n){return ee(!!n),X.fromTimestamp(function(t){const r=ot(t);return new ie(r.seconds,r.nanos)}(n))}function Da(n,e){return as(n,e).canonicalString()}function as(n,e){const t=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function cd(n){const e=Z.fromString(n);return ee(yd(e)),e}function ls(n,e){return Da(n.databaseId,e.path)}function ud(n){const e=cd(n);return e.length===4?Z.emptyPath():dd(e)}function hd(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function dd(n){return ee(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function go(n,e,t){return{name:ls(n,e),fields:t.value.mapValue.fields}}function fd(n,e){let t;if(e instanceof ln)t={update:go(n,e.key,e.value)};else if(e instanceof ja)t={delete:ls(n,e.key)};else if(e instanceof ct)t={update:go(n,e.key,e.data),updateMask:gd(e.fieldMask)};else{if(!(e instanceof td))return F();t={verify:ls(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,l){const h=l.transform;if(h instanceof Zn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof rn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof sn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof er)return{fieldPath:l.field.canonicalString(),increment:h.Ie};throw F()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:ld(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F()}(n,e.precondition)),t}function md(n,e){return n&&n.length>0?(ee(e!==void 0),n.map(t=>function(i,o){let l=i.updateTime?_t(i.updateTime):_t(o);return l.isEqual(X.min())&&(l=_t(o)),new Jh(l,i.transformResults||[])}(t,e))):[]}function pd(n){let e=ud(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ee(r===1);const _=t.from[0];_.allDescendants?i=_.collectionId:e=e.child(_.collectionId)}let o=[];t.where&&(o=function(T){const R=Ma(T);return R instanceof Ke&&_a(R)?R.getFilters():[R]}(t.where));let l=[];t.orderBy&&(l=function(T){return T.map(R=>function(k){return new Yn(pt(k.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(t.orderBy));let h=null;t.limit&&(h=function(T){let R;return R=typeof T=="object"?T.value:T,xs(R)?null:R}(t.limit));let f=null;t.startAt&&(f=function(T){const R=!!T.before,P=T.values||[];return new Xn(P,R)}(t.startAt));let m=null;return t.endAt&&(m=function(T){const R=!T.before,P=T.values||[];return new Xn(P,R)}(t.endAt)),Oh(e,i,l,o,h,"F",f,m)}function Ma(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=pt(t.unaryFilter.field);return se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pt(t.unaryFilter.field);return se.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=pt(t.unaryFilter.field);return se.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=pt(t.unaryFilter.field);return se.create(l,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(t){return se.create(pt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ke.create(t.compositeFilter.filters.map(r=>Ma(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(n):F()}function pt(n){return ce.fromServerFormat(n.fieldPath)}function gd(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this.Tt=e}}function vd(n){const e=pd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?is(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.Tn=new bd}addToCollectionParentIndex(e,t){return this.Tn.add(t),I.resolve()}getCollectionParents(e,t){return I.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return I.resolve()}deleteFieldIndex(e,t){return I.resolve()}deleteAllFieldIndexes(e){return I.resolve()}createTargetIndexes(e,t){return I.resolve()}getDocumentsMatchingTarget(e,t){return I.resolve(null)}getIndexType(e,t){return I.resolve(0)}getFieldIndexes(e,t){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,t){return I.resolve(Ge.min())}getMinOffsetFromCollectionGroup(e,t){return I.resolve(Ge.min())}updateCollectionGroup(e,t,r){return I.resolve()}updateIndexEntries(e,t){return I.resolve()}}class bd{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ue(Z.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ue(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Oa=41943040;class we{static withCacheSize(e){return new we(e,we.DEFAULT_COLLECTION_PERCENTILE,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */we.DEFAULT_COLLECTION_PERCENTILE=10,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,we.DEFAULT=new we(Oa,we.DEFAULT_COLLECTION_PERCENTILE,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),we.DISABLED=new we(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Et(0)}static Un(){return new Et(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="LruGarbageCollector",wd=1048576;function vo([n,e],[t,r]){const i=H(n,t);return i===0?H(e,r):i}class Ed{constructor(e){this.Hn=e,this.buffer=new ue(vo),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();vo(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Td{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){j(_o,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){an(t)?j(_o,"Ignoring IndexedDB error during garbage collection: ",t):await ys(t)}await this.er(3e5)})}}class Ad{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return I.resolve(_s.ae);const r=new Ed(t);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),I.resolve(yo)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yo):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,i,o,l,h,f,m;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,l=Date.now(),this.nthSequenceNumber(e,i))).next(T=>(r=T,h=Date.now(),this.removeTargets(e,r,t))).next(T=>(o=T,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(T=>(m=Date.now(),mt()<=z.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-_}ms
	Determined least recently used ${i} in `+(h-l)+`ms
	Removed ${o} targets in `+(f-h)+`ms
	Removed ${T} documents in `+(m-f)+`ms
Total Duration: ${m-_}ms`),I.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:T})))}}function Id(n,e){return new Ad(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.changes=new lt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?I.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Xt(r.mutation,i,Ne.empty(),ie.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ye()){const i=tt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let l=Mn();return o.forEach((h,f)=>{l=l.insert(h,f.overlayedDocument)}),l}))}getOverlayedDocuments(e,t){const r=tt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ye()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((l,h)=>{t.set(l,h)})})}computeViews(e,t,r,i){let o=Jn();const l=Qt(),h=function(){return Qt()}();return t.forEach((f,m)=>{const _=r.get(m.key);i.has(m.key)&&(_===void 0||_.mutation instanceof ct)?o=o.insert(m.key,m):_!==void 0?(l.set(m.key,_.mutation.getFieldMask()),Xt(_.mutation,m,_.mutation.getFieldMask(),ie.now())):l.set(m.key,Ne.empty())}),this.recalculateAndSaveOverlays(e,o).next(f=>(f.forEach((m,_)=>l.set(m,_)),t.forEach((m,_)=>{var T;return h.set(m,new Nd(_,(T=l.get(m))!==null&&T!==void 0?T:null))}),h))}recalculateAndSaveOverlays(e,t){const r=Qt();let i=new Ee((l,h)=>l-h),o=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(l=>{for(const h of l)h.keys().forEach(f=>{const m=t.get(f);if(m===null)return;let _=r.get(f)||Ne.empty();_=h.applyToLocalView(m,_),r.set(f,_);const T=(i.get(h.batchId)||ye()).add(f);i=i.insert(h.batchId,T)})}).next(()=>{const l=[],h=i.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),m=f.key,_=f.value,T=Ia();_.forEach(R=>{if(!o.has(R)){const P=Va(t.get(R),r.get(R));P!==null&&T.set(R,P),o=o.add(R)}}),l.push(this.documentOverlayCache.saveOverlays(e,m,T))}return I.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(l){return O.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):I.resolve(tt());let h=tn,f=o;return l.next(m=>I.forEach(m,(_,T)=>(h<T.largestBatchId&&(h=T.largestBatchId),o.get(_)?I.resolve():this.remoteDocumentCache.getEntry(e,_).next(R=>{f=f.insert(_,R)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,f,m,ye())).next(_=>({batchId:h,changes:Aa(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let i=Mn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let l=Mn();return this.indexManager.getCollectionParents(e,o).next(h=>I.forEach(h,f=>{const m=function(T,R){return new or(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,f.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,r,i).next(_=>{_.forEach((T,R)=>{l=l.insert(T,R)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(l=>{o.forEach((f,m)=>{const _=m.getKey();l.get(_)===null&&(l=l.insert(_,Ie.newInvalidDocument(_)))});let h=Mn();return l.forEach((f,m)=>{const _=o.get(f);_!==void 0&&Xt(_.mutation,m,Ne.empty(),ie.now()),Is(t,m)&&(h=h.insert(f,m))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return I.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:_t(i.createTime)}}(t)),I.resolve()}getNamedQuery(e,t){return I.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:vd(i.bundledQuery),readTime:_t(i.readTime)}}(t)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.overlays=new Ee(O.comparator),this.Rr=new Map}getOverlay(e,t){return I.resolve(this.overlays.get(t))}getOverlays(e,t){const r=tt();return I.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.Et(e,t,o)}),I.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),I.resolve()}getOverlaysForCollection(e,t,r){const i=tt(),o=t.length+1,l=new O(t.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const f=h.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===o&&f.largestBatchId>r&&i.set(f.getKey(),f)}return I.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new Ee((m,_)=>m-_);const l=this.overlays.getIterator();for(;l.hasNext();){const m=l.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let _=o.get(m.largestBatchId);_===null&&(_=tt(),o=o.insert(m.largestBatchId,_)),_.set(m.getKey(),m)}}const h=tt(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,_)=>h.set(m,_)),!(h.size()>=i)););return I.resolve(h)}Et(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new rd(t,r));let o=this.Rr.get(t);o===void 0&&(o=ye(),this.Rr.set(t,o)),this.Rr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.sessionToken=Se.EMPTY_BYTE_STRING}getSessionToken(e){return I.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,I.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.Vr=new ue(re.mr),this.gr=new ue(re.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new re(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new re(e,t))}br(e,t){e.forEach(r=>this.removeReference(r,t))}Sr(e){const t=new O(new Z([])),r=new re(t,e),i=new re(t,e+1),o=[];return this.gr.forEachInRange([r,i],l=>{this.wr(l),o.push(l.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new O(new Z([])),r=new re(t,e),i=new re(t,e+1);let o=ye();return this.gr.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(e){const t=new re(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class re{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return O.comparator(e.key,t.key)||H(e.Cr,t.Cr)}static pr(e,t){return H(e.Cr,t.Cr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new ue(re.mr)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new nd(o,t,r,i);this.mutationQueue.push(l);for(const h of i)this.Mr=this.Mr.add(new re(h.key,o)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return I.resolve(l)}lookupMutationBatch(e,t){return I.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Nr(r),o=i<0?0:i;return I.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?vs:this.Fr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new re(t,0),i=new re(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,i],l=>{const h=this.Or(l.Cr);o.push(h)}),I.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ue(H);return t.forEach(i=>{const o=new re(i,0),l=new re(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,l],h=>{r=r.add(h.Cr)})}),I.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const l=new re(new O(o),0);let h=new ue(H);return this.Mr.forEachWhile(f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===i&&(h=h.add(f.Cr)),!0)},l),I.resolve(this.Br(h))}Br(e){const t=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ee(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return I.forEach(t.mutations,i=>{const o=new re(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new re(t,0),i=this.Mr.firstAfterOrEqual(r);return I.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.kr=e,this.docs=function(){return new Ee(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,l=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return I.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let r=Jn();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ie.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=Jn();const l=t.path,h=new O(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:m,value:{document:_}}=f.getNext();if(!l.isPrefixOf(m.path))break;m.path.length>l.length+1||mh(fh(_),r)<=0||(i.has(_.key)||Is(t,_))&&(o=o.insert(_.key,_.mutableCopy()))}return I.resolve(o)}getAllFromCollectionGroup(e,t,r,i){F()}qr(e,t){return I.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Dd(this)}getSize(e){return I.resolve(this.size)}}class Dd extends Rd{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),I.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){this.persistence=e,this.Qr=new lt(t=>Ts(t),As),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Cs,this.targetCount=0,this.Ur=Et.Kn()}forEachTarget(e,t){return this.Qr.forEach((r,i)=>t(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),I.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new Et(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,I.resolve()}updateTargetData(e,t){return this.zn(t),I.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Qr.forEach((l,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.Qr.delete(l),o.push(this.removeMatchingKeysForTargetId(e,h.targetId)),i++)}),I.waitFor(o).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return I.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),I.resolve()}removeMatchingKeys(e,t,r){this.Kr.br(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(l=>{o.push(i.markPotentiallyOrphaned(e,l))}),I.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),I.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Kr.vr(t);return I.resolve(r)}containsKey(e,t){return I.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new _s(0),this.zr=!1,this.zr=!0,this.jr=new Vd,this.referenceDelegate=e(this),this.Hr=new Md(this),this.indexManager=new xd,this.remoteDocumentCache=function(i){return new jd(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new _d(t),this.Yr=new Sd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Pd,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new kd(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const i=new Od(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(e,t){return I.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class Od extends gh{constructor(e){super(),this.currentSequenceNumber=e}}class Ss{constructor(e){this.persistence=e,this.ti=new Cs,this.ni=null}static ri(e){return new Ss(e)}get ii(){if(this.ni)return this.ni;throw F()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),I.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),I.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.ii,r=>{const i=O.fromPath(r);return this.si(e,i).next(o=>{o||t.removeEntry(i,X.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return I.or([()=>I.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class tr{constructor(e,t){this.persistence=e,this.oi=new lt(r=>vh(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Id(this,t)}static ri(e,t){return new tr(e,t)}Zr(){}Xr(e){return I.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return I.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(o=>o?I.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(e,l=>this.ar(e,l,t).next(h=>{h||(r++,o.removeEntry(l,X.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),I.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),I.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),I.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),I.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fn(e.data.value)),t}ar(e,t,r){return I.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return I.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=i}static Yi(e,t){let r=ye(),i=ye();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ps(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Lc()?8:yh(Mc())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.rs(e,t).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ss(e,t,i,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new Ld;return this._s(e,t,l).next(h=>{if(o.result=h,this.Xi)return this.us(e,t,l,h.size)})}).next(()=>o.result)}us(e,t,r,i){return r.documentReadCount<this.es?(mt()<=z.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Ht(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),I.resolve()):(mt()<=z.DEBUG&&j("QueryEngine","Query:",Ht(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(mt()<=z.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Ht(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rt(t))):I.resolve())}rs(e,t){if(uo(t))return I.resolve(null);let r=rt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=is(t,null,"F"),r=rt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const l=ye(...o);return this.ns.getDocuments(e,l).next(h=>this.indexManager.getMinOffset(e,r).next(f=>{const m=this.cs(t,h);return this.ls(t,m,l,f.readTime)?this.rs(e,is(t,null,"F")):this.hs(e,m,t,f)}))})))}ss(e,t,r,i){return uo(t)||i.isEqual(X.min())?I.resolve(null):this.ns.getDocuments(e,r).next(o=>{const l=this.cs(t,o);return this.ls(t,l,r,i)?I.resolve(null):(mt()<=z.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ht(t)),this.hs(e,l,t,dh(i,tn)).next(h=>h))})}cs(e,t){let r=new ue(Uh(e));return t.forEach((i,o)=>{Is(e,o)&&(r=r.add(o))}),r}ls(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(e,t,r){return mt()<=z.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Ht(t)),this.ns.getDocumentsMatchingQuery(e,t,Ge.min(),r)}hs(e,t,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="LocalStore";class Ud{constructor(e,t,r,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new Ee(H),this.Is=new lt(o=>Ts(o),As),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cd(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function $d(n,e,t,r){return new Ud(n,e,t,r)}async function Fa(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],h=[];let f=ye();for(const m of i){l.push(m.batchId);for(const _ of m.mutations)f=f.add(_.key)}for(const m of o){h.push(m.batchId);for(const _ of m.mutations)f=f.add(_.key)}return t.localDocuments.getDocuments(r,f).next(m=>({Rs:m,removedBatchIds:l,addedBatchIds:h}))})})}function zd(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(h,f,m,_){const T=m.batch,R=T.keys();let P=I.resolve();return R.forEach(k=>{P=P.next(()=>_.getEntry(f,k)).next(S=>{const V=m.docVersions.get(k);ee(V!==null),S.version.compareTo(V)<0&&(T.applyToRemoteDocument(S,m),S.isValidDocument()&&(S.setReadTime(m.commitVersion),_.addEntry(S)))})}),P.next(()=>h.mutationQueue.removeMutationBatch(f,T))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=ye();for(let m=0;m<h.mutationResults.length;++m)h.mutationResults[m].transformResults.length>0&&(f=f.add(h.batch.mutations[m].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function qd(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Hd(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=vs),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class xo{constructor(){this.activeTargetIds=Kh()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gd{constructor(){this.ho=new xo,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new xo,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="ConnectivityMonitor";class wo{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){j(bo,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){j(bo,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On=null;function cs(){return On===null?On=function(){return 268435456+Math.round(2147483648*Math.random())}():On++,"0x"+On.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="RestConnection",Wd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Qd{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===Wn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(e,t,r,i,o){const l=cs(),h=this.So(e,t.toUriEncodedString());j(Hr,`Sending RPC '${e}' ${l}:`,h,r);const f={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(f,i,o),this.vo(e,h,f,r).then(m=>(j(Hr,`Received RPC '${e}' ${l}: `,m),m),m=>{throw ir(Hr,`RPC '${e}' ${l} failed with error: `,m,"url: ",h,"request:",r),m})}Co(e,t,r,i,o,l){return this.bo(e,t,r,i,o)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+At}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}So(e,t){const r=Wd[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="WebChannelConnection";class Yd extends Qd{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const o=cs();return new Promise((l,h)=>{const f=new ea;f.setWithCredentials(!0),f.listenOnce(ta.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Ln.NO_ERROR:const _=f.getResponseJson();j(pe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(_)),l(_);break;case Ln.TIMEOUT:j(pe,`RPC '${e}' ${o} timed out`),h(new D(N.DEADLINE_EXCEEDED,"Request time out"));break;case Ln.HTTP_ERROR:const T=f.getStatus();if(j(pe,`RPC '${e}' ${o} failed with status:`,T,"response text:",f.getResponseText()),T>0){let R=f.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const k=function(V){const M=V.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(M)>=0?M:N.UNKNOWN}(P.status);h(new D(k,P.message))}else h(new D(N.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new D(N.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{j(pe,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(i);j(pe,`RPC '${e}' ${o} sending request:`,i),f.send(t,"POST",m,r,15)})}Wo(e,t,r){const i=cs(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=sa(),h=ra(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Do(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const _=o.join("");j(pe,`Creating RPC '${e}' stream ${i}: ${_}`,f);const T=l.createWebChannel(_,f);let R=!1,P=!1;const k=new Xd({Fo:V=>{P?j(pe,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(R||(j(pe,`Opening RPC '${e}' stream ${i} transport.`),T.open(),R=!0),j(pe,`RPC '${e}' stream ${i} sending:`,V),T.send(V))},Mo:()=>T.close()}),S=(V,M,L)=>{V.listen(M,B=>{try{L(B)}catch(W){setTimeout(()=>{throw W},0)}})};return S(T,Gt.EventType.OPEN,()=>{P||(j(pe,`RPC '${e}' stream ${i} transport opened.`),k.Qo())}),S(T,Gt.EventType.CLOSE,()=>{P||(P=!0,j(pe,`RPC '${e}' stream ${i} transport closed`),k.Ko())}),S(T,Gt.EventType.ERROR,V=>{P||(P=!0,ir(pe,`RPC '${e}' stream ${i} transport errored:`,V),k.Ko(new D(N.UNAVAILABLE,"The operation could not be completed")))}),S(T,Gt.EventType.MESSAGE,V=>{var M;if(!P){const L=V.data[0];ee(!!L);const B=L,W=(B==null?void 0:B.error)||((M=B[0])===null||M===void 0?void 0:M.error);if(W){j(pe,`RPC '${e}' stream ${i} received error:`,W);const _e=W.status;let ne=function(y){const v=te[y];if(v!==void 0)return id(v)}(_e),b=W.message;ne===void 0&&(ne=N.INTERNAL,b="Unknown error status: "+_e+" with message "+W.message),P=!0,k.Ko(new D(ne,b)),T.close()}else j(pe,`RPC '${e}' stream ${i} received:`,L),k.Uo(L)}}),S(h,na.STAT_EVENT,V=>{V.stat===es.PROXY?j(pe,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===es.NOPROXY&&j(pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function Gr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n){return new od(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,r=1e3,i=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="PersistentStream";class Jd{constructor(e,t,r,i,o,l,h,f){this.Ti=e,this.n_=r,this.r_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Ba(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(it(t.toString()),it("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===t&&this.V_(r,i)},r=>{e(()=>{const i=new D(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return j(Eo,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(j(Eo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zd extends Jd{constructor(e,t,r,i,o,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,l),this.serializer=o}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ee(!!e.streamToken),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=md(e.writeResults,e.commitTime),r=_t(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=hd(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>fd(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{}class tf extends ef{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new D(N.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.bo(e,as(t,r),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(N.UNKNOWN,o.toString())})}Co(e,t,r,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Co(e,as(t,r),i,l,h,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new D(N.UNKNOWN,l.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class nf{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(it(t),this.N_=!1):j("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="RemoteStore";class rf{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(l=>{r.enqueueAndForget(async()=>{hn(this)&&(j(cn,"Restarting streams for network reachability change."),await async function(f){const m=K(f);m.W_.add(4),await un(m),m.j_.set("Unknown"),m.W_.delete(4),await ur(m)}(this))})}),this.j_=new nf(r,i)}}async function ur(n){if(hn(n))for(const e of n.G_)await e(!0)}async function un(n){for(const e of n.G_)await e(!1)}function hn(n){return K(n).W_.size===0}async function Ua(n,e,t){if(!an(e))throw e;n.W_.add(1),await un(n),n.j_.set("Offline"),t||(t=()=>qd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j(cn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await ur(n)})}function $a(n,e){return e().catch(t=>Ua(n,t,e))}async function hr(n){const e=K(n),t=We(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:vs;for(;sf(e);)try{const i=await Hd(e.localStore,r);if(i===null){e.K_.length===0&&t.P_();break}r=i.batchId,of(e,i)}catch(i){await Ua(e,i)}za(e)&&qa(e)}function sf(n){return hn(n)&&n.K_.length<10}function of(n,e){n.K_.push(e);const t=We(n);t.c_()&&t.b_&&t.S_(e.mutations)}function za(n){return hn(n)&&!We(n).u_()&&n.K_.length>0}function qa(n){We(n).start()}async function af(n){We(n).C_()}async function lf(n){const e=We(n);for(const t of n.K_)e.S_(t.mutations)}async function cf(n,e,t){const r=n.K_.shift(),i=Ns.from(r,e,t);await $a(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await hr(n)}async function uf(n,e){e&&We(n).b_&&await async function(r,i){if(function(l){return sd(l)&&l!==N.ABORTED}(i.code)){const o=r.K_.shift();We(r).h_(),await $a(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await hr(r)}}(n,e),za(n)&&qa(n)}async function To(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),j(cn,"RemoteStore received new credentials");const r=hn(t);t.W_.add(3),await un(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await ur(t)}async function hf(n,e){const t=K(n);e?(t.W_.delete(2),await ur(t)):e||(t.W_.add(2),await un(t),t.j_.set("Unknown"))}function We(n){return n.Y_||(n.Y_=function(t,r,i){const o=K(t);return o.M_(),new Zd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:af.bind(null,n),Lo:uf.bind(null,n),D_:lf.bind(null,n),v_:cf.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await hr(n)):(await n.Y_.stop(),n.K_.length>0&&(j(cn,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const l=Date.now()+r,h=new Vs(e,t,l,i,o);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ha(n,e){if(it("AsyncQueue",`${e}: ${n}`),an(n))return new D(N.UNAVAILABLE,`${e}: ${n}`);throw n}class df{constructor(){this.queries=Ao(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const i=K(t),o=i.queries;i.queries=Ao(),o.forEach((l,h)=>{for(const f of h.ta)f.onError(r)})})(this,new D(N.ABORTED,"Firestore shutting down"))}}function Ao(){return new lt(n=>Ea(n),wa)}function ff(n){n.ia.forEach(e=>{e.next()})}var Io,Ro;(Ro=Io||(Io={}))._a="default",Ro.Cache="cache";const mf="SyncEngine";class pf{constructor(e,t,r,i,o,l){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.La={},this.ka=new lt(h=>Ea(h),wa),this.qa=new Map,this.Qa=new Set,this.$a=new Ee(O.comparator),this.Ka=new Map,this.Ua=new Cs,this.Wa={},this.Ga=new Map,this.za=Et.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function gf(n,e,t){const r=xf(n);try{const i=await function(l,h){const f=K(l),m=ie.now(),_=h.reduce((P,k)=>P.add(k.key),ye());let T,R;return f.persistence.runTransaction("Locally write mutations","readwrite",P=>{let k=Jn(),S=ye();return f.ds.getEntries(P,_).next(V=>{k=V,k.forEach((M,L)=>{L.isValidDocument()||(S=S.add(M))})}).next(()=>f.localDocuments.getOverlayedDocuments(P,k)).next(V=>{T=V;const M=[];for(const L of h){const B=ed(L,T.get(L.key).overlayedDocument);B!=null&&M.push(new ct(L.key,B,pa(B.value.mapValue),De.exists(!0)))}return f.mutationQueue.addMutationBatch(P,m,M,h)}).next(V=>{R=V;const M=V.applyToLocalDocumentSet(T,S);return f.documentOverlayCache.saveOverlays(P,V.batchId,M)})}).then(()=>({batchId:R.batchId,changes:Aa(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(l,h,f){let m=l.Wa[l.currentUser.toKey()];m||(m=new Ee(H)),m=m.insert(h,f),l.Wa[l.currentUser.toKey()]=m}(r,i.batchId,t),await dr(r,i.changes),await hr(r.remoteStore)}catch(i){const o=Ha(i,"Failed to persist write");t.reject(o)}}function No(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ka.forEach((o,l)=>{const h=l.view.sa(e);h.snapshot&&i.push(h.snapshot)}),function(l,h){const f=K(l);f.onlineState=h;let m=!1;f.queries.forEach((_,T)=>{for(const R of T.ta)R.sa(h)&&(m=!0)}),m&&ff(f)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yf(n,e){const t=K(n),r=e.batch.batchId;try{const i=await zd(t.localStore,e);Ka(t,r,null),Ga(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await dr(t,i)}catch(i){await ys(i)}}async function _f(n,e,t){const r=K(n);try{const i=await function(l,h){const f=K(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let _;return f.mutationQueue.lookupMutationBatch(m,h).next(T=>(ee(T!==null),_=T.keys(),f.mutationQueue.removeMutationBatch(m,T))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,_,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,_)).next(()=>f.localDocuments.getDocuments(m,_))})}(r.localStore,e);Ka(r,e,t),Ga(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await dr(r,i)}catch(i){await ys(i)}}function Ga(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function Ka(n,e,t){const r=K(n);let i=r.Wa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}async function dr(n,e,t){const r=K(n),i=[],o=[],l=[];r.ka.isEmpty()||(r.ka.forEach((h,f)=>{l.push(r.Ha(f,e,t).then(m=>{var _;if((m||t)&&r.isPrimaryClient){const T=m?!m.fromCache:(_=void 0)===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(f.targetId,T?"current":"not-current")}if(m){i.push(m);const T=Ps.Yi(f.targetId,m);o.push(T)}}))}),await Promise.all(l),r.La.p_(i),await async function(f,m){const _=K(f);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>I.forEach(m,R=>I.forEach(R.Hi,P=>_.persistence.referenceDelegate.addReference(T,R.targetId,P)).next(()=>I.forEach(R.Ji,P=>_.persistence.referenceDelegate.removeReference(T,R.targetId,P)))))}catch(T){if(!an(T))throw T;j(Bd,"Failed to update sequence numbers: "+T)}for(const T of m){const R=T.targetId;if(!T.fromCache){const P=_.Ts.get(R),k=P.snapshotVersion,S=P.withLastLimboFreeSnapshotVersion(k);_.Ts=_.Ts.insert(R,S)}}}(r.localStore,o))}async function vf(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){j(mf,"User change. New user:",e.toKey());const r=await Fa(t.localStore,e);t.currentUser=e,function(o,l){o.Ga.forEach(h=>{h.forEach(f=>{f.reject(new D(N.CANCELLED,l))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await dr(t,r.Rs)}}function xf(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yf.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_f.bind(null,e),e}class nr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cr(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return $d(this.persistence,new Fd,e.initialUser,this.serializer)}Xa(e){return new La(Ss.ri,this.serializer)}Za(e){return new Gd}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nr.provider={build:()=>new nr};class bf extends nr{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ee(this.persistence.referenceDelegate instanceof tr);const r=this.persistence.referenceDelegate.garbageCollector;return new Td(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?we.withCacheSize(this.cacheSizeBytes):we.DEFAULT;return new La(r=>tr.ri(r,t),this.serializer)}}class us{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>No(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vf.bind(null,this.syncEngine),await hf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new df}()}createDatastore(e){const t=cr(e.databaseInfo.databaseId),r=function(o){return new Yd(o)}(e.databaseInfo);return function(o,l,h,f){return new tf(o,l,h,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,l,h){return new rf(r,i,o,l,h)}(this.localStore,this.datastore,e.asyncQueue,t=>No(this.syncEngine,t,0),function(){return wo.D()?new wo:new Kd}())}createSyncEngine(e,t){return function(i,o,l,h,f,m,_){const T=new pf(i,o,l,h,f,m);return _&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=K(i);j(cn,"RemoteStore shutting down."),o.W_.add(5),await un(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}us.provider={build:()=>new us};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="FirestoreClient";class wf{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ge.UNAUTHENTICATED,this.clientId=oa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{j(Qe,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(j(Qe,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ha(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kr(n,e){n.asyncQueue.verifyOperationInProgress(),j(Qe,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Fa(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Co(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ef(n);j(Qe,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>To(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>To(e.remoteStore,i)),n._onlineComponents=e}async function Ef(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(Qe,"Using user provided OfflineComponentProvider");try{await Kr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===N.FAILED_PRECONDITION||i.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;ir("Error using user provided cache. Falling back to memory cache: "+t),await Kr(n,new nr)}}else j(Qe,"Using default OfflineComponentProvider"),await Kr(n,new bf(void 0));return n._offlineComponents}async function Tf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(Qe,"Using user provided OnlineComponentProvider"),await Co(n,n._uninitializedComponentsProvider._online)):(j(Qe,"Using default OnlineComponentProvider"),await Co(n,new us))),n._onlineComponents}function Af(n){return Tf(n).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n,e,t){if(!t)throw new D(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function If(n,e,t,r){if(e===!0&&r===!0)throw new D(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Po(n){if(!O.isDocumentKey(n))throw new D(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Vo(n){if(O.isDocumentKey(n))throw new D(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ks(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F()}function Xa(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ks(n);throw new D(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="firestore.googleapis.com",ko=!0;class jo{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ya,this.ssl=ko}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ko;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Oa;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wd)throw new D(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}If("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wa((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new D(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new D(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new D(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fr{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jo(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sh;switch(r.type){case"firstParty":return new lh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=So.get(t);r&&(j("ComponentProvider","Removing Datastore"),So.delete(t),r.terminate())}(this),Promise.resolve()}}function Rf(n,e,t,r={}){var i;const o=(n=Xa(n,fr))._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),h=`${e}:${t}`;o.host!==Ya&&o.host!==h&&ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},o),{host:h,ssl:!1,emulatorOptions:r});if(!zn(f,l)&&(n._setSettings(f),r.mockUserToken)){let m,_;if(typeof r.mockUserToken=="string")m=r.mockUserToken,_=ge.MOCK_USER;else{m=Dc(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new D(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new ge(T)}n._authCredentials=new ih(new ia(m,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new js(this.firestore,e,this._query)}}class Me{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new He(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}}class He extends js{constructor(e,t,r){super(e,t,Lh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new O(e))}withConverter(e){return new He(this.firestore,e,this._path)}}function Nf(n,e,...t){if(n=Jt(n),Qa("collection","path",e),n instanceof fr){const r=Z.fromString(e,...t);return Vo(r),new He(n,null,r)}{if(!(n instanceof Me||n instanceof He))throw new D(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return Vo(r),new He(n.firestore,null,r)}}function Cf(n,e,...t){if(n=Jt(n),arguments.length===1&&(e=oa.newId()),Qa("doc","path",e),n instanceof fr){const r=Z.fromString(e,...t);return Po(r),new Me(n,null,new O(r))}{if(!(n instanceof Me||n instanceof He))throw new D(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return Po(r),new Me(n.firestore,n instanceof He?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="AsyncQueue";class Mo{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Ba(this,"async_queue_retry"),this.bu=()=>{const r=Gr();r&&j(Do,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const t=Gr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Gr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new nt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!an(e))throw e;j(Do,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(l){let h=l.message||"";return l.stack&&(h=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),h}(r);throw it("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.Su=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=Vs.createAndSchedule(this,e,t,r,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&F()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Ja extends fr{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Mo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mo(e),this._firestoreClient=void 0,await e}}}function Sf(n,e){const t=typeof n=="object"?n:Hu(),r=typeof n=="string"?n:Wn,i=Bu(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=kc("firestore");o&&Rf(i,...o)}return i}function Pf(n){if(n._terminated)throw new D(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Vf(n),n._firestoreClient}function Vf(n){var e,t,r;const i=n._freezeSettings(),o=function(h,f,m,_){return new Eh(h,f,m,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Wa(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new wf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this._byteString=e}static fromBase64String(e){try{return new on(Se.fromBase64String(e))}catch(t){throw new D(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new on(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=/^__.*__$/;class jf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ct(e,this.data,this.fieldMask,t,this.fieldTransforms):new ln(e,this.data,t,this.fieldTransforms)}}function rl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Ds{constructor(e,t,r,i,o,l){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Ds(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return rr(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(rl(this.Lu)&&kf.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Df{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||cr(e)}ju(e,t,r,i=!1){return new Ds({Lu:e,methodName:t,zu:r,path:ce.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mf(n){const e=n._freezeSettings(),t=cr(n._databaseId);return new Df(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Of(n,e,t,r,i,o={}){const l=n.ju(o.merge||o.mergeFields?2:0,e,t,i);al("Data must be an object, but it was:",l,r);const h=il(r,l);let f,m;if(o.merge)f=new Ne(l.fieldMask),m=l.fieldTransforms;else if(o.mergeFields){const _=[];for(const T of o.mergeFields){const R=Lf(e,T,t);if(!l.contains(R))throw new D(N.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Uf(_,R)||_.push(R)}f=new Ne(_),m=l.fieldTransforms.filter(T=>f.covers(T.field))}else f=null,m=l.fieldTransforms;return new jf(new Re(h),f,m)}function sl(n,e){if(ol(n=Jt(n)))return al("Unsupported field value:",e,n),il(n,e);if(n instanceof el)return function(r,i){if(!rl(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const o=[];let l=0;for(const h of r){let f=sl(h,i.Uu(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Jt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ie.fromDate(r);return{timestampValue:os(i.serializer,o)}}if(r instanceof ie){const o=new ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:os(i.serializer,o)}}if(r instanceof tl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof on)return{bytesValue:ad(i.serializer,r._byteString)};if(r instanceof Me){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Wu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Da(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof nl)return function(l,h){return{mapValue:{fields:{[fa]:{stringValue:ma},[ts]:{arrayValue:{values:l.toArray().map(m=>{if(typeof m!="number")throw h.Wu("VectorValues must only contain numeric values.");return Rs(h.serializer,m)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${ks(r)}`)}(n,e)}function il(n,e){const t={};return la(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):It(n,(r,i)=>{const o=sl(i,e.qu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function ol(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof tl||n instanceof on||n instanceof Me||n instanceof el||n instanceof nl)}function al(n,e,t){if(!ol(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=ks(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Lf(n,e,t){if((e=Jt(e))instanceof Za)return e._internalPath;if(typeof e=="string")return Bf(n,e);throw rr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ff=new RegExp("[~\\*/\\[\\]]");function Bf(n,e,t){if(e.search(Ff)>=0)throw rr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Za(...e.split("."))._internalPath}catch{throw rr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function rr(n,e,t,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${r}`),l&&(f+=` in document ${i}`),f+=")"),new D(N.INVALID_ARGUMENT,h+n+f)}function Uf(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n,e,t){let r;return r=n?n.toFirestore(e):e,r}function zf(n,e){const t=Xa(n.firestore,Ja),r=Cf(n),i=$f(n.converter,e);return qf(t,[Of(Mf(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,De.exists(!1))]).then(()=>r)}function qf(n,e){return function(r,i){const o=new nt;return r.asyncQueue.enqueueAndForget(async()=>gf(await Af(r),i,o)),o.promise}(Pf(n),e)}(function(e,t=!0){(function(i){At=i})(qu),Hn(new Zt("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),h=new Ja(new oh(r.getProvider("auth-internal")),new ch(l,r.getProvider("app-check-internal")),function(m,_){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new D(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qn(m.options.projectId,_)}(l,i),l);return o=Object.assign({useFetchStreams:t},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),yt(Xi,Yi,e),yt(Xi,Yi,"esm2017")})();const Hf={apiKey:"AIzaSyBTizH8OVW-gQRZinI010zOl2qxu7LHgqs",authDomain:"crotonite-form.firebaseapp.com",projectId:"crotonite-form",storageBucket:"crotonite-form.firebasestorage.app",messagingSenderId:"914679188035",appId:"1:914679188035:web:d026e859a8088c071e62f6",measurementId:"G-X83N82DD2J"},Gf=Yo(Hf),Kf=Sf(Gf);function Wf(){const[n,e]=U.useState({name:"",email:"",organization:"",message:"",contributionType:"financial"}),[t,r]=U.useState({loading:!1,success:!1,error:null}),i=async h=>{h.preventDefault();try{r({loading:!0,success:!1,error:null});const f=await zf(Nf(Kf,"contact_submissions"),{name:n.name,email:n.email,organization:n.organization||null,message:n.message,contribution_type:n.contributionType,submitted_at:new Date().toISOString()});console.log("Form submitted successfully with ID:",f.id),r({loading:!1,success:!0,error:null}),e({name:"",email:"",organization:"",message:"",contributionType:"financial"}),setTimeout(()=>{r(m=>({...m,success:!1}))},5e3)}catch(f){console.error("Error submitting form:",f),r({loading:!1,success:!1,error:f.message||"Failed to submit form. Please try again."}),setTimeout(()=>{r(m=>({...m,error:null}))},5e3)}},o=h=>{e({...n,[h.target.name]:h.target.value})},l=h=>{e({...n,contributionType:h})};return u.jsxs("div",{className:"relative hero-gradient overflow-hidden pt-20 min-h-screen",children:[u.jsx("div",{className:"absolute inset-0 z-0",children:u.jsxs("div",{className:"relative h-full w-full",children:[u.jsx("div",{className:"absolute h-96 w-96 rounded-full bg-blue-500/10 animate-pulse",style:{top:"10%",left:"50%",transform:"translateX(-50%)"}}),u.jsx("div",{className:"absolute h-64 w-64 rounded-full bg-blue-600/5 animate-pulse delay-300",style:{top:"30%",left:"30%"}}),u.jsx("div",{className:"absolute h-80 w-80 rounded-full bg-indigo-500/5 animate-pulse delay-700",style:{top:"20%",left:"70%"}})]})}),u.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[u.jsx("div",{className:"absolute h-20 w-20 rounded-lg bg-blue-500/10 floating-element",style:{top:"15%",left:"15%",transform:"rotate(15deg)",animationDelay:"0.5s"}}),u.jsx("div",{className:"absolute h-16 w-16 rounded-lg bg-blue-400/10 floating-element",style:{top:"60%",left:"80%",transform:"rotate(-10deg)",animationDelay:"1.5s"}}),u.jsx("div",{className:"absolute h-24 w-24 rounded-lg bg-indigo-500/10 floating-element",style:{top:"70%",left:"25%",transform:"rotate(30deg)",animationDelay:"1s"}})]}),u.jsxs("div",{className:"relative max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center mb-16",children:[u.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-white tracking-tight drop-shadow-lg mb-4",children:"Get in Touch"}),u.jsx("p",{className:"text-xl text-gray-300 max-w-2xl mx-auto",children:"Have questions about our project or want to contribute? We'd love to hear from you. You can also mail us below"})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[u.jsx("div",{className:"bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 shadow-xl",children:u.jsxs("form",{onSubmit:i,className:"space-y-6",name:"contact",method:"POST","data-netlify":"true","netlify-honeypot":"bot-field",children:[u.jsx("input",{type:"hidden",name:"form-name",value:"contact"}),u.jsx("div",{hidden:!0,children:u.jsx("input",{name:"bot-field"})}),u.jsx("div",{children:u.jsxs("div",{className:"relative group",children:[u.jsx("input",{id:"name",name:"name",type:"text",required:!0,value:n.name,onChange:o,className:"w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200",placeholder:"Your Name"}),u.jsx($o,{className:"absolute right-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors"})]})}),u.jsx("div",{children:u.jsxs("div",{className:"relative group",children:[u.jsx("input",{id:"email",name:"email",type:"email",required:!0,value:n.email,onChange:o,className:"w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200",placeholder:"Email Address"}),u.jsx(sr,{className:"absolute right-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors"})]})}),u.jsx("div",{children:u.jsxs("div",{className:"relative group",children:[u.jsx("input",{id:"organization",name:"organization",type:"text",value:n.organization,onChange:o,className:"w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200",placeholder:"Organization (Optional)"}),u.jsx(Lo,{className:"absolute right-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors"})]})}),u.jsx("div",{children:u.jsxs("div",{className:"relative group",children:[u.jsx("textarea",{id:"message",name:"message",required:!0,value:n.message,onChange:o,rows:4,className:"w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200",placeholder:"Your Message"}),u.jsx(ac,{className:"absolute right-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors"})]})}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-white mb-2",children:"Contribution Type"}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("button",{type:"button",onClick:()=>l("financial"),className:`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${n.contributionType==="financial"?"bg-blue-600/50 border-2 border-blue-400/70 shadow-lg shadow-blue-500/20 scale-105":"bg-black/20 border border-white/10 hover:bg-black/30 hover:scale-105"}`,children:[u.jsx(nc,{className:`h-6 w-6 mb-1 transition-colors ${n.contributionType==="financial"?"text-white":"text-gray-400"}`}),u.jsx("span",{className:`text-sm transition-colors ${n.contributionType==="financial"?"text-white font-medium":"text-gray-400"}`,children:"Financial"})]}),u.jsxs("button",{type:"button",onClick:()=>l("research"),className:`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${n.contributionType==="research"?"bg-blue-600/50 border-2 border-blue-400/70 shadow-lg shadow-blue-500/20 scale-105":"bg-black/20 border border-white/10 hover:bg-black/30 hover:scale-105"}`,children:[u.jsx(zo,{className:`h-6 w-6 mb-1 transition-colors ${n.contributionType==="research"?"text-white":"text-gray-400"}`}),u.jsx("span",{className:`text-sm transition-colors ${n.contributionType==="research"?"text-white font-medium":"text-gray-400"}`,children:"Research"})]}),u.jsxs("button",{type:"button",onClick:()=>l("technical"),className:`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${n.contributionType==="technical"?"bg-blue-600/50 border-2 border-blue-400/70 shadow-lg shadow-blue-500/20 scale-105":"bg-black/20 border border-white/10 hover:bg-black/30 hover:scale-105"}`,children:[u.jsx(sc,{className:`h-6 w-6 mb-1 transition-colors ${n.contributionType==="technical"?"text-white":"text-gray-400"}`}),u.jsx("span",{className:`text-sm transition-colors ${n.contributionType==="technical"?"text-white font-medium":"text-gray-400"}`,children:"Technical"})]}),u.jsxs("button",{type:"button",onClick:()=>l("product"),className:`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${n.contributionType==="product"?"bg-blue-600/50 border-2 border-blue-400/70 shadow-lg shadow-blue-500/20 scale-105":"bg-black/20 border border-white/10 hover:bg-black/30 hover:scale-105"}`,children:[u.jsx(lc,{className:`h-6 w-6 mb-1 transition-colors ${n.contributionType==="product"?"text-white":"text-gray-400"}`}),u.jsx("span",{className:`text-sm transition-colors ${n.contributionType==="product"?"text-white font-medium":"text-gray-400"}`,children:"For Product"})]})]})]}),u.jsxs("button",{type:"submit",disabled:t.loading,className:`w-full ${t.loading?"bg-blue-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"} text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-500/20`,children:[u.jsx("span",{children:t.loading?"Sending...":"Send Message"}),u.jsx(uc,{className:"h-5 w-5"})]}),u.jsxs("div",{className:"space-y-4",children:[t.success&&u.jsxs("div",{className:"p-3 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center text-green-400 animate-fadeIn",children:[u.jsx(rc,{className:"h-5 w-5 mr-2"}),u.jsx("span",{children:"Message sent successfully! We'll get back to you soon."})]}),t.error&&u.jsxs("div",{className:"p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center text-red-400 animate-fadeIn",children:[u.jsx(ec,{className:"h-5 w-5 mr-2"}),u.jsx("span",{children:t.error})]})]})]})}),u.jsxs("div",{className:"space-y-8",children:[u.jsxs("div",{className:"bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 shadow-xl",children:[u.jsxs("h2",{className:"text-2xl font-bold text-white mb-4 flex items-center",children:[u.jsx(Wr,{className:"h-6 w-6 text-blue-400 mr-2"}),"Ways to Contribute"]}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg",children:[u.jsx("h3",{className:"text-lg font-semibold text-blue-400",children:"Financial Support"}),u.jsx("p",{className:"text-gray-300 mt-2",children:"Support our research and development through direct financial contributions. Choose from various tiers of support with different benefits."})]}),u.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg",children:[u.jsx("h3",{className:"text-lg font-semibold text-blue-400",children:"Research Collaboration"}),u.jsx("p",{className:"text-gray-300 mt-2",children:"Are you a researcher or institution interested in collaborating? We're always open to partnerships that advance particle physics."})]}),u.jsxs("div",{className:"p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg",children:[u.jsx("h3",{className:"text-lg font-semibold text-blue-400",children:"Technical Expertise"}),u.jsx("p",{className:"text-gray-300 mt-2",children:"Share your technical expertise in accelerator physics, engineering, or related fields to help advance our mission."})]})]})]}),u.jsxs("div",{className:"bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 shadow-xl",children:[u.jsxs("h2",{className:"text-2xl font-bold text-white mb-4 flex items-center",children:[u.jsx(Wr,{className:"h-6 w-6 text-blue-400 mr-2"}),"Fund Us Here"]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsx("a",{href:"https://www.indiegogo.com",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center px-6 py-4 bg-[#EB1478]/10 hover:bg-[#EB1478]/20 border border-[#EB1478]/30 hover:border-[#EB1478]/50 rounded-xl transition-all duration-300 group hover:scale-105",children:u.jsx("span",{className:"text-[#EB1478] font-bold text-lg group-hover:scale-105 transition-transform",children:"Indiegogo"})}),u.jsx("a",{href:"https://www.kickstarter.com",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center px-6 py-4 bg-[#05CE78]/10 hover:bg-[#05CE78]/20 border border-[#05CE78]/30 hover:border-[#05CE78]/50 rounded-xl transition-all duration-300 group hover:scale-105",children:u.jsx("span",{className:"text-[#05CE78] font-bold text-lg group-hover:scale-105 transition-transform",children:"Kickstarter"})})]})]}),u.jsxs("div",{className:"bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 shadow-xl",children:[u.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Contact Information"}),u.jsxs("div",{className:"space-y-4 text-gray-300",children:[u.jsxs("p",{children:[u.jsx("strong",{className:"text-blue-400",children:"Email:"}),u.jsx("br",{}),"akantarip30@gmail.com"]}),u.jsxs("p",{children:[u.jsx("strong",{className:"text-blue-400",children:"Location:"}),u.jsx("br",{}),"RRCAT",u.jsx("br",{}),"Indore, Madhya Pradesh",u.jsx("br",{}),"India, Central India"]})]})]})]})]})]}),u.jsx("div",{className:"wave-divider",children:u.jsx("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:u.jsx("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",fill:"#0a0a0f",fillOpacity:"0.8"})})})]})}function Qf(){const n=U.useRef(null),e=U.useRef([]),t=U.useRef({x:0,y:0}),r=U.useRef(),i=U.useRef(),o=U.useRef(!0);return U.useEffect(()=>{const l=n.current;if(!l)return;const h=l.getContext("2d");if(!h)return;const f=S=>{t.current={x:S.clientX,y:S.clientY}};window.addEventListener("mousemove",f);const m=()=>{l.width=window.innerWidth,l.height=window.innerHeight};m(),window.addEventListener("resize",m),(()=>{e.current=[]})();const T=()=>{h.save(),h.beginPath(),h.moveTo(100,l.height/2-50),h.lineTo(150,l.height/2),h.lineTo(100,l.height/2+50),h.strokeStyle="#3b82f6",h.lineWidth=3,h.stroke(),h.restore()},R=()=>{h.save(),h.beginPath(),h.rect(0,l.height/2-50,100,100),h.fillStyle="#1e293b",h.strokeStyle="#3b82f6",h.lineWidth=3,h.fill(),h.stroke(),T(),h.restore()},P=()=>{if(o.current)for(let S=0;S<3;S++){const V=(Math.random()-.5)*Math.PI/2,M=2+Math.random()*3;e.current.push({x:120,y:l.height/2,vx:Math.cos(V)*M,vy:Math.sin(V)*M,radius:Math.random()*3+1,color:`hsl(${210+Math.random()*30}, 100%, 70%)`,life:100})}},k=()=>{h.fillStyle="rgba(0, 0, 0, 1)",h.fillRect(0,0,l.width,l.height),R(),o.current&&P(),e.current.forEach((S,V)=>{const M=t.current.x-S.x,L=t.current.y-S.y,B=Math.sqrt(M*M+L*L);B<150&&(S.vx+=M/B*.5,S.vy+=L/B*.5),S.x+=S.vx,S.y+=S.vy,(S.x<0||S.x>l.width)&&(S.vx*=-.8,S.x=Math.max(0,Math.min(S.x,l.width))),(S.y<0||S.y>l.height)&&(S.vy*=-.8,S.y=Math.max(0,Math.min(S.y,l.height))),S.vy+=.02,S.vx*=.995,S.vy*=.995,h.beginPath(),h.arc(S.x,S.y,S.radius,0,Math.PI*2),h.fillStyle=S.color,h.fill(),h.shadowBlur=15,h.shadowColor=S.color,(S.x<-50||S.x>l.width+50||S.y<-50||S.y>l.height+50)&&e.current.splice(V,1)}),r.current=requestAnimationFrame(k)};return k(),i.current=setTimeout(()=>{o.current=!1},5e3),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("resize",m),r.current&&cancelAnimationFrame(r.current),i.current&&clearTimeout(i.current)}},[]),u.jsxs("div",{className:"fixed inset-0 bg-black overflow-hidden",children:[u.jsx("canvas",{ref:n,className:"absolute inset-0"}),u.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4",children:[u.jsx(gt.h1,{className:"text-6xl font-bold text-white mb-4",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"404"}),u.jsx(gt.h2,{className:"text-2xl text-blue-400 mb-8",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"Vacuum Chamber Breach Detected"}),u.jsx(gt.p,{className:"text-gray-300 mb-8 max-w-md",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.4},children:"Our electron accelerator's vacuum chamber has sprung a leak! Electrons are escaping into the digital void. Catch  them disperse  using your mouse while we fix this anomaly."}),u.jsx(gt.a,{href:"/",className:"px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},whileHover:{scale:1.05},whileTap:{scale:.95},children:"Return to Safety"})]})]})}function Xf(){const[n,e]=U.useState(!1),[t,r]=U.useState(null),i="/crotonite-beta",o=window.location.pathname,l=o.startsWith(i)?o.slice(i.length):o,h=m=>{e(!0),r(m)},f=()=>{t&&(window.location.href=`${window.location.origin}${i}${t}`),e(!1),r(null)};return l==="/signup"||l==="/crotonite-beta/signup"?u.jsxs(u.Fragment,{children:[n&&u.jsx(Br,{isVisible:n,onComplete:f,duration:2e3+Math.random()*3e3}),u.jsx($e,{colors:["#3b82f6","#6366f1","#8b5cf6"],size:800,opacity:.15,blur:120}),u.jsx(vc,{onNavigate:h})]}):l==="/login"||l==="/crotonite-beta/login"?u.jsxs(u.Fragment,{children:[n&&u.jsx(Br,{isVisible:n,onComplete:f,duration:2e3+Math.random()*3e3}),u.jsx($e,{colors:["#3b82f6","#6366f1","#8b5cf6"],size:800,opacity:.15,blur:120}),u.jsx(xc,{onNavigate:h})]}):l==="/about"||l==="/crotonite-beta/about"?u.jsxs(u.Fragment,{children:[u.jsx($e,{colors:["#3b82f6","#6366f1","#8b5cf6"],size:800,opacity:.15,blur:120}),u.jsx(Fr,{children:u.jsx(wc,{})})]}):l==="/contact"||l==="/crotonite-beta/contact"?u.jsxs(u.Fragment,{children:[u.jsx($e,{colors:["#3b82f6","#6366f1","#8b5cf6"],size:800,opacity:.15,blur:120}),u.jsx(Fr,{children:u.jsx(Wf,{})})]}):l==="/"||l===""||l==="/crotonite-beta"||l==="/crotonite-beta/"?u.jsxs(u.Fragment,{children:[n&&u.jsx(Br,{isVisible:n,onComplete:f,duration:2e3+Math.random()*3e3}),u.jsx($e,{colors:["#3b82f6","#6366f1","#8b5cf6"],size:800,opacity:.15,blur:120}),u.jsxs(Fr,{children:[u.jsx(mc,{onNavigate:h}),u.jsx(gc,{}),u.jsx(_c,{})]})]}):u.jsxs(u.Fragment,{children:[u.jsx($e,{colors:["#3b82f6","#6366f1","#8b5cf6"],size:800,opacity:.15,blur:120}),u.jsx(Qf,{})]})}Yl.createRoot(document.getElementById("root")).render(u.jsx(U.StrictMode,{children:u.jsx(Xf,{})}));
