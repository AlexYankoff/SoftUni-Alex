import {showHome} from './home.js';

async function onSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('repeatPassword');

    if (email == '' || password == '') {
        return alert('All fields are required!');
    } else if (password !== rePass) {
        return alert('Passwords dont match!')

    }

    let response = await fetch('http://localhost:3030/users/register', {
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

export function setupRegister(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    let form = section.getElementsByTagName('form')[0];
    form.addEventListener('submit', onSubmit);
}

export async function showRegister() {
    main.innerHTML = '';
    main.appendChild(section);
}