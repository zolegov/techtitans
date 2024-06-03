import { getReviews } from './getReviews';
import { renderReviews } from './renderReviews';

// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

export const reviewsListEl = document.querySelector('.reviews-list');
const listContainerEl = document.querySelector('.list-conteiner');

addEventListener('load', async () => {
  try {
    const fetchedReviews = await getReviews();
    renderReviews(fetchedReviews);
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
});

const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.reviews-btn-right',
    prevEl: '.reviews-btn-left',
  },
  breakpoints: {
    // when window width is >= 320px
    1280: {
      slidesPerView: 2,
    },
  },
});
