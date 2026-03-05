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
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${bookinput.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdesinput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()

}
