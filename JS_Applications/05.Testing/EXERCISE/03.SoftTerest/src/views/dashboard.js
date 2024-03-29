import { html } from '/../../node_modules/lit-html/lit-html.js'
import { getAll} from '../api/data.js'


const dashboardTemplate = () => html `
    <div id="dashboard-holder">
        <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
            <div class="card-body">
                <p class="card-text">Dinner Recipe</p>
            </div>
            <img class="card-image" src="./images/dinner.jpg" alt="Card image cap">
            <a class="btn" href="">Details</a>
        </div>
        <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
            <div class="card-body">
                <p class="card-text">4 easy DIY ideas to try!</p>
            </div>
            <img class="card-image" src="./images/brightideacropped.jpg" alt="Card image cap">
            <a class="btn" href="">Details</a>
        </div>
        <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
            <div class="card-body">
                <p class="card-text">Best Pilates Workouts to Do at Home</p>
            </div>
            <img class="card-image" src="./images/best-pilates-youtube-workouts-2__medium_4x3.jpg" alt="Card image cap">
            <a class="btn" href="">Details</a>
        </div>
        <h1>No ideas yet! Be the first one :)</h1>
    </div> 
`;

export async function dashboardPage (ctx) {
    //const data = await getFurniture()
    console.log('dashboardPage')
    ctx.render(dashboardTemplate())
    }