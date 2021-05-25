
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
            console.log(object)
          })
    })
}

