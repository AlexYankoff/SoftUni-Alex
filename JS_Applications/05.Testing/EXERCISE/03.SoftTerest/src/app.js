// SET THE HOST BELOW
import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js'

import {logout } from './api/data.js'
import { homePage } from './views/home.js'
import { dashboardPage } from './views/dashboard.js'
import {detailsPage} from './views/details.js'
import {createPage} from './views/create.js'
import {registerPage} from './views/register.js'
import {loginPage} from './views/login.js'

import * as api from './api/data.js'; // за тестване на функции
window.api = api;                      // в броузер

const main = document.getElementById('AY') // SET IT

//routing table - изпълнява дадената ф-я и й подава context
page('/', decorateContext, homePage) // to add
page('/dashboard', decorateContext, dashboardPage); //view Controller
page('/details/:id', decorateContext, detailsPage);// в контекста имаме и id
page('/create', decorateContext, createPage); 
page('/register', decorateContext,registerPage);
page('/login', decorateContext, loginPage);

//LOGOUT
document.getElementById('Logout').addEventListener('click',async () => {
    await logout();
    setUserNav() //ъпдейтваме навигацията при logout!
    page.redirect('/')
})

setUserNav() // викаме я при стартиране, ако вече има логнат потребител

//Start application
page.start();

function decorateContext(ctx, next) {
    ctx.render = (ctx) => render(ctx, main)
    ctx.setUserNav = setUserNav
    next()
}

function setUserNav() { //!Ok
    const userId = sessionStorage.getItem('userId');
    if (userId !=null) { 
        //document.getElementById('home-icon').style.display = 'none';
        document.getElementById('Dashboard').style.display = '';
        document.getElementById('Create').style.display = ''
        document.getElementById('Logout').style.display = ''
        document.getElementById('Login').style.display = 'none'
        document.getElementById('Register').style.display = 'none'



    } else {
        document.getElementById('Dashboard').style.display = '';
        document.getElementById('Create').style.display = ''
        document.getElementById('Logout').style.display = 'none'
        document.getElementById('Login').style.display = ''
        document.getElementById('Register').style.display = ''
    }
}



