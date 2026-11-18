let books = [];

function addBook(id, title, author, category) {
    books.push({ id, title, author, category });
    console.log("Book Added Successfully!");
}

function displayBooks() {
    console.table(books);
}

function updateBook(id, title, author, category) {
    let book = books.find(b => b.id === id);

    if (book) {
        book.title = title;
        book.author = author;
        book.category = category;
        console.log("Book Updated Successfully!");
    } else {
        console.log("Book Not Found!");
    }
}

function deleteBook(id) {
    books = books.filter(b => b.id !== id);
    console.log("Book Deleted Successfully!");
}

addBook(1, "JavaScript", "John", "Programming");
addBook(2, "Python", "David", "Programming");

displayBooks();

updateBook(1, "HTML", "RDJ", "Web Development");

displayBooks();

deleteBook(2);

displayBooks();