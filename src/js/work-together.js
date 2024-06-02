import axios from 'axios';
import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

const instance = basicLightbox.create(`
    <div class="modal js-modal-window">
    <button class="modal-close-btn">
        <svg class="modal-img">
            <use href="./img/svg/sprite.svg#icon-cross"></use>
        </svg>
    </button>
        <div class="text-content-modal">
        <p class="text text-modal-first">
            Thank you for your interest in cooperation!
        </p>
        <p class="text text-modal-second">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
    </div>
        </div>
`) 

instance.element().querySelector('.modal-close-btn').addEventListener('click', () => {
    instance.close();
})


document.querySelector('.input-text').addEventListener('blur', () => {
    const errorText = document.querySelector('.error-message p')
    const emailInput = document.querySelector('.work-together-input').querySelector('input[name="user-email"]')
    const email = emailInput.value.trim()
    const errorMessage = document.querySelector('.work-together-input').querySelector('.error-message');
    const inputSvg = document.querySelector('.input-with-svg')


    if (!validateEmail(email)) {
        emailInput.classList.add('invalid');
        errorText.textContent = 'Invalid email, try again';
        errorMessage.style.display = 'block';
        setTimeout(() => {
        emailInput.classList.remove('invalid');
        errorText.textContent = '';
            errorMessage.style.display = 'none'
            inputSvg.style.backgroundImage = 'none';
        },5000)
        return;
    } else {
        emailInput.classList.remove('invalid');
        errorText.textContent = '';
        errorMessage.style.display = 'none';
        inputSvg.style.backgroundImage = 'url("../img/svg/input-success.svg")';
    }
})


const formAll = document.querySelector('.work-together-input');
formAll.addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const emailInput = form.querySelector('input[name="user-email"]');
    const email = emailInput.value.trim();
    const commentInput = form.querySelector('textarea[name="comments"]');
    const comment = commentInput.value.trim();
    
    // const errorMessage = form.querySelector('.error-message');

    // if (!validateEmail(email)) {
    //     emailInput.classList.add('invalid');
    //     errorMessage.textContent = 'Invalid email, try again';
    //     errorMessage.style.display = 'block';
    //     return;
    // } else {
    //     emailInput.classList.remove('invalid');
    //     errorMessage.textContent = '';
    //     errorMessage.style.display = 'none';
    // }

    try {
        const response = await axios.post(`${BASE_URL}/requests`, {
            email,
            comment
        });

        if (response.status === 201) {
           instance.show()
            form.reset();
          addEventListener('keydown', function (e) {
              if (e.keyCode === 27)
                  instance.close();
	});
        }
    } catch (error) {
        iziToast.error({
        class: 'error',
        message:  'Error while submitting the form, please try again.',
        position: 'topCenter',
        timeout: 2000,
    });;
    }
})

function validateEmail(email) {
    const validNO = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    console.log(email)
    return validNO.test(email);

}
