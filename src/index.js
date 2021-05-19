let signInForm = document.createElement("form")
var signInbr = document.createElement("br")
var signInbre = document.createElement("br")

let emailSignInInput = document.createElement("input")
emailSignInInput.type = "text"

let passwordSignInInput = document.createElement("input")
passwordSignInInput.type = "text"

let submitSignInButton = document.createElement("button")
submitSignInButton.type = "submit"
submitSignInButton.innerText = "Sign In"

signInForm.append(emailSignInInput, signInbre, passwordSignInInput, signInbr, submitSignInButton)

document.body.append(signInForm)

signInForm.addEventListener("submit", (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/sessions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    email: email,
    password: password
  })
}); 


})

document.addEventListener("DOMContentLoaded", () => {
    fetchUsers();
})

function fetchUsers(){
    fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(err => console.warn(err))
}