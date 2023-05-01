const updateHandler = async (e) => {
  e.preventDefault();

  const title = document.querySelector('input[name="input-id"]').value;
  const body = document.querySelector('textarea[name="body-form"]').value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#post-new')
  .addEventListener('submit', updateHandler);
