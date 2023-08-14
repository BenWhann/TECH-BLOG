const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment-body').value.trim();
  
    if (comment) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/post:/id');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comment/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/post/:id');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('#post-list')
//     .addEventListener('click', delButtonHandler);