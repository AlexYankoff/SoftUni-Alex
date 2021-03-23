// SET THE HOST BELOW
import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js'

import {logout } from './api/data.js'
import { dashboardPage } from './views/dashboard.js'
import {myPage} from './views/myFurniture.js'
import {detailsPage} from './views/details.js'
import {createPage} from './views/create.js'
import {editPage} from './views/edit.js'
import {registerPage} from './views/register.js'
import {loginPage} from './views/login.js'

import * as api from './api/data.js';


window.api = api;

const main = document.querySelector('.container')// SET IT

//routing table - изпълнява дадената ф-я и й подава context
page('/', decorateContext, dashboardPage); //view Controller
page('/my-furniture', decorateContext, myPage);
page('/details/:id', decorateContext, detailsPage);// в контекста имаме и id
page('/create', decorateContext, createPage); 
page('/edit/:id', decorateContext,editPage);
page('/register', decorateContext,registerPage);
page('/login', decorateContext, loginPage);

//LOGOUT
document.getElementById('logoutBtn').addEventListener('click',async () => {
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

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId !=null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none'
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block'
    }
}



