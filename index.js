//console.log(`Hello`);
//console.log(`I like pizza`);

//window.alert('this is an alert');
//window.alert(`okok`);
//window.alert("hi! how are you?");

const authForm = document.getElementById('auth-form');

authForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const loginInput = document.getElementById('login');
  const registerInput = document.getElementById('register');

  console.log(`Login: ${loginInput.value}`);
  console.log(`Register: ${registerInput.value}`);

  // Perform any necessary validation or other tasks before resetting the form

  // Reset the form
  loginInput.value = '';
  registerInput.value = '';
});