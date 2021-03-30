import { html } from '/../../node_modules/lit-html/lit-html.js'
import { getMy} from '../api/data.js'

const myTemplate = (data) => html `
<div class="row space-top">
      ${data.map(itemTemplate)}      
</div>`;

const itemTemplate =(item) => html `
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