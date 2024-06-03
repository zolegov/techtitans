import{a as y,i as v,S as L,b,A as S}from"./assets/vendor-fc5788e3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const d=document.querySelector(".burger-icon"),u=document.querySelector(".close-modal"),i=document.querySelector(".modal-header"),m=()=>{i.classList.remove("is-active"),i.classList.add("is-hidden"),document.body.classList.remove("modal-open"),setTimeout(()=>{d.style.display="block",u.style.display="none"},500)};d.addEventListener("click",()=>{i.classList.add("is-active"),i.classList.remove("is-hidden"),d.style.display="none",u.style.display="block",document.body.classList.add("modal-open")});u.addEventListener("click",m);i.addEventListener("click",e=>{e.target===i&&m()});const q=document.querySelectorAll(".modal-content .header-menu-link");q.forEach(e=>{e.addEventListener("click",m)});const E={projectList:document.querySelector(".my-projects-list"),projectsItems:document.querySelectorAll(".my-projects-item"),projectsBtn:document.querySelector(".my-project-btn")},{projectList:R,projectsItems:p,projectsBtn:f}=E;f.addEventListener("click",g);let l=0;const k=3;function g(){for(let e=0;e<k;e++){if(l>=p.length){f.style.display="none";break}p[l].classList.remove("is-hidden"),l++}}g();const x="https://portfolio-js.b.goit.study/api";async function j(){return(await y.get(`${x}/reviews`)).data}const I=document.querySelector(".swiper-wrapper");async function O(e){const s=e.map(({author:n,avatar_url:r,review:t})=>`        
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
        </li>`).join("");I.insertAdjacentHTML("beforeend",s)}const h="/techtitans/assets/sprite-f4ef88fc.svg";document.querySelector(".reviews-list");const A=document.querySelector(".list-conteiner");addEventListener("load",async()=>{try{const e=await j();O(e)}catch{const s=`
            <div class="errorContainer">
                <h3 class="not-found-title">Oops, something went wrong...😱</h3>
                <p class="not-found-text">Reviews not found..</p>
            </div>
          `;A.innerHTML=s,v.show({message:"Oops, there are issues with showing reviews!",position:"topRight",backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",timeout:5e3,closeOnClick:!0})}});const C=document.querySelector(".reviews-btn-right");C.style.backgroundColor=`${h}#icon-arrow-right`;new L(".mySwiper",{navigation:{nextEl:".reviews-btn-right",prevEl:".reviews-btn-left"},breakpoints:{1280:{slidesPerView:2}}});const P="https://portfolio-js.b.goit.study/api",a=b.create(`
    <div class="modal js-modal-window">
    <button class="modal-close-btn">
        <svg class="modal-img">
            <use href="${h}#icon-cross"></use>
        </svg>
    </button>
        <div class="text-content-modal">
        <p class="text text-modal-first">
            Thank you for your interest in cooperation!
        </p>
        <p class="text text-modal-second">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
    </div>
        </div>
`);a.element().querySelector(".modal-close-btn").addEventListener("click",()=>{a.close()});document.querySelector(".input-text").addEventListener("blur",()=>{const e=document.querySelector(".error-message p"),s=document.querySelector(".work-together-input").querySelector('input[name="user-email"]'),n=s.value.trim(),r=document.querySelector(".work-together-input").querySelector(".error-message"),t=document.querySelector(".input-with-svg");if(T(n))s.classList.remove("invalid"),e.textContent="",r.style.display="none",t.style.backgroundImage='url("../img/svg/input-success.svg")';else{s.classList.add("invalid"),e.textContent="Invalid email, try again",r.style.display="block",setTimeout(()=>{s.classList.remove("invalid"),e.textContent="",r.style.display="none",t.style.backgroundImage="none"},5e3);return}});const $=document.querySelector(".work-together-input");$.addEventListener("submit",async e=>{e.preventDefault();const s=e.target,r=s.querySelector('input[name="user-email"]').value.trim(),o=s.querySelector('textarea[name="comments"]').value.trim();try{(await y.post(`${P}/requests`,{email:r,comment:o})).status===201&&(a.show(),s.reset(),addEventListener("keydown",function(w){w.keyCode===27&&a.close()}))}catch{v.error({class:"error",message:"Error while submitting the form, please try again.",position:"topCenter",timeout:2e3})}});function T(e){const s=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return console.log(e),s.test(e)}new S(".accordion-container",{openOnInit:[0]});
//# sourceMappingURL=commonHelpers.js.map
