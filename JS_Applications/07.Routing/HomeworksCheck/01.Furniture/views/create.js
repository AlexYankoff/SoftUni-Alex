import { html } from '../node_modules/lit-html/lit-html.js';
import { createRecord } from '../api.js';

export async function create(ctx) {
    console.log('create');
    ctx.render(createTemlate(onSubmit));
    async function onSubmit(e) {
        e.preventDefault();
        const form = e.target;

        if (validate(form));
        const formData = new FormData(form);
        const entries = ([...formData.entries()]);
        console.log(entries);
        const data = entries.reduce((acc, entry) => { const [k, v] = entry; if (k == 'year' || k == 'price') { acc[k] = +v; } else { acc[k] = v; } return acc; }, {});
        console.log(JSON.stringify(data));
        const info = await createRecord(data);
        console.log('info: ');
        console.log(info);
        ctx.page.redirect('/');
    }
}
export function validate(form) {
    let output = 1;
    const formData = new FormData(form);
    const entries = ([...formData.entries()]);
    console.log(entries);
    if (entries.filter(el => el[0] != 'material').map(e => e[1]).some(x => x.trim() == '')) return alert('empty fields are not allowed');
    const make = formData.get('make');
    const model = formData.get('model');
    const year = Number(formData.get('year'));
    const description = formData.get('description');
    const price = +formData.get('price');
    if (make.length < 4) {
        form.elements['make'].classList.add("is-invalid"); output *= 0;
    } else {
        form.elements['make'].classList.remove("is-invalid");
        form.elements['make'].classList.add("is-valid");
    }
    if (model.length < 4) {
        form.elements['model'].classList.add("is-invalid"); output *= 0;
    } else {
        form.elements['model'].classList.remove("is-invalid");
        form.elements['model'].classList.add("is-valid");
    }
    if (year > 2050 || year < 1950) {
        form.elements['year'].classList.add("is-invalid"); output *= 0;
    } else {
        form.elements['year'].classList.remove("is-invalid");
        form.elements['year'].classList.add("is-valid");
    }
    if (description.length < 10) {
        form.elements['description'].classList.add("is-invalid"); output *= 0;
    } else {
        form.elements['description'].classList.remove("is-invalid");
        form.elements['description'].classList.add("is-valid");
    }
    if (typeof price != 'number' || +price <= 0) {
        form.elements['price'].classList.add("is-invalid"); output *= 0;
    } else {
        form.elements['price'].classList.remove("is-invalid");
        form.elements['price'].classList.add("is-valid");
    }
    return !!output;
}

function createTemlate(onSubmit) {
    return html`<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit="${onSubmit}>
    <div class=" row space-top">
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="new-make">Make</label>
            <input class="form-control valid" id="new-make" type="text" name="make">
        </div>
        <div class="form-group has-success">
            <label class="form-control-label" for="new-model">Model</label>
            <input class="form-control is-valid" id="new-model" type="text" name="model">
        </div>
        <div class="form-group has-danger">
            <label class="form-control-label" for="new-year">Year</label>
            <input class="form-control is-invalid" id="new-year" type="number" name="year" @change="${onYearChange}">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-description">Description</label>
            <input class="form-control" id="new-description" type="text" name="description">
        </div>
    </div>
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="new-price">Price</label>
            <input class="form-control" id="new-price" type="number" name="price">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-image">Image</label>
            <input class="form-control" id="new-image" type="text" name="img">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-material">Material (optional)</label>
            <input class="form-control" id="new-material" type="text" name="material">
        </div>
        <input type="submit" class="btn btn-primary" value="Create" />
    </div>
    </div>
</form>`;
}



function onYearChange(e) {
    const year = +e.target.value;
    if (year > 2050 || year < 1950) {
        e.target.classList.add("is-invalid");
    } else {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
    }
}