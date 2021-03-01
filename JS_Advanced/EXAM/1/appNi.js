function solve() {
    let creator = document.getElementById('creator');
    let title = document.getElementById('title');
    let category = document.getElementById('category');
    let content = document.getElementById('content');
    let createBtn = document.getElementsByClassName('btn create')[0];
    createBtn.addEventListener('click', add);
    let posts = document.getElementsByTagName('section')[1];
    let archivsection = document.getElementsByClassName('archive-section')[0].children[1];


    function add(event) {
        event.preventDefault();
        addArticle();
    }

    function addArticle() {
        let art = createEl('article');
        let h1 = createEl('h1', title.value);
        art.appendChild(h1);
        let categoryP = createEl('p', 'Category:');
        let catStr = createEl('strong', category.value);
        categoryP.appendChild(catStr);
        art.appendChild(categoryP);
        let creatP = createEl('p', 'Creator:');
        let creatStr = createEl('strong', creator.value);
        creatP.appendChild(creatStr);
        art.appendChild(creatP);
        let contentP = createEl('p', content.value);
        art.appendChild(contentP);
        let div = createEl('div', '', 'buttons');
        let delBtn = createEl('button', 'Delete', 'btn delete');
        delBtn.addEventListener('click', del);
        let arcBtn = createEl('button', 'Archive', 'btn archive');
        arcBtn.addEventListener('click', archive);
        div.appendChild(delBtn);
        div.appendChild(arcBtn);
        art.appendChild(div);
        posts.appendChild(art);
    }

    function del(event) {
        delPost(event.target.parentElement.parentElement);
    }

    function delPost(element) {
        posts.removeChild(element);
    }

    function archive(event) {
        let Artname = event.target.parentElement.parentElement.children[0];
        let li = createEl('li');
        li.textContent = Artname.textContent;
        archivsection.appendChild(li);
        delPost(event.target.parentElement.parentElement);
        sort();
    }

    function sort() {
        let collection = archivsection.children;
        let unsorted = Array.from(collection);
        let sortedLis = unsorted.sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));
        if (collection.length > 1) {
            for (let i = 0; i < collection.length; i++) {
                archivsection.appendChild(sortedLis[i]);

            }
        }
    }


    function createEl(type, content, className) {
        const result = document.createElement(type);
        if (content) {
            result.textContent = content;
        }
        if (className) {
            result.className = className;
        }
        return result;
    }


}


