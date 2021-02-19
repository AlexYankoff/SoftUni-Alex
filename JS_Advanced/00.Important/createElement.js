function createElement(type, text, attributes =[]) { //редът на атрибутите да се спазва!
    let element = document.createElement(type);
    if (text) {
    element.textContent = text
    }
    attributes
    .map(attr =>attr.split('='))
    .forEach(([name,value]) => {
        element.setAttribute(name,value)
    })
    return element
}