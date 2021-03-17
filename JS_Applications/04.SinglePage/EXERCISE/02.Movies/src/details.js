
import {showHome} from './home.js';
import {showEdit} from './edit.js';

async function getLikesByMovieId(id) {
    let response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    let data = await response.json();
    return data;
}

async function getOwnLikesByMovieId(id) {
    let userId = sessionStorage.getItem('userId');
    let response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22 `);
    let data = await response.json();
    return data;
}

async function getMovieById(id) {
    let response = await fetch('http://localhost:3030/data/movies/' + id);
    let data = await response.json();
    return data;
}

function createMovieCard(movie, likes, ownLike) {

    let controls = el('div', {className: 'col-md-4 text-center'},
        el('h3', {className: 'my-3'}, 'Movie Description'),
        el('p', {}, movie.description),
    );

    let userId = sessionStorage.getItem('userId');
    if (userId != null) {
        if (userId === movie._ownerId) {
            controls.appendChild(el('a', {
                className: 'btn btn-danger',
                href: '#',
                onClick: (event) => onDelete(event, movie._id)
            }, 'Delete'));
            controls.appendChild(el('a', {className: 'btn btn-warning', href: '#',onClick:()=>showEdit(movie._id)}, 'Edit'));
        } else if (ownLike.length == 0) {
            controls.appendChild(el('a', {className: 'btn btn-primary', href: '#', onClick: likeMovie}, 'Like'));
        }
    }
    let likesSpan = el('span', {className: 'enrolled-span'}, likes + 'like' + (likes === 1 ? '' : 's'));
    controls.appendChild(likesSpan);


    let element = document.createElement('div');
    element.className = 'container';
    element.appendChild(el('div', {className: "row bg-light text-dark"},
        el('h1', {}, `Movie title: ${movie.title}`),
        el('div', {className: "col-md-8"}, el('img', {className: 'img-thumbnail', src: `${movie.img}`})),
        controls
    ));

    return element;

    async function likeMovie(event) {
        let response = await fetch('http://localhost:3030/data/likes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('authToken')
            },
            body: JSON.stringify({movieId: movie._id})
        });
        if (response.ok) {
            event.target.remove();
            likes++;
            likesSpan.textContent = likes + 'like' + (likes === 1 ? '' : 's');
        }
    }
}

let main;
let section;

export function setupDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showDetails(id) {
    section.innerHTML = 'Loading&hellip;';
    main.innerHTML = '';
    main.appendChild(section);

    let [movie, likes, ownLike] = await Promise.all([
        getMovieById(id),
        getLikesByMovieId(id),
        getOwnLikesByMovieId(id),
    ]);
    let card = createMovieCard(movie, likes, ownLike);
    section.innerHTML = '';
    section.appendChild(card);

}


function el(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) === 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}

async function onDelete(event, id) {
    event.preventDefault();
    let confirmed = confirm('Are you sure you want to delete this movie?');
    if (confirmed) {
        let response = await fetch('http://localhost:3030/data/movies/' + id, {
            method: 'delete',
            headers: {
                'X-Authorization': sessionStorage.getItem('authToken')
            }
        });
        if (response.ok) {
            alert('Movie deleted!');
            showHome();
        }else {
            let error = await response.json();
            alert(error.message);
        }
    }

}