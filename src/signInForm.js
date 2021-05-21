//JS for sign in
//Defining signinForm variable
let signInForm = document.createElement("form")
signInForm.className = "sign-in-form"
var signInbr = document.createElement("br")
var signInbre = document.createElement("br")

let tempUserDisplayDiv = document.createElement("div")

//Defining email input
let emailSignInInput = document.createElement("input")
emailSignInInput.type = "text"
emailSignInInput.className = "sign-in-input"
emailSignInInput.placeholder = "Email"

//Defining password input
let passwordSignInInput = document.createElement("input")
passwordSignInInput.type = "text"
passwordSignInInput.className = "sign-in-input"
passwordSignInInput.placeholder = "Password"

//Defining submit button
let submitSignInButton = document.createElement("button")
submitSignInButton.type = "submit"
submitSignInButton.innerText = "Sign In"


//adding forms and inputs to document
signInForm.append(emailSignInInput, signInbre, passwordSignInInput, signInbr, submitSignInButton)

document.body.append(signInForm)

let formData = document.querySelectorAll(".sign-in-input")

let front = document.querySelector(".sign-in-form")

//Event listener for sign in form, not really sure what to do with it next, 200 status comes through 
signInForm.addEventListener('submit', function(e) {
    
    e.preventDefault()
    console.log('here')
  
    fetch('http://localhost:3000/sessions', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
        body: JSON.stringify({
          email: formData[0].value,
          password: formData[1].value
        })
      })
      .then(res => res.json())
      .then(function(object) {
        let obj = object
        console.log(obj)
        const user = new User(obj)
        loginCurrentUser(obj)
        sessionStorage.userID = obj.id
        formData[0].value = ""
        formData[1].value = ""
        if (sessionStorage.userID != "undefined"){
            appendLogOutButton() 
            alert(`You have successfully logged in as ${user.email}`)
            } 
      })
      .catch(errors => console.log(errors))
  })


function fetchUsers(){
    fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(err => console.warn(err))
}

//Declaration of logout button function, creates a loop with sign in forms
function appendLogOutButton(){
    logoutButton = document.createElement('button')
    logoutButton.className = "logout-button"
    logoutButton.innerText = "Log Out"
    document.body.append(logoutButton)
    logoutButton.addEventListener("click", (e) => {
        let sessionID = sessionStorage.userID
        fetch(`http://localhost:3000/sessions/${sessionID}`, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
             user: ''
          })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .then(logoutButton.remove())
        .then(
            signInForm.style.display = "block",
            registrationForm.style.display = "block",
            sessionStorage.userID = ''
        )
    })
}
