const handlerComment = async (e) => {
  e.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;

  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#add-comment')
  .addEventListener('submit', handlerComment);
