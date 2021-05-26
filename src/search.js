
//Adding a search bar that is called upon login and registration
function appendSearchBar(){
    let searchBar = document.createElement('input')
    searchBar.type = 'text'
    searchBar.classList.add('searchbar-input')
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
        .then(function(object) {
            console.log(object),
            modalPopUpSearch()
          })
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
   modalDiv.innerHTML = `
   <div class="modal-background"></div>
   <div class="modal-content">
   <ul class="search-list">
   <li>Hi This is a test</li>
   </ul>
   </div>
   <button class="modal-close is-large" aria-label="close"></button>
 `
 modalDiv.append(closeButton)

 closeButton.addEventListener("click", () => {
     modalDiv.remove()
 })

}

