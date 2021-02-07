function focus() {
    //select element
    const divs = document.querySelectorAll("input");
    //add events
    for (let el of divs) {
        el.addEventListener('focus', onFocus);
        el.addEventListener('blur', onBlur);
    }
    
    //functions;
    function onFocus(el) {
        el.target.parentNode.className = 'focused';
        }
    
    function onBlur(el) {
        el.target.parentNode.className = '';
    }
}