//import modules
//grab sections
//setup modules
//setup navigation


import {setupHome, showHome} from './home.js';
import {setupDetails} from './details.js';
import {setupLogin, showLogin} from './login.js';
import {setupRegister, showRegister} from './register.js';
import {setupCreate, showCreate} from './create.js';
import {setupEdit} from './edit.js';

const main = document.querySelector('main');

const links = {
    'homeLink':showHome,
    'loginLink':showLogin,
    'registerLink':showRegister,
    'createLink':showCreate
};

setupSection('home-page', setupHome);
setupSection('add-movie', setupCreate);
setupSection('movie-details', setupDetails);
setupSection('form-login', setupLogin);
setupSection('form-sign-up', setupRegister);

function setupSection(sectionId, setup) {
    const section = document.getElementById(sectionId);
    setup(main,section)
}

setupNavigation();

//Start application in home view
showHome()

function setupNavigation() {
    document.querySelector('nav').addEventListener('click', (event) => {
        
        if(event.target.tagName == "A") {
            const view = links[event.target.id];
            if(typeof view == 'function') {
                view()
                
            }
        }
    })
}


