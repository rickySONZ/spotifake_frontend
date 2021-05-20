document.addEventListener("DOMContentLoaded", () => {
    fetchUsers();
    // createSignInForm();
})


loginCurrentUser = (object) => {
    if (object.status == 200){
        signInForm.style.display = "none"
        registrationForm.style.display = "none"
    } else {
        signInForm.style.display = "block"
        registrationForm.style.display = "block"
    }
}