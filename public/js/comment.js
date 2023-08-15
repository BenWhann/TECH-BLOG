const newFormHandler = async (event) => {
  event.preventDefault();

const idParam= window.location.pathname.split("/")[2]

  const comment = document.querySelector('#comment-body').value.trim();
  console.log('comment', comment);
  if (comment) {
    console.log("comment", comment);
    const response = await fetch(`/api/comment/${idParam}`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create post');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/comment/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/post/:id');
//     } else {
//       alert('Failed to delete post');
//     }
//   }
// };

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', newFormHandler);

//   document
//     .querySelector('#post-list')
//     .addEventListener('click', delButtonHandler);