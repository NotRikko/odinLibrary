const myLibrary = [];

const library = document.getElementById("library");
const newBookBtn = document.getElementById("newBook");
const bookForm = document.getElementById("addBook");

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}



function displayBook(Book, index) {
    let div = document.createElement("div");
    div.classList.add("book");
    div.dataset.bookIndex = index;
    let text = document.createTextNode(Book.title);
    let removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.classList.add("remove");
    removeButton.addEventListener("click", removeBook);
    div.appendChild(text);
    div.appendChild(removeButton);
    library.appendChild(div);
}

function removeBook(event) {
    const divToRemove = event.target.closest(".book");
    if (divToRemove) {
        library.removeChild(divToRemove);
        const removedIndex = divToRemove.dataset.bookIndex;
        myLibrary.splice(removedIndex, 1);
        console.log(myLibrary);
    }
  
}


function loadDummyBooks() {
    const book1 = new Book("JJK", "Gege", "100");
    const book2 = new Book("Game of Thrones", "George R.R Martin", "500");
    myLibrary.push(book1, book2);
    console.log(myLibrary);
    myLibrary.forEach(displayBook);
}

document.addEventListener("DOMContentLoaded", loadDummyBooks);



const form = document.getElementById("addBook");
const bookTitle = form.elements["title"];
const bookAuthor = form.elements["author"];
const bookPages = form.elements["pages"];
const bookSubmit = form.elements["submitBook"];

function addBookToLibrary() {
    event.preventDefault();
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
    myLibrary.push(newBook);
    displayBook(newBook);
    console.log(myLibrary);
    bookForm.style.visibility = "hidden";
    form.reset();
}


bookSubmit.addEventListener("click", addBookToLibrary);

newBookBtn.addEventListener("click", () => {
    if (bookForm.style.visibility === "visible") {
        bookForm.style.visibility = "hidden";
    } 
    else  bookForm.style.visibility = "visible";
});





