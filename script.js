let myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}



function create(){
    flag = true;
    for(let i = 0; i < 5; i++){
        let book = new Book("Something", "Someone", flag);
        flag = !flag
        myLibrary[i] = book;
        addBookToLibrary(myLibrary[i]);
    }
}



function addBookToLibrary(newBook) {
        let list = document.querySelector(".book-list");
        let book = document.createElement("div");
        book.classList.add("book");
        let img = document.createElement("div");
        img.classList.add("book-img");
        let title = document.createElement("div");
        title.innerHTML = newBook.title;
        title.classList.add("book-title");
        let author = document.createElement("div");
        author.innerHTML = newBook.author;
        author.classList.add("book-author");
        let read = document.createElement("div");
        if(newBook.read)
            read.classList.add("read");
        else
            read.classList.add("unread"); 
        let tick = document.createElement("div");
        tick.classList.add("tick");
        read.appendChild(tick);
        book.appendChild(img);
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(read);
        list.appendChild(book);
}



create();

console.log(myLibrary);