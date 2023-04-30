const inputId = document.querySelector('input[name="input-post"]').value;

const postHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="title-id"]').value;
  const body = document.querySelector('textarea[name="body-form"]').value;

  await fetch(`/api/post/${inputId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const handlerDelete = async () => {
  await fetch(`/api/post/${inputId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#post-edit')
  .addEventListener('submit', postHandler);
document
  .querySelector('#btn-delete')
  .addEventListener('click', handlerDelete);
