//import modules
//grab sections
//setup modules
//setup navigation

import {setupHome, showHome} from './home.js';
import {setupDetails} from './details.js';
import {setupLogin, showLogin} from './login.js';
import {setupRegister, showRegister} from './register.js';
import {setupCreate, showCreate} from './create.js';
import {setupEdit, showEdit} from './edit.js';

let main = document.getElementsByTagName('main')[0];

let links = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
    'createLink': showCreate,
    'editLink':showEdit,

};

setupSection('home-page', setupHome);
setupSection('add-movie', setupCreate);
setupSection('movie-details', setupDetails);
setupSection('edit-movie', setupEdit);
setupSection('form-login', setupLogin);
setupSection('form-sign-up', setupRegister);

setupNavigation();

// Start application in home view
showHome();


function setupSection(sectionId, setup) {
    let section = document.getElementById(sectionId);
    setup(main, section);
}

function setupNavigation() {
    let email = sessionStorage.getItem('email')
        if (email!=null){
            document.getElementById('welcome-msg').textContent = `Welcome, ${email}`;
            [...document.getElementsByClassName('user')].forEach(l => l.style.display = 'block');
            [...document.getElementsByClassName('guest')].forEach(l => l.style.display = 'none');
        } else {
            [...document.getElementsByClassName('user')].forEach(l => l.style.display = 'none');
            [...document.getElementsByClassName('guest')].forEach(l => l.style.display = 'block');
        }

    document.querySelector('nav').addEventListener('click', (event) => {
        let view = links[event.target.id];
        if (typeof view === 'function') {
            event.preventDefault();
            view();
        }

    });
    document.getElementById('createLink').addEventListener('click', (event) => {
        event.preventDefault();
        showCreate();
    });
    document.getElementById('logoutBtn').addEventListener('click', logout)
}

async function logout(){
    let token = sessionStorage.getItem('authToken')
    let response = await  fetch('http://localhost:3030/users/logout',{
        method:'get',
        headers:{'X-Authorization':token}
    })
    if (response.ok){
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('userId');
        [...document.getElementsByClassName('user')].forEach(l => l.style.display = 'none');
        [...document.getElementsByClassName('guest')].forEach(l => l.style.display = 'block');
        showHome();
    }else {
        let error = await response.json();
        alert(error.message);
    }
}