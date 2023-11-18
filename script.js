const form = document.getElementById('form')
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//input = actual element input
//message = string for error message
function showError(input, message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}
function checkRequired(inputArr){
    inputArr.forEach((input) => {
        if(input.value.trim() === ''){
            showError(input, "This field is required")
        }else{
            showSuccess(input)
        }
    })
}
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `This field must be at least ${min} characters`)
    }else if(input.value.length > max){
        showError(input, `This field must be less than ${max} characters`)
    }else{
        showSuccess(input)
    }
}

function checkPasswordsMatch(input1, input2){
    if(input1.value === input2.value){
        showSuccess(input)
    }else{
        showError(input2, 'Passwords do not match')
    }
}
function checkEmail(input){
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(reg.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, 'Invalid Email')
    }
}

form.addEventListener('submit', (e) => {
   e.preventDefault()
   checkRequired([username, email, password, password2])
   checkLength(username, 3, 15)
   checkLength(password, 6, 25)
   checkEmail(email)
   checkPasswordsMatch(password, password2)
})