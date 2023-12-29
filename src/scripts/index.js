import '../style.css';
import { addNavbar } from './nav.js';
import { addHomePage } from './home.js'
import { addMenuPage } from "./menu.js";
import { addContactPage } from './contact.js';

function runHomePage() 
{
    homeParent.style.display = 'grid'
    contactParent.style.display = 'none'
    menuParent.style.display = 'none'
}

function runMenuPage()
{
    homeParent.style.display = 'none'
    contactParent.style.display = 'none'
    menuParent.style.display = 'grid'
}

function runContactPage()
{
    homeParent.style.display = 'none'
    menuParent.style.display = 'none'
    contactParent.style.display = 'grid'
}

// Major parent element
const content = document.querySelector('#content')

// Appending opening content to page.
content.append(addNavbar(), addHomePage(), addMenuPage(), addContactPage())

// all the parent element of each page.
const homeParent = document.querySelector('.home-page')
const menuParent = document.querySelector('.menu-page')
const contactParent = document.querySelector('.contact-page')

// Setting website non-opening content to display nothing.
menuParent.style.display = 'none'
contactParent.style.display = 'none'

// Getting all the major navbar buttons.
const homeBtn = document.querySelector('.home-button')
const menuBtn = document.querySelector('.menu-button')
const contactbtn = document.querySelector('.contact-button')

homeBtn.addEventListener('click', runHomePage)
menuBtn.addEventListener('click', runMenuPage)
contactbtn.addEventListener('click', runContactPage)




