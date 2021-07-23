//JS for sign in
//Defining signinForm variable
let signInForm = document.createElement("form")
signInForm.className = "sign-in-form"
let signInbr = document.createElement("br")
let signInbre = document.createElement("br")
let signInTitle = document.createElement("h3")
signInTitle.innerText = "Sign In Here"
let signInBreak = document.createElement("br")

let spotifakeTitle = document.createElement('h1')
spotifakeTitle.classList.add('title', 'login')
spotifakeTitle.innerHTML = `<img src ="stylesheets/images/spotifake_in_circles.jpg" width=40 hieght = 40></img>SpotiFake`

let spotifakeMainTitle = document.createElement('h1')
spotifakeMainTitle.classList.add('title', 'main')
spotifakeMainTitle.innerText = "Spotifake"

// Adding logo to sign out form
let spotifakeLogo2 = document.createElement("img")
spotifakeLogo2.src = "stylesheets/images/spotifake_in_circles.jpg"
spotifakeLogo2.width = 100
spotifakeLogo2.height = 100

let spotifakeImage = document.createElement('img')
spotifakeImage.src = 'stylesheets/images/spotifake_in_circles.jpg'
spotifakeImage.height = 100
spotifakeImage.width = 100

let tempUserDisplayDiv = document.createElement("div")

//Defining email input
let emailSignInInput = document.createElement("input")
emailSignInInput.type = "text"
emailSignInInput.classList.add("sign-in-input", "input")
emailSignInInput.placeholder = "Email"

//Defining password input
let passwordSignInInput = document.createElement("input")
passwordSignInInput.type = "text"
passwordSignInInput.classList.add("sign-in-input", "input")
passwordSignInInput.placeholder = "Password"

//Defining submit button
let submitSignInButton = document.createElement("button")
submitSignInButton.type = "submit"
submitSignInButton.innerText = "Sign In"
submitSignInButton.classList.add("button")


//adding forms and inputs to document
signInForm.append(spotifakeLogo2, signInTitle, signInBreak, emailSignInInput, signInbre, passwordSignInInput, signInbr, submitSignInButton)

document.body.append(signInForm)

let formData = document.querySelectorAll(".sign-in-input")

//Event listener for sign in form, not really sure what to do with it next, 200 status comes through 
signInForm.addEventListener('submit', function (e) {

  e.preventDefault()
  console.log('here')

  fetch('https://spotifake-api.herokuapp.com/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email: formData[0].value,
      password: formData[1].value,
      session_id: sessionStorage.userID
    })
  })
    .then(res => res.json())
    .then(function (object) {
      let obj = object
      if (obj.status == 200) {
        const user = new User(obj)
        loginCurrentUser(user)
        sessionStorage.userID = obj.id
        localStorage.email = obj.email
        localStorage.library = obj.library
        formData[0].value = ""
        formData[1].value = ""
        if (sessionStorage.userID != "undefined") {
          appendLogOutButton()
          appendSearchBar()
          appendSortButton()
          fetchLibraryAfterLogin()
          alert(`You have successfully logged in as ${user.email}`)
          signInForm.style.display = "none"
          registrationForm.style.display = "none"
          // spotifakeTitle.remove()
        }
      } else if (obj.status == 500 || obj.status == 404) {
        alert(obj.error)
      }
    })
    .catch(errors => console.log(errors))
})
//Declaration of logout button function, creates a loop with sign in forms
function appendLogOutButton() {
  logoutButton = document.createElement('button')
  logoutButton.classList.add("logout-button", "button")
  logoutButton.innerText = "Log Out"
  document.body.append(logoutButton)
  logoutButton.addEventListener("click", (e) => {
    let sessionID = sessionStorage.userID
    let libraryContainer = document.querySelector(".library-div")
    let searchBarDiv = document.querySelector('.searchbar-div')
    let sortB = document.getElementById('sort-button')
    fetch(`https://spotifake-api.herokuapp.com/sessions/${sessionID}`, {
      method: 'DELETE',
      headers: {
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
      .then(searchBarDiv.remove())

      .then(libraryContainer.remove())
      .then(sortB.remove())
      .then(
        signInForm.style.display = "block",
        registrationForm.style.display = "block",
        sessionStorage.userID = '',
        localStorage.email = '',
        localStorage.library = ''
      )
  })
}
