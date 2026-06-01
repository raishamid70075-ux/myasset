const SUPABASE_URL = 'https://lwcrfvmuisptueejmbmg.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Y3Jmdm11aXNwdHVlZWptYm1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyNjY5ODYsImV4cCI6MjA5NTg0Mjk4Nn0.QtlddMwZIzdlEUqouAKXTi90edqFWIkLxCnljfGSrmc'; 

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');
const loginBtn = document.getElementById('loginBtn');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    loginBtn.textContent = 'MEMPROSES...';
    loginBtn.disabled = true;
    messageDiv.textContent = '';

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

    if (error) {
        messageDiv.textContent = error.message;
        messageDiv.className = 'error';
        loginBtn.textContent = 'LOGIN';
        loginBtn.disabled = false;
    } else {
        messageDiv.textContent = 'Berhasil! Membuka galeri...';
        messageDiv.className = 'success';
        setTimeout(() => {
            window.location.href = "gallery.html"; // Berpindah ke galeri
        }, 1500);
    }
});