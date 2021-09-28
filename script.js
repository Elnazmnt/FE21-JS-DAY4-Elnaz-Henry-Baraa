function extraDate() {

    let firstname = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let age = document.getElementById("age").value;
    


    let selector = document.getElementsByClassName("printdata");
    selector[0].innerHTML = firstname;
    selector[1].innerHTML = lastname;
    selector[2].innerHTML = age;
 

    if (lastname.length > 5) {
        selector[1].style.color = "green";
    }
    else {
        selector[1].style.color = "red";
    }
}

// if (job.value=="IT"){
//     selector[3].style.background="purple";
// }
// else if(job.value=="hospitality"){
//     selector[3].style.background="yellow";

// }

document.getElementById("btn").addEventListener("click", extraDate);


