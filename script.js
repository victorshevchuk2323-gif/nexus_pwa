const firebaseConfig = {
  apiKey: "AIzaSyAghpzeBpz2A7ayZgcMMPjTeZib9RHHG68",
  authDomain: "nexus-pwa-744fd.firebaseapp.com",
  projectId: "nexus-pwa-744fd", 
  storageBucket: "nexus-pwa-744fd.firebasestorage.app",
  appId: "1:510553457331:web:1f9dff4543b7b868e0e6c6"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Функция регистрации
async function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const status = document.getElementById('status');
    
    status.textContent = "Создаём ваш аккаунт...";
    
    try {
        await auth.createUserWithEmailAndPassword(email, password);
        status.textContent = "Аккаунт создан! Добро пожаловать в Nexus!";
    } catch (error) {
        status.textContent = "Ошибка: " + error.message;
    }
}

// Функция входа
async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const status = document.getElementById('status');
    
    status.textContent = "Входим...";
    
    try {
        await auth.signInWithEmailAndPassword(email, password);
        status.textContent = "Вход выполнен!";
    } catch (error) {
        status.textContent = "Ошибка: " + error.message;
    }
}