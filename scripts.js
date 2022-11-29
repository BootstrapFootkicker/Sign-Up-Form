const password1 = document.querySelector("#password");
const password2 = document.querySelector('#confirm-password');


function isMatch(p1, p2) {
    if (p1.value !== p2.value) {
        p2.style.border = "2px solid red"
        p1.style.border = "2px solid red"
    } else {
        p2.style.border = "2px solid green"
        p1.style.border = "2px solid green"
    }

}

password2.addEventListener('keyup', (event) => isMatch(password1, password2));