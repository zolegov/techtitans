import { getReviews } from './getReviews';
import { renderReviews } from './renderReviews';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import Swiper from 'swiper';

import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
export const reviewsListEl = document.querySelector('.reviews-list');
const listContainerEl = document.querySelector('.list-conteiner');

async function onLoad() {
  try {
    const fetchedReviews = await getReviews();
    renderReviews(fetchedReviews);

    removeEventListener('load', onLoad);
  } catch (error) {
    const errorContainer = `
            <div class="errorContainer">
                <h3 class="not-found-title">Oops, something went wrong...😱</h3>
                <p class="not-found-text">Reviews not found..</p>
            </div>
          `;
    listContainerEl.innerHTML = errorContainer;

    iziToast.show({
      message: 'Oops, there are issues with showing reviews!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      transitionIn: 'bounceInDown',
      transitionOut: 'fadeOutUp',
      theme: 'dark',
      timeout: 5000,
      closeOnClick: true,
    });
  }
}

addEventListener('load', onLoad);

const swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.reviews-btn-right',
    prevEl: '.reviews-btn-left',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: true,
  touchEventsTarget: 'container',
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    // when window width is >= 320px
    1280: {
      slidesPerView: 2,
    },
    onlyInViewPort: true,
    autoHeight: true,
  },
});
