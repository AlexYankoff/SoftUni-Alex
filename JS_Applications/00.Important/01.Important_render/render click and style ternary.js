const searchTemplate =(data, match) => html`
<div id="towns">
            <ul>
                ${data.map(city=> liEl(city,match))};
            </ul>
        </div>
        <input type="text" id="searchText" />
        <button @click = ${search}>Search</button>
        <div id="result">${countMatces(data, match)}</div>`;

const liEl = (city,match) => html  `<li class= ${(match&&city.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}>${city}</li>`

let result = searchTemplate(towns, match);
const root = document.getElementById('towns');
render(result,root);