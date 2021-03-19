import {onStart} from './app.js';

let section;
let main;

export function setupLogin(sectionTarget, mainTarget) {
    section = sectionTarget;
    main = mainTarget;
}

export function viewLogin() {
    main.innerHTML = '';
    main.appendChild(section);
}

export async function doLogin(e) {
    e.preventDefault();
    let email = section.querySelector('[name=email][class=form-control]').value;
    let password = section.querySelector('[name=password][class=form-control]').value;
    let response = await fetch('http://localhost:3030/users/login', {
        method:'post',
        body:JSON.stringify({email, password})
    })
    if(response.ok){
        let data = await response.json();
        sessionStorage.setItem('authToken', data['accessToken']);
        sessionStorage.setItem('id', data['_id']);
        sessionStorage.setItem('email', data['email'])
        section.querySelector('[name=email][class=form-control]').value = '';
        section.querySelector('[name=password][class=form-control]').value = '';
        onStart();
    }
    else{
        alert('Error');
    }
}