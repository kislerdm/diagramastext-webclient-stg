!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const e="_box_101tr_1",t="_boxText_101tr_9",n="_arrow_101tr_17",i=""+new URL("github-32052dd2.svg",import.meta.url).href,s=""+new URL("slack-651152f9.svg",import.meta.url).href,r=""+new URL("linkedin-997bf724.svg",import.meta.url).href,o=""+new URL("email-9424a33a.svg",import.meta.url).href;function a(e=""){return`<a href="mailto:contact@diagramastext.dev" target="_blank" rel="noopener">${e}</a>`}const l="_title_1x5ow_1",d=`<header style="padding:1em;width:100%">\n    <div class="${l}">\n        <span style="font-weight:bold">Diagram</span>\n        <span> as </span>\n        <span style="font-weight:bold;font-style:italic">Text</span>\n    </div>\n</header>`,f="_modal_awylw_1",c="_modalContent_awylw_14",h="_close_awylw_29",p="_loader_awylw_43";class g{static mount(){return`<div id="popup" class="${f}">\n    <div class="${c}">\n        <span class="${h}">&times;</span>\n        <div id="modalMsg"></div>\n    </div>\n</div>`}static show(e,t){const n=[...e.getElementsByClassName(f)].find((e=>"popup"===e.id)),i=[...n.getElementsByTagName("div")].find((e=>"modalMsg"===e.id)),s=n.getElementsByClassName(h)[0];function r(){i.innerHTML="",n.style.display="none"}i.innerHTML=t,n.style.display="block",s.addEventListener("click",(()=>r())),window.onclick=e=>{e.target===n&&r()},e.addEventListener("keydown",(e=>{"Escape"!==e.key&&"Esc"!==e.key||r()}))}static error(e,t){e.getElementsByClassName(c)[0].style.boxShadow="0 0 3px 3px #e00d0d",g.show(e,`<p style="font-size:medium;font-weight:bold"><span style="color:red">Error! </span>${t}</p>`)}}class m{static mount(){return`<div id="loader" class="${f}">\n    <div class="${c}" style="width:150px;margin-top:200px;border:none;box-shadow:none;background:none">\n        <div class="${p}"></div>\n    </div>\n</div>`}static setStyle(e,t){const n=[...e.getElementsByClassName(f)].find((e=>"loader"===e.id)).style;for(const[i,s]of Object.entries(t))n[i]=s}static show(e){m.setStyle(e,{display:"block"})}static hide(e){m.setStyle(e,{display:"none"})}}const x="NA";class u{constructor(){const e=navigator.userAgent;this._fingerprint=function(e){if(""===e)return x;function t(e,t){return e<<t|e>>>32-t}function n(e){var t,n="";for(t=7;t>=0;t--)n+=(e>>>4*t&15).toString(16);return n}function i(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t+=String.fromCharCode(i):i>127&&i<2048?(t+=String.fromCharCode(i>>6|192),t+=String.fromCharCode(63&i|128)):(t+=String.fromCharCode(i>>12|224),t+=String.fromCharCode(i>>6&63|128),t+=String.fromCharCode(63&i|128))}return t}var s,r,o,a,l,d,f,c,h,p=new Array(80),g=1732584193,m=4023233417,u=2562383102,y=271733878,w=3285377520;const v=i(e);var b=v.length,k=new Array;for(r=0;r<b-3;r+=4)o=v.charCodeAt(r)<<24|v.charCodeAt(r+1)<<16|v.charCodeAt(r+2)<<8|v.charCodeAt(r+3),k.push(o);switch(b%4){case 0:r=2147483648;break;case 1:r=v.charCodeAt(b-1)<<24|8388608;break;case 2:r=v.charCodeAt(b-2)<<24|v.charCodeAt(b-1)<<16|32768;break;case 3:r=v.charCodeAt(b-3)<<24|v.charCodeAt(b-2)<<16|v.charCodeAt(b-1)<<8|128}k.push(r);for(;k.length%16!=14;)k.push(0);for(k.push(b>>>29),k.push(b<<3&4294967295),s=0;s<k.length;s+=16){for(r=0;r<16;r++)p[r]=k[s+r];for(r=16;r<=79;r++)p[r]=t(p[r-3]^p[r-8]^p[r-14]^p[r-16],1);for(a=g,l=m,d=u,f=y,c=w,r=0;r<=19;r++)h=t(a,5)+(l&d|~l&f)+c+p[r]+1518500249&4294967295,c=f,f=d,d=t(l,30),l=a,a=h;for(r=20;r<=39;r++)h=t(a,5)+(l^d^f)+c+p[r]+1859775393&4294967295,c=f,f=d,d=t(l,30),l=a,a=h;for(r=40;r<=59;r++)h=t(a,5)+(l&d|l&f|d&f)+c+p[r]+2400959708&4294967295,c=f,f=d,d=t(l,30),l=a,a=h;for(r=60;r<=79;r++)h=t(a,5)+(l^d^f)+c+p[r]+3395469782&4294967295,c=f,f=d,d=t(l,30),l=a,a=h;g=g+a&4294967295,m=m+l&4294967295,u=u+d&4294967295,y=y+f&4294967295,w=w+c&4294967295}return(n(g)+n(m)+n(u)+n(y)+n(w)).toLowerCase()}(e),this._id=x}is_registered(){return this._id!==x}login(){throw Error("method mot implemented")}}function y(e,t){for(let n=0;n<e.length;n++){const i=e.item(n);if(null!=i&&i.id==t)return i}}class w{constructor(e,t){[e,t]=e<t?[e,t]:[t,e],this.Min=e,this.Max=t}}const v=`<div class="${e}" style="color:white;margin:50px 0 20px">\n    <p>"A picture is worth a thousand words": diagram is a powerful conventional instrument to explain the\n    meaning of complex systems, or processes. Unfortunately, substantial effort is required to develop and maintain\n    a diagram. It impacts effectiveness of knowledge sharing, especially in software development. Luckily, <a\n            href="https://openai.com/blog/best-practices-for-deploying-language-models/" target="_blank"\n            rel="noopener noreffer">LLM</a> development reached such level when special skills are no longer needed\n    to prepare standardised diagram in seconds!</p>\n    \n    <p>Please ${a("get in touch")} for feedback and details about collaboration. Thanks!</p>\n</div>`;!function(l,f){const c="C4 diagram of a Go web server reading from external Postgres database over TCP",h="0",p="1",x="2",b="3",k=new u,L=function(e,t){if(t.is_registered())return new w(e.promptMinLength,e.promptMaxLengthUserRegistered);return new w(e.promptMinLength,e.promptMaxLengthUserBase)}(f,k);l.innerHTML=`${d}\n\n<div style="font-size:30px;margin: 20px 0 10px">\n    Generate <span style="font-weight:bold">diagrams</span> using \n    <span style="font-style:italic;font-weight:bold">plain English</span> in no time!\n</div>\n\n${function(n,i,s,r){function o(e){const t=1.2;return Math.round(e*t)}return`<div class="${e}" style="margin-top:20px">\n    <p class="${t}">Input:</p>\n    <textarea minlength=${s.Min} maxlength=${o(s.Max)} rows="3"\n              style="font-size:20px;color:#fff;text-align:left;border-radius:1rem;padding:1rem;width:100%;background:#263950;box-shadow:0 0 3px 3px #2b425e"\n              placeholder="Type in the diagram description">${r}</textarea>\n    <div style="color:white;text-align:right"><p>Prompt length: <span id="${i}">${r.length}</span> / ${s.Max} </p></div>\n    <div style="margin-top:-20px"><button id="${n}">Generate Diagram</button></div>\n</div>\n`}(h,b,L,c)}\n\n<i class="${n}"></i>\n\n${function(n,i,s){return`<div class="${e}" style="margin-top:20px;padding:20px">\n    <p class="${t}">Output:</p>\n    \n    <div id="${n}" \n    style="border:solid #2d4765 2px;background:white;box-shadow:0 0 3px 3px #2b425e;width:inherit"\n>${s}</div>\n    \n    <div>\n        <button id="${i}" disabled>Download</button>\n        <a download="diagram.svg"></a>\n    </div>\n</div>\n`}(p,x,'<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax" viewBox="0 0 375 179"><rect width="125" height="52.6" x="7" y="11.8" fill="#438DD5" stroke="#3c7fc0" stroke-width=".5" rx="2.5" ry="2.5"/><text x="17" y="36.7" fill="#FFF" font-family="sans-serif" font-size="16" font-weight="bold" textLength="40">Web</text><text x="57" y="36.7" fill="#FFF" font-family="sans-serif" font-size="16" font-weight="bold" textLength="6"> </text><text x="63" y="36.7" fill="#FFF" font-family="sans-serif" font-size="16" font-weight="bold" textLength="59">Server</text><text x="56.5" y="51.6" fill="#FFF" font-family="sans-serif" font-size="12" font-style="italic" textLength="26">[Go]    </text><path fill="#B3B3B3" stroke="#a6a6a6" stroke-width=".5" d="M251 17.3c0-10 53.5-10 53.5-10s53.5 0 53.5 10V59c0 10-53.5 10-53.5 10S251 69 251 59V17.3"/><path fill="none" stroke="#a6a6a6" stroke-width=".5" d="M251 17.3c0 10 53.5 10 53.5 10s53.5 0 53.5-10"/><text x="261" y="46.2" fill="#FFF" font-family="sans-serif" font-size="16" font-weight="bold" textLength="87">Database    </text><text x="274" y="61.1" fill="#FFF" font-family="sans-serif" font-size="12" font-style="italic" textLength="61">[Postgres]    </text><path fill="none" stroke="#666" stroke-width="1" d="M132.2 38.3h110.5"/><path fill="#666" stroke="#666" d="M250.8 38.3 242.8 35.3 242.8 41.3 250.8 38.3z"/><text x="150.5" y="18.5" fill="#666" font-family="sans-serif" font-size="12" font-weight="bold" textLength="44">Reads    </text><text x="194.5" y="18.5" fill="#666" font-family="sans-serif" font-size="12" font-weight="bold" textLength="4">     </text><text x="198.5" y="18.5" fill="#666" font-family="sans-serif" font-size="12" font-weight="bold" textLength="34">data    </text><text x="175.5" y="32.4" fill="#666" font-family="sans-serif" font-size="12" font-style="italic" textLength="32">[TCP]    </text><path fill="none" d="M180 103.9H344V120.2H180z"/><text x="180" y="116.9" font-family="sans-serif" font-size="14" font-weight="bold" textLength="57">Legend</text><text x="237" y="116.9" fill="#FFF" font-family="sans-serif" font-size="14" textLength="4"> </text><path fill="#438DD5" d="M180 120.2H344V136.5H180z"/><text x="184" y="133.2" fill="#3C7FC0" font-family="sans-serif" font-size="14" textLength="8">▯</text><text x="192" y="133.2" fill="#FFF" font-family="sans-serif" font-size="14" textLength="4"> </text><text x="200" y="133.2" fill="#FFF" font-family="sans-serif" font-size="14" textLength="69">container</text><text x="273" y="133.2" fill="#FFF" font-family="sans-serif" font-size="14" textLength="4"> </text><path fill="#B3B3B3" d="M180 136.5H344V152.8H180z"/><text x="184" y="149.5" fill="#A6A6A6" font-family="sans-serif" font-size="14" textLength="8">▯</text><text x="192" y="149.5" fill="#FFF" font-family="sans-serif" font-size="14" textLength="4"> </text><text x="200" y="149.5" fill="#FFF" font-family="sans-serif" font-size="14" textLength="136">external_container</text><text x="340" y="149.5" fill="#FFF" font-family="sans-serif" font-size="14" textLength="4"> </text><path d="M180 103.9 344 103.9"/><path d="M180 120.2 344 120.2"/><path d="M180 136.5 344 136.5"/><path d="M180 152.8 344 152.8"/><path d="M180 103.9 180 152.8"/><path d="M344 103.9 344 152.8"/></svg>')}\n\n${v}\n<div>\n    ${g.mount()}\n    ${m.mount()}\n</div>\n${function(e=""){const t=""===e?"":`<p style="font-size:6px;">version: ${e}</p>`;return`<footer style="padding:1rem">\n    <p style="font-size:16px">diagramastext.dev &copy; ${(new Date).getFullYear().toString()}</p>\n    <p id="contacts" style="margin-top:-10px">\n    <a href="https://github.com/kislerdm/diagramastext" target="_blank" rel="noopener">\n        <img src="${i}" width=20 height=20 alt="github"/>\n    </a>\n    <a href="https://join.slack.com/t/diagramastextdev/shared_invite/zt-1onedpbsz-ECNIfwjIj02xzBjWNGOllg" \n       target="_blank" rel="noopener">\n        <img src="${s}" width=20 height=20 alt="slack"/>\n    </a>\n    <a href="https://www.linkedin.com/in/dkisler" target="_blank" rel="noopener">\n        <img src="${r}" width=20 height=20 alt="linkedin"/>\n    </a>\n    ${a(`<img src="${o}" width=20 height=20 alt="email"/>`)}\n</p>\n    ${t}\n</footer>\n`}(f.version)}\n`;let $="",F=!0,M=0;const C=l.getElementsByClassName(e)[0],_=C.getElementsByTagName("textarea")[0],z=y(C.getElementsByTagName("button"),h),E=l.getElementsByClassName(e)[1],A=y(E.getElementsByTagName("div"),p),T=y(E.getElementsByTagName("button"),x);let B=!1;const S=new AbortController;C.addEventListener("keydown",(e=>{!B||"Escape"!==e.key&&"Esc"!==e.key||S.abort()})),z.addEventListener("click",(()=>{function e(e=0,n=""){const i=M>=2?`The errors repreat, please\n<a href="${function(e,t){let n="https://github.com/kislerdm/diagramastext/issues/new";const i={assignee:"kislerdm",labels:["feedback","defect"],title:"Webclient issue",body:`## Environment\n- App version: ${t}\n\n## Prompt\n\n\`\`\`\n${e}\n\`\`\`\n\n## Details\n\n- Please describe your chain of actions, i.e. what preceded the state you report?\n- Please attach screenshots whether possible\n\n## Expected behaviour\n\nPlease describe what should have happened following the actions you described.\n`},s=Object.keys(i).map((e=>e+"="+encodeURIComponent(i[e]))).join("&");return`${n}?${s}`}(t,f.version)}"\n    target="_blank" rel="noopener" style="color:#3498db;font-weight:bold">report</a>`:function(e,t){function n(e){return t.length>0?t:e}switch(e){case 400:return n("Model processing error");case 404:return n("Faulty path");case 422:return n("Faulty input");case 429:return n("The server is experiencing high load, please try later");default:return n("Unexpected error, please repeat request")}}(e,n);g.error(l,i)}B=!1;const t=_.value.trim();if(c===t&&F)return;F=!1;const n=setTimeout((()=>B=!0),1e4);m.show(l),fetch(f.urlAPI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:t}),signal:S.signal}).then((t=>{t.ok?M=0:M++,m.hide(l),t.json().then((i=>{if(clearTimeout(n),"error"in i)e(t.status,i.error);else{if(!function(e){return"svg"in e}(i))throw new Error("response data type not recognized");$=function(e){let t=(new DOMParser).parseFromString(e,"image/svg+xml").querySelector("svg");return t.style.preserveAspectRatio="xMaxYMax",t.style.width="100%",t.style.height="100%",(new XMLSerializer).serializeToString(t)}(i.svg),A.innerHTML=$,T.disabled=!1}}))})).catch((t=>{clearTimeout(n),m.hide(l),"AbortError"===t.name?g.show(l,"Request cancelled by user"):(console.error(t),e())}))})),T.addEventListener("click",(()=>{if(""!==$){const e=[...E.getElementsByTagName("a")].find((e=>"diagram.svg"==e.download));e.setAttribute("href",`data:image/svg+xml,${encodeURIComponent($)}`),e.click()}})),_.addEventListener("input",(()=>{const e=_.value.trim().length;const t=y(C.getElementsByTagName("span"),b);t.innerHTML=e.toString(),t.style.color="#fff",z.disabled=!1,(e>L.Max||e<L.Min)&&(t.style.color="red",z.disabled=!0)}))}(document.querySelector("main"),{version:"72febcc5428822a49760f953fc28e90b0b9dd516",urlAPI:"https://api-stage.diagramastext.dev/c4",promptMinLength:3,promptMaxLengthUserBase:100,promptMaxLengthUserRegistered:300});
