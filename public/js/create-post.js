const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#form-title').value.trim();
    const content = document.querySelector('#form-content').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/post/new', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to post!');
      }
    }
  };
  
  document
    .querySelector('.create-form')
    .addEventListener('submit', loginFormHandler);