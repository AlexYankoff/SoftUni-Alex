export const host = `http://localhost:3030`;

const request = async (url, options) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message);
        }
        try {
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(response);
            return response;
        }

    } catch (err) {
        alert(err.message);
        throw err;// za da mine natatuk
    }
}
function getOptions(method = 'GET', body) {
    const options = {
        method,
        headers: {}
    };
    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        options.headers['X-Authorization'] = token;
    }
    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
        console.log(options.body);
    }
    return options;
}

export async function get(url) {
    return await request(url, getOptions());
}

export async function post(url, data) {
    return await request(url, getOptions('POST', data));
}

export async function put(url, data) {
    return await request(url, getOptions('PUT', data));
}

export async function del(url) {
    return await request(url, getOptions('DELETE'));
}

export async function login1(email, password) {
    const response = await post(`${host}/users/login`, { email, password });
    sessionStorage.setItem('authToken', response.accessToken);
    sessionStorage.setItem('userId', response._id);
    sessionStorage.setItem('userEmail', response.email);
    return response;
}
export async function register1(email, password) {
    const response = await post(`${host}/users/register`, { email, password });
    sessionStorage.setItem('authToken', response.accessToken);
    sessionStorage.setItem('userId', response._id);
    sessionStorage.setItem('userEmail', response.email);
    return response;
}

export async function logOut() {
    const response = await fetch(" http://localhost:3030/users/logout", { method: "GET", headers: { "X-Authorization": sessionStorage.getItem('authToken') } });
    console.log(response);
    sessionStorage.clear();
}

export async function getFurniture() {
    return await get(`${host}/data/catalog`);
}

export async function getItemById(id) {
    return await get(`${host}/data/catalog/${id}`);
}

export async function getMyFurniture() {
    const userId = sessionStorage.getItem('userId');
    return await get(`http://localhost:3030/data/catalog?where=_ownerId%3D%22${userId}%22`);
}

export async function createRecord(data) {
    return await post(`${host}/data/catalog`, data);
}

export async function editRecord(id, data) {
    return await put(`${host}/data/catalog/${id}`, data);

}

export async function deleteRecord(id) {
    return await del(`${host}/data/catalog/${id}`);
}

document.getElementById('logout').addEventListener('click', logOut);