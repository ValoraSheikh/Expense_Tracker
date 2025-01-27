const addExpense = document.querySelector('.button');
const expenseName = document.querySelector('#name');
const purchaseDate = document.querySelector('#date');
const purchaseAmt = document.querySelector('#amount');
const table = document.querySelector('table');


let expenses = JSON.parse(localStorage.getItem('expense')) || [];

expenses.forEach(element => {
    renderExpense(element)
});

function addNewExpense() {
    
    if (expenseName.value == "" || purchaseDate.value == "" || purchaseAmt == "") {
        alert(`First Enter the complete details`);
        return;
    }

    let expenseObj = {
        name: expenseName.value,
        date: purchaseDate.value,
        amount: purchaseAmt.value
    }

    expenses.push(expenseObj);
    renderExpense(expenseObj);
    saveExpenseToLS();

    expenseName.value = "";
    purchaseDate.value = ""; // type is date
    purchaseAmt.value = ""; // type is number
}

function renderExpense(expenseObj) {
    let newExpense = document.createElement('tr');
    table.append(newExpense);

    let task = document.createElement('td');
    task.textContent = `${expenseObj.name}`
    newExpense.append(task);

    let taskDate = document.createElement('td');
    taskDate.textContent = `${expenseObj.date}`
    newExpense.append(taskDate);

    let taskAmt = document.createElement('td');
    taskAmt.textContent = `$${expenseObj.amount}`
    newExpense.append(taskAmt);

    let deleteTask = document.createElement('td');
    deleteTask.classList.add('deleteCell')
    deleteTask.innerHTML = `<Button class="btn" >X</Button>`;
    newExpense.append(deleteTask);

    deleteTask.addEventListener('click', function (e) {

        expenses = expenses.filter(element => element.name !== expenseObj.name)
        console.log(expenses);
        
        newExpense.remove();
        saveExpenseToLS();
    })

}

function saveExpenseToLS() {
    localStorage.setItem('expense', JSON.stringify(expenses));
}

addExpense.addEventListener('click', addNewExpense);

