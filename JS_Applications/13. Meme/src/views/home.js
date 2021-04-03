import {html} from '../../node_modules/lit-html/lit-html.js'

const homeTemplate = () => html `
<section id="welcome">
            <div id="welcome-container">
                <h1>Welcome To Meme Lounge</h1>
                <img src="/images/welcome-meme.jpg" alt="meme">
                <h2>Login to see our memes right away!</h2>
                <div id="button-div">
                    <a href="/login" class="button">Login</a>
                    <a href="/register" class="button">Register</a>
                </div>
            </div>
        </section>
`;

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
        
    ctx.render(homeTemplate())
    }