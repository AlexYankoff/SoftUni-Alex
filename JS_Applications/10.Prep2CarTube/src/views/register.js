import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js'

const registerTemplate = (onSubmit,invalidEmail, invalidPassword,invalidRe )=> html `
    <section id="register">
        <div class="container">
            <form @submit = ${onSubmit} id="register-form">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
                <p>Username</p>
                <input type="text" placeholder="Enter Username" name="username" required>
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" required>
                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                <hr>
                <input type="submit" class="registerbtn" value="Register">
            </form>
            <div class="signin">
                <p>Already have an account?
                    <a href="#">Sign in</a>.
                </p>
            </div>
        </div>
        </section>`;


export async function registerPage (ctx) {
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password').trim();
        const repass = formData.get('repeatPass').trim()

        console.log(username,password,repass)
    
        if (username== ''|| password== ''|| repass== '') {
            // ??? ctx.render(registerTemplate(onSubmit, username== '', password== '', repass== '' )) 
            return alert('All fields are required');
        }
        
        if (password!=repass) {
            //ctx.render(registerTemplate(onSubmit, email== '',true, true))
            return alert('Password do\'t macth!')
        }
        await register (username, password)

        ctx.setUserNav()
        ctx.page.redirect('/dashboard')
    
    }
    }