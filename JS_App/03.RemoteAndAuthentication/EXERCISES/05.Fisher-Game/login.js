// forms eventListeners
document.getElementById('logForm').addEventListener('submit', login);

async function login(event) {
    event.preventDefault()
    console.log("login function event AY")
    const formData = new FormData(event.target);
    const email = formData.get('email')
    const password = formData.get('password');

    if (email=='' || password == '') {
        return alert('All fields are required')
    
    }

    const response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    });
    //console.log(response)
    console.log('Логва се през login.js')
    if (response.ok == false){
        const error = await response.json();
        return alert(error.message)
    }
    
    const data = await response.json()
    console.log(data)
    sessionStorage.setItem('userToken', data.accessToken)
    sessionStorage.setItem('id',data._id)
   window.location.pathname = 'index.html'
    
}