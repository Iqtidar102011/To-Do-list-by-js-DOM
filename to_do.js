let count = 0
document.getElementById("input_btn").addEventListener('click', function () {
    count++
    const inputValue = document.getElementById("input_value").value;
    const tableContainer = document.getElementById("content_container");
    const tableElement1 = document.createElement('tr');
    tableElement1.innerHTML = `
    <th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td>
    <button type="button" class="btn btn-success btn-sm btn-done">Done</button>
    <button type="button" class="btn btn-danger btn-sm btn-delete">Delete</button>

    </td>
    
    `
    tableContainer.appendChild(tableElement1);
    document.getElementById("input_value").value = '';
    const deleteButton = document.getElementsByClassName("btn-delete");
    // loop through deleteButton to get the button every time it is clicked
    for (let button of deleteButton) {
        button.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.display = 'none';
        })
    }
    const doneButtons = document.getElementsByClassName("btn-done");
    for (let btn of doneButtons) {
        btn.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.textDecoration = 'line-through';
        })
    }


})