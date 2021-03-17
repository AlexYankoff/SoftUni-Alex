import {html, render} from '../node_modules/lit-html/lit-html.js';
// get data


async function getData(){
   const response = await fetch('http://localhost:3030/jsonstore/advanced/table')
   const data = await response.json();
   const recArr = Object.values(data);
   return recArr
   
   
   }

let match

//create template for <tr> in  <tbody>


const person = (oneRec) => html `
   <tr>
       <td>John Dan</td>
       <td>john@john-dan.com</td>
       <td>JS-CORE</td>
   </tr>`

//render

function test() {
const records = getData()
console.log(records)
}
test()
const tbody = document.getElementsByTagName('tbody')[0]
const result = records.map(oneRec => person(oneRec))

render(result, tbody)

//check for matches, clear input field
//render s matche, change style, с тернаре може да проверим, и стил според match(изчиства стари слекеции)





function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:

   }
}