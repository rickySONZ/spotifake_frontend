let registrationForm = document.createElement("form")
registrationForm.className = "registration-form"
var registrationbr = document.createElement("br")
var registrationbre = document.createElement("br")

//Defining email input
let emailRegistrationInput = document.createElement("input")
emailRegistrationInput.type = "text"
emailRegistrationInput.className = "registration-input"
emailRegistrationInput.placeholder = "Email"

//Defining password input
let passwordRegistrationInput = document.createElement("input")
passwordRegistrationInput.type = "text"
passwordRegistrationInput.className = "registration-input"
passwordRegistrationInput.placeholder = "Password"

//Defining password confirmation input
let passwordConfirmationRegistrationInput = document.createElement("input")
passwordConfirmationRegistrationInput.type = "text"
passwordConfirmationRegistrationInput.className = "registration-input"
passwordConfirmationRegistrationInput.placeholder = "Confirm Password"

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
        })
       
      })
      .then(res => res.json())
      .then(function(object) {    
        let obj = object
        console.log(obj)
        user = new User(object)
        loginCurrentUser(obj)
        sessionStorage.userID = obj.id      
      })
      .then(appendLogOutButton())
      .catch(errors => console.log(errors))
    
  })