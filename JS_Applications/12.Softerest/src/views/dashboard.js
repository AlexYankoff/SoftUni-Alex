import { html } from '/../../node_modules/lit-html/lit-html.js'
import { getItem} from '../api/data.js'

const dashboardTemplate = (data) => html `
<div id="dashboard-holder">
    ${data.length == 0 ? html `<h1>No ideas yet! Be the first one :)</h1>` : data.map(itemTemplate) }
        
`;

const itemTemplate =(item) => html `
<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
            <div class="card-body">
                <p class="card-text">${item.title}</p>
            </div>
            <img class="card-image" src="${item.img}" alt="Card image cap">
            <a class="btn" href=${`details/${item._id}`}>Details</a>
        </div>`;
const OLDdashboardTemplate = (data) => html `
<div class="row space-top">
      ${data.map(itemTemplate)}      
</div>`;

const OLDitemTemplate =(item) => html `
 <div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
                <img src=${item.img} />
                <p>${item.description}</p>
                <footer>
                    <p>Price: <span>${item.price} $</span></p>
                </footer>
                <div>
                    <a href=${`details/${item._id}`} class="btn btn-info">Details</a>
                </div>
        </div>
    </div>
</div>`;

export async function dashboardPage (ctx) {
    console.log('start dashboard.js')
    const data = await getItem()
    console.log(data)  
    ctx.render(dashboardTemplate(data))
    }