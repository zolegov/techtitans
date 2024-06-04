import{a as v,S as b,i as f,b as S,A as E,c as q}from"./assets/vendor-0a7276c1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const d=document.querySelector(".burger-icon"),m=document.querySelector(".close-modal"),i=document.querySelector(".modal-header"),p=()=>{i.classList.remove("is-active"),i.classList.add("is-hidden"),document.body.classList.remove("modal-open"),setTimeout(()=>{d.style.display="block",m.style.display="none"},500)};d.addEventListener("click",()=>{i.classList.add("is-active"),i.classList.remove("is-hidden"),d.style.display="none",m.style.display="block",document.body.classList.add("modal-open")});m.addEventListener("click",p);i.addEventListener("click",e=>{e.target===i&&p()});const k=document.querySelectorAll(".modal-content .header-menu-link");k.forEach(e=>{e.addEventListener("click",p)});const x={projectList:document.querySelector(".my-projects-list"),projectsItems:document.querySelectorAll(".my-projects-item"),projectsBtn:document.querySelector(".my-project-btn")},{projectList:N,projectsItems:y,projectsBtn:h}=x;h.addEventListener("click",w);let l=0;const j=3;function w(){for(let e=0;e<j;e++){if(l>=y.length){h.style.display="none";break}y[l].classList.remove("is-hidden"),l++}}w();const I="https://portfolio-js.b.goit.study/api";async function O(){return(await v.get(`${I}/reviews`)).data}const A=document.querySelector(".swiper-wrapper");async function P(e){const s=e.map(({author:r,avatar_url:n,review:t})=>`        
    <li class="reviews-list-item swiper-slide">
          <p class="reviews-item">
            ${t}
          </p>
          <div class="reviews-list-conteiner">
              <img
                src="${n}"
                alt="natalia"
                width="40"
                height="40"
                class="reviews-img"
              />
            <h3 class="reviews-second-title">${r}</h3>
          </div>
        </li>`).join("");A.insertAdjacentHTML("beforeend",s)}document.querySelector(".reviews-list");const C=document.querySelector(".list-conteiner");async function g(){try{const e=await O();P(e),removeEventListener("load",g)}catch{const s=`
            <div class="errorContainer">
                <h3 class="not-found-title">Oops, something went wrong...😱</h3>
                <p class="not-found-text">Reviews not found..</p>
            </div>
          `;C.innerHTML=s,f.show({message:"Oops, there are issues with showing reviews!",position:"topRight",backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",timeout:5e3,closeOnClick:!0})}}addEventListener("load",g);new b(".mySwiper",{navigation:{nextEl:".reviews-btn-right",prevEl:".reviews-btn-left"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchEventsTarget:"container",slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2},onlyInViewPort:!0,autoHeight:!0}});const T="/techtitans/assets/sprite-f4ef88fc.svg",$="https://portfolio-js.b.goit.study/api",u=document.querySelector(".input-success-icon"),a=S.create(`
    <div class="modal js-modal-window">
    <button class="modal-close-btn">
        <svg class="modal-img">
            <use href="${T}#icon-cross"></use>
        </svg>
    </button>
        <div class="text-content-modal">
        <h3 class="text text-modal-first">
            Thank you for your interest in cooperation!
        </h3>
        <p class="text text-modal-second">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
    </div>
        </div>
`);a.element().querySelector(".modal-close-btn").addEventListener("click",()=>{a.close()});document.querySelector(".input-text").addEventListener("blur",()=>{const e=document.querySelector(".error-message p"),s=document.querySelector(".work-together-input").querySelector('input[name="user-email"]'),r=s.value.trim(),n=document.querySelector(".work-together-input").querySelector(".error-message");if(R(r))s.classList.remove("invalid"),e.textContent="",n.style.display="none",u.style.display="block";else{s.classList.add("invalid"),e.textContent="Invalid email, try again",n.style.display="block",u.style.display="none",setTimeout(()=>{s.classList.remove("invalid"),e.textContent="",n.style.display="none"},5e3);return}});const M=document.querySelector(".work-together-input");function L(e){e.keyCode===27&&(a.close(),removeEventListener("keydown",L))}M.addEventListener("submit",async e=>{e.preventDefault();const s=e.target,n=s.querySelector('input[name="user-email"]').value.trim(),o=s.querySelector('textarea[name="comments"]').value.trim();try{(await v.post(`${$}/requests`,{email:n,comment:o})).status===201&&(a.show(),s.reset(),u.style.display="none",addEventListener("keydown",L))}catch{f.error({class:"error",message:"Error while submitting the form, please try again.",position:"topCenter",timeout:2e3})}});function R(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}new E(".accordion-container",{openOnInit:[0]});q.init();
//# sourceMappingURL=commonHelpers.js.map
