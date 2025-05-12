// public/app.js
document.addEventListener('DOMContentLoaded', () => {
  const userListUl = document.getElementById('user-list-ul');
  const userForm = document.getElementById('user-form');
  const userNameInput = document.getElementById('user-name');

  // Fetch users from the server and update the list
  function fetchUsers() {
    fetch('/users')
      .then(response => response.json())
      .then(users => {
        userListUl.innerHTML = '';
        users.forEach(user => {
          const li = document.createElement('li');
          li.textContent = user.name;
          userListUl.appendChild(li);
        });
      });
  }

  // Add a new user
  userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = userNameInput.value;

    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: userName })
    })
      .then(response => response.json())
      .then(newUser => {
        userNameInput.value = '';
        fetchUsers(); // Refresh the user list after adding a new user
      })
      .catch(err => console.error('Error adding user:', err));
  });

  // Initial fetch of users
  fetchUsers();
});
