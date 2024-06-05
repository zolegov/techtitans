import{a as L,S as x,N as I,K as j,M as C,i as b,b as O,A,c as P}from"./assets/vendor-bcca9cd9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const p=document.querySelector(".burger-icon"),f=document.querySelector(".close-modal"),c=document.querySelector(".modal-header"),v=()=>{c.classList.remove("is-active"),c.classList.add("is-hidden"),document.body.classList.remove("modal-open"),setTimeout(()=>{p.style.display="block",f.style.display="none"},500)};p.addEventListener("click",()=>{c.classList.add("is-active"),c.classList.remove("is-hidden"),p.style.display="none",f.style.display="block",document.body.classList.add("modal-open")});f.addEventListener("click",v);c.addEventListener("click",e=>{e.target===c&&v()});const T=document.querySelectorAll(".modal-content .header-menu-link");T.forEach(e=>{e.addEventListener("click",v)});const l=document.querySelectorAll(".switch-theme-checkbox");document.querySelector(".switch-theme-wrapper");const i=document.querySelector("body"),y="theme",g=localStorage.getItem(y);addEventListener("load",()=>{g==="dark"&&(i.classList.add("dark"),l.forEach(e=>{e.checked=!0})),g==="light"&&(i.classList.add("light"),l.forEach(e=>{e.checked=!1}))});l.forEach(e=>{e.addEventListener("click",()=>{if(e.checked===!0){localStorage.setItem(y,"dark"),i.classList.add("dark"),i.classList.remove("light"),l.forEach(t=>{t.checked=!0});return}else{localStorage.setItem(y,"light"),i.classList.remove("dark"),i.classList.add("light"),l.forEach(t=>{t.checked=!1});return}})});const M={projectList:document.querySelector(".my-projects-list"),projectsItems:document.querySelectorAll(".my-projects-item"),projectsBtn:document.querySelector(".my-project-btn")},{projectList:D,projectsItems:w,projectsBtn:k}=M;k.addEventListener("click",S);let m=0;const $=3;function S(){for(let e=0;e<$;e++){if(m>=w.length){k.style.display="none";break}w[m].classList.remove("is-hidden"),m++}}S();const N="https://portfolio-js.b.goit.study/api";async function R(){return(await L.get(`${N}/reviews`)).data}const B=document.querySelector(".swiper-wrapper");async function H(e){const t=e.map(({author:n,avatar_url:r,review:s})=>`        
    <li class="reviews-list-item swiper-slide">
          <p class="reviews-item">
            ${s}
          </p>
          <div class="reviews-list-conteiner">
              <img
                src="${r}"
                alt="natalia"
                width="40"
                height="40"
                class="reviews-img"
              />
            <h3 class="reviews-second-title">${n}</h3>
          </div>
        </li>`).join("");B.insertAdjacentHTML("beforeend",t)}document.querySelector(".reviews-list");const U=document.querySelector(".list-conteiner");async function E(){try{const e=await R();H(e),removeEventListener("load",E)}catch{const t=`
            <div class="errorContainer">
                <h3 class="not-found-title">Oops, something went wrong...😱</h3>
                <p class="not-found-text">Reviews not found..</p>
            </div>
          `;U.innerHTML=t,b.show({message:"Oops, there are issues with showing reviews!",position:"topRight",backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",timeout:5e3,closeOnClick:!0})}}addEventListener("load",E);new x(".mySwiper",{modules:[I,j,C],navigation:{nextEl:".reviews-btn-right",prevEl:".reviews-btn-left"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchEventsTarget:"container",slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2},onlyInViewPort:!0,autoHeight:!0}});const V="/techtitans/assets/sprite-f4ef88fc.svg",_="https://portfolio-js.b.goit.study/api",h=document.querySelector(".input-success-icon"),d=document.querySelector("body"),u=O.create(`
    <div class="modal js-modal-window">
    <button class="modal-close-btn">
        <svg class="modal-img">
            <use href="${V}#icon-cross"></use>
        </svg>
    </button>
        <div class="text-content-modal">
        <h3 class="text text-modal-first">
            Thank you for your interest in cooperation!
        </h3>
        <p class="text text-modal-second">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
    </div>
        </div>
`,{onClose:e=>{d.classList.remove("modal-open")}},{onClose:e=>{d.classList.add("modal-open")}});u.element().querySelector(".modal-close-btn").addEventListener("click",()=>{u.close()});document.querySelector(".input-text").addEventListener("blur",()=>{const e=document.querySelector(".error-message p"),t=document.querySelector(".work-together-input").querySelector('input[name="user-email"]'),n=t.value.trim(),r=document.querySelector(".work-together-input").querySelector(".error-message");if(F(n))t.classList.remove("invalid"),e.textContent="",r.style.display="none",h.style.display="block";else{t.classList.add("invalid"),e.textContent="Invalid email, try again",r.style.display="block",h.style.display="none",setTimeout(()=>{t.classList.remove("invalid"),e.textContent="",r.style.display="none"},5e3);return}});const z=document.querySelector(".work-together-input");function q(e){e.keyCode===27&&(u.close(),d.classList.remove("modal-open"),removeEventListener("keydown",q))}z.addEventListener("submit",async e=>{e.preventDefault();const t=e.target,r=t.querySelector('input[name="user-email"]').value.trim(),o=t.querySelector('textarea[name="comments"]').value.trim();try{(await L.post(`${_}/requests`,{email:r,comment:o})).status===201&&(u.show(()=>d.classList.add("modal-open")),t.reset(),h.style.display="none",addEventListener("keydown",q))}catch{b.error({class:"error",message:"Error while submitting the form, please try again.",position:"topCenter",timeout:2e3})}});function F(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}new A(".accordion-container",{openOnInit:[0]});P.init({delay:100});
//# sourceMappingURL=commonHelpers.js.map
