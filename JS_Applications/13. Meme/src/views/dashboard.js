import { html } from '/../../node_modules/lit-html/lit-html.js'
import { getItem} from '../api/data.js'

const dashboardTemplate = (data) => html `
<section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                ${data.length == 0 ? html `<p class="no-memes">No memes in database.</p>`: data.map(itemTemplate)}
			</div>
        </section>
`;
const itemTemplate =(item) => html `
                <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${item.title}</p>
                            <img class="meme-image" alt="meme-img" src=${item.imageUrl}>
                        </div>
                        <div id="data-buttons">
                            <a class="button" href=${`details/${item._id}`}>Details</a>
                        </div>
                    </div>
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