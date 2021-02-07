function solve() {
   const output = document.querySelector('textarea');

   const cart = [];

   // event click за  div s клас .shopping-cart
   document.querySelector('.shopping-cart').addEventListener('click', onAdd)
    function onAdd(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product') {
         const product = ev.target.parentNode.parentNode;
         const title = product.querySelector('.product-title').textContent
         const price = Number(product.querySelector('.product-line-price').textContent);
      
      cart.push( {title, price})

      output.value +=`Added ${title} for ${price.toFixed(2)} to the cart.\n`
      }
   }
   document.querySelector('.checkout').addEventListener('click', onCheckOut)
    function onCheckOut() {
      const result = cart.reduce((acc, c) => {
         acc.items.add(c.title);
         acc.total+=c.price;
         return acc;
      }, {items: new Set(), total:0});
      output.value += `You bought ${Array.from(result.items).join(', ')} for ${result.total.toFixed(2) }.`
      document.querySelector('.shopping-cart').removeEventListener( 'click' ,onAdd);
      document.querySelector('.checkout').removeEventListener( 'click' ,onCheckOut);
   } 
}