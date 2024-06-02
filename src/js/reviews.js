import { getReviews } from './getReviews';
import { renderReviews } from './renderReviews';

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
  }
});
