import { translations, currentLang } from './i18n.js';
import { supabaseClient } from './auth-service.js';

export const Register = {
    render: () => {
        const t = translations[currentLang];
        return `
            <div class="login-card">
                <div class="header">
                    <h1 data-i18n="reg_title">${t.reg_title}</h1>
                    <p data-i18n="reg_subtitle">${t.reg_subtitle}</p>
                </div>
                <form id="registerForm">
                    <div class="form-group">
                        <label data-i18n="email_label">${t.email_label}</label>
                        <input type="email" id="regEmail" placeholder="email@domain.com" required>
                    </div>
                    <div class="form-group">
                        <label data-i18n="pass_label">${t.pass_label}</label>
                        <input type="password" id="regPassword" placeholder="••••••••" required>
                    </div>
                    <button type="submit" class="btn-login" id="regBtn" data-i18n="btn_reg">${t.btn_reg}</button>
                </form>
                
                <p style="text-align:center; font-size:14px; margin-top:16px;">
                    <a href="#" id="toLogin" data-i18n="switch_to_login">${t.switch_to_login}</a>
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
        const form = document.getElementById('registerForm');
        const regBtn = document.getElementById('regBtn');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;

            regBtn.disabled = true;
            regBtn.innerText = currentLang === 'id' ? 'Memproses...' : 'Processing...';

            try {
                const { data, error } = await supabaseClient
                    .from('users')
                    .insert([{ email: email, password: password }]);

                if (error) {
                    Swal.fire({
                        icon: 'error',
                        title: currentLang === 'id' ? 'Oops...' : 'Oops...',
                        text: error.message,
                        confirmButtonColor: '#3085d6'
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: currentLang === 'id' ? 'Berhasil!' : 'Success!',
                        text: currentLang === 'id' ? 'Registrasi Berhasil!' : 'Registration Successful!',
                        timer: 2000,
                        showConfirmButton: false
                    });
                    
                    // Beri sedikit jeda agar user bisa lihat pesan suksesnya
                    setTimeout(() => navigateTo('login'), 2000);
                }
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Connection Error',
                    text: currentLang === 'id' ? 'Gagal terhubung ke database' : 'Failed to connect to database'
                });
            } finally {
                regBtn.disabled = false;
                regBtn.innerText = translations[currentLang].btn_reg;
            }
        });

        document.getElementById('toLogin').onclick = (e) => {
            e.preventDefault();
            navigateTo('login');
        };

        document.querySelectorAll('.btn-lang').forEach(btn => {
            btn.onclick = () => {
                const selectedLang = btn.dataset.lang;
                if(selectedLang !== currentLang) {
                    changeLang(selectedLang);
                }
            };
        });
    }
};