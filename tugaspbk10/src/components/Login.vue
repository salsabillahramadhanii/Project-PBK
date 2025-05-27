<template>
    <div class="login-container">
      <h2 class="login-title">🔐 Login ke e-FarmaCare</h2>
      <input v-model="username" placeholder="👤 Username" />
      <input type="password" v-model="password" placeholder="🔑 Password" />
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        users: [
          { username: 'admin', password: 'admin' },
          { username: 'dokter1', password: 'dokter123' },
          { username: 'user123', password: 'pass123' }
        ]
      }
    },
    methods: {
      login() {
        const found = this.users.find(
          user => user.username === this.username && user.password === this.password
        )
        if (found) {
          alert('Login berhasil! Selamat datang, ' + this.username);
        } else {
          alert('Username atau Password salah!');
        }
        this.username = '';
        this.password = '';
      }
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
  
  .login-container {
    max-width: 400px;
    margin: 80px auto;
    padding: 30px;
    background: linear-gradient(135deg, #e0f7f9, #f0f4f8);
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    font-family: 'Poppins', sans-serif;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    gap: 18px;
    transition: box-shadow 0.3s ease;
  }
  
  .login-container:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
  }
  
  .login-title {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    color: #16a085;
    text-shadow: 1px 1px 2px rgba(22, 160, 133, 0.3);
    margin-bottom: 10px;
  }
  
  .login-container input {
    padding: 12px 15px;
    font-size: 1rem;
    border: 2px solid #2980b9;
    border-radius: 10px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .login-container input:focus {
    border-color: #1abc9c;
    outline: none;
    box-shadow: 0 0 8px rgba(26, 188, 156, 0.6);
  }
  
  .login-container button {
    background-color: #1abc9c;
    border: none;
    padding: 12px 0;
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .login-container button:hover {
    background-color: #16a085;
    transform: translateY(-2px);
  }
  </style>
  