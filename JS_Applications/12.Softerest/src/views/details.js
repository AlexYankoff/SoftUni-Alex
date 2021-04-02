import {html} from '../../node_modules/lit-html/lit-html.js'
import {getItemById, deleteRecord} from '../api/data.js'

// DON'T FORGET TO ADD @click to Delete button

const detailsTemplate = (item, isOwner, onDelete) => html `
<div class="container home some">
        <img class="det-img" src="../.${item.img}" />
        <div class="desc">
            <h2 class="display-5">${item.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${item.description}</p>
        </div>
        <div class="text-center">
        ${isOwner ? html`
            <a @click=${onDelete} href='javascript:void(0)' class="btn detb" >Delete</a>
        </div>` : ''};
    </div>
`;

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
    console.log('start details.js')
    const id = ctx.params.id //! от page content взимаме id
    const item = await getItemById(id)

    const userId =sessionStorage.getItem('userId')
    ctx.render(detailsTemplate(item, item._ownerId == userId ,onDelete))


    async function onDelete() {
        console.log('start onDelete')
        const confirmed = confirm('Are you sure you want to delete this item?')
        if (confirmed) {
            await deleteRecord(id);
            ctx.page.redirect(`/dashboard`)
        }

    }
}