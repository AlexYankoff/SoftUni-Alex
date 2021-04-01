import {html} from '../../node_modules/lit-html/lit-html.js'
import {getItemById, deleteRecord} from '../api/data.js'

// DON'T FORGET TO ADD @click to Delete button

const detailsTemplate = (item, isOwner, onDelete) => html `
<section id="movie-example">
<div class="container">
    <div class="row bg-light text-dark">
        <h1>Movie title: ${item.title}</h1>

        <div class="col-md-8">
            <img class="img-thumbnail" src="${item.img}"
                 alt="Movie">
        </div>
        <div class="col-md-4 text-center">
            <h3 class="my-3 ">Movie Description</h3>
            <p>Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy
                with ties to her past arises. Comes on the screens 2020.</p>
            <a class="btn btn-danger" href="#">Delete</a>
            <a class="btn btn-warning" href="#">Edit</a>
            <a class="btn btn-primary" href="#">Like</a>
            <span class="enrolled-span">Liked 1</span>
        </div>
    </div>
</div>
</section>`

const OLDdetailsTemplate = (item, isOwner, onDelete) => html `
<div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src=${item.img} />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${item.make}</span></p>
                <p>Model: <span>${item.model}</span></p>
                <p>Year: <span>${item.year}</span></p>
                <p>Description: <span>${item.description}</span></p>
                <p>Price: <span>${item.price}</span></p>
                <p>Material: <span>${item.material}</span></p>
                ${isOwner ? html`
                <div>
                    <a href= ${`/edit/${item._id}`} class="btn btn-info">Edit</a>
                    <a @click=${onDelete} href='javascript:void(0)' class="btn btn-red">Delete</a>
                </div>` : ''
                }
            </div>
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
            await deleteRecord(id);
            ctx.page.redirect(`/`)
        }

    }
}