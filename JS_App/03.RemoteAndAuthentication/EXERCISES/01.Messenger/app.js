function attachEvents() {

    document.getElementById('submit').addEventListener('click', () => {
        const author = document.getElementsByName('author')[0].value;
        const content = document.getElementsByName('content')[0].value;
        sendMessage({author, content})
        document.getElementsByName('author')[0].value = ''
        document.getElementsByName('content')[0].value = ''
        
    });
    
    getMessages();

    document.getElementById('refresh').addEventListener('click', getMessages)
}

attachEvents();

async function getMessages () {
    const response = await fetch('http://localhost:3030/jsonstore/messenger')
    const data = await response.json()
    

const messages = Object.values(data)
.map(el => `${el.author}: ${el.content}`).join('\n');
document.getElementById('messages').value = messages
}

async function sendMessage(message) {
    const response = await fetch('http://localhost:3030/jsonstore/messenger',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message)
    });
    

    
    

}