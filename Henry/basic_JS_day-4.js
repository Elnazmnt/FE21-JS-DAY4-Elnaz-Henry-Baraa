// BASIC 1
function extractData() {
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let age = document.getElementById("age").value;

    let selector = document.getElementsByClassName("printdata");
    selector[0].innerHTML = firstName;
    selector[1].innerHTML = lastName;
    selector[2].innerHTML = age;

    if (lastName.length > 5) {
        selector[1].style.color = "green";
    } else {
        selector[1].style.color = "red";
    }
}

document.getElementById("btn").addEventListener("click", extractData);


//BASIC 2
function extractJob() {
    let selectedJob = document.getElementById("profession").value;
    let Job = document.getElementById("profession");
    Job.innerHTML = selectedJob;

    if (selectedJob == "it") {
        document.getElementById("div").style.background = "purple";
    } else if (selecteddocument.getElementById("div") == "hospitality") {
        document.getElementById("div").style.background = "yellow";
    } else {
        document.getElementById("div").style.background = "lightgrey";
    }
}

document.getElementById("select_job").addEventListener("click", extractJob);