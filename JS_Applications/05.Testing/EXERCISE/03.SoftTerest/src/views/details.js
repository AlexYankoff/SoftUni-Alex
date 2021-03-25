import {html} from '../../node_modules/lit-html/lit-html.js'
import {getItemById, deleteRecord} from '../api/data.js'

const detailsTemplate = (item, isOwner, onDelete) => html `
    <div class="container home some">
        <img class="det-img" src="./images/dinner.jpg" />
        <div class="desc">
            <h2 class="display-5">Dinner Recipe</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">There are few things as comforting as heaping bowl of pasta at the end of a long
                day. With so many easy pasta recipes out there, there's something for every palate to love. That's why
                pasta
                makes such a quick, easy dinner for your family—it's likely to satisfy everyone's cravings, due to its
                versatility.</p>
        </div>
        <div class="text-center">
            <a class="btn detb" href="">Delete</a>
        </div>
    </div>`;


export async function detailsPage (ctx) {
    const id = ctx.params.id //! от page content взимаме id
    const item = await getItemById(id)

    const userId =sessionStorage.getItem('userId')
    ctx.render(detailsTemplate(item, item._ownerId == userId ,onDelete))


    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this item?')
        if (confirmed) {
            await deleteRecord(item._id);
            ctx.page.redirect(`/`)
        }

    }
}