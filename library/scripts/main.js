let myLibrary = [];

class Book {
    constructor(author, title, nOfPages) {
        this.author = author;
        this.title = title;
        this.nOfPages = nOfPages;
    }
    info() {
        return `${this.author} published ${this.title}`;
    }
}

function addBook(author, title, nOfPages) {
    var b = new Book(author, title, nOfPages);
    myLibrary.push(b);
}

function render() {
    for (let i =0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].info())
    }
}
function addRow() {
    var form = document.querySelector("form")
    table = document.querySelector("table")
    var row = table.insertRow(-1)
    for (i = 0; i < 3; i++) {
        var cell = row.insertCell(-1)
        cell.textContent = form.elements[i].value
    }
    checkbox = row.insertCell(-1)
    box = document.createElement("INPUT")
    box.setAttribute("type", "checkbox");
    checkbox.appendChild(box)
    console.log(checkbox)

    buttonBox = row.insertCell(-1)
    var btn = document.createElement("BUTTON");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "delete-btn");

    var span = document.createElement("SPAN");
    span.textContent = "X";
    btn.appendChild(span);
    buttonBox.appendChild(btn);
}

const addBookButton = document.getElementById("add-btn")
addBookButton.addEventListener('click', (e) => {
    e.preventDefault();
    addRow();
    return false;
})
