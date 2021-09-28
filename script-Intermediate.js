function disappear(){
   
this.style.display="none";


   
}
let santas = document.getElementsByClassName("Santa")
for (let i=0 ; i<=4 ; i++)

{

santas[i].addEventListener("click", disappear);

}

