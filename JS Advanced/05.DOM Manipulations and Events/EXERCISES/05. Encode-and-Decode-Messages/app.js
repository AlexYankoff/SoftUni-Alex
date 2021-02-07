function encodeAndDecodeMessages() {
    const textareas = document.querySelectorAll('textarea')
    const buttons = document.querySelectorAll('button')
    console.log(buttons)
   document.querySelector('main').addEventListener('click', cmd)

   function cmd(ev) {
       if (ev.target == buttons[0]) {
           
           let text = textareas[0].value // get text for encoding
           let encodedText = text.split('').map(ch =>String.fromCharCode(ch.charCodeAt(0)+1)).join('')
           textareas[1].value = encodedText;
           textareas[0].value ='';
       } else if (ev.target == buttons[1]) {
            console.log('Decode')
            let text = textareas[1].value // get text for decoding
            let decodedText = text.split('').map(ch =>String.fromCharCode(ch.charCodeAt(0)-1)).join('')
           textareas[1].value = decodedText;
            
            console.log(decodedText)
        }
    }
}