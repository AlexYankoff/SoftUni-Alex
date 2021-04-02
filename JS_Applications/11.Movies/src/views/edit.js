import {html} from '../../node_modules/lit-html/lit-html.js'
import {getItemById, editRecord} from '../api/data.js'

// DON'T FORGET TO ADD @submit =${onSubmit} to form

const editTemplate = (item, onSubmit) => html `
<section id="edit-movie">
    <form @submit =${onSubmit} class="text-center border border-light p-5" action="#" method="">
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input type="text" class="form-control" placeholder="Movie Title"  name="title" .value=${item.title}>
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Movie Description..." name="description" .value=${item.description}></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input type="text" class="form-control" placeholder="Image Url" value="" name="img" .value=${item.img}>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </section>`

const OLDeditTemplate = (item, onSubmit) => html `
<div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit = ${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" .value=${item.make}>
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model" .value=${item.model}>
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year" .value=${item.year}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" .value=${item.description}>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" .value=${item.price}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" .value=${item.img}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" .value=${item.material}>
                    </div>
                    <input type="submit" class="btn btn-info" .value="Edit" />
                </div>
            </div>
        </form>
    </div>`;

export async function editPage (ctx) {
    console.log('влиза в edit.js')
    //get by id
    const id = ctx.params.id //! от page content взимаме id
    const item = await getItemById(id)
    console.log(item)


    ctx.render(editTemplate(item, onSubmit))

    async function onSubmit(event) {
        console.log('влиза в submit')
        event.preventDefault()
        const formData = new FormData(event.target)
//       //MAKE OBJECT FROM ALL FORM FIELDS
        const data = ([...formData.entries()].reduce((a, [k,v]) => Object.assign(a, {[k]:v}), {}));
//       //VALIDATION IF ANY FIELD IS EMPTY (MATERIAL EXCLUDED)
        if  (Object.entries(data).filter(([k, v]) => k!='material').some(([k,v]) => v=='')){
            return alert('Missing data!');
        }
    console.log(data)
    await editRecord(item._id, data)

    ctx.page.redirect('/');
    }

    
    }