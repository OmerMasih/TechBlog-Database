const handlerSignUp = async (e) => {
    e.preventDefault();
  
    const signupUserName = document.querySelector('#signup-input');
    const signupPassword = document.querySelector('#input-signup-password');
  
    const fetchResponse = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: signupUserName.value,
        password: signupPassword.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (fetchResponse.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('You failed to sign up');
    }
  };
  
  document
    .querySelector('#form-signup')
    .addEventListener('submit', handlerSignUp);
  