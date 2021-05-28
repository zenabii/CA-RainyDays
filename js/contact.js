const form = document.querySelector("#contactForm");
const Name = document.querySelector("#Name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");


function validateForm(event) {
    var pass = true 
    event.preventDefault();

    if (checkLength(Name.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        pass = false
    }

    if (checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
        pass = false
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        pass = false
    }

    if (checkLength(address.value, 25) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
        pass = false
    }

    if (pass === true) {
        alert("Thank you for submitting! <3");
        event.target.reset();
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}