import { Login } from './login.js';
import { Register } from './register.js';
import { Home } from './home.js'; // Import modul Home
import { DeliveryCalculator } from './delivery-calculator.js';
import { setLanguage } from './i18n.js';

const routes = {
    login: Login,
    register: Register,
    dashboard: Home,
    calculator: DeliveryCalculator // Rute baru
};

const app = {
    currentPage: 'login',

    render: (pageName) => {
        // PROTEKSI HALAMAN: Jika coba masuk dashboard tanpa session, lempar ke login
        const session = localStorage.getItem('userSession');
        if (pageName === 'dashboard' && !session) {
            app.render('login');
            return;
        }

        app.currentPage = pageName;
        const root = document.getElementById('app');
        const component = routes[pageName];

        if (component) {
            root.innerHTML = component.render();
            // Kirim fungsi navigateTo (app.render) DAN changeLang ke modul
            component.afterRender(app.render, app.changeLang);
        } else {
            // Jika rute tidak ditemukan, balik ke login
            app.render('login');
        }
    },

    changeLang: (lang) => {
        setLanguage(lang);
        // Re-render halaman yang sedang aktif agar bahasa berubah instan
        app.render(app.currentPage);
    },

    init: () => {
        // Cek jika sudah ada session, langsung ke dashboard saat buka app
        const session = localStorage.getItem('userSession');
        if (session) {
            app.render('dashboard');
        } else {
            app.render('login');
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);