let registrationForm = document.createElement("form")
registrationForm.className = "registration-form"

let registrationTitle = document.createElement('h3')
registrationTitle.innerText = 'Register Here'
let registrationbr = document.createElement("br")
let registrationbre = document.createElement("br")
let registrationbrea = document.createElement("br")
let registrationbreak = document.createElement("br")

//Defining email input
let emailRegistrationInput = document.createElement("input")
emailRegistrationInput.type = "text"
emailRegistrationInput.classList.add("registration-input", "input")
emailRegistrationInput.placeholder = "Email"

let spotifakeLogo = document.createElement("img")
spotifakeLogo.src = "stylesheets/images/spotifake_in_circles.jpg"
spotifakeLogo.width = 100
spotifakeLogo.height = 100

//Defining password input
let passwordRegistrationInput = document.createElement("input")
passwordRegistrationInput.type = "text"
passwordRegistrationInput.classList.add("registration-input", "input")
passwordRegistrationInput.placeholder = "Password"

//Defining password confirmation input
let passwordConfirmationRegistrationInput = document.createElement("input")
passwordConfirmationRegistrationInput.type = "text"
passwordConfirmationRegistrationInput.classList.add("registration-input", "input")
passwordConfirmationRegistrationInput.placeholder = "Confirm Password"

//Defining submit button
let submitRegistrationButton = document.createElement("button")
submitRegistrationButton.type = "submit"
submitRegistrationButton.classList.add("button")
submitRegistrationButton.innerText = "Register Here"


//adding forms and inputs to document
registrationForm.append(spotifakeLogo, registrationTitle, registrationbreak, emailRegistrationInput, registrationbre, passwordRegistrationInput, registrationbrea, passwordConfirmationRegistrationInput, registrationbr, submitRegistrationButton)

document.body.append(registrationForm)

let regData = document.querySelectorAll('.registration-input')

//Event listener for registration, appends a logout button and sets session
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
          if (obj.status == 200){  
        console.log(obj)
        user = new User(obj)
        loginCurrentUser(obj)
        localStorage.email = user.email
        localStorage.library = obj.library_id
        sessionStorage.userID = obj.id
        regData[0].value = "" 
        regData[1].value = ""
        regData[2].value = "" 
        if (sessionStorage.userID != "undefined"){
            appendLogOutButton() 
            appendSearchBar()
        fetchLibraryAfterLogin()
        alert(`You have successfully created an account with the email ${user.email}.`)
        }  } else if (obj.password && obj.email){
            alert(`Password ${obj.password[0]} and Email ${obj.email[0]}`)
        }  else if (obj.password){
            alert(`Password ${obj.password[0]}`)
        } else if (obj.email){
            alert(`Email ${obj.email[0]}`)
        }
      })
      .catch(errors => console.log(errors))
    
  })