function attachEvents() {

    document.getElementsByClassName('add')[0].addEventListener('click',addCath);
    document.getElementsByClassName('load')[0].addEventListener('click',loadCathes);
    document.getElementById('catches').addEventListener('click', manipulate);


}
loadCathes();
attachEvents();
//CHANGE buttons when token exists
const token = sessionStorage.getItem('userToken');

if (token !=null) {
    document.getElementsByClassName('add')[0].disabled =false;
}

async function getCatches() {
    const response = await fetch('http://localhost:3030/data/catches');
    const catches = await response.json();

    return catches;
}
async function manipulate(ev) {
    if(ev.target.className == 'delete') {
        const catchId = ev.target.parentNode.id;
        console.log(ev.target)
        
        await fetch('http://localhost:3030/data/catches/'+catchId, {
            method:'delete',
            headers: {'X-Authorization': token}
            
        });
        loadCathes();
        
    } else if(ev.target.className == 'update') {
        const catchId = ev.target.parentNode.id
        const angler = ev.target.parentNode.getElementsByClassName('angler')[0].value;
        const weight = ev.target.parentNode.getElementsByClassName('weight')[0].value;
        const species = ev.target.parentNode.getElementsByClassName('species')[0].value;
        const location = ev.target.parentNode.getElementsByClassName('location')[0].value;
        const bait = ev.target.parentNode.getElementsByClassName('bait')[0].value;
        const captureTime = ev.target.parentNode.getElementsByClassName('captureTime').value;

        await fetch('http://localhost:3030/data/catches/'+catchId, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body:JSON.stringify({angler, weight, species, location, bait, captureTime})
        })
        loadCathes();
}
}

async function addCath(){

    const angler = document.querySelector('#addForm .angler').value;
    const weight = document.querySelector('#addForm .weight').value;
    const species = document.querySelector('#addForm .species').value;
    const location = document.querySelector('#addForm .location').value;
    const bait = document.querySelector('#addForm .bait').value;
    const captureTime = document.querySelector('#addForm .captureTime').value;

         
    const token = sessionStorage.getItem('userToken');

    const response = await fetch('http://localhost:3030/data/catches ', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body:JSON.stringify({angler, weight, species, location, bait, captureTime})

    })
    if (response.ok == false) {
        const error = await response.json();
        return alert(error.message)
    }
    //window.location.pathname='index.html'
    document.querySelector('#addForm .angler').value ='';
    document.querySelector('#addForm .weight').value ='';
    document.querySelector('#addForm .species').value ='';
    document.querySelector('#addForm .location').value ='';
    document.querySelector('#addForm .bait').value ='';
    document.querySelector('#addForm .captureTime').value ='';
    loadCathes()
}

function createOneCatchElem(object) {
    const [_ownerId, angler,weight,species,location,bait,captureTime,idTo,oneMore] = object
    
    const oneCatch = e('div',{id:oneMore, className:'catch'},
        e('label',{},'Angler'),
        e('input',{className:'angler', type:'text', value:angler}),
        e('hr'),
        e('label',{},'Weight'),
        e('input', {className:'weight',value:weight}),
        e('hr'),
        e('label', {}, 'Species'),
        e('input', {className:'species', type:'text',value:species}),
        e('hr'),
        e('label',{}, 'Location'),
        e('input',{className:'location',type:'text',value:location}),
        e('hr'),
        e('label', {}, 'Bait'),
        e('input', {className:'bait',type:'text',value:bait}),
        e('hr'),
        e('label',{}, 'Capture Time'),
        e('input',{className:'captureTime',value:captureTime}),
        e('hr'),
        e('BUTTON', {className:'update', disabled:true},'Update'),
        e('BUTTON',{className:'delete',disabled:true},'Delete'))


        if(_ownerId == sessionStorage.id){
            oneCatch.getElementsByClassName('update')[0].disabled=false
            oneCatch.getElementsByClassName('delete')[0].disabled=false
        }

        document.getElementById('catches').append(oneCatch)
      
    }

async function loadCathes(){
    const catchesList = await getCatches()
       
    document.getElementById('catches').innerHTML = ''
    // create HTML div for every catcher
    catchesList.forEach(el =>createOneCatchElem(Object.values(el)))
    
}

//function universal create Element
function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
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
