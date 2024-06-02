import axios from 'axios';
import SimpleLightbox from 'simplelightbox';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

async function postRequests() {
  const response = await axios.post(`${BASE_URL}/requests`);
    return response.data;
}

const formAll = document.querySelector('.work-together-input');
   formAll.addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.querySelector('input[name="user-email"]').value.trim();
    const comments = form.querySelector('textarea[name="comments"]').value.trim();

    try {
        const response = await axios.post(`${BASE_URL}/requests`, {
            email,
            comments
        });
        console.log(response)
        if (response.status === 201) {
            openModal();
            form.reset();
        }
    } catch (error) {
        alert('Error while submitting the form, please try again.');
    }
})

function openModal() {
    const modalContent  = `
    <div class="modaContainer">
      <h3 class="success-title">Thank you for your interest in cooperation!</h3>
      <p class="success-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
    </div>
  `;

   const lightbox = new SimpleLightbox();
  lightbox.open({
    content: modalContent,
    sourceAttr: 'src',
    showCounter: false,
    nav: false,
    close: true,
  });
}