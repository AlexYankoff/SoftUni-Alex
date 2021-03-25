import { html } from '../node_modules/lit-html/lit-html.js';
import { editRecord, getItemById } from '../api.js';
import { validate } from './create.js';

export async function edit(ctx) {
    console.log('edit');
    const id = ctx.params.id;
    console.log(`id=${id}`);
    const data = await getItemById(id);
    //console.log(data);    
    console.log(JSON.stringify(data));
    const inputData = JSON.stringify(data);
    ctx.render(editTemlate(data, onSubmit));
    function onSubmit(e) {
        e.preventDefault();
        const form = e.target;
        if (validate(form)) {
            const formData = new FormData(form);
            const entries = ([...formData.entries()]);
            console.log(entries);
            const data = entries.reduce((acc, entry) => { const [k, v] = entry; if (k == 'year' || k == 'price') { acc[k] = +v; } else { acc[k] = v; } return acc; }, {});
            const outputData = JSON.stringify(data);
            if (outputData != inputData) {
                editRecord(id, outputData);
            }
        }
        alert(`I'm in onSubmit `);
    }

}

function editTemlate(data, onSubmit) {
    return html`<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control" id="new-make" type="text" name="make" value="${data.make}">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control is-valid" id="new-model" type="text" name="model" value="${data.model}">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control is-invalid" id="new-year" type="number" name="year" value="${data.year}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description"
                        value="${data.description}">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price" value="${data.price}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img" value="${data.img}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material" value="${data.material}">
                </div>
                <input type="submit" class="btn btn-info" value="Edit" />
            </div>
        </div>
    </form>
</div>`;
}