import editPage from "/scripts/views/edit.js";

const detailsTemplate = (context, html, item) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=${item.img.substring(1)}/>
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
            ${sessionStorage.getItem("userID") === item._ownerId ? html`
                <div>
                    <a @click=${e => editPage(e, context, item)} href=${"javascript:void(0)"}
                       class="btn btn-info">Edit</a>
                    <a @click=${e => onDelete(e, context)} href=${"javascript:void(0)"} class="btn btn-red">Delete</a>
                </div>
            ` : ""}
        </div>
    </div>
`;

async function onDelete(event, context) {
    event.preventDefault();
    const isOK = confirm("Are you sure you want to delete this article?")
    if (isOK) {
        const id = context.params.id;
        await context.prepareView.dataAPI.deleteFurniture(id);
        context.page.redirect("/");
    }
}

async function detailsPage(context) {
    const id = context.params.id;
    const data = await context.prepareView.dataAPI.getFurnitureByID(id);
    const view = detailsTemplate(context, context.prepareView.html, data);
    context.prepareView.setUserNavigation();
    context.prepareView.renderView(view);
}

export default detailsPage;