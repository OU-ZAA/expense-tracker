const addButton = document.querySelector("#submit")
const table = document.querySelector("table");

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const expense = document.querySelector("#expense").value;
    const date = document.querySelector("#expense-date").value;
    const amount = document.querySelector("#amount").value;
    if (expense == "" && date == "" && amount == "") return;
    if (table.children[1].children[0].children[0].textContent == "no expenses added yet!") {
        table.children[1].innerHTML = `<tr><td>${expense}</td><td>${date}</td><td>$ ${amount}</td></tr>`;
    } else {
        table.children[1].innerHTML += `<tr><td>${expense}</td><td>${date}</td><td>$ ${amount}</td></tr>`;
    }
    document.querySelector("#expense").value = "";
    document.querySelector("#expense-date").value = "";
    document.querySelector("#amount").value = "";
});