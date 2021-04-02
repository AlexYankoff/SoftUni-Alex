import {html} from '../../node_modules/lit-html/lit-html.js'
import {getItemById, deleteRecord, addLike, getLikes,getUserLikes} from '../api/data.js'

// DON'T FORGET TO ADD @click to Delete button
// DON'T FORGET id in edit link

const detailsTemplate = (item, isOwner, onDelete, addlike, likes,UserLikesCounter) => html `
<section id="movie-example">
<div class="container">
    <div class="row bg-light text-dark">
        <h1>Movie title: ${item.title}</h1>

        <div class="col-md-8">
            <img class="img-thumbnail" src="${item.img}"
                 alt="Movie">
        </div>
        <div class="col-md-4 text-center">
            <h3 class="my-3 ">Movie Description</h3>
            <p>Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy
                with ties to her past arises. Comes on the screens 2020.</p>
            ${isOwner ? html `<a @click=${onDelete} class="btn btn-danger" href="javascript:void(0)">Delete</a>` : ''}
            ${isOwner ? html `<a class="btn btn-warning" href="/edit/${item._id}">Edit</a>` : ''}
            
            ${UserLikesCounter ? '': html`
            <a @click = ${addlike}  class="btn btn-primary" href="javascript:void(0)">Like</a>`}
            <span class="enrolled-span">Liked ${likes}</span>
        </div>
    </div>
</div>
</section>`




export async function detailsPage (ctx) {
    console.log(ctx.params)
    const id = ctx.params.id //! от page content взимаме id
    const item = await getItemById(id)
    const userId =sessionStorage.getItem('userId')

    //взимаме лайковете за този филм
    let likes = await getLikes(id)
    let UserLikesCounter = (await getUserLikes(id,userId)).length
    console.log(UserLikesCounter)
    
    
    ctx.render(detailsTemplate(item, item._ownerId == userId ,onDelete, addlike, likes, UserLikesCounter))
    
    //този потребител лайкнал ли е вече филма 
    

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this item?')
        if (confirmed) {
            await deleteRecord(id);
            ctx.page.redirect(`/`)
        }

    }

    async function addlike() {

        await addLike({movieId:id})
        
        console.log('лайкваме'+id)
        UserLikesCounter = (await getUserLikes(id,userId)).length
        console.log(UserLikesCounter)
        
        
        likes = await getLikes(id)
        ctx.render(detailsTemplate(item, item._ownerId == userId ,onDelete, addlike, likes, UserLikesCounter))
    }
}