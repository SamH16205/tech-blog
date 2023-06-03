
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#loginusername').value.trim();
    const password = document.querySelector('#loginpassword').value.trim();
  
    if (username && password) {
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/blog');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  document
    .querySelector('#loginform')
    .addEventListener('submit', loginFormHandler);