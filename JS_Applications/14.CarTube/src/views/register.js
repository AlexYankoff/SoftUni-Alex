import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js'

// DON'T FORGET TO ADD @submit = ${onSubmit} to form
const registerTemplate = (onSubmit,invalidEmail, invalidPassword,invalidRe )=> html `
<section id="register">
            <div @submit = ${onSubmit} class="container">
                <form id="register-form">
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

const OLDregisterTemplate = (onSubmit,invalidEmail, invalidPassword,invalidRe )=> html `
<div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit = ${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class= ${'form-control'+ (invalidEmail ? ' is-invalid' : '')}  id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class=${'form-control'+ (invalidPassword ? ' is-invalid' : '')} id="password" type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class=${'form-control'+ (invalidRe ? ' is-invalid' : '')} type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    </div>`;


export async function registerPage (ctx) {
    console.log('start register')
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password').trim();
        const repass = formData.get('repeatPass').trim()
    
        if (username== ''|| password== ''|| repass== '') {
            ctx.render(registerTemplate(onSubmit, username== '', password== '', repass== '' ))
            return alert('All fields are required');
        }
        
        if (password!=repass) {
            ctx.render(registerTemplate(onSubmit, username== '',true, true))
            return alert('Password do\'t macth!')
        }
    
        await register (username, password)

        ctx.setUserNav()
        ctx.page.redirect('/')
    
    }
    }