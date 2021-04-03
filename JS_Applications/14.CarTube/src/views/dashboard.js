import { html } from '/../../node_modules/lit-html/lit-html.js'
import { getItem} from '../api/data.js'

// IF Display is different if no data:
    //${data.length == 0 ? html `<p class="no-memes">No memes in database.</p>`: data.map(itemTemplate)}

const dashboardTemplate = (data) => html `
<section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
                ${data.length ==0 ? html `<p class="no-cars">No cars in database.</p>` :
                                    data.map(itemTemplate)};
                </div>`;

const OLDdashboardTemplate = (data) => html `
<div class="row space-top">
      ${data.map(itemTemplate)}      
</div>`;

const itemTemplate =(item) => html `
                <div class="listing">
                    <div class="preview">
                        <img src=${item.imageUrl}>
                    </div>
                    <h2>${item.brand} ${item.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${item.year}</h3>
                            <h3>Price: ${item.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href=${`details/${item._id}`} class="button-carDetails">Details</a>
                        </div>
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