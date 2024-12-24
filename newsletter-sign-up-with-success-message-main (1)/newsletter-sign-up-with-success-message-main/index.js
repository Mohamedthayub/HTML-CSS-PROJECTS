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
    window.location.href = "http://127.0.0.1:5500/html_css_projects/newsletter-sign-up-with-success-message-main%20(1)/newsletter-sign-up-with-success-message-main/index2.html"
        

});
