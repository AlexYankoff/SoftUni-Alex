import {html} from '../../node_modules/lit-html/lit-html.js'
import {createRecord} from '../api/data.js'

const createTemplate = (onSubmit,invDesc) => html `
    <section id="create-listing">
        <div class="container">
            <form @submit = ${onSubmit} id="create-form">
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr>
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand">
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model">
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description">
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year">
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl">
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price">
                <hr>
                <input type="submit" class="registerbtn" value="Create Listing">
            </form>
        </div>
    </section>`;

const OLDcreateTemplate = (onSubmit,invDesc) => html `
<div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit =${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year">
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

export async function createPage (ctx) {
    ctx.render(createTemplate(onSubmit));
   
    async function onSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)

        const data = {
            brand:formData.get('brand'),
            model:formData.get('model'),
            description:formData.get('description'),
            year: Number(formData.get('year')),
            imageUrl:formData.get('imageUrl'),
            price: Number(formData.get('price'))
        }

        if  (data.brand == '' || data.model =='' || 
             data.description == '' || data.imageUrl ==''){
            return alert('Missing data!');
        }
        if (data.year<=0 || data.price <=0) {
            return alert('Year and price should be positive numbers!')
        }
    
    await createRecord(data)

    ctx.page.redirect('/dashboard');
    }
    
}