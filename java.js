const myLibrary = [];

const library = document.getElementById("library");
const newBookBtn = document.getElementById("newBook");
const bookForm = document.getElementById("addBook");

function Book(title, author, pages, completion) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completion = completion;
}



function displayBook(Book, index) {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.dataset.bookIndex = index;

    let bookTitle = document.createElement("div");
    bookTitle.textContent = Book.title;

    let bookAuthor = document.createElement("div");
    bookAuthor.textContent = Book.author;

    let bookPages = document.createElement("div");
    bookPages.textContent = Book.pages + " " + "Pages";

    let bookCompletion = document.createElement("div");
    bookCompletion.classList.add("readDiv");
    if (Book.completion) {
        bookCompletion.textContent = "Completed"
    }
    else {
        bookCompletion.textContent = "Unfinished";
    };


    let removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.classList.add("remove");
    removeButton.addEventListener("click", removeBook);

    let readButton = document.createElement("button");
    readButton.textContent = "Read";
    readButton.classList.add("completeButton");
    readButton.addEventListener("click", completeBook);

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookCompletion);
    bookDiv.appendChild(readButton);
    bookDiv.appendChild(removeButton);
    library.appendChild(bookDiv);
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

function completeBook(event) {
    const readStatus = event.target.closest(".book");
    if(readStatus) {
        const completedBookIndex = readStatus.dataset.bookIndex;
        const bookToComplete = myLibrary[completedBookIndex]

        if(bookToComplete) {
            if(bookToComplete.completion) {
                readStatus.querySelector(".readDiv").textContent = "Unfinished";
                bookToComplete.completion = false;
            }
            else {
                readStatus.querySelector(".readDiv").textContent = "Completed";
                bookToComplete.completion = true;
            }
        }
    }
}
    

function loadDummyBooks() {
    const book1 = new Book("JJK", "Gege", "100", true);
    const book2 = new Book("Game of Thrones", "George R.R Martin", "500", true);
    myLibrary.push(book1, book2);
    console.log(myLibrary);
    myLibrary.forEach(displayBook);
}

document.addEventListener("DOMContentLoaded", loadDummyBooks);



const form = document.getElementById("addBook");
const bookTitle = form.elements["title"];
const bookAuthor = form.elements["author"];
const bookPages = form.elements["pages"];
const bookCheckBox = form.elements["completed"];
const bookSubmit = form.elements["submitBook"];
let bookCompletion;


function addBookToLibrary() {
    event.preventDefault();
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookCompletion);
    if (bookCheckBox.checked) {
        newBook.completion = true;
    }
    else {
        newBook.completion = false;
    };
    myLibrary.push(newBook);
    const newIndex = myLibrary.indexOf(newBook);
    displayBook(newBook, newIndex);
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





