const userinput = document.getElementById("user_email");
const user_btn = document.getElementById("submit_btn");
const user_error = document.getElementById("error");

user_btn.addEventListener("click", function (e) {
    // Define the regex as a RegExp object
    const EmailCheck = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    if (userinput.value.trim() === "") {
        user_error.textContent = "This field cannot be empty";
        user_error.style.display = "block";
        e.preventDefault();
    } else if (!EmailCheck.test(userinput.value.trim())) {
        user_error.textContent = "Invalid email";
        user_error.style.display = "block";
        e.preventDefault();
    } else {
        user_error.textContent = "";
        user_error.style.display = "none";
    }
    userinput.textContent = "";
        
    
    // Clear the input field
});
