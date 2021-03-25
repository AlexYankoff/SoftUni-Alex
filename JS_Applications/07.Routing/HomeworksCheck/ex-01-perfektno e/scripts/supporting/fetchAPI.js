const settings = {
    host: "", endpoints: {
        registerUser: "",
        loginUser: "",
        logoutUser: ""
    }
}

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok === false) {
            const error = await response.json();

            if (error.code === 403 && error.message === "Invalid access token") {
                sessionStorage.removeItem("userID");
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("authToken");

                throw new Error("User session has been expired! Please, register or login again!");
            }

            throw new Error(error.message);
        }

        try {
            return await response.json();
        } catch (error) {
            return await response;
        }
    } catch (error) {
        await alert(error.message);

        if (error.message === "User session has been expired! Please, register or login again!") {
            window.location.pathname = "/";
        }

        throw new Error;
    }
}

function getOptions(method = "get", data) {
    const options = {
        method,
        headers: {}
    }

    const token = sessionStorage.getItem("authToken");

    if (token !== null) {
        options.headers["X-Authorization"] = token;
    }

    if (data !== undefined) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    return options;
}

async function getAllRequest(endpoint) {
    const options = getOptions();
    return await request(settings.host + endpoint, options);
}

async function getOneRequestByID(endpoint, id) {
    const options = getOptions();
    return await request(settings.host + endpoint + "/" + id, options);
}

async function postRequest(endpoint, data) {
    const options = getOptions("post", data);
    return await request(settings.host + endpoint, options);
}

async function putRequest(endpoint, id, data) {
    const options = getOptions("put", data);
    return await request(settings.host + endpoint + "/" + id, options);
}

async function deleteRequest(endpoint, id) {
    const options = getOptions("delete");
    return await request(settings.host + endpoint + "/" + id, options);
}

async function registerUser(data) {
    const user = await postRequest(settings.endpoints.registerUser, data);
    sessionStorage.setItem("userID", user._id);
    sessionStorage.setItem("email", user.email);
    sessionStorage.setItem("authToken", user.accessToken);
}

async function loginUser(data) {
    const user = await postRequest(settings.endpoints.loginUser, data);
    sessionStorage.setItem("userID", user._id);
    sessionStorage.setItem("email", user.email);
    sessionStorage.setItem("authToken", user.accessToken);
}

async function logoutUser() {
    await getAllRequest(settings.endpoints.logoutUser);
    sessionStorage.removeItem("userID");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("authToken");
}

export default {
    settings,
    getAllRequest,
    getOneRequestByID,
    postRequest,
    putRequest,
    deleteRequest,
    registerUser,
    loginUser,
    logoutUser
}