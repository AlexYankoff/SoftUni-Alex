import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js'

// DON'T FORGET TO ADD @sumbit to form

const registerTemplate = (onSubmit,invalidEmail, invalidPassword,invalidRe )=> html `
<div class="container home wrapper  my-md-5 pl-md-5">
<div class="row-form d-md-flex flex-mb-equal ">
    <div class="col-md-4">
        <img class="responsive" src="/images/idea.png" alt="">
    </div>
    <form @submit = ${onSubmit} class="form-user col-md-7" >
        <div class="text-center mb-4">
            <h1 class="h3 mb-3 font-weight-normal">Register</h1>
        </div>
        <div class="form-label-group">
            <label for="inputEmail">Email</label>
            <input type="text" id="inputEmail" name="email" class="form-control" placeholder="Email" required=""
                autofocus="">
        </div>
        <div class="form-label-group">
            <label for="inputPassword">Password</label>
            <input type="password" id="inputPassword" name="password" class="form-control"
                placeholder="Password" required="">
        </div>
        <div class="form-label-group">
            <label for="inputRepeatPassword">Repeat Password</label>
            <input type="password" id="inputRepeatPassword" name="rePass" class="form-control"
                placeholder="Repeat Password" required="">
        </div>
        <button class="btn btn-lg btn-dark btn-block" type="submit">Sign Up</button>
        <div class="text-center mb-4">
            <p class="alreadyUser"> Don't have account? Then just
                <a href="">Sign-In</a>!
            </p>
        </div>
        <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2019.</p>
    </form>
</div>
</div>`;

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
                        <input class="${'form-control'+ (invalidRe ? ' is-invalid' : '')} type="password" name="rePass">
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
        const repass = formData.get('rePass').trim()
    
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