import{a as y,i as v,S as b,b as L,A as S}from"./assets/vendor-fc5788e3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const d=document.querySelector(".burger-icon"),u=document.querySelector(".close-modal"),i=document.querySelector(".modal-header"),m=()=>{i.classList.remove("is-active"),i.classList.add("is-hidden"),document.body.classList.remove("modal-open"),setTimeout(()=>{d.style.display="block",u.style.display="none"},500)};d.addEventListener("click",()=>{i.classList.add("is-active"),i.classList.remove("is-hidden"),d.style.display="none",u.style.display="block",document.body.classList.add("modal-open")});u.addEventListener("click",m);i.addEventListener("click",e=>{e.target===i&&m()});const q=document.querySelectorAll(".modal-content .header-menu-link");q.forEach(e=>{e.addEventListener("click",m)});const E={projectList:document.querySelector(".my-projects-list"),projectsItems:document.querySelectorAll(".my-projects-item"),projectsBtn:document.querySelector(".my-project-btn")},{projectList:R,projectsItems:p,projectsBtn:f}=E;f.addEventListener("click",h);let a=0;const k=3;function h(){for(let e=0;e<k;e++){if(a>=p.length){f.style.display="none";break}p[a].classList.remove("is-hidden"),a++}}h();const x="https://portfolio-js.b.goit.study/api";async function j(){return(await y.get(`${x}/reviews`)).data}const I=document.querySelector(".swiper-wrapper");async function O(e){const o=e.map(({author:n,avatar_url:r,review:t})=>`        
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
        </li>`).join("");I.insertAdjacentHTML("beforeend",o)}const g="/techtitans/assets/sprite-f4ef88fc.svg";document.querySelector(".reviews-list");const A=document.querySelector(".list-conteiner");addEventListener("load",async()=>{try{const e=await j();O(e)}catch{const o=`
            <div class="errorContainer">
                <h3 class="not-found-title">Oops, something went wrong...😱</h3>
                <p class="not-found-text">Reviews not found..</p>
            </div>
          `;A.innerHTML=o,v.show({message:"Oops, there are issues with showing reviews!",position:"topRight",backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",timeout:5e3,closeOnClick:!0})}});const C=document.querySelector(".reviews-btn-right");C.style.backgroundColor=`${g}#icon-arrow-right`;new b(".mySwiper",{navigation:{nextEl:".reviews-btn-right",prevEl:".reviews-btn-left"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchEventsTarget:"container",breakpoints:{1280:{slidesPerView:2}}});const P="https://portfolio-js.b.goit.study/api",l=L.create(`
    <div class="modal js-modal-window">
    <button class="modal-close-btn">
        <svg class="modal-img">
            <use href="${g}#icon-cross"></use>
        </svg>
    </button>
        <div class="text-content-modal">
        <p class="text text-modal-first">
            Thank you for your interest in cooperation!
        </p>
        <p class="text text-modal-second">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
    </div>
        </div>
`);l.element().querySelector(".modal-close-btn").addEventListener("click",()=>{l.close()});document.querySelector(".input-text").addEventListener("blur",()=>{const e=document.querySelector(".error-message p"),o=document.querySelector(".work-together-input").querySelector('input[name="user-email"]'),n=o.value.trim(),r=document.querySelector(".work-together-input").querySelector(".error-message"),t=document.querySelector(".input-success-icon");if($(n))o.classList.remove("invalid"),e.textContent="",r.style.display="none",t.style.display="block";else{o.classList.add("invalid"),e.textContent="Invalid email, try again",r.style.display="block",t.style.display="none",setTimeout(()=>{o.classList.remove("invalid"),e.textContent="",r.style.display="none"},5e3);return}});const T=document.querySelector(".work-together-input");T.addEventListener("submit",async e=>{e.preventDefault();const o=e.target,r=o.querySelector('input[name="user-email"]').value.trim(),s=o.querySelector('textarea[name="comments"]').value.trim();try{(await y.post(`${P}/requests`,{email:r,comment:s})).status===201&&(l.show(),o.reset(),addEventListener("keydown",function(w){w.keyCode===27&&l.close()}))}catch{v.error({class:"error",message:"Error while submitting the form, please try again.",position:"topCenter",timeout:2e3})}});function $(e){const o=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return console.log(e),o.test(e)}new S(".accordion-container",{openOnInit:[0]});
//# sourceMappingURL=commonHelpers.js.map
