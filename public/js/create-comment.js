const loginFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#form-content').value.trim();
  
    if (content) {
      const response = await fetch('/api/post/comment', {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
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
    .querySelector('.comment-form')
    .addEventListener('submit', loginFormHandler);
