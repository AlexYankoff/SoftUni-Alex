import { html } from '/../../node_modules/lit-html/lit-html.js'
import { getMy} from '../api/data.js'

const myTemplate = (data, username, email,gender) => html `
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src="/images/${gender}.png">
            <div class="user-content">
                <p>Username: ${username}</p>
                <p>Email: ${email}</p>
                <p>My memes count: ${data.length}</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">
       
             ${data.length == 0 ? html `<p class="no-memes">No memes in database.</p>` : 
            data.map(itemTemplate)}      
        </div>
    </section>`;

const itemTemplate =(item) => html `
           
    <div class="user-meme">
        <p class="user-meme-title">${item.title}</p>
        <img class="userProfileImage" alt="meme-img" src= ${item.imageUrl}>
        <a class="button" href=${`details/${item._id}`}>Details</a>
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
    console.log('start myview.js')
    const data = await getMy()
    const username = sessionStorage.getItem('username'); 
    const email = sessionStorage.getItem('email')
    const gender = sessionStorage.getItem('gender')
    ctx.render(myTemplate(data, username, email,gender))
    }