function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');
   function onClick () {
      let arr = JSON.parse(input.value);
      
      let restaurants = {}

      arr.forEach(element => {
         const tokens = element.split(' - ');
         const name = tokens[0]
         const workers = tokens[1].split(', ')
         console.log(workers[0]);
      });
      
   }
}