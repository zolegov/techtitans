import{a as y,i as f,S as w,b as L,A as b}from"./assets/vendor-fc5788e3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const d=document.querySelector(".burger-icon"),u=document.querySelector(".close-modal"),i=document.querySelector(".modal-header"),m=()=>{i.classList.remove("is-active"),i.classList.add("is-hidden"),document.body.classList.remove("modal-open"),setTimeout(()=>{d.style.display="block",u.style.display="none"},500)};d.addEventListener("click",()=>{i.classList.add("is-active"),i.classList.remove("is-hidden"),d.style.display="none",u.style.display="block",document.body.classList.add("modal-open")});u.addEventListener("click",m);i.addEventListener("click",e=>{e.target===i&&m()});const S=document.querySelectorAll(".modal-content .header-menu-link");S.forEach(e=>{e.addEventListener("click",m)});const E={projectList:document.querySelector(".my-projects-list"),projectsItems:document.querySelectorAll(".my-projects-item"),projectsBtn:document.querySelector(".my-project-btn")},{projectList:M,projectsItems:p,projectsBtn:v}=E;v.addEventListener("click",h);let a=0;const q=3;function h(){for(let e=0;e<q;e++){if(a>=p.length){v.style.display="none";break}p[a].classList.remove("is-hidden"),a++}}h();const k="https://portfolio-js.b.goit.study/api";async function x(){return(await y.get(`${k}/reviews`)).data}const j=document.querySelector(".swiper-wrapper");async function I(e){const s=e.map(({author:n,avatar_url:r,review:t})=>`        
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
        </li>`).join("");j.insertAdjacentHTML("beforeend",s)}const O="/techtitans/assets/sprite-f4ef88fc.svg";document.querySelector(".reviews-list");const A=document.querySelector(".list-conteiner");addEventListener("load",async()=>{try{const e=await x();I(e)}catch{const s=`
            <div class="errorContainer">
                <h3 class="not-found-title">Oops, something went wrong...😱</h3>
                <p class="not-found-text">Reviews not found..</p>
            </div>
          `;A.innerHTML=s,f.show({message:"Oops, there are issues with showing reviews!",position:"topRight",backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",timeout:5e3,closeOnClick:!0})}});new w(".mySwiper",{navigation:{nextEl:".reviews-btn-right",prevEl:".reviews-btn-left"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchEventsTarget:"container",breakpoints:{1280:{slidesPerView:2}}});const C="https://portfolio-js.b.goit.study/api",l=L.create(`
    <div class="modal js-modal-window">
    <button class="modal-close-btn">
        <svg class="modal-img">
            <use href="${O}#icon-cross"></use>
        </svg>
    </button>
        <div class="text-content-modal">
        <p class="text text-modal-first">
            Thank you for your interest in cooperation!
        </p>
        <p class="text text-modal-second">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
    </div>
        </div>
`);l.element().querySelector(".modal-close-btn").addEventListener("click",()=>{l.close()});document.querySelector(".input-text").addEventListener("blur",()=>{const e=document.querySelector(".error-message p"),s=document.querySelector(".work-together-input").querySelector('input[name="user-email"]'),n=s.value.trim(),r=document.querySelector(".work-together-input").querySelector(".error-message"),t=document.querySelector(".input-success-icon");if(T(n))s.classList.remove("invalid"),e.textContent="",r.style.display="none",t.style.display="block";else{s.classList.add("invalid"),e.textContent="Invalid email, try again",r.style.display="block",t.style.display="none",setTimeout(()=>{s.classList.remove("invalid"),e.textContent="",r.style.display="none"},5e3);return}});const P=document.querySelector(".work-together-input");P.addEventListener("submit",async e=>{e.preventDefault();const s=e.target,r=s.querySelector('input[name="user-email"]').value.trim(),o=s.querySelector('textarea[name="comments"]').value.trim();try{(await y.post(`${C}/requests`,{email:r,comment:o})).status===201&&(l.show(),s.reset(),addEventListener("keydown",function(g){g.keyCode===27&&l.close()}))}catch{f.error({class:"error",message:"Error while submitting the form, please try again.",position:"topCenter",timeout:2e3})}});function T(e){const s=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return console.log(e),s.test(e)}new b(".accordion-container",{openOnInit:[0]});
//# sourceMappingURL=commonHelpers.js.map
