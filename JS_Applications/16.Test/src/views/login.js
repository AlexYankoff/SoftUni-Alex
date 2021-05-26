import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js'

// DON'T FORGET TO ADD @submit = ${onSubmit} to form
const loginTemplate = (onSubmit) => html`
<section id="login-page" class="content auth">
            <h1>Login</h1>

            <form  @submit = ${onSubmit} id="login" action="#" method="">
                <fieldset>
                    <blockquote>Knowledge is like money: to be of value it must circulate, and in circulating it can
                        increase in quantity and, hopefully, in value</blockquote>
                    <p class="field email">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="maria@email.com">
                    </p>
                    <p class="field password">
                        <label for="login-pass">Password:</label>
                        <input type="password" id="login-pass" name="password">
                    </p>
                    <p class="field submit">
                        <input class="btn submit" type="submit" value="Log in">
                    </p>
                    <p class="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>`;

const OLDloginTemplate = (onSubmit) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit = ${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>`;

export async function loginPage (ctx) {
    console.log('start loing.js')
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim()
        const password = formData.get('password').trim();

        await login(email, password) //сървърът проверява за грешка

        ctx.setUserNav()
        ctx.page.redirect('/')
    }


    }