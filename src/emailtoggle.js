document.addEventListener('DOMContentLoaded', function () {
  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');
  const showIcon = document.querySelector('#showIcon');
  const hideIcon = document.querySelector('#hideIcon');

  togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    showIcon.style.display = type === 'password' ? 'block' : 'none';
    hideIcon.style.display = type === 'password' ? 'none' : 'block';
  });
});
