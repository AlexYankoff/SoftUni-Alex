import {html} from '../../node_modules/lit-html/lit-html.js'
import { getItem} from '../api/data.js'

const homeTemplate =(data) => html `
    <section id="home-page">
        <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
            <img src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
                 class="img-fluid" alt="Responsive image" style="width: 150%; height: 200px">
            <h1 class="display-4">Movies</h1>
            <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
        </div>
    </section>
  
    
    <h1 class="text-center">Movies</h1>

    <section id="add-movie-button">
        <a href="#" class="btn btn-warning ">Add Movie</a>
    </section>
<!-- Movies -->
    <section id="movie">
        <div class=" mt-3 ">
            <div class="row d-flex d-wrap">

                <div class="card-deck d-flex justify-content-center ay">

                    <div class="card mb-4">
                        <img class="card-img-top" src="https://pbs.twimg.com/media/ETINgKwWAAAyA4r.jpg"
                             alt="Card image cap" width="400">
                        <div class="card-body">
                            <h4 class="card-title">Wonder Woman 1984</h4>
                        </div>
                        <div class="card-footer">
                            <a href="#/details/6lOxMFSMkML09wux6sAF">
                                <button type="button" class="btn btn-info">Details</button>
                            </a>
                        </div>

                    </div>

                    <div class="card mb-4">
                        <img class="card-img-top"
                             src="https://i.pinimg.com/originals/f2/a4/58/f2a458048757bc6914d559c9e4dc962a.jpg"
                             alt="Card image cap" width="400">
                        <div class="card-body">
                            <h4 class="card-title">Top Gun 2</h4>
                        </div>
                        <div class="card-footer">
                            <a href="#/details/CUtL9j4qI0XVhn9kTUsx">
                                <button type="button" class="btn btn-info">Details</button>
                            </a>
                        </div>

                    </div>

                    <div class="card mb-4">
                        <img class="card-img-top" src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg"
                             alt="Card image cap" width="400">
                        <div class="card-body">
                            <h4 class="card-title">Black Widow</h4>
                        </div>
                        <div class="card-footer">
                            <a href="#/details/krPgQD6SWf39bM4x00co">
                                <button type="button" class="btn btn-info">Details</button>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>`;

//Rendime filmite
 //   ${data.map(movieTemplate)}

export async function homePage (ctx) {
    console.log('enter home.js')
    const data = await getItem()    
    ctx.render(homeTemplate(data))
    }