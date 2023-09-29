document.getElementById('myForm').addEventListener('submit', handleSubmit);
// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission


    const form = document.querySelector('form');
    const formData = new FormData(form);

    for (item of formData) {
        console.log(item[0], item[1]);
    }
    


    const url = 'http://localhost:7000/insert';
    postData(url, formData);
    
}

// Add event listener to the submit button
async function postData(url, data) {
    try {
        const urlEncoded = new URLSearchParams(data).toString();
      const response = await fetch(url, {
        method: "POST",
        body: urlEncoded, // just 'fd' for multipart/form-data
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