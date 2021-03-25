//import page from "//unpkg.com/page/page.mjs";
import yage from './node_modules/page/page.mjs';
import { render } from './node_modules/lit-html/lit-html.js';
import * as api from './api.js';

import { login } from './views/login.js';
import { register } from './views/register.js';
import { dashboard } from './views/dashboard.js';
import { create } from './views/create.js';
import { myFurniture } from './views/myFurniture.js';
import { edit } from './views/edit.js';
import { catalog } from './views/catalog.js';
import { defaultPage } from './views/defaultPage.js';
import { details } from './views/details.js';

console.log('app');
const main = document.getElementsByTagName('main')[0];
console.log(main);

window.api = api;

yage('/', middleware, dashboard);
yage('/login', middleware, login);
yage('/register', middleware, register);
yage('/dashboard', middleware, dashboard);
yage('/create', middleware, create);
yage('/myFurniture', middleware, myFurniture);
yage('/edit/:id', middleware, edit);
yage('/details/:id', middleware, details);
yage('/catalog', middleware, catalog);
yage('/*', middleware, login);

yage.start();
//page.redirect('/home');
function middleware(ctx, next) {
    // console.log(pages[ctx.pathname]);
    //main.innerHTML = pages[ctx.pathname] || defaultPage;
    ctx.render = (content) => render(content, main);
    next();
}

