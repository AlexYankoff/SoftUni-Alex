import {onStart} from './app.js';

let section;
let main;

export function setupRegister(sectionTarget, mainTarget) {
    section = sectionTarget;
    main = mainTarget;
}

export function viewRegister() {
    main.innerHTML = '';
    main.appendChild(section);
}

export function doRegister(e) {
    e.preventDefault();
    let email = section.querySelector('input[name=email]');
    let password = section.querySelector('input[name=password]');
    let repPass = section.querySelector('input[name=repeatPassword]');
    if(email.value !== '' && email.checkValidity() && password.value.length >= 6 && password.value === repPass.value){
        email = email.value;
        password = password.value;
        serverRegister({email, password})
    }
    else{
        alert('Invalid email or password!')
    }
}

async function serverRegister(credentials) {
    let response = await fetch('http://localhost:3030/users/register', {
        method: 'post',
        body: JSON.stringify(credentials)
    });
    if(response.status === 200){
        let data = await response.json();
        sessionStorage.setItem('authToken', data['accessToken']);
        sessionStorage.setItem('id', data['_id']);
        sessionStorage.setItem('email', data['email'])
        section.querySelector('input[name=email]').value = '';
        section.querySelector('input[name=password]').value = '';
        section.querySelector('input[name=repeatPassword]').value = '';
        onStart();
    }
    else{
        alert('Error');
    }
}