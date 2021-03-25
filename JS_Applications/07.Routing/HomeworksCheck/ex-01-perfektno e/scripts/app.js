import {html, render} from "/node_modules/lit-html/lit-html.js";
import page from "/node_modules/page/page.mjs";
import dataAPI from "/scripts/supporting/dataAPI.js";

import dashboardPage from "/scripts/views/dashboard.js";
import registerPage from "/scripts/views/register.js";
import loginPage from "/scripts/views/login.js";
import createPage from "/scripts/views/create.js";
import detailsPage from "/scripts/views/details.js";
import myFurniturePage from "/scripts/views/myFurniture.js";

const mainDiv = document.querySelector("div.container");
const headerNav = document.querySelector("header nav");
document.getElementById("logoutBtn").addEventListener("click", logout);

page("/", prepareView, dashboardPage);
page("/dashboard", prepareView, dashboardPage);
page("/register", prepareView, registerPage);
page("/login", prepareView, loginPage);
page("/create", prepareView, createPage);
page("/dashboard/:id", prepareView, detailsPage);
page("/my-furniture", prepareView, myFurniturePage);
page("*", prepareView, dashboardPage);
page.start();

function prepareView(context, next) {
    const renderView = (content) => render(content, mainDiv);
    context.prepareView = {html, renderView, dataAPI, setUserNavigation};
    next();
}

function setUserNavigation(currentLink) {
    const token = sessionStorage.getItem("authToken");

    if (token !== null) {
        document.getElementById("user").style.display = "inline-block";
        document.getElementById("guest").style.display = "none";
    } else {
        document.getElementById("user").style.display = "none";
        document.getElementById("guest").style.display = "inline-block";
    }

    Array.from(headerNav.querySelectorAll("a"))
        .forEach(a => a.id === currentLink ? a.classList.add("active") : a.classList.remove("active"));
}

async function logout(event) {
    event.preventDefault();
    await dataAPI.logoutUser();
    page.redirect("/");
}