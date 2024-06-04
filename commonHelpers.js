import{a as v,i as f,S as L,b,A as S}from"./assets/vendor-fc5788e3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const d=document.querySelector(".burger-icon"),m=document.querySelector(".close-modal"),i=document.querySelector(".modal-header"),p=()=>{i.classList.remove("is-active"),i.classList.add("is-hidden"),document.body.classList.remove("modal-open"),setTimeout(()=>{d.style.display="block",m.style.display="none"},500)};d.addEventListener("click",()=>{i.classList.add("is-active"),i.classList.remove("is-hidden"),d.style.display="none",m.style.display="block",document.body.classList.add("modal-open")});m.addEventListener("click",p);i.addEventListener("click",e=>{e.target===i&&p()});const E=document.querySelectorAll(".modal-content .header-menu-link");E.forEach(e=>{e.addEventListener("click",p)});const q={projectList:document.querySelector(".my-projects-list"),projectsItems:document.querySelectorAll(".my-projects-item"),projectsBtn:document.querySelector(".my-project-btn")},{projectList:R,projectsItems:y,projectsBtn:h}=q;h.addEventListener("click",w);let a=0;const k=3;function w(){for(let e=0;e<k;e++){if(a>=y.length){h.style.display="none";break}y[a].classList.remove("is-hidden"),a++}}w();const x="https://portfolio-js.b.goit.study/api";async function j(){return(await v.get(`${x}/reviews`)).data}const I=document.querySelector(".swiper-wrapper");async function O(e){const s=e.map(({author:n,avatar_url:r,review:t})=>`        
    <li class="reviews-list-item swiper-slide">
          <p class="reviews-item">
            ${t}
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
        </li>`).join("");I.insertAdjacentHTML("beforeend",s)}document.querySelector(".reviews-list");const A=document.querySelector(".list-conteiner");addEventListener("load",async()=>{try{const e=await j();O(e)}catch{const s=`
            <div class="errorContainer">
                <h3 class="not-found-title">Oops, something went wrong...😱</h3>
                <p class="not-found-text">Reviews not found..</p>
            </div>
          `;A.innerHTML=s,f.show({message:"Oops, there are issues with showing reviews!",position:"topRight",backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",timeout:5e3,closeOnClick:!0})}});new L(".mySwiper",{navigation:{nextEl:".reviews-btn-right",prevEl:".reviews-btn-left"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchEventsTarget:"container",slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2},onlyInViewPort:!0,autoHeight:!0}});const P="/techtitans/assets/sprite-f4ef88fc.svg",C="https://portfolio-js.b.goit.study/api",u=document.querySelector(".input-success-icon"),l=b.create(`
    <div class="modal js-modal-window">
    <button class="modal-close-btn">
        <svg class="modal-img">
            <use href="${P}#icon-cross"></use>
        </svg>
    </button>
        <div class="text-content-modal">
        <h3 class="text text-modal-first">
            Thank you for your interest in cooperation!
        </h3>
        <p class="text text-modal-second">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
    </div>
        </div>
`);l.element().querySelector(".modal-close-btn").addEventListener("click",()=>{l.close()});document.querySelector(".input-text").addEventListener("blur",()=>{const e=document.querySelector(".error-message p"),s=document.querySelector(".work-together-input").querySelector('input[name="user-email"]'),n=s.value.trim(),r=document.querySelector(".work-together-input").querySelector(".error-message");if($(n))s.classList.remove("invalid"),e.textContent="",r.style.display="none",u.style.display="block";else{s.classList.add("invalid"),e.textContent="Invalid email, try again",r.style.display="block",u.style.display="none",setTimeout(()=>{s.classList.remove("invalid"),e.textContent="",r.style.display="none"},5e3);return}});const T=document.querySelector(".work-together-input");function g(e){e.keyCode===27&&(l.close(),removeEventListener("keydown",g))}T.addEventListener("submit",async e=>{e.preventDefault();const s=e.target,r=s.querySelector('input[name="user-email"]').value.trim(),o=s.querySelector('textarea[name="comments"]').value.trim();try{(await v.post(`${C}/requests`,{email:r,comment:o})).status===201&&(l.show(),s.reset(),u.style.display="none",addEventListener("keydown",g))}catch{f.error({class:"error",message:"Error while submitting the form, please try again.",position:"topCenter",timeout:2e3})}});function $(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}new S(".accordion-container",{openOnInit:[0]});
//# sourceMappingURL=commonHelpers.js.map
