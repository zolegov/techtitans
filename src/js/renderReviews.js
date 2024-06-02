import { reviewsListEl } from './reviews';

//render reviews
export async function renderReviews(reviews) {
  const markup = reviews
    .map(({ author, avatar_url, review }) => {
      return `        
    <li class="reviews-list-item">
          <p class="reviews-item">
            ${review}
          </p>
          <div class="reviews-list-conteiner">
              <img
                src="${avatar_url}"
                alt="natalia"
                width="40"
                height="40"
                class="reviews-img"
              />
            <h3 class="reviews-second-title">${author}</h3>
          </div>
        </li>`;
    })
    .join('');
  reviewsListEl.insertAdjacentHTML('beforeend', markup);
}
