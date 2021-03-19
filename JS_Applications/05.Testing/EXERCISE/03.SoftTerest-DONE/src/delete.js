import {loadDash} from './app.js';

export async function deleteIdea(ideaId) {
    let response = await fetch(`http://localhost:3030/data/ideas/${ideaId}`, {
        method: 'delete',
        headers:{'X-Authorization': sessionStorage.getItem('authToken')}
    })
    if(response.status === 200){
        loadDash();
    }
    else{
        alert('ERROR')
    }
}