import {html, render} from '../node_modules/lit-html/lit-html.js';

const tbody = document.getElementsByTagName('tbody')[0];

document.getElementById('searchBtn').addEventListener('click', search);

async function getData(){
   const response = await fetch('http://localhost:3030/jsonstore/advanced/table')
   const data = await response.json();
   const recArr = Object.values(data);
   return recArr
   
   
   }

//create template for <tr> in  <tbody>

const person = (data, match ='') => html `
<tr class= ${(match&&Object.values(data).toString().toLowerCase().includes(match.toLowerCase())) ? 'select' : ''} >
    <td>${data.firstName} ${data.lastName}</td>
    <td>${data.email}</td>
    <td>${data.course}</td>
</tr>`

//create table when intially loading the page
async function createTable () {
   const data = await getData();
   const result = data.map(oneRec => person(oneRec));
   render (result, tbody);
}
createTable() //When load page

//render the table with mathed rows, on btn click
async function search() {
   const data = await getData();
   const match = document.getElementById('searchField').value;
   const result = data.map(oneRec => person(oneRec, match));
   render(result, tbody);
   document.getElementById('searchField').value = '';
}






