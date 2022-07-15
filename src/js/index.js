import '../scss/main.scss';

// select DOM items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
// container of grid images projects
const projectsContainer = document.querySelector('.projects');

// set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle('close');
  menu.classList.toggle('show');
  menuBranding.classList.toggle('show');
  menuNav.classList.toggle('show');
  navItems.forEach(item => item.classList.toggle('show'));
}

if (projectsContainer) {
  projectsContainer.addEventListener('click', e => {
    // closest btn light to the click event
    const modalToggle = e.target.closest('.btn-light');

    if (!modalToggle) return;

    // select the appropriate modal
    const selectedModal = modalToggle.parentNode.nextElementSibling;
    // and its close btn
    const closeButton = selectedModal.querySelector('.modal-close');

    selectedModal.classList.add('is-open');

    closeButton.addEventListener('click', _ => {
      selectedModal.classList.remove('is-open');
    });

    window.addEventListener('click', clickOutside);
    function clickOutside(e) {
      if (e.target == selectedModal) {
        //modals.style.display = 'none';
        selectedModal.classList.remove('is-open');
      }
    }
  });
}

// long version

// function toggleMenu1() {
//   if (!showMenu) {
//     menuBtn.classList.add('close');
//     menu.classList.add('show');
//     menuBranding.classList.add('show');
//     menuNav.classList.add('show');
//     navItems.forEach(item => {
//       item.classList.add('show');
//     });

//     // set menu state
//     showMenu = true;
//   } else {
//     menuBtn.classList.remove('close');
//     menu.classList.remove('show');
//     menuBranding.classList.remove('show');
//     menuNav.classList.remove('show');
//     navItems.forEach(item => {
//       item.classList.remove('show');
//     });

//     // set menu state
//     showMenu = false;
//   }
// }
