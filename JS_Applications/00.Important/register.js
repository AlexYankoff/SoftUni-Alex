// forms eventListeners
document.getElementById('regForm').addEventListener('submit', register);

async function register(event) {
    event.preventDefault()
    console.log("register function event AY")
    const formData = new FormData(event.target);
    //console.log([...formData.entries()])
    const email = formData.get('email')
    const password = formData.get('password');
    const rePass = formData.get('rePass')

    if (email=='' || password == '') {
        return alert('All fields are required')
    } else if (password != rePass) {
        return alert('Passwords do not match')
    }

    const response = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    });
    if (response.ok == false){
        const error = await response.json();
        return alert(error.message)
    }
    const data = await response.json()
    console.log(data)
    sessionStorage.setItem('userToken', data.accessToken)
    //window.location.pathname = 'index.html'
    
}