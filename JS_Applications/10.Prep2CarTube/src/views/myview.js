import { html } from '/../../node_modules/lit-html/lit-html.js'
import { getMy} from '../api/data.js'

const myTemplate = (data) => html `
    <section id="my-listings">
        <h1>My car listings</h1>
        ${data.length == 0 ? html `<p class="no-cars"> You haven't listed any cars yet.</p>` : data.map(itemTemplate)} 
        
    </section>`;

const itemTemplate = (item) => html `
    <div class="listings">
            <!-- Display all records -->
            <div class="listing">
                <div class="preview">
                    <img src="${item.imageUrl}">
                </div>
                <h2>${item.brand} ${item.model}</h2>
                <div class="info">
                    <div class="data-info">
                        <h3>Year: ${item.year}</h3>
                        <h3>Price: ${item.price} $</h3>
                    </div>
                    <div class="data-buttons">
                        <a href="/details/${item._id}" class="button-carDetails">Details</a>
                    </div>
                </div>
            </div>
           
            
        </div>`;

const OLDmyTemplate = (data) => html `
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
export async function myPage (ctx) {
    const data = await getMy()
    ctx.render(myTemplate(data))
    }