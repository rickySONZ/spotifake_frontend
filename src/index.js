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
    if (sessionStorage.userID && sessionStorage.userID != "undefined"){
        signInForm.style.display = "none"
        registrationForm.style.display = "none"
        appendLogOutButton()
        appendSearchBar()
        appendSortButton()
        fetchLibraryAfterLogin() 
    } else {
        signInForm.style.display = "block"
        registrationForm.style.display = "block"
    }
}

createLikedSongsFromArray = (object) => {
   
    if (LikedSong.all = []){
   
    for (const i in object){
        s = new LikedSong(object[i].song)
        LikedSong.all.push(s)
        console.log(s)
        s.id = object[i].id
        s.addLikedSong()
    }
} else {
    likedSongs = LikedSong.all
    for (const i in likedSongs){
        s = likedSongs[i]
        console.log(s)
        s.addLikedSong()
}
}
}

appendSortButton = () => {
    let sortButton = document.createElement("button")
    document.body.append(sortButton),
    sortButton.innerText = "Sort A - Z"
    sortButton.classList.add('button')
    sortButton.id = "sort-button"
    sortButton.addEventListener("click", ()=> {
        LikedSong.sortAll()
    })
}
