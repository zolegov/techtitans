import{a as f,i as v,S as L,b,A as S}from"./assets/vendor-fc5788e3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const d=document.querySelector(".burger-icon"),m=document.querySelector(".close-modal"),i=document.querySelector(".modal-header"),p=()=>{i.classList.remove("is-active"),i.classList.add("is-hidden"),document.body.classList.remove("modal-open"),setTimeout(()=>{d.style.display="block",m.style.display="none"},500)};d.addEventListener("click",()=>{i.classList.add("is-active"),i.classList.remove("is-hidden"),d.style.display="none",m.style.display="block",document.body.classList.add("modal-open")});m.addEventListener("click",p);i.addEventListener("click",e=>{e.target===i&&p()});const E=document.querySelectorAll(".modal-content .header-menu-link");E.forEach(e=>{e.addEventListener("click",p)});const q={projectList:document.querySelector(".my-projects-list"),projectsItems:document.querySelectorAll(".my-projects-item"),projectsBtn:document.querySelector(".my-project-btn")},{projectList:R,projectsItems:y,projectsBtn:h}=q;h.addEventListener("click",g);let a=0;const k=3;function g(){for(let e=0;e<k;e++){if(a>=y.length){h.style.display="none";break}y[a].classList.remove("is-hidden"),a++}}g();const x="https://portfolio-js.b.goit.study/api";async function j(){return(await f.get(`${x}/reviews`)).data}const I=document.querySelector(".swiper-wrapper");async function O(e){const t=e.map(({author:n,avatar_url:r,review:s})=>`        
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
        </li>`).join("");I.insertAdjacentHTML("beforeend",t)}const A="/techtitans/assets/sprite-f4ef88fc.svg";document.querySelector(".reviews-list");const C=document.querySelector(".list-conteiner");addEventListener("load",async()=>{try{const e=await j();O(e)}catch{const t=`
            <div class="errorContainer">
                <h3 class="not-found-title">Oops, something went wrong...😱</h3>
                <p class="not-found-text">Reviews not found..</p>
            </div>
          `;C.innerHTML=t,v.show({message:"Oops, there are issues with showing reviews!",position:"topRight",backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",timeout:5e3,closeOnClick:!0})}});new L(".mySwiper",{navigation:{nextEl:".reviews-btn-right",prevEl:".reviews-btn-left"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchEventsTarget:"container",breakpoints:{1280:{slidesPerView:2}}});const P="https://portfolio-js.b.goit.study/api",u=document.querySelector(".input-success-icon"),l=b.create(`
    <div class="modal js-modal-window">
    <button class="modal-close-btn">
        <svg class="modal-img">
            <use href="${A}#icon-cross"></use>
        </svg>
    </button>
        <div class="text-content-modal">
        <p class="text text-modal-first">
            Thank you for your interest in cooperation!
        </p>
        <p class="text text-modal-second">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
    </div>
        </div>
`);l.element().querySelector(".modal-close-btn").addEventListener("click",()=>{l.close()});document.querySelector(".input-text").addEventListener("blur",()=>{const e=document.querySelector(".error-message p"),t=document.querySelector(".work-together-input").querySelector('input[name="user-email"]'),n=t.value.trim(),r=document.querySelector(".work-together-input").querySelector(".error-message");if($(n))t.classList.remove("invalid"),e.textContent="",r.style.display="none",u.style.display="block";else{t.classList.add("invalid"),e.textContent="Invalid email, try again",r.style.display="block",u.style.display="none",setTimeout(()=>{t.classList.remove("invalid"),e.textContent="",r.style.display="none"},5e3);return}});const T=document.querySelector(".work-together-input");T.addEventListener("submit",async e=>{e.preventDefault();const t=e.target,r=t.querySelector('input[name="user-email"]').value.trim(),o=t.querySelector('textarea[name="comments"]').value.trim();try{(await f.post(`${P}/requests`,{email:r,comment:o})).status===201&&(l.show(),t.reset(),u.style.display="none",addEventListener("keydown",function(w){w.keyCode===27&&l.close()}))}catch{v.error({class:"error",message:"Error while submitting the form, please try again.",position:"topCenter",timeout:2e3})}});function $(e){const t=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return console.log(e),t.test(e)}new S(".accordion-container",{openOnInit:[0]});
//# sourceMappingURL=commonHelpers.js.map
