import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js'


const loginTemplate = (onSubmit) => html`
<section id="login">
            <form @submit=${onSubmit} id="login-form">
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

export async function loginPage (ctx) {
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim()
        const password = formData.get('password').trim();
        console.log("submit event");

        await login(email, password) //сървърът проверява за грешка

        ctx.setUserNav()
        ctx.page.redirect('/')
    }


    }