const handlerComments = async (e) => {
    e.preventDefault();
  
    const inputId = document.querySelector('input[name="input-post"]').value;
    const body = document.querySelector('textarea[name="form-comment"]').value;
  
    if (body) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          inputId,
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
    .addEventListener('submit', handlerComments);
  