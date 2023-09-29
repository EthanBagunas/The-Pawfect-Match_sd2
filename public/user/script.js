document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form-box.login");
    const registerForm = document.querySelector(".form-box.register");

    // Function to show login form and hide registration form
    function showLoginForm() {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    }

    // Function to show registration form and hide login form
    function showRegisterForm() {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }

    // Event listener for the "Register" link
    const registerLink = document.querySelector(".register-link a");
    registerLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the link from navigating
        showRegisterForm(); // Show the registration form
    });

    // Event listener for the "Login" link inside the registration form
    const loginLink = document.querySelector(".register .register-link a");
    loginLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the link from navigating
        showLoginForm(); // Show the login form
    });

    // Initially show the login form and hide the registration form
    showLoginForm();
});

document.getElementById('Uregister').addEventListener('submit', handleSubmit);
// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission


    const form = document.getElementById("Uregister");
    const formData = new FormData(form);

    for (item of formData) {
        console.log(item[0], item[1],item[2],item[3]);
    }
    
    const url = 'http://localhost:7000/register';
    postData(url, formData);
    
}

// Add event listener to the submit button
async function postData(url, data) {
    try {
        const urlEncoded = new URLSearchParams(data).toString();
      const response = await fetch(url, {
        method: "POST",
        body: urlEncoded, 
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      });
  
      const responseData = await response.json();
      console.log(responseData);
      return responseData;

    } catch (error) {
      console.error('Error occurred:', error);
    }
  }