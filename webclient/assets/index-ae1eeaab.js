!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const e="_box_9z1em_1",t="_boxText_9z1em_9",n="_arrow_9z1em_17",o=`<p style="font-size: 16px;">diagramastext.dev &copy; ${(new Date).getFullYear().toString()}`;const s=`<header>\n    <div class="${"_title_1x5ow_1"}">\n        <span style="font-weight: bold;">Diagram</span>\n        <span> as </span>\n        <span style="font-weight: bold; font-style: italic;">Text</span>\n    </div>\n</header>`,i=""+new URL("github-925821eb.svg",import.meta.url).href,r=""+new URL("slack-aa6cb9bb.svg",import.meta.url).href,a=""+new URL("linkedin-ef9fc432.svg",import.meta.url).href,l=""+new URL("email-baaf7a26.svg",import.meta.url).href,d="NA";class f{constructor(){this._fingerprint=function(e){if(""===e)return d;function t(e,t){return e<<t|e>>>32-t}function n(e){var t,n="";for(t=7;t>=0;t--)n+=(e>>>4*t&15).toString(16);return n}function o(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t}var s,i,r,a,l,f,c,h,g,p=new Array(80),m=1732584193,x=4023233417,u=2562383102,y=271733878,v=3285377520;const b=o(e);var w=b.length,L=new Array;for(i=0;i<w-3;i+=4)r=b.charCodeAt(i)<<24|b.charCodeAt(i+1)<<16|b.charCodeAt(i+2)<<8|b.charCodeAt(i+3),L.push(r);switch(w%4){case 0:i=2147483648;break;case 1:i=b.charCodeAt(w-1)<<24|8388608;break;case 2:i=b.charCodeAt(w-2)<<24|b.charCodeAt(w-1)<<16|32768;break;case 3:i=b.charCodeAt(w-3)<<24|b.charCodeAt(w-2)<<16|b.charCodeAt(w-1)<<8|128}L.push(i);for(;L.length%16!=14;)L.push(0);for(L.push(w>>>29),L.push(w<<3&4294967295),s=0;s<L.length;s+=16){for(i=0;i<16;i++)p[i]=L[s+i];for(i=16;i<=79;i++)p[i]=t(p[i-3]^p[i-8]^p[i-14]^p[i-16],1);for(a=m,l=x,f=u,c=y,h=v,i=0;i<=19;i++)g=t(a,5)+(l&f|~l&c)+h+p[i]+1518500249&4294967295,h=c,c=f,f=t(l,30),l=a,a=g;for(i=20;i<=39;i++)g=t(a,5)+(l^f^c)+h+p[i]+1859775393&4294967295,h=c,c=f,f=t(l,30),l=a,a=g;for(i=40;i<=59;i++)g=t(a,5)+(l&f|l&c|f&c)+h+p[i]+2400959708&4294967295,h=c,c=f,f=t(l,30),l=a,a=g;for(i=60;i<=79;i++)g=t(a,5)+(l^f^c)+h+p[i]+3395469782&4294967295,h=c,c=f,f=t(l,30),l=a,a=g;m=m+a&4294967295,x=x+l&4294967295,u=u+f&4294967295,y=y+c&4294967295,v=v+h&4294967295}return(n(m)+n(x)+n(u)+n(y)+n(v)).toLowerCase()}(navigator.userAgent),this._id=d}is_registered(){return this._id!==d}login(){throw Error("method mot implemented")}}const c="_modal_1djg5_1",h="_modalContent_1djg5_14",g="_close_1djg5_23",p="_loader_1djg5_37";class m{constructor(e){e.innerHTML+=`\n<div class="${c}">\n    <div class="${h}">\n        <span class="${g}">&times;</span>\n        <div id="modalMsg"></div>\n    </div>\n</div>`}show(e){const t=document.getElementById("modalMsg");t.innerHTML=e;const n=document.getElementsByClassName(c)[0];n.style.display="block",document.getElementsByClassName(g)[0].addEventListener("click",(()=>{t.innerHTML="",n.style.display="none"})),window.onclick=e=>{e.target===n&&(t.innerHTML="",n.style.display="none")}}error(e){document.getElementsByClassName(h)[0].style.boxShadow="0 0 3px 3px #e00d0d",this.show(`<p style="font-size:medium;font-weight:bold"><span style="color:red">Error! </span>${e}</p>`)}}class x{constructor(e){e.innerHTML+=`<div id="loader" class="${c}">\n<div class="${h}" style="width:150px;margin-top:200px;border:none;box-shadow:none;background:none">\n<div class="${p}"></div>\n</div></div>`}show(){document.getElementById("loader").style.display="block"}hide(){document.getElementById("loader").style.display="none"}}class u{constructor(e,t){[e,t]=e<t?[e,t]:[t,e],this.Min=e,this.Max=t}}const y=`<div class="${e}" style="color:white;margin:50px 0 20px">\n    <p>"A picture is worth a thousand words": diagram is a powerful conventional instrument to explain the\n    meaning of complex systems, or processes. Unfortunately, substantial effort is required to develop and maintain\n    a diagram. It impacts effectiveness of knowledge sharing, especially in software development. Luckily, <a\n            href="https://openai.com/blog/best-practices-for-deploying-language-models/" target="_blank"\n            rel="noopener noreffer">LLM</a> development reached such level when special skills are no longer needed\n    to prepare standardised diagram in seconds!</p>\n    \n    <p>Please get in touch for feedback and details about collaboration. Thanks!</p>\n    \n    <a href="https://github.com/kislerdm/diagramastext"><img src="${i}" alt="github logo"/></a>\n    <a href="https://join.slack.com/t/diagramastextdev/shared_invite/zt-1onedpbsz-ECNIfwjIj02xzBjWNGOllg">\n        <img src="${r}" alt="slack logo"/>\n    </a>\n    <a href="https://www.linkedin.com/in/dkisler"><img src="${a}" alt="linkedin logo"/></a>\n    <a href="mailto:hi@diagramastext.dev"><img src="${l}" alt="email logo"/></a>\n</div>`;!function(i,r){const a="C4 diagram of a Go web server reading from external Postgres database over TCP",l="0",d="1",c="2",h="4",g="5",p=new f,v=function(e,t){return t.is_registered()?new u(e.promptMinLength,e.promptMaxLengthUserRegistered):new u(e.promptMinLength,e.promptMaxLengthUserBase)}(r,p);var b;i.innerHTML=`${s}\n\n<div style="font-size:30px;margin: 20px 0 10px">\n    Generate <span style="font-weight:bold">diagrams</span> using \n    <span style="font-style:italic;font-weight:bold">plain English</span> in no time!\n</div>\n\n${function(n,o,s,i,r){function a(e){const t=1.2;return Math.round(e*t)}return`<div class="${e}" style="margin-top:20px">\n    <p class="${t}">Input:</p>\n    <textarea id="${n}" \n              minlength=${i.Min} maxlength=${a(i.Max)} rows="3"\n              style="font-size:20px;color:#fff;text-align:left;border-radius:1rem;padding:1rem;width:100%;background:#263950;box-shadow:0 0 3px 3px #2b425e"\n              placeholder="Type in the diagram description">${r}</textarea>\n    <div style="color:white;text-align:right"><p>Prompt length: <span id="${s}">${r.length}</span> / ${i.Max} </p></div>\n    <div style="margin-top:-30px"><button id="${o}">Generate Diagram</button></div>\n</div>\n`}(l,d,g,v,a)}\n\n<i class="${n}"></i>\n\n${function(n,o,s){return`\n<div class="${e}" style="margin-top: 20px; padding: 20px;">\n    <p class="${t}">Output:</p>\n    <div id="${n}" \n    style="border:solid #2d4765 2px;background:white;box-shadow:0 0 3px 3px #2b425e; width:inherit"\n>${s}</div>\n    <div><button id="${o}" disabled>Download</button></div>\n</div>\n`}(c,h,'<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax" viewBox="0 0 375 179"><rect width="125" height="52.6" x="7" y="11.8" fill="#438DD5" stroke="#3c7fc0" stroke-width=".5" rx="2.5" ry="2.5"/><text x="17" y="36.7" fill="#FFF" font-family="sans-serif" font-size="16" font-weight="bold" textLength="40">Web</text><text x="57" y="36.7" fill="#FFF" font-family="sans-serif" font-size="16" font-weight="bold" textLength="6"> </text><text x="63" y="36.7" fill="#FFF" font-family="sans-serif" font-size="16" font-weight="bold" textLength="59">Server</text><text x="56.5" y="51.6" fill="#FFF" font-family="sans-serif" font-size="12" font-style="italic" textLength="26">[Go]    </text><path fill="#B3B3B3" stroke="#a6a6a6" stroke-width=".5" d="M251 17.3c0-10 53.5-10 53.5-10s53.5 0 53.5 10V59c0 10-53.5 10-53.5 10S251 69 251 59V17.3"/><path fill="none" stroke="#a6a6a6" stroke-width=".5" d="M251 17.3c0 10 53.5 10 53.5 10s53.5 0 53.5-10"/><text x="261" y="46.2" fill="#FFF" font-family="sans-serif" font-size="16" font-weight="bold" textLength="87">Database    </text><text x="274" y="61.1" fill="#FFF" font-family="sans-serif" font-size="12" font-style="italic" textLength="61">[Postgres]    </text><path fill="none" stroke="#666" stroke-width="1" d="M132.2 38.3h110.5"/><path fill="#666" stroke="#666" d="M250.8 38.3 242.8 35.3 242.8 41.3 250.8 38.3z"/><text x="150.5" y="18.5" fill="#666" font-family="sans-serif" font-size="12" font-weight="bold" textLength="44">Reads    </text><text x="194.5" y="18.5" fill="#666" font-family="sans-serif" font-size="12" font-weight="bold" textLength="4">     </text><text x="198.5" y="18.5" fill="#666" font-family="sans-serif" font-size="12" font-weight="bold" textLength="34">data    </text><text x="175.5" y="32.4" fill="#666" font-family="sans-serif" font-size="12" font-style="italic" textLength="32">[TCP]    </text><path fill="none" d="M180 103.9H344V120.2H180z"/><text x="180" y="116.9" font-family="sans-serif" font-size="14" font-weight="bold" textLength="57">Legend</text><text x="237" y="116.9" fill="#FFF" font-family="sans-serif" font-size="14" textLength="4"> </text><path fill="#438DD5" d="M180 120.2H344V136.5H180z"/><text x="184" y="133.2" fill="#3C7FC0" font-family="sans-serif" font-size="14" textLength="8">▯</text><text x="192" y="133.2" fill="#FFF" font-family="sans-serif" font-size="14" textLength="4"> </text><text x="200" y="133.2" fill="#FFF" font-family="sans-serif" font-size="14" textLength="69">container</text><text x="273" y="133.2" fill="#FFF" font-family="sans-serif" font-size="14" textLength="4"> </text><path fill="#B3B3B3" d="M180 136.5H344V152.8H180z"/><text x="184" y="149.5" fill="#A6A6A6" font-family="sans-serif" font-size="14" textLength="8">▯</text><text x="192" y="149.5" fill="#FFF" font-family="sans-serif" font-size="14" textLength="4"> </text><text x="200" y="149.5" fill="#FFF" font-family="sans-serif" font-size="14" textLength="136">external_container</text><text x="340" y="149.5" fill="#FFF" font-family="sans-serif" font-size="14" textLength="4"> </text><path d="M180 103.9 344 103.9"/><path d="M180 120.2 344 120.2"/><path d="M180 136.5 344 136.5"/><path d="M180 152.8 344 152.8"/><path d="M180 103.9 180 152.8"/><path d="M344 103.9 344 152.8"/></svg>')}\n\n${y}\n\n${b=r.version,`\n<footer style="padding: 1rem">\n    ${o}    \n    <p style="font-size: 8px;">version: ${b}</p>\n</footer>\n`}\n`;let w="",L=!0;const M=new m(i),k=new x(i);let F=0;document.getElementById(d).addEventListener("click",(()=>{const e=document.getElementById(l).value.trim();a===e&&L||(L=!1,k.show(),fetch(r.urlAPI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})}).then((t=>{if(k.hide(),t.ok)F=0,t.json().then((e=>{w=function(e){let t=(new DOMParser).parseFromString(e,"image/svg+xml").querySelector("svg");return t.style.preserveAspectRatio="xMaxYMax",t.style.width="100%",t.style.height="100%",(new XMLSerializer).serializeToString(t)}(e.svg),document.getElementById(c).innerHTML=w,document.getElementById(h).disabled=!1}));else{F++;const n=F>2?`The errors repreat, please \n<a href="${function(e,t){let n="https://github.com/kislerdm/diagramastext/issues/new";const o={assignee:"kislerdm",labels:["feedback","defect"],title:"Webclient issue",body:`## Environment\n- App version: ${t}\n\n## Prompt\n\n\`\`\`\n${e}\n\`\`\`\n\n## Details\n\n- Please describe your chain of actions, i.e. what preceded the state you report?\n- Please attach screenshots whether possible\n\n## Expected behaviour\n\nPlease describe what should have happened following the actions you described.\n`},s=Object.keys(o).map((e=>e+"="+encodeURIComponent(o[e]))).join("&");return`${n}?${s}`}(e,r.version)}"\n    target="_blank" rel="noopener" style="color:#3498db;font-weight:bold">report</a>`:function(e){switch(e){case 400:return"Unexpected prompt length";case 404:return"Faulty path";case 429:return"The server is experiencing high load, please try later";default:return"Unexpected error, please try later"}}(t.status);M.error(n)}})))})),document.getElementById(h).addEventListener("click",(()=>{""!==w&&function(e){const t=document.createElement("a");t.setAttribute("download","diagram.svg"),t.setAttribute("href",`data:image/svg+xml,${encodeURIComponent(e)}`),t.click()}(w)})),document.getElementById(l).addEventListener("input",(()=>{const e=(t=l,document.getElementById(t).value.length);var t;const n=document.getElementById(g);n.innerHTML=e.toString(),n.style.color="#fff",document.getElementById(d).disabled=!1,(e>v.Max||e<v.Min)&&(n.style.color="red",document.getElementById(d).disabled=!0)}))}(document.querySelector("main"),{version:"c3b021105e893f632b5363dfb577757e48f8c952",urlAPI:"https://api-stage.diagramastext.dev/c4",promptMinLength:3,promptMaxLengthUserBase:100,promptMaxLengthUserRegistered:300});