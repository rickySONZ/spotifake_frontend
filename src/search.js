
//Adding a search bar that is called upon login and registration
function appendSearchBar(){
    let searchBar = document.createElement('input')
    searchBar.type = 'text'
    searchBar.classList.add('searchbar-input', 'input', 'is-rounded')
    let searchBarForm = document.createElement('form')
    searchBarForm.classList.add('searchbar-form')
    let searchBarDiv = document.createElement('div')
    searchBarDiv.classList.add('searchbar-div')
    let searchSubmit = document.createElement('button')
    searchSubmit.type = "submit"
    searchSubmit.innerText = "Search Spotify For Song Title"
    searchSubmit.classList.add('button')

    document.body.append(searchBarDiv)
    searchBarDiv.append(searchBarForm)
    searchBarForm.append(searchBar, searchSubmit)
    
    searchBarForm.addEventListener("submit", (e)=> {
        e.preventDefault()
        if (searchBar.value != "" && searchBar.value != "undefined") {
        modalPopUpSearch()
        fetch("http://localhost:3000/songs/search", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify({
                 search_song_title: searchBar.value
              })
        })
        .then(res => res.json())
        .then(object => {
            console.log(object)
            for (const i in object){
                
                s = new Song(object[i])
                s.addSearchedSong()
            }
        })
        }
    })
}

//Function for adding a modal window with song search results where the user can click and add a song to their lib
function modalPopUpSearch(){
    let modalDiv = document.createElement('div')
    modalDiv.classList.add('modal', 'is-active')
    document.body.append(modalDiv)
    let closeButton = document.createElement('button')
    closeButton.classList.add('modal-close', 'is-large')
    closeButton.setAttribute('aria-label', 'close')
    let sessionID = sessionStorage.userID

   modalDiv.innerHTML = `
   <div class="modal-background"></div>
   <div class="modal-content">
   <h1 class = "title" >Search results from Spotify</h1>
   <ul class="search-list">
   </ul>
   </div>
   <button class="modal-close is-large" aria-label="close"></button>
 `
 modalDiv.append(closeButton)

 //Event Listener for liking songs from search
 closeButton.addEventListener("click", () => {
     let buttons = document.querySelectorAll('button.add-button')
     let checkedButtons = []
     //pulling buttons where they have been checked to create new liked song
     for (const i in buttons){
        if (buttons[i].innerHTML === "✓"){
            checkedButtons.push(parseInt(buttons[i].parentElement.dataset.id))
    }
}

//Getting rid of modal window
modalDiv.remove()
//Making patch request to library, server is set up to return liked songs/ songs
fetch(`http://spotifake-api.herokuapp.com/users/${sessionID}/libraries/${localStorage.library}`, {
    method: 'PATCH',
    headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
         song_ids: checkedButtons,
         library: localStorage.library
      })
})
.then(res => res.json())
.then(object =>{
    let obj = object
    let libraryList = document.querySelector('.library-list')
    libraryList.innerHTML = ""
    console.log(obj)
    createLikedSongsFromArray(object)
})
})

}

