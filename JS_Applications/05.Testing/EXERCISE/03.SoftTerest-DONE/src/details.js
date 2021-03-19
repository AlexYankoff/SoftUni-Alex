let section;
let main;

export function setupDetails(sectionTarget, mainTarget) {
    section = sectionTarget;
    main = mainTarget;
}

export function viewDetails(ideaId) {
    main.innerHTML = '';
    loadDetails(ideaId);
    main.appendChild(section);
    
}
async function loadDetails(ideaId) {
    let response = await fetch(`http://localhost:3030/data/ideas/${ideaId}`);
    if(response.status === 200){
        let data = await response.json();
        let idea = `            
        <img class="det-img" src="${data['img']}" />
        <div class="desc">
            <h2 class="display-5">${data['title']}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${data['description']}</p>
        </div>`;
        if(data['_ownerId'] === sessionStorage.getItem('id')){
            idea += `        
            <div class="text-center">
            <a id = ${data['_id']} class="btn detb" href="">Delete</a>
        </div>`
        }
        section.innerHTML = idea;
    }
}