const password1 = document.querySelector("#password");
const password2 = document.querySelector('#confirm-password');
const passwordMessage = document.querySelector("#password-message");


function isMatch(password1, password2) {

    if (password1.value === password2.value) {
        if (password1.value === '') {
            password2.className = '';
            password1.className = '';
            passwordMessage.textContent = ""
            return
        }
        password2.className = '';
        password1.className = '';
        password2.classList.add('matched')
        password1.classList.add('matched')
        passwordMessage.textContent = ""

    } else {
        password2.className = '';
        password1.className = '';
        password2.classList.add('notMatched')
        password1.classList.add('notMatched')
        passwordMessage.textContent = "* Passwords do not match"


    }

}

password2.addEventListener('keyup', (event) => isMatch(password1, password2));
password1.addEventListener('keyup', (event) => isMatch(password1, password2));