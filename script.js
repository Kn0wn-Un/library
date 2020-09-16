let myLibrary = [];



function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}



function addForm(){
    let inputArea = document.querySelector(".form");

    let bookDiv = document.createElement("div");
    bookDiv.innerHTML = "Book Name: <br>"
    let bookName = document.createElement("input");
    bookName.type = "text";
    bookName.name = "bookName";
    bookName.required = true;
    bookDiv.appendChild(bookName);

    let authorDiv = document.createElement("div");
    authorDiv.innerHTML = "Author Name: <br>"
    let authorName = document.createElement("input");
    authorName.type = "text";
    authorName.name = "authorName";
    authorName.required = true;
    authorDiv.appendChild(authorName);

    let numberDiv = document.createElement("div");
    numberDiv.innerHTML = "Number of Pages: <br>"
    let numberPage = document.createElement("input");
    numberPage.type = "text";
    numberPage.name = "numberPage";
    numberPage.required = true;
    numberDiv.appendChild(numberPage);

    let readDiv = document.createElement("div");
    let read = document.createElement("input");
    read.type = "radio";
    read.name = "read";
    read.value = 1;
    read.name = "read";
    readDiv.appendChild(read);
    readDiv.innerHTML += "Read"
    let unread = document.createElement("input");
    unread.type = "radio";
    unread.name = "unread";
    unread.value = 0;
    unread.name = "read";
    readDiv.appendChild(unread);
    readDiv.innerHTML += "Unread"

    let submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Add Book";
    
    let cancel = document.createElement("button");
    cancel.innerHTML = "Cancel";
    cancel.addEventListener("click", ()=>{
        document.querySelector(".book-list").style.visibility = "visible";
        document.querySelector(".add").style.visibility = "visible";
        document.querySelector(".form").innerHTML = "";
        document.querySelector(".form").style.visibility = "hidden";
    });

    let form = document.createElement("form");
    form.name = "myForm";

    form.appendChild(bookDiv);
    form.appendChild(authorDiv);
    form.appendChild(numberDiv);
    form.appendChild(readDiv);
    form.innerHTML += "<br>";
    form.appendChild(submit);
    form.appendChild(cancel);

    form.addEventListener("submit", ()=>{
        createBook();
        document.querySelector(".book-list").style.visibility = "visible";
        document.querySelector(".add").style.visibility = "visible";
        document.querySelector(".form").innerHTML = "";
        document.querySelector(".form").style.visibility = "hidden";
    });
    inputArea.appendChild(form);
}



const createBook = ()=>{
    let bookName = document.forms["myForm"]["bookName"].value;
    let authorName = document.forms["myForm"]["authorName"].value;
    let page = document.forms["myForm"]["numberPage"].value;
    let read = document.forms["myForm"]["read"].value === "1" ? true: false;
    let newBook = new Book(bookName, authorName, page, read);
    addBookToLibrary(newBook);
};



function addBookToLibrary(newBook) {
    let list = document.querySelector(".book-list");
    let book = document.createElement("div");
    book.classList.add("book");
    let img = document.createElement("div");
    img.classList.add("book-img");
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    img.style.backgroundColor = "#"+randomColor;
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
    document.querySelector(".book-list").style.visibility = "hidden";
    document.querySelector(".add").style.visibility = "hidden";
    document.querySelector(".form").style.visibility = "visible";
    addForm();
});