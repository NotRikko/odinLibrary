const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
   
}

const library = document.getElementById("library");
const newBookBtn = document.getElementById("newBook");
const bookForm = document.getElementById("addBook");


function displayBook(Book) {
    let div = document.createElement("div");
    div.classList.add("book");
    let text = document.createTextNode(Book.title);
    div.appendChild(text);
    library.appendChild(div);

}

newBookBtn.addEventListener("click", () => {
    if (bookForm.style.visibility === "visible") {
        bookForm.style.visibility = "hidden";
    } 
    else  bookForm.style.visibility = "visible";
});





const book1 = new Book("JJK", "Gege", "100", "Read")
const book2 = new Book("Game of Thrones", "George R.R Martin", "500", "Unread");
myLibrary.push(book1, book2);
console.log(myLibrary);
myLibrary.forEach(displayBook)
