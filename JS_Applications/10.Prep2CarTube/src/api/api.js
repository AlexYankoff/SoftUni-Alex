export const settings = {
    host:'http://localhost:3030'
}

//universal function
async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok == false) { //Error from server
            const error = await response.json();
            throw new Error(error.message);
        } 
        try { //аko респонса не е jason, хвърля грешка 
            const data = await response.json()
            return data;
        } catch (err) {
            return response;
        }
        
    } catch (err) {
        alert(err.message);
        throw err; // прехвърля ногоре, към модулите, които са извикали ф-та
    }
}

function getOptions (method = 'get', body) {
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
        }
        return options;

}

export async function get(url) {
    return await request(url, getOptions());
}

export async function post(url, data) {
    return await request(url, getOptions('post',data))
    
}

export async function put(url, data) {
    return await request(url, getOptions('put',data));
}

export async function del(url) {
    return await request(url, getOptions('delete'));
}

export async function login(username, password) {
    const result =  await post(settings.host + '/users/login', {username, password});

    
    sessionStorage.setItem('authToken', result.accessToken); //authtoken used in functino getOptins
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('username', result.username)
    
    return result;
}

export async function register(username, password) {
    const result =  await post(settings.host + '/users/register', {username, password});

    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);

    return result;
}

export async function logout() {
    const result =  await get(settings.host + '/users/logout');

    sessionStorage.clear()// вместо долните го сложих
    //sessionStorage.removeItem('username');
    //sessionStorage.removeItem('authToken');
    //sessionStorage.removeItem('userId');

    return result;
}