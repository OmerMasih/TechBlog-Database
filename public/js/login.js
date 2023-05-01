const handlerlogout = async function(e) {
  e.preventDefault();

  const userNameLogin = document.querySelector('#login-username');
  const loginPassword = document.querySelector('#input-login-password');

  const getResponse = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: userNameLogin.value,
      password: loginPassword.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (getResponse.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('You failed to login');
  }
};

document
  .querySelector('#input-login')
  .addEventListener('submit', handlerlogout);
