document.getElementById("expForm").addEventListener("submit", addExpenses);


const expenses=JSON.parse(localStorage.getItem("expenses")) || [] ;

function addExpenses(event){
    event.preventDefault();
}


let type=document.getElementById("type").value;
let name=document.getElementById("name").value;
let date=document.getElementById("date").value;
let amount=document.getElementById("amount").value;


if(type != "PaymentMethod" && name.length > 0 && date !=0 && amount > 0)
{
    const expenses={
        type,
        name,
        date,
        amount,
        id: expenses.length > 0 ? expenses[expenses.length-1].id + 1:1,}
        expenses.push(expense);
        localStorage.setItem("expense", JSON.stringify(expenses));
    }
    document.getElementById("expForm").requestFullscreen();
    showExpenses();
}
const showExpenses= () => {
    const expenseTable = document.getElementById("expenseTable");
    expenseTable.innerHTML = "";
    for(let i=0; i<expenses.length; i++){
        expenseTable.innerHTML += '
        
        <tr>
        td>$expenses[i].type/td>
        td>$expenses[i].name/td>
        td>$expenses[i].date/td>
        td>$expenses[i].amount/td>
        <td> <a class="deletButton"
        onclick="deleteExpenses(${expense[i].id})">Delete</a></td>
        /tr>
            
        ';
    }
}
showExpenses();
