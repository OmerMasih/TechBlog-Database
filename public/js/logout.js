const userlogout = async () => {
  const fetchResponse = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (fetchResponse.ok) {
    document.location.replace('/');
  } else {
    alert('You failed to log out');
  }
};

document.querySelector('#link-logout').addEventListener('click', userlogout);
