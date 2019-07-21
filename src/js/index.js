import "../scss/main.scss";

// select DOM items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');



// set initial state of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){ 
    menuBtn.classList.toggle('close'); 
    menu.classList.toggle('show'); menuBranding.classList.toggle('show'); menuNav.classList.toggle('show'); 
    navItems.forEach(item => item.classList.toggle('show')); 
}

// long version

function toggleMenu1(){ 
    if (!showMenu) {
        menuBtn.classList.add('close'); 
        menu.classList.add('show'); menuBranding.classList.add('show'); menuNav.classList.add('show'); 
        navItems.forEach(item => { item.classList.add('show'); }) 

        // set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close'); menu.classList.remove('show'); menuBranding.classList.remove('show'); menuNav.classList.remove('show'); 
        navItems.forEach(item => { item.classList.remove('show'); }) 

        // set menu state
        showMenu = false;
    }
}

// container of grid images projects
const projectsContainer = document.querySelector('.projects');

projectsContainer.addEventListener('click', e => {

    // e.preventDefault();

    // closest btn light to the click event
    const modalToggle = e.target.closest('.btn-light');
 
    if (!modalToggle) return

    // select the appropriate modal 
    const selectedModal = modalToggle.parentNode.nextElementSibling;
   // and its close btn
    const closeButton = selectedModal.querySelector('.modal-close');

    selectedModal.classList.add('is-open');

    closeButton.addEventListener('click', _ => {
        selectedModal.classList.remove('is-open');
    })

    window.addEventListener('click', clickOutside);
    function clickOutside(e) {
         
        if (e.target == selectedModal) {
            //modals.style.display = 'none';
            selectedModal.classList.remove('is-open');
        }
    }
})

// console.log("Hello world, from index.js");
// console.log("process.env.NODE_ENV = ", process.env.NODE_ENV);

// import x from './tests/test';
// imports 1234 from test.js

// const num = 33;
// console.log(`Index.js here, with const ${num}; and I imported ${x} from test`);

// alert("hello from webpack");
// import afile from './modals/file';
//import modal from './modals/modals';
//import clock from './modals/modal-clock';

// all js
// navigation menu
