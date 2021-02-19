function solve() {
    const formControls = document.querySelectorAll('.form-control input') //node collection
    const lecture = formControls[0];
    const date = formControls[1];
    const moduleName = document.querySelector('select')
    const modulesOuptut = document.querySelector('.modules');

    const state = {}

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

    function add() {
        

        const lectureName = lecture.value;
        const dateString = date.value;
        const lectureTitle = lectureName + ' - ' + dateString.split('-').join('/').split('T').join(' - ');
        
        const delBtn = createElement('button', 'Del',['class=red']);
        const lectureH4 = createElement('h4', lectureTitle);
        const li = createElement('li', undefined, ['class=flex'])
        li.appendChild(lectureH4);
        li.appendChild(delBtn);

        let module;
        let ul;
        let lis;
        
        if(!state[moduleName.value]) {
            let h3 = createElement('h3', `${moduleName.value.toUpperCase()}-MODULE`);
            ul = createElement('ul');
            lis = [];
            module = createElement('div', undefined, ['class=module '] );

            module.appendChild(h3);
            module.appendChild(ul);

            state[moduleName.value] = {module, ul, lis: []};
           
        } else {
            module = state[moduleName.value].module;
            ul = state[moduleName.value].ul; 
            ;
        }
        state[moduleName.value].lis.push({li, date: date.value})
        state[moduleName.value].lis.sort((a,b) => a.date.localeCompare(b.date))
        .forEach(({li}) => ul.appendChild(li));
        
        modulesOuptut.appendChild(module);

    }
    function del (e) {
        let parent = e.target.parentNode.parentNode
        e.target.parentNode.remove()
        console.log(parent)

        if (parent.querySelectorAll('li').length == 0) {
            parent.parentNode.remove()

        }

    }
    document.querySelector('body').addEventListener('click', butClick);

    

    function butClick(e) {
        if (e.target.tagName != 'BUTTON') {
            return;
        }

        if (lecture.value === '' || date.value === '' ||moduleName === 'Select module' ) {
            return;
        }

        if(e.target.textContent == 'Del') {
            e.preventDefault();
            del(e);

        } else if (e.target.textContent == 'Add') {
            e.preventDefault();
            add();

        }
    }
;
};