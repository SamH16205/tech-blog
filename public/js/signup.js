const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#signupusername').value.trim();
    const email = document.querySelector('#signupemail').value.trim();
    const password = document.querySelector('#signuppassword').value.trim();
   
    if (username && email && password) {
      const response = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  document
    .querySelector('#signupform')
    .addEventListener('submit', signupFormHandler);