let myLibrary = [];
let ctr = 0;
let flag = true;


function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}



function create(ctr){
    let book = new Book("Something", "Someone",100, flag);
    flag = !flag
    myLibrary[ctr] = book;
    addBookToLibrary(myLibrary[ctr]);
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
        let page = document.createElement("div");
        page.innerHTML = newBook.page;
        page.classList.add("book-page");
        let read = document.createElement("div");
        let tick = document.createElement("div");
        if(newBook.read){
            read.classList.add("read");
            tick.classList.add("tick-read");
        }
        else{
            read.classList.add("unread");
            tick.classList.add("tick-unread");
        }
        
        read.appendChild(tick);
        book.appendChild(img);
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(page);
        book.appendChild(read);
        list.appendChild(book);
}



const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", ()=>{
    document.querySelector(".book-list").style.visibility = flag? "visible":"hidden";
    create(ctr++)
});




//console.log(myLibrary);