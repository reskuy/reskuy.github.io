import { translations, currentLang } from './i18n.js';
import { supabaseClient } from './auth-service.js';

export const Login = {
    render: () => {
        const t = translations[currentLang];
        return `
            <div class="login-card">
                <div class="header">
                    <h1 data-i18n="login_title">${t.login_title}</h1>
                    <p data-i18n="login_subtitle">${t.login_subtitle}</p>
                </div>
                <form id="loginForm">
                    <div class="form-group">
                        <label data-i18n="email_label">${t.email_label}</label>
                        <input type="email" id="email" placeholder="nama@email.com" required>
                    </div>
                    <div class="form-group">
                        <label data-i18n="pass_label">${t.pass_label}</label>
                        <input type="password" id="password" placeholder="••••••••" required>
                    </div>
                    <button type="submit" class="btn-login" id="loginBtn" data-i18n="btn_login">${t.btn_login}</button>
                </form>
                <p style="text-align:center; font-size:14px; margin-top:16px;">
                    <a href="#" id="toRegister" data-i18n="switch_to_reg">${t.switch_to_reg}</a>
                </p>

                <div class="lang-switcher" style="text-align:center; margin-top:20px; border-top: 1px solid #eee; padding-top: 15px;">
                    <button class="btn-lang ${currentLang === 'id' ? 'active' : ''}" data-lang="id">ID</button>
                    <span style="color: #ccc">|</span>
                    <button class="btn-lang ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
                </div>
            </div>
        `;
    },
    afterRender: (navigateTo, changeLang) => {
        const form = document.getElementById('loginForm');
        const loginBtn = document.getElementById('loginBtn');

        // Navigasi ke Register
        document.getElementById('toRegister').onclick = (e) => { 
            e.preventDefault(); 
            navigateTo('register'); 
        };

        // Form Submit dengan Supabase & Swal
        form.onsubmit = async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Loading state
            loginBtn.disabled = true;
            loginBtn.innerText = currentLang === 'id' ? 'Memverifikasi...' : 'Verifying...';

            try {
                // Query ke Supabase mencari email dan password yang cocok
                const { data, error } = await supabaseClient
                    .from('users')
                    .select('*')
                    .eq('email', email)
                    .eq('password', password)
                    .single();

                if (error || !data) {
                    Swal.fire({
                        icon: 'error',
                        title: currentLang === 'id' ? 'Gagal Login' : 'Login Failed',
                        text: currentLang === 'id' ? 'Email atau Password salah!' : 'Invalid Email or Password!',
                        confirmButtonColor: '#3b82f6'
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: currentLang === 'id' ? 'Selamat Datang!' : 'Welcome back!',
                        text: currentLang === 'id' ? 'Berhasil masuk ke akun Anda.' : 'Successfully logged into your account.',
                        timer: 1500,
                        showConfirmButton: false
                    });

                    // Simpan session sederhana
                    localStorage.setItem('userSession', JSON.stringify({ email: data.email, loggedIn: true }));
                    
                    // Beri jeda agar animasi Swal selesai
                    setTimeout(() => navigateTo('dashboard'), 1500);
                }
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'System Error',
                    text: err.message
                });
            } finally {
                loginBtn.disabled = false;
                loginBtn.innerText = translations[currentLang].btn_login;
            }
        };
        
        // Listener Ganti Bahasa
        document.querySelectorAll('.btn-lang').forEach(btn => {
            btn.onclick = () => {
                const selectedLang = btn.dataset.lang;
                if (selectedLang !== currentLang) {
                    changeLang(selectedLang);
                }
            };
        });
    }
};