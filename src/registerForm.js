let registrationForm = document.createElement("form")
registrationForm.className = "registration-form"
var registrationbr = document.createElement("br")
var registrationbre = document.createElement("br")

//Defining email input
let emailRegistrationInput = document.createElement("input")
emailRegistrationInput.type = "text"
emailRegistrationInput.className = "registration-input"

//Defining password input
let passwordRegistrationInput = document.createElement("input")
passwordRegistrationInput.type = "text"
passwordRegistrationInput.className = "registration-input"

//Defining password confirmation input
let passwordConfirmationRegistrationInput = document.createElement("input")
passwordConfirmationRegistrationInput.type = "text"
passwordConfirmationRegistrationInput.className = "registration-input"

//Defining submit button
let submitRegistrationButton = document.createElement("button")
submitRegistrationButton.type = "submit"
submitRegistrationButton.innerText = "Register Here"


//adding forms and inputs to document
registrationForm.append(emailRegistrationInput, registrationbre, passwordRegistrationInput, passwordConfirmationRegistrationInput, registrationbr, submitRegistrationButton)

document.body.append(registrationForm)

let regData = document.querySelectorAll('.registration-input')

//Event listener for registration form, not really sure what to do with it next, 200 status comes through 
registrationForm.addEventListener('submit', function(e) {
    
    e.preventDefault()
    console.log('here')
  
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
        body: JSON.stringify({
          email: regData[0].value,
          password: regData[1].value,
          password_confirmation: regData[2].value,
          logged_in: true         
        })
       
      })
      .then(res => res.json())
      
      .then(function(object) {    
            console.log(new User(object))
      })
  })