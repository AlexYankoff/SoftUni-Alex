const editTemplate = (context, html, item, validation) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${e => onSubmit(e, context, item._id)}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class=${"form-control" + (validation === undefined ? ""
                            : (validation.isMakeOK ? " is-valid" : " is-invalid"))}
                           id="new-make" type="text" name="make" .value=${item.make}>
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class=${"form-control" + (validation === undefined ? ""
                            : (validation.isModelOK ? " is-valid" : " is-invalid"))}
                           id="new-model" type="text" name="model" .value=${item.model}>
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class=${"form-control" + (validation === undefined ? ""
                            : (validation.isYearOK ? " is-valid" : " is-invalid"))}
                           id="new-year" type="number" name="year" .value=${item.year}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class=${"form-control" + (validation === undefined ? ""
                            : (validation.isDescriptionOK ? " is-valid" : " is-invalid"))}
                           id="new-description" type="text" name="description"
                           .value=${item.description}>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class=${"form-control" + (validation === undefined ? ""
                            : (validation.isPriceOK ? " is-valid" : " is-invalid"))}
                           id="new-price" type="number" name="price" .value=${item.price}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class=${"form-control" + (validation === undefined ? ""
                            : (validation.isUrlOK ? " is-valid" : " is-invalid"))}
                           id="new-image" type="text" name="img" .value=${item.img.substring(1)}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material" .value=${item.material}>
                </div>
                <input type="submit" class="btn btn-info" value="Edit"/>
            </div>
        </div>
    </form>
`;

function isFormDataValid(formData) {
    const isMakeOK = formData.get("make").trim().length >= 4;
    const isModelOK = formData.get("model").trim().length >= 4;
    const isYearOK = Number(formData.get("year").trim()) >= 1950 && Number(formData.get("year").trim()) <= 2050;
    const isDescriptionOK = formData.get("description").trim().length > 10;
    const isPriceOK = Number(formData.get("price").trim()) > 0;
    const isUrlOK = formData.get("img").trim().length > 0;

    return {isMakeOK, isModelOK, isYearOK, isDescriptionOK, isPriceOK, isUrlOK};
}

async function onSubmit(event, context, id) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
        _ownerId: sessionStorage.getItem("userID"),
        make: formData.get("make").trim(),
        model: formData.get("model").trim(),
        year: Number(formData.get("year").trim()),
        description: formData.get("description").trim(),
        price: Number(formData.get("price").trim()),
        img: "." + formData.get("img").trim(),
        material: formData.get("material").trim()
    }

    if (Object.values(isFormDataValid(formData)).some(validInput => validInput === false)) {
        data._id = id;
        const view = editTemplate(context, context.prepareView.html, data, isFormDataValid(formData));
        context.prepareView.setUserNavigation();
        context.prepareView.renderView(view);
        return;
    }

    await context.prepareView.dataAPI.updateFurniture(id, data);
    event.target.reset();
    context.page.redirect("/dashboard/" + id);
}

function editPage(event, context, item) {
    event.preventDefault();

    const view = editTemplate(context, context.prepareView.html, item);
    context.prepareView.setUserNavigation();
    context.prepareView.renderView(view);
}

export default editPage;