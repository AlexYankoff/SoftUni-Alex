import {showDetails} from './details.js';

let main;
let section;
let movieId;

async function getMovieById(id) {
    let response = await fetch('http://localhost:3030/data/movies/' + id);
    let data = await response.json();
    return data;
}

export function setupEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;


    let form = section.getElementsByTagName('form')[0];
    form.addEventListener('submit', (event)=>onSubmit(event,movieId));
}


export async function showEdit(id) {
    main.innerHTML = '';
    main.appendChild(section);
    let movie = await getMovieById(id);
    document.getElementById('title').value = movie.title;
    document.getElementById('description').value = movie.description;
    document.getElementById('imageUrl').value = movie.img;
    movieId = movie._id;

}


async function onSubmit(event,movieId) {
    if (movieId !== undefined) {
        event.preventDefault();
        let id = movieId
        let formData = new FormData(event.target);
        let movie = {
            title: formData.get('title'),
            description: formData.get('description'),
            img: formData.get('imageUrl'),
        };
        if (movie.title === '' || movie.description === '' || movie.img === '') {
            return alert('All fields are required!');
        }

        let response = await fetch('http://localhost:3030/data/movies/' + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('authToken')
            },
            body: JSON.stringify(movie)
        });
        if (response.ok) {
            let movie = await response.json();
            await showDetails(movie._id);
        } else {
            let error = await response.json();
            alert(error.message);
        }
    }
}