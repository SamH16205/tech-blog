
const updateFormHandler = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#update-text').value.trim();
    const title = document.querySelector('#update-title').value.trim();
    const postid = document.querySelector('#id_holder').innerHTML.trim();
    console.log(postid)
    if (text) {
      const response = await fetch(`/blog/${postid}`, {
        method: 'PUT',
        body: JSON.stringify({ text, title }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/blog');
      } else {
        alert('Post Failed');
      }
    }
  };

document.querySelector("#update-form").addEventListener("submit", updateFormHandler);

