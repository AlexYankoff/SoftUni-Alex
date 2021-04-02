// SET THE MAIN  BELOW
console.log('app.js started')


import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js'

import { homePage } from './views/home.js'

import {logout } from './api/data.js'
import {myPage} from './views/myview.js'
import {detailsPage} from './views/details.js'
import {createPage} from './views/create.js'
import {editPage} from './views/edit.js'
import {registerPage} from './views/register.js'
import {loginPage} from './views/login.js'
//
import * as api from './api/data.js'; // за тестване на функции
window.api = api;                      // в броузер
//
const main = document.querySelector('main')// SET IT
//
////routing table - изпълнява дадената ф-я и й подава context
page('/', decorateContext, homePage)
//page('/dashboard', decorateContext, dashboardPage); // Не ни трябва
//page('/myview', decorateContext, myPage);
page('/details/:id', decorateContext, detailsPage);// в контекста имаме и id
page('/create', decorateContext, createPage); 
page('/edit/:id', decorateContext,editPage);
//page('/register', decorateContext,registerPage);
page('/login', decorateContext, loginPage);
//
//LOGOUT
document.getElementById('logoutBtn').addEventListener('click',async () => {
    await logout();
    setUserNav() //ъпдейтваме навигацията при logout!
    page.redirect('/')
})
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
    console.log( "need to setup Nav")
    const userId = sessionStorage.getItem('userId');  //или authToken или email, едно и също е
    if (userId !=null) {
        const email = sessionStorage.getItem('email')  
        
        document.getElementById('welcome').textContent = `Welcome, ${email}`
        document.getElementById('logintBtn').style.display = 'none';
        document.getElementById('registerBtn').style.display = 'none';
        document.getElementById('logoutBtn').style.display = '';
        


    } else {
        document.getElementById('welcome').textContent = ''
        document.getElementById('logintBtn').style.display = '';
        document.getElementById('registerBtn').style.display = '';
        document.getElementById('logoutBtn').style.display = 'none';
        
    }
}




