import { html } from '/../../node_modules/lit-html/lit-html.js'
import { getMyFurniture} from '../api/data.js'

const myTemplate =(data,email, username, gender, length) => html `
    <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/${gender}.png">
                <div class="user-content">
                    <p>Username: ${username}</p>
                    <p>Email: ${email}</p>
                    <p>My memes count: ${length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                <!-- Display : All created memes by this user (If any) --> 
                ${length ==0 ? html`<p class="no-memes">No memes in database.</p>` : data.map(memeTemplate) }
                
            </div>
        </section>`;

const memeTemplate = (meme) => html`
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
        <a class="button" href="/details/${meme._id}">Details</a>
    </div>`;


export async function myPage (ctx) {
    const email = sessionStorage.getItem('email')
    const gender = sessionStorage.getItem('gender')
    const username = sessionStorage.getItem('username')

    const data = await getMyFurniture()
    const length = data.length
    console.log(data)
    console.log('mylength:'+length)
    ctx.render(myTemplate(data,email, username, gender, length))
    }