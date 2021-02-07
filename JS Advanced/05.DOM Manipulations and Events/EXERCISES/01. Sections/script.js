function create(words) {
   const content =document.getElementById('content')
   for (let i=0; i<words.length; i++) {
      const div = document.createElement('div');
      const par = document.createElement('p');
      par.textContent = words[i];
      par.style.display = 'none'
      div.appendChild(par);
      content.appendChild(div);
   }
   content.addEventListener('click', onClick);

      function onClick(ev) {
         if (ev.target.tagName = 'div') {
         //ev.target.children.style.display = 'block'
         ev.target.children[0].style.display = 'block'

      }
      }
   
}