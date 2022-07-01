const t=document.querySelectorAll("[data-start]"),e=document.querySelectorAll("[data-stop]");let l=null;function n(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t[0].addEventListener("click",(()=>{l=setInterval((()=>{document.body.style.backgroundColor=n}),1e3)})),e.addEventListener("click",(()=>{clearInterval(l)}));
//# sourceMappingURL=01-color-switcher.70136355.js.map
