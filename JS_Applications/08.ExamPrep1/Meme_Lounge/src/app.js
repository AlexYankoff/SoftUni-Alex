// SET THE MAIN  BELOW
console.log('app.js started')


import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js'

import {logout } from './api/data.js'
import { homePage } from './views/home.js'
//import { dashboardPage } from './views/dashboard.js'
//import {myPage} from './views/myFurniture.js'
//import {detailsPage} from './views/details.js'
//import {createPage} from './views/create.js'
//import {editPage} from './views/edit.js'
//import {registerPage} from './views/register.js'
import {loginPage} from './views/login.js'
//
import * as api from './api/data.js'; // за тестване на функции
window.api = api;                      // в броузер
//
const main = document.querySelector('main')// SET IT
//
////routing table - изпълнява дадената ф-я и й подава context
page('/', decorateContext, homePage)
//page('/', decorateContext, dashboardPage); //view Controller
//page('/my-furniture', decorateContext, myPage);
//page('/details/:id', decorateContext, detailsPage);// в контекста имаме и id
//page('/create', decorateContext, createPage); 
//page('/edit/:id', decorateContext,editPage);
//page('/register', decorateContext,registerPage);
page('/login', decorateContext, loginPage);
page('/logout', logoutAction);
//
//LOGOUT
async function logoutAction() {
    console.log('enter logout')
    await logout();
    setUserNav() //ъпдейтваме навигацията при logout!
    page.redirect('/')
}
//
setUserNav() // викаме я при стартиране, ако вече има логнат потребител
//
//Start application
page.start();
//
function decorateContext(ctx, next) {
    console.log('enter decorate')
    ctx.render = (ctx) => render(ctx, main)
    ctx.setUserNav = setUserNav
    next()
}
//
function setUserNav() {
    
    const email = sessionStorage.getItem('email');  //или authToken или email, едно и също е
    if (email !=null) {
        document.querySelector('div.profile > span').textContent =`Welcome, ${email}`;
        document.getElementsByClassName('user')[0].style.display = '';
        document.getElementsByClassName('guest')[0].style.display = 'none'
    } else {
        document.getElementsByClassName('user')[0].style.display = 'none';
        document.getElementsByClassName('guest')[0].style.display = ''
    }
}




