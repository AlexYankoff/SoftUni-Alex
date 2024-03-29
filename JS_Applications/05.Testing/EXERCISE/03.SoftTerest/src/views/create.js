import {html} from '../../node_modules/lit-html/lit-html.js'
import {createRecord} from '../api/data.js'


const createTemplate = (onSubmit,invDesc) => html `
<div class="container home wrapper  my-md-5 pl-md-5">
        <div class=" d-md-flex flex-mb-equal ">
            <div class="col-md-6">
                <img class="responsive-ideas create" src="./images/creativity_painted_face.jpg" alt="">
            </div>
            <form class="form-idea col-md-5" action="#/create" method="post">
                <div class="text-center mb-4">
                    <h1 class="h3 mb-3 font-weight-normal">Share Your Idea</h1>
                </div>
                <div class="form-label-group">
                    <label for="ideaTitle">Title</label>
                    <input type="text" id="title" name="title" class="form-control" placeholder="What is your idea?"
                        required="" autofocus="">
                </div>
                <div class="form-label-group">
                    <label for="ideaDescription">Description</label>
                    <textarea type="text" name="description" class="form-control" placeholder="Description"
                        required=""></textarea>
                </div>
                <div class="form-label-group">
                    <label for="inputURL">Add Image</label>
                    <input type="text" id="imageURl" name="imageURL" class="form-control" placeholder="Image URL"
                        required="">

                </div>
                <button class="btn btn-lg btn-dark btn-block" type="submit">Create</button>

                <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2021.</p>
            </form>
        </div>
    </div>`;

export async function createPage (ctx) {
    ctx.render(createTemplate(onSubmit));
    
    async function onSubmit(event) {
        event.preventDefault()
        
        const formData = new FormData(event.target)

        //MAKE OBJECT FROM ALL FORM FIELDS
        const data = ([...formData.entries()].reduce((a, [k,v]) => Object.assign(a, {[k]:v}), {}));
        
        //VALIDATION IF ANY FIELD IS EMPTY (MATERIAL EXCLUDED)
        let invMake = false;
        let invModel =false;
        let invDesc = false
        let problem = false
         
        if  (Object.entries(data).filter(([k, v]) => k!='material').some(([k,v]) => v=='')){
            return alert('Missing data!');
        }
        if (data.make.length<4){
             invMake = true;
             problem = true;
            alert ('Make must be at least 4 symbols long!')
        } else {invMake = false};
        if (data.model.length<4){
            invModel = true;
            problem = true;
            alert ('Model must be at least 4 symbols long!')
        } else (invModel= false);
        if (data.year<1950 ||data.year>2050){
            alert ('Year must be between 1950 and 2050')
        }
        if (data.description.length<11){
            invDesc = true
            alert ('Description must be more than 10 symbols')
        }
        if (data.price<0){
            alert ('Price must be a positive number')
        } 
        if (problem) {
            return
        } 

    data.year = Number(data.year);
    data.price = Number(data.price); 
    await createRecord(data)

    ctx.page.redirect('/');
    }
}