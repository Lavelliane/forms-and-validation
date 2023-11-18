const form = document.getElementById('form')
const username = document.getElementById('username')

function showError(input, message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}


function checkUsername(username){
    if(username.value === "" || username.value.length < 6){
        showError(username, "Invalid username")
    }else{
        showSuccess(username)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkUsername(username)
})


