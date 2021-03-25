import { html } from '../node_modules/lit-html/lit-html.js';
import { register1 } from '../api.js';

//const registerUrl = 

export function register(ctx) {
    console.log('register');
    ctx.render(registerTemlate(onSubmit));
    async function onSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const entries = ([...formData.entries()]);
    
        if (entries.map(e => e[1]).some(x => x.trim() == '')) return alert('empty fields are not allowed');
        if (formData.get('password') !== formData.get('rePass')) return alert("paswords don't match");
        const password = formData.get('password');
        const email = formData.get('email');
        await register1(email, password);
        ctx.page.redirect('/');
    }
}

function registerTemlate(onSubmit) {
    return html`<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit="${onSubmit}">
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
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class="form-control" id="rePass" type="password" name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>
</div>
`;
}

