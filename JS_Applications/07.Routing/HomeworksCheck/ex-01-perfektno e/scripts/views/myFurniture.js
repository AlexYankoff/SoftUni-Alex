const myFurnitureTemplate = (context, html, items) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        ${items.map(item => itemTemplate(context, html, item))}
    </div>
`;

const itemTemplate = (context, html, item) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${item.img.substring(1)}/>
                <p>Description here</p>
                <footer>
                    <p>Price: <span>${item.price + " $"}</span></p>
                </footer>
                <div>
                    <a href=${"/dashboard/" + item._id} class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
`;

async function myFurniturePage(context) {
    const data = await context.prepareView.dataAPI.getAllMyFurniture(sessionStorage.getItem("userID"));
    const view = myFurnitureTemplate(context, context.prepareView.html, data);
    context.prepareView.setUserNavigation("profileLink");
    context.prepareView.renderView(view);
}

export default myFurniturePage;