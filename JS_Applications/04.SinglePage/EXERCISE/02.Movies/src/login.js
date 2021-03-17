import {showHome} from './home.js';

async function onSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let email = formData.get('email');
    let password = formData.get('password');

    let response = await fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    });
    if (response.ok) {
        event.target.reset();
        let data = await response.json();
        sessionStorage.setItem('authToken', data.accessToken);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('userId', data._id);
        document.getElementById('welcome-msg').textContent = `Welcome, ${email}`;
        [...document.getElementsByClassName('user')].forEach(l => l.style.display = 'block');
        [...document.getElementsByClassName('guest')].forEach(l => l.style.display = 'none');

        showHome();
    } else {
        let error = await response.json();
        alert(error.message);
    }

}



let main;
let section;

export function setupLogin(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    let form = section.getElementsByTagName('form')[0];
    form.addEventListener('submit', onSubmit);
}

export async function showLogin() {
    main.innerHTML = '';
    main.appendChild(section);
}

