import {setupHome, viewHome} from './home.js';
import {doLogin, setupLogin, viewLogin} from './login.js';
import {doRegister, setupRegister, viewRegister} from './register.js';
import {setupDashboard, viewDashboard} from './dashboard.js';
import {doCreateIdea, setupCreate, viewCreate} from './create.js';
import {setupNav, viewNav} from './navigation.js';
import { doLogout } from './logout.js';
import {setupDetails, viewDetails} from './details.js';
import {deleteIdea} from './delete.js';

const main = document.querySelector('main');
let activeView;

setupHome(document.querySelector('#home'), main);
setupLogin(document.querySelector('#loginSection'), main);
setupRegister(document.querySelector('#registerSection'), main);
setupDashboard(document.querySelector('#dashboard-holder'), main);
setupCreate(document.querySelector('#createSection'), main);
setupNav(document.querySelector('#navSection'), main);
setupDetails(document.querySelector('#detailSection'), main);

document.querySelector('nav').addEventListener('click', e => {
    e.preventDefault();
    if(e.target.id = 'homeLink'){
        onStart();
    }

    switch(e.target.textContent){
        case 'Dashboard': {
            viewDashboard();
            activeView = 'dashboard';
            break;
        };
        case 'Login': {
            viewLogin();
            activeView = 'login';
            break;
        };
        case 'Register': {
            viewRegister();
            activeView = 'register';
            break;
        };
        case 'Create': {
            viewCreate();
            activeView = 'create';
            break;
        };
        case 'Logout': {
            doLogout();
            onStart();
            break;
        }
    };
});

document.querySelector('main').addEventListener('click', e => {
    e.preventDefault();
    switch(activeView){
        case 'home': {
            if(e.target.textContent === 'Get Started'){
                if(sessionStorage.getItem('authToken') === null){
                    viewRegister();
                    activeView = 'register';
                }
                else {
                    viewCreate();
                    activeView = 'create';
                }
            }
            break;
        }
        case 'login': {
            if(e.target.textContent === 'Sign-Up'){
                viewRegister();
                activeView = 'register';
            }
            else if(e.target.textContent === 'Sign In'){
                doLogin(e);
            }
            break;
        }
        case 'register': {
            if(e.target.textContent === 'Sign-In'){
                viewLogin();
                activeView = 'login';
            }
            else if(e.target.textContent === 'Sign Up'){
                doRegister(e);
            }
            break;
        }
        case 'create': {
            if(e.target.textContent === 'Create'){
                doCreateIdea(e);
            }
            break;
        }
        case 'dashboard': {
            if(e.target.textContent === 'Details'){
                viewDetails(e.target.id);
                activeView = 'details';
            }
            break;
        }
        case 'details': {
            if(e.target.textContent === 'Delete'){
                let id = e.target.id;
                deleteIdea(id);
                viewDashboard();
                activeView = 'dashboard';
            }
        }
    }
})

export function onStart() {
    viewHome();
    viewNav();
    activeView = 'home';
};

export function loadDash() {
    viewDashboard();
    activeView = 'dashboard';
}

window.onload = onStart();