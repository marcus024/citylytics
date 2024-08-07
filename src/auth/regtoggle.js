document.addEventListener('DOMContentLoaded', function () {
  const togglePassword = document.querySelector('#togglePassword');
  const regPassword = document.querySelector('#reg-password');
  const showRegIcon = document.querySelector('#showRegIcon');
  const hideRegIcon = document.querySelector('#hideRegIcon');

  togglePassword.addEventListener('click', function () {
    const type = regPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    regPassword.setAttribute('type', type);
    showRegIcon.style.display = type === 'password' ? 'block' : 'none';
    hideRegIcon.style.display = type === 'password' ? 'none' : 'block';
  });
});
