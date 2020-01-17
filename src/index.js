//import "./index.css";
import numeral from "numeral";
import { getBooks } from "../api/bookApi";

const num = numeral(1000).format('$0,0.00')
debugger;
console.log(`I wouold pa ${num}`);

getBooks().then(result => {
    let bookRows = '';

    result.forEach(element => {
        bookRows+= ` <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.age}</td>
      </tr>`;
    });

    global.document.getElementById('books').innerHTML = bookRows;
})


