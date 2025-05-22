document.getElementById('loginBtn').addEventListener('click', function() {
  const userIndex = document.getElementById('userLogin').value;
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  if (email === '' || password === '') {
    alert('Please enter email and password.');
    return;
  }

  localStorage.setItem('loggedInUser', userIndex);
  window.location.href = 'dashboard.html';
});
