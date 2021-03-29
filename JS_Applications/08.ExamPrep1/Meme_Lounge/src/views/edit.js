import {html} from '../../node_modules/lit-html/lit-html.js'
import {getItemById, editRecord} from '../api/data.js'

const editTemplate =(item, onSubmit) => html `
<section id="edit-meme">
            <form @submit = ${onSubmit} id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text"  name="title" .value=${item.title}>
                    <label for="description">Description</label>
                    <textarea id="description"  name="description" .value=${item.description}>
                             
                        </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text"  name="imageUrl" .value=${item.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>`;


export async function editPage (ctx) {
    console.log('влиза в edit')
    
    //get by id
    const id = ctx.params.id //! от page content взимаме id
    const item = await getItemById(id)
    
    ctx.render(editTemplate(item, onSubmit))

    async function onSubmit(event) {
        event.preventDefault()
        
        const formData = new FormData(event.target)

        //MAKE OBJECT FROM ALL FORM FIELDS
        const data = ([...formData.entries()].reduce((a, [k,v]) => Object.assign(a, {[k]:v}), {}));

        //VALIDATION IF ANY FIELD IS EMPTY (MATERIAL EXCLUDED)
        if  (Object.entries(data).some(([k,v]) => v=='')){
            return alert('Missing data!');
        }
        
        await editRecord(item._id, data)

        ctx.page.redirect('/details/'+item._id);
    }

    
    }