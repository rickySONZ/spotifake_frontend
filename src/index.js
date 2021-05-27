document.addEventListener("DOMContentLoaded", () => {
    checkIfLoggedIn()
    // loginCurrentUser();
})


loginCurrentUser = (object) => {
    if (object.status == 200){
        signInForm.style.display = "none"
        registrationForm.style.display = "none"
        // appendSearchBar()
        // fetchLibraryAfterLogin() 
        // appendLogOutButton()
    } else {
        signInForm.style.display = "block"
        registrationForm.style.display = "block"
    }
}

checkIfLoggedIn = () => {
    if (sessionStorage.userID != "" && sessionStorage.userID != "undefined"){
        signInForm.style.display = "none"
        registrationForm.style.display = "none"
        appendLogOutButton()
        appendSearchBar()
        fetchLibraryAfterLogin() 
       
    } else {
        signInForm.style.display = "block"
        registrationForm.style.display = "block"
    }
}

createLikedSongsFromArray = (object) => {
    for (const i in object){
        s = new LikedSong(object[i].song)
        s.id = object[i].id
        s.addLikedSong()
    }
}