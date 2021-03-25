const loginTemplate = (context, html, validation) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${e => onSubmit(e, context)}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class=${"form-control" + (validation === undefined ? ""
                            : (validation.isEmailOK ? " is-valid" : " is-invalid"))}
                           id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class=${"form-control" + (validation === undefined ? ""
                            : (validation.isPasswordOK ? " is-valid" : " is-invalid"))}
                           id="password" type="password" name="password">
                </div>
                <input type="submit" class="btn btn-primary" value="Login"/>
            </div>
        </div>
    </form>
`;

function isFormDataValid(formData) {
    const isEmailOK = formData.get("email").trim().length > 0;
    const isPasswordOK = formData.get("password").trim().length > 0;

    return {isEmailOK, isPasswordOK};
}

async function onSubmit(event, context) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
        email: formData.get("email").trim(),
        password: formData.get("password").trim()
    }

    if (Object.values(isFormDataValid(formData)).some(validInput => validInput === false)) {
        const validation = isFormDataValid(formData);
        alert("All fields are mandatory!");

        const view = loginTemplate(context, context.prepareView.html, validation);
        context.prepareView.setUserNavigation("loginLink");
        context.prepareView.renderView(view);
        return;
    }

    await context.prepareView.dataAPI.loginUser(data);
    event.target.reset();
    context.page.redirect("/");
}

function loginPage(context) {
    const view = loginTemplate(context, context.prepareView.html);
    context.prepareView.setUserNavigation("loginLink");
    context.prepareView.renderView(view);
}

export default loginPage;