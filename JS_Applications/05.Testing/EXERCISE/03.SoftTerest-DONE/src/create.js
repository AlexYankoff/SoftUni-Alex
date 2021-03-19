import {loadDash} from './app.js';

let section;
let main;

export function setupCreate(sectionTarget, mainTarget) {
    section = sectionTarget;
    main = mainTarget;
}

export function viewCreate() {
    main.innerHTML = '';
    main.appendChild(section);
}

export function doCreateIdea(e) {
    e.preventDefault();
    let title = section.querySelector('input[name=title]').value;
    let description = section.querySelector('textarea[name=description]').value;
    let img = section.querySelector('input[name=imageURL]').value;
    submitIdea({title, description, img});
    section.querySelector('input[name=title]').value = '';
    section.querySelector('textarea[name=description]').value = '';
    section.querySelector('input[name=imageURL]').value = '';
    loadDash();
};

async function submitIdea(obj) {
    let response = await fetch('http://localhost:3030/data/ideas', {
        method:'post',
        headers:{'X-Authorization': sessionStorage.getItem('authToken')},
        body: JSON.stringify(obj)
    })
}