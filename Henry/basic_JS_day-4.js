// BASIC 1
function extractData() {
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let age = document.getElementById("age").value;

    let selector = document.getElementsByClassName("printdata");
    selector[0].innerHTML = firstName;
    selector[1].innerHTML = lastName;
    selector[2].innerHTML = age;

    //TO DO afte break!!!!
    if (lastName.length > 5) {
        selector[1].style.color = "green";
    } else {
        selector[1].style.color = "red";
    }
}

document.getElementById("btn").addEventListener("click", extractData);


//BASIC 2