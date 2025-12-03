
//definir les variables - récuperer les éléments html dont on a besoin
const connectButton = document.querySelector("#connect-button")
const main = document.querySelector("main");
const connetBox = document.querySelector("#connect-background");
console.log(connetBox) 
const closeButton = document.querySelector(".close-button");
const formBox = document.querySelector("#connet-form")
let count = 0;

//definir les fonctions - les actions possible
function addText()  {
     count ++;   
     let newtext = document.createElement('p')
     newtext.classList.add ("js-zone"); 
     if(count%2==0){
        newtext.style.color='red'
     }
    if(count <= 10) {
       newtext.innerHTML= `tentative N' ${count}`
    } else {
        
i
    newtext.innerHTML = "C'est pas fini"
    connectButton.removeEventListener("click", addText)
    }

    main.appendChild(newtext)   
    
   
}
function openConnect() {
   connetBox.style.display= "flex"
   connetBox.style.opacity = "1"
 } 

function closeConnect() {
   connetBox.style.display = "none"
   connetBox.style.display = "1"

function NoClose(event) {
   event.stopPropagation()
}    
}

// mettre en palce les déclencheurs - écouteurs d'évenements 
connectButton.addEventListener("click", openConnect) 
closeButton.addEventListener("click",closeConnect)
connetBox.addEventListener("click", closeConnect)
formBox.addEventListener("click", noClose)