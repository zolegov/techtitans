const burgerIcon = document.querySelector('.burger-icon');
const closeModal = document.querySelector('.close-modal');
const modalHeader = document.querySelector('.modal-header');

const closeModalFunction = () => {
  modalHeader.classList.remove('is-active');
  modalHeader.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  setTimeout(() => {
    burgerIcon.style.display = 'block';
    closeModal.style.display = 'none';
  }, 500);
};

burgerIcon.addEventListener('click', () => {
  modalHeader.classList.add('is-active');
  modalHeader.classList.remove('is-hidden');
  burgerIcon.style.display = 'none';
  closeModal.style.display = 'block';
  document.body.classList.add('modal-open');
});

closeModal.addEventListener('click', closeModalFunction);

modalHeader.addEventListener('click', e => {
  if (e.target === modalHeader) {
    closeModalFunction();
  }
});

const modalLinks = document.querySelectorAll(
  '.modal-content .header-menu-link'
);
modalLinks.forEach(link => {
  link.addEventListener('click', closeModalFunction);
});

// switcher
const themeChangeCheckbox = document.querySelector('.switch-theme-checkbox');
const themeChangeCheckboxWrapper = document.querySelector(
  '.switch-theme-wrapper'
);
const body = document.querySelector('body');
const key = 'theme';

const getCurrentTheme = localStorage.getItem(key);

//checks the Local Storage which theme is set
addEventListener('load', () => {
  if (getCurrentTheme === 'dark') {
    body.classList.add('dark');
    themeChangeCheckbox.checked = true;
  }

  if (getCurrentTheme === 'light') {
    body.classList.add('light');
    themeChangeCheckbox.checked = false;
  }
});

//Changes the theme and sets it on localStorage
themeChangeCheckbox.addEventListener('click', () => {
  if (themeChangeCheckbox.checked === true) {
    localStorage.setItem(key, 'dark');
    body.classList.add('dark');
    body.classList.remove('light');
    themeChangeCheckbox.checked = true;
    return;
  } else {
    localStorage.setItem(key, 'light');
    body.classList.remove('dark');
    body.classList.add('light');
    themeChangeCheckbox.checked = false;
    return;
  }
});
