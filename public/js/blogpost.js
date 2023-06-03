function tester(){
  console.log('its working')
}




async function getUsername() {
        const response = await fetch('/login/current');
        if (response.ok) {
          const data = await response.json();
      
          return data.username;
        } else {
          console.error("Failed to get the current user's username");
          return null;
        }
      }

const postFormHandler = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#newpost-text').value.trim();
    const created_by = await getUsername()
    if (text) {
      const response = await fetch('/blog/newpost', {
        method: 'POST',
        body: JSON.stringify({ created_by, text }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/blog');
      } else {
        alert('Post Failed');
      }
    }
  };

document.querySelector('#newpost-form').addEventListener('submit', postFormHandler);