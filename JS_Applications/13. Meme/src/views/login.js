import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js'

// DON'T FORGET TO ADD @submit = ${onSubmit} to form
const loginTemplate = (onSubmit) => html`
<section id="login">
            <form @submit = ${onSubmit} id="login-form">
                <div class="container">
                    <h1>Login</h1>
                    <label for="email">Email</label>
                    <input id="email" placeholder="Enter Email" name="email" type="text">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn button" value="Login">
                    <div class="container signin">
                        <p>Dont have an account?<a href="#">Sign up</a>.</p>
                    </div>
                </div>
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
        ctx.page.redirect('/dashboard')
    }


    }