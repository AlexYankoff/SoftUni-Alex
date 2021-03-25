import { html } from '../node_modules/lit-html/lit-html.js';
import { login1 } from '../api.js';


export function login(ctx) {
    console.log('login');
    ctx.render(loginTemlate(onSubmit));
    async function onSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const entries = ([...formData.entries()]);
        console.log(entries);
        if (entries.map(e => e[1]).some(x => x.trim() == '')) return alert('empty fields are not allowed');
        const password = formData.get('password');
        const email = formData.get('email');
        await login1(email, password);
        ctx.page.redirect('/');
    }
}

function loginTemlate(onSubmit) {
    return html`<div class="container" @submit="${onSubmit}">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form>
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
    </form>
</div>`;
}