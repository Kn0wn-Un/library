let myLibrary = [];



function Book(title, author, page, read) {
    this.cover = capitalize(title).match(/\b(\w)/g).slice(0, 2).join('');
    this.title = title.toUpperCase();
    this.author = author.toUpperCase();
    this.page = page;
    this.read = read;
}



let capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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
    numberPage.type = "number";
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
    book.id = myLibrary.length;
    book.classList.add("book");
    let img = document.createElement("div");
    img.classList.add("book-img");
    img.innerHTML = newBook.cover;
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
    read.addEventListener("click", ()=>{
        newBook.read = !newBook.read;
        toggleRead(book.id, newBook);
        updateCount();
    });
    let remove = document.createElement("button");
    remove.innerHTML = "Remove Book";
    remove.classList.add("remove");
    remove.addEventListener("click", ()=>{
        list.removeChild(document.getElementById(book.id));
        myLibrary.splice(parseInt(book.id), 1);
        console.log(myLibrary);
        updateLatest();
        updateCount();
    });
    read.appendChild(tick);
    book.appendChild(img);
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(page);
    book.appendChild(remove);
    book.appendChild(read);
    list.appendChild(book);
    toggleRead(book.id, newBook);
    myLibrary.push(newBook);
    updateLatest();
    updateCount();
}



const toggleRead = (bookid, book)=>{
    let temp = document.getElementById(bookid);
    let read = temp.childNodes[5];
    let tick = read.childNodes[0]
    console.log(tick);
    if(book.read){
        read.classList.remove("unread");
        tick.classList.remove("tick-unread");
        read.classList.add("read");
        tick.classList.add("tick-read");
    }
    else{
        read.classList.remove("read");
        tick.classList.remove("tick-read");
        read.classList.add("unread");
        tick.classList.add("tick-unread");
    }
};



const updateLatest = ()=>{
    let img = document.querySelector(".cur-book");
    let title = document.querySelector(".cur-title");
    let author = document.querySelector(".cur-author");
    let page = document.querySelector(".cur-page"); 
    if(!myLibrary.length)
    {
        document.querySelector(".currently-reading")
        .style.visibility = "hidden";
        img.textContent = "";
        title.innerHTML = "";
        author.innerHTML = "";
        page.innerHTML = "";
        return;
    }
    document.querySelector(".currently-reading")
        .style.visibility = "visible";
    let book = myLibrary[myLibrary.length-1];
    img.innerHTML = book.cover;
    title.innerHTML = book.title;
    author.innerHTML = book.author;
    page.innerHTML = book.page;
};



const updateCount = function(){
    let div = document.createElement("div");
    if(!myLibrary.length){
        document.querySelector(".status-bar").innerHTML = "No Books Added";
        return;
    }
    let readCtr = 0;
    for(let i = 0; i < myLibrary.length; i++)
        if(myLibrary[i].read)
            readCtr++;
    div.innerHTML = "READ: " + readCtr + "/" + (myLibrary.length);
    document.querySelector(".status-bar").innerHTML = div.outerHTML;
    console.log(readCtr);
};



const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", ()=>{
    document.querySelector(".book-list").style.visibility = "hidden";
    document.querySelector(".add").style.visibility = "hidden";
    document.querySelector(".form").style.visibility = "visible";
    addForm();
});