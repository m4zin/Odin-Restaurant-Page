import '../style.css';
import { addMenuPage } from "./menu.js";
import { addContactPage } from './contact.js';
import { addNavbar } from './nav.js';

// Parent Element
const content = document.querySelector('#content')

// Appending navbar content.
content.append(addNavbar())


