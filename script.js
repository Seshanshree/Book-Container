var popoverlay = document.querySelector(".popoverlay")
var popupbox = document.querySelector(".popupbox")
var addpopbtn = document.getElementById("addpopbtn")

addpopbtn.addEventListener("click",function(){
    popoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelpop = document.getElementById("cancelpop")
cancelpop.addEventListener("click",function(event){
    event.preventDefault()
    popoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var bookauthor=document.getElementById("bookauthor")
var bookinput=document.getElementById("bookinput")
var bookdesinput=document.getElementById("bookdesinput")

// Load saved books when page loads
window.onload = function(){
    var books = JSON.parse(localStorage.getItem("books")) || []
    books.forEach(book => createBook(book.title, book.author, book.description))
}

addbook.addEventListener("click",function(event){
    event.preventDefault()

    var title = bookinput.value
    var author = bookauthor.value
    var description = bookdesinput.value

    createBook(title,author,description)

    // Save to local storage
    var books = JSON.parse(localStorage.getItem("books")) || []
    books.push({title,author,description})
    localStorage.setItem("books",JSON.stringify(books))

    popoverlay.style.display="none"
    popupbox.style.display="none"
})

function createBook(title,author,description){
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${title}</h2>
    <h5>${author}</h5>
    <p>${description}</p>
    <button onclick="deletebook(event,'${title}')">Delete</button>`
    container.append(div)
}

function deletebook(event,title){
    event.target.parentElement.remove()

    var books = JSON.parse(localStorage.getItem("books")) || []
    books = books.filter(book => book.title !== title)
    localStorage.setItem("books",JSON.stringify(books))
}