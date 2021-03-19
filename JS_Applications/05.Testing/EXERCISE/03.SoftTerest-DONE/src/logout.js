export function doLogout() {
    if(sessionStorage.getItem('authToken') !== null){
        serverLogout();
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('id');
        alert('Logged out successfully!');
    }
    else{
        alert('ERROR');
    }
}

async function serverLogout() {
    let response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {'X-Authorization': sessionStorage.getItem('authToken')}
    });
}