const formId = document.querySelector('input[name="post-id"]').value;

const handlerEdit = async (e) => {
  e.preventDefault();

  const title = document.querySelector('input[name="title-id"]').value;
  const body = document.querySelector('textarea[name="form-body"]').value;

  await fetch(`/api/post/${formId}`, {
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
  await fetch(`/api/post/${formId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#post-edit')
  .addEventListener('submit', handlerEdit);
document
  .querySelector('#btn-delete')
  .addEventListener('click', handlerDelete);
