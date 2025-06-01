// script.js

let currentUser = null;
let users = JSON.parse(localStorage.getItem('bankUsers')) || {};

function saveUsers() {
  localStorage.setItem('bankUsers', JSON.stringify(users));
}

function login() {
  const username = document.getElementById('username').value.trim();
  const passwordWord = document.getElementById('passwordWord').value.trim();
  if (!username) {
    alert('Введіть імʼя користувача');
    return;
  }
   if (!passwordWord) {
    alert('Введіть пароль.')
    return;
  }
  if (!users[username]) {
    users[username] = { balance: 0, history: [] };
  }
  currentUser = username;
  saveUsers();
  alert('Пробчате, ця функія тим часово не доступна. Скористайтесь демо-входом.');
}

function demo() {
    window.location.href = 'main_menu.html';
}


