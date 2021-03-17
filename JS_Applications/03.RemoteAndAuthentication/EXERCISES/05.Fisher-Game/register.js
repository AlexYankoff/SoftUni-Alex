// forms eventListeners
document.getElementById('regForm').addEventListener('submit', register);

async function register(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    if (email=='' || password == '') {
        return alert('All fields are required');
    } else if (password != rePass) {
        return alert('Passwords do not match');
    }

    const response = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    });
    if (response.ok == false){
        const error = await response.json();
        return alert(error.message);
    }
    const data = await response.json();
    //sessionStorage.clear()
    //sessionStorage.setItem('userToken', data.accessToken);
    //sessionStorage.setItem('id',data._id)
    //window.location.pathname = 'index.html';
    document.getElementById('regForm').reset();
    alert('User registered.Please Login.')
    
}
