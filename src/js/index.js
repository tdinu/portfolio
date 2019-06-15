// import img from '../img/'
import "../scss/main.scss";
console.log("Hello world, from index.js");
console.log("process.env.NODE_ENV = ", process.env.NODE_ENV);

import x from './tests/test';
// imports 1234 from test.js

const num = 33;
console.log(`Index.js here, with const ${num}; and I imported ${x} from test`);

// alert("hello from webpack");
import afile from './modals/file';

// all js
// navigation menu

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

