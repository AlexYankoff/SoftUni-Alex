import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js'

// DON'T FORGET TO ADD @submit = ${onSubmit} to form

const registerTemplate = (onSubmit,invalidEmail, invalidPassword,invalidRe )=> html `
<section id="register-page" class="content auth">
            <h1>Register</h1>

            <form @submit = ${onSubmit} id="register" action="#" method="">
                <fieldset>
                    <blockquote>Knowledge is not simply another commodity. On the contrary. Knowledge is never used up.
                        It
                        increases by diffusion and grows by dispersion.</blockquote>
                    <p class="field email">
                        <label for="register-email">Email:</label>
                        <input type="email" id="register-email" name="email" placeholder="maria@email.com">
                    </p>
                    <p class="field password">
                        <label for="register-pass">Password:</label>
                        <input type="password" name="password" id="register-pass">
                    </p>
                    <p class="field password">
                        <label for="register-rep-pass">Repeat password:</label>
                        <input type="password" name="rep-pass" id="register-rep-pass">
                    </p>
                    <p class="field submit">
                        <input class="btn submit" type="submit" value="Register">
                    </p>
                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </fieldset>
            </form>
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
        const email = formData.get('email');
        const password = formData.get('password').trim();
        const repass = formData.get('rep-pass').trim()
    
        if (email== ''|| password== ''|| repass== '') {
            ctx.render(registerTemplate(onSubmit, email== '', password== '', repass== '' ))
            return alert('All fields are required');
        }
        
        if (password!=repass) {
            ctx.render(registerTemplate(onSubmit, email== '',true, true))
            return alert('Password do\'t macth!')
        }
    
        await register (email, password)

        ctx.setUserNav()
        ctx.page.redirect('/')
    
    }
    }