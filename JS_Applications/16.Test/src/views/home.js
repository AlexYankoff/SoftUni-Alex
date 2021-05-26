import {html} from '../../node_modules/lit-html/lit-html.js'
import {getMy} from '../api/data.js'

const homeTemplate = (data) => html `
<section id="home-page" class="content">
            <h1>Recent Articles</h1>
            <section class="recent js">
                <h2>JavaScript</h2>
                ${(data.filter(item => item.category=='JavaScript')).length>0? articleTemplate(data.filter(item => item.category=='JavaScript')[0]):html`<h3 class="no-articles">No articles yet</h3>`}
            </section>
            <section class="recent csharp">
                <h2>C#</h2>
                ${(data.filter(item => item.category=='C#')).length>0? articleTemplate(data.filter(item => item.category=='C#')[0]):html`<h3 class="no-articles">No articles yet</h3>`}
                
            </section>
            <section class="recent java">
                <h2>Java</h2>
                ${(data.filter(item => item.category=='Java')).length>0? articleTemplate(data.filter(item => item.category=='Java')[0]):html`<h3 class="no-articles">No articles yet</h3>`}
            </section>
            <section class="recent python">
                <h2>Python</h2>
                ${(data.filter(item => item.category=='Python')).length>0? articleTemplate(data.filter(item => item.category=='Python')[0]):html`<h3 class="no-articles">No articles yet</h3>`}
                
            </section>
        </section>`;


const articleTemplate= (item) => html`
    <article>
        <h3>${item.title}</h3>
        <p>${item.content}</p>
        <a href="/details/${item._id}" class="btn details-btn">Details</a>
    </article>`;
const OLDhomeTemplate = () => html `
<section id="main">
    <div id="welcome-container">
        <h1>Welcome To Car Tube</h1>
        <img class="hero" src="/images/car-png.webp" alt="carIntro">
        <h2>To see all the listings click the link below:</h2>
        <div>
            <a href="#" class="button">Listings</a>
        </div>
    </div>
</section>`;

export async function homePage (ctx) {
    console.log('start home.js')
    const data = await getMy()
    console.log(data)    
    ctx.render(homeTemplate(data))
    }