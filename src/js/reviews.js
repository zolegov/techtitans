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
                <h3 class="not-found-title">Not Found...</h3>
            </div>
          `;
    listContainerEl.innerHTML = errorContainer;
  }
});
