import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js'

// DON'T FORGET TO ADD @submit = ${onSubmit} to form
const registerTemplate = (onSubmit,invalidEmail, invalidPassword,invalidRe )=> html `
<section id="register">
            <form @submit = ${onSubmit} id="register-form">
                <div class="container">
                    <h1>Register</h1>
                    <label for="username">Username</label>
                    <input id="username" type="text" placeholder="Enter Username" name="username">
                    <label for="email">Email</label>
                    <input id="email" type="text" placeholder="Enter Email" name="email">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <label for="repeatPass">Repeat Password</label>
                    <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                    <div class="gender">
                        <input type="radio" name="gender" id="female" value="female">
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="male" value="male" >
                        <label for="male">Male</label>
                    </div>
                    <input type="submit" class="registerbtn button" value="Register">
                    <div class="container signin">
                        <p>Already have an account?<a href="#">Sign in</a>.</p>
                    </div>
                </div>
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
        const username = formData.get('username')
        const email = formData.get('email');
        const password = formData.get('password').trim();
        const repass = formData.get('repeatPass').trim()
        const gender =formData.get('gender')
    
        if (email== ''|| password== ''|| repass== '') {
            ctx.render(registerTemplate(onSubmit, email== '', password== '', repass== '' ))
            return alert('All fields are required');
        }
        
        if (password!=repass) {
            ctx.render(registerTemplate(onSubmit, email== '',true, true))
            return alert('Password do\'t macth!')
        }
    
        await register (username, email, password, gender)

        ctx.setUserNav()
        ctx.page.redirect('/')
    
    }
    }