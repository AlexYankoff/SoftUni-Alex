function solve(){
   const creator = document.querySelector('#creator');
   const title = document.querySelector('#title');
   const category = document.querySelector('#category');
   const content = document.querySelector('#content');


   const posts = document.getElementsByTagName('section')[1];
   const archive = document.getElementsByTagName('ol')[0];

   const btnCreate = document.getElementsByClassName('btn create')[0];
   btnCreate.addEventListener('click', create);


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


   function create (ev) {
      ev.preventDefault();
      let article = createEl('article');
      let h1 = createEl('h1', title.value);
      article.appendChild(h1);
      let strong = createEl('strong', category.value);
      let categoryPar = createEl('p', 'Category:');
      categoryPar.appendChild(strong);

      article.appendChild(categoryPar);

      let creatorPar = createEl('p', 'Creator:');
      let creatorStr = createEl('strong', creator.value);

      creatorPar.appendChild(creatorStr);
      article.appendChild(creatorPar);

      let contentPar = createEl('p', content.value);
      article.appendChild(contentPar);

      let div = createEl('div', '', 'buttons');
      let btnDel = createEl('button', 'Delete', 'btn delete');
      btnDel.addEventListener('click', del);

      let btnArc = createEl('button', 'Archive', 'btn archive');
      btnArc.addEventListener('click', arch);

      div.appendChild(btnDel);
      div.appendChild(btnArc);
      article.appendChild(div);
      posts.appendChild(article);

   }


   function del (ev) {
      
      posts.removeChild(ev.target.parentElement.parentElement); 
   }



   function arch(ev) {
      let title = ev.target.parentElement.parentElement.children[0];

      let li = createEl('li');
      li.textContent = title.textContent;

      archive.appendChild(li);
      posts.removeChild(ev.target.parentElement.parentElement)

      let collection = archive.children;
        let unsorted = Array.from(collection);
        let sortedLis = unsorted.sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));
        if (collection.length > 1) {
            for (let i = 0; i < collection.length; i++) {
                archive.appendChild(sortedLis[i]);

            }
        }

}
}
