//definir les variables - récuperer les éléments html dont on a besoin
const connectButton = document.querySelector("#connect-button")
const main = document.querySelector("main");
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
// mettre en palce les déclencheurs - écouteurs d'évenements 
connectButton.addEventListener("click", addText)
