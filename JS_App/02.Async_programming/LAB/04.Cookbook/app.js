async function loadRecepies() {
    
    const url = `http://localhost:3030/jsonstore/cookbook/recipes`
    const main = document.querySelector('main')
   
    try {
        const response = await fetch(url)

        if (response.ok == false) {
            throw new Error(response.statusText);
        }
        const recipes = await response.json()
        main.innerHTML = '';
        const recepArr = Object.values(recipes) // recepies object to arr
        recepArr.forEach(r =>{
            const result = e('article', {className: 'preview'},
            e('div', {className: 'title'}, e('h2', {}, r.name)),
            e('div', {className: 'small'}, e('img', {src: r.img})) 
            );
            result.addEventListener('click', () => {
                getDetails(r._id, result)
            })
            main.appendChild(result);
        });
        
        }  catch (error) {
            alert(error.message);
        }
            
                    
        
    

    async function getDetails(id, resultShort) {
        const urlDetails = `http://localhost:3030/jsonstore/cookbook/details/${id}`
        const detResp = await fetch(urlDetails);
        const detJson = await detResp.json()

        const resultDetailed = e('article', {},
            e('h2',{},detJson.name),
            e('div', {className: 'band'},
                e('div', {className: 'thumb'}, e('img', {src: detJson.img})),
                    e('div', {className: 'ingredients'},
                    e('ul', {}, detJson.ingredients.map(i => e('li', {}, i)))
                )
            ),
            e('div', {className: 'description'},
                e('h3', {}, 'Preparation:'),
                detJson.steps.map(s => e('p', {}, s))
            )
        );
        resultShort.parentNode.replaceChild(resultDetailed, resultShort)
        //да се създаде DOM за detailed result
        
        
        //const detResult = e('h2', {},)

    }
}
    

window.addEventListener('load', () =>{
    loadRecepies()
})



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

