let nav;
let guestLinks;
let userLinks;
let allLinks;

export function setupNav(navTarget) {
    nav = navTarget;
    allLinks = nav.querySelectorAll('.nav-item-all');
    guestLinks = nav.querySelectorAll('.nav-item-guest');
    userLinks = nav.querySelectorAll('.nav-item-user');
}

export function viewNav() {
    navCheck();
}


function navCheck() {
    nav.innerHTML = '';
    if(sessionStorage.getItem('authToken') === null){
        allLinks.forEach(e => nav.appendChild(e));
        guestLinks.forEach(e => nav.appendChild(e));
    }
    else {
        allLinks.forEach(e => nav.appendChild(e));
        userLinks.forEach(e => nav.appendChild(e));
    }
    nav.style.display = '';
}