const SUPABASE_URL = 'https://lwcrfvmuisptueejmbmg.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Y3Jmdm11aXNwdHVlZWptYm1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyNjY5ODYsImV4cCI6MjA5NTg0Mjk4Nn0.QtlddMwZIzdlEUqouAKXTi90edqFWIkLxCnljfGSrmc'; 

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 1. Proteksi Halaman (Cek Sesi)
async function protectGallery() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    
    // Jika tidak ada sesi (belum login), kembalikan ke index.html (Halaman Login)
    if (!session) {
        window.location.href = "index.html";
    }
}

protectGallery();

// 2. Fungsi Logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        logoutBtn.textContent = 'Keluar...';
        
        await supabaseClient.auth.signOut();
        window.location.href = "index.html";
    });
}