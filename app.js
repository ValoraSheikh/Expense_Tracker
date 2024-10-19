const addExpense = document.querySelector('.button');
const expenseName = document.querySelector('#name');
const purchaseDate = document.querySelector('#date');
const purchaseAmt = document.querySelector('#amount');
const table = document.querySelector('table');
let deleteTask;

function addNewExpense() {

    
    if (expenseName.value == "" || purchaseDate.value == "" || purchaseAmt == "") {
        alert(`First Enter the complete details`);
        return;
    }

    let newExpense = document.createElement('tr');
    table.append(newExpense);

    let task = document.createElement('td');
    task.textContent = `${expenseName.value}`
    newExpense.append(task);

    let taskDate = document.createElement('td');
    taskDate.textContent = `${purchaseDate.value}`
    newExpense.append(taskDate);

    let taskAmt = document.createElement('td');
    taskAmt.textContent = `$${purchaseAmt.value}`
    newExpense.append(taskAmt);

    deleteTask = document.createElement('td');
    deleteTask.classList.add('deleteCell')
    deleteTask.innerHTML = `<Button class="btn" >X</Button>`;
    newExpense.append(deleteTask);

    deleteTask.addEventListener('click', function () {
        newExpense.remove();
    })

    expenseName.value = "";
    purchaseDate.value = ""; // type is date
    purchaseAmt.value = ""; // type is number

}

addExpense.addEventListener('click', addNewExpense);

