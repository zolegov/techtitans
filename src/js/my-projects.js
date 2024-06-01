const refMyProjectsEl = {
  projectList: document.querySelector('.my-projects-list'),
  projectsItems: document.querySelectorAll('.my-projects-item'),
  projectsBtn: document.querySelector('.my-project-btn'),
}

const { projectList, projectsItems, projectsBtn } = refMyProjectsEl;

projectsBtn.addEventListener('click', loadProjects);

let currentIndex = 0;
const itemsPerLoad = 3;

function loadProjects() {

  for (let i = 0; i < itemsPerLoad; i++) {
    if (currentIndex >= projectsItems.length) {
      projectsBtn.style.display = 'none';
      break
    }
    projectsItems[currentIndex].classList.remove('is-hidden');
    currentIndex++
  }

}

loadProjects();