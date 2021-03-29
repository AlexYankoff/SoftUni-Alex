//dashboard view e вместо All memes view

import { html } from '/../../node_modules/lit-html/lit-html.js'
import { getAll} from '../api/data.js'

const  dashboardTemplate = (memes) =>html `
<section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                ${memes.length == 0 ? html `<p class="no-memes">
                    No memes in database.</p>` : memes.map(memeTemplate)}
			</div>
        </section>`;


const OLDdashboardTemplate = (data) => html `
<div class="row space-top">
      ${data.map(itemTemplate)}      
</div>`;

const memeTemplate =(meme) => html `
    <div class="meme">
        <div class="card">
            <div class="info">
                <p class="meme-title">${meme.title}</p>
                <img class="meme-image" alt="meme-img" src="${meme.imageUrl}">
            </div>
            <div id="data-buttons">
                <a class="button" href="/details/${meme._id}">Details</a>
            </div>
        </div>
                </div>`;

export async function dashboardPage (ctx) {

    console.log('enter All Memes view')

    const data = await getAll()
    console.log(data) 
    ctx.render(dashboardTemplate(data))
    }