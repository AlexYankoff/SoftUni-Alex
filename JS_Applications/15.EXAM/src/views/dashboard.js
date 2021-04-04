import { html } from '/../../node_modules/lit-html/lit-html.js'
import { getItem} from '../api/data.js'

// IF Display is different if no data:
    //${data.length == 0 ? html `<p class="no-memes">No memes in database.</p>`: data.map(itemTemplate)}


const dashboardTemplate = (data) => html `
    <section id="catalog-page" class="content catalogue">
            <h1>All Articles</h1>
            ${data.length == 0 ? html `<h3 class="no-articles">No articles yet</h3>`: data.map(itemTemplate)}
            
        </section>`;

const itemTemplate =(item) => html `
            <a class="article-preview" href=${`details/${item._id}`}>
                <article>
                    <h3>Topic: <span>${item.title}</span></h3>
                    <p>Category: <span>${item.category}</span></p>
                </article>
            </a>`;

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