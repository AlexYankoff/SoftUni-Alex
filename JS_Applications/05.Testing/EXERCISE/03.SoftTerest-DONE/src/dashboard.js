let section;
let main;

export function setupDashboard(sectionTarget, mainTarget) {
    section = sectionTarget;
    main = mainTarget;
}

export function viewDashboard() {
    main.innerHTML = '';
    loadDash();
    main.appendChild(section);
}

async function loadDash() {
    let response = await fetch('http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
    if(response.status === 200){
        section.innerHTML = '';
        let data = await response.json();
        for(let i = 0; i < data.length; i++){
            //<img class="card-image" src="${data[i]['img']}" alt="Card image cap"></img>
            let idea = ` 
            <div class="card overflow-hidden current-card details" style="width: 20rem; height: 12rem;">
            <div class="card-body">
                <p class="card-text">${data[i]['title']}</p>
            </div>
            
            <a id = "${data[i]['_id']}" class="btn" href="">Details</a>`
            section.innerHTML += idea;
        }
    }
}