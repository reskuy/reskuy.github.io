import { translations, currentLang } from './i18n.js';

export const Home = {
    render: () => {
        const t = translations[currentLang];
        const userSession = JSON.parse(localStorage.getItem('userSession')) || { email: 'Staff' };

        return `
            <div class="dashboard-wrapper">
                <div class="home-header">
                    <div class="brand-identity">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEAElEQVR4Ac3XA8wkSxSG4e767f/atm3bts342rZt27Zt21x7d8zaN8lXyUmtvV/yzExP93Sdqj6jZEYnxQTzCTyatO2RStgO8ahr35qTUsBn2qijAdMiVU0ixaqhAM/NV2hBEYpDN3qlB51olybV6XR8DRWUpIAMRmI4Rnq2U7tYYaW+0IYyH7bFxlhAg9R00qIUUNbzPhSsY5vRijbdN+v5Mv7Gm3gVQ8ILGxGyBS5BF57HS3qc1QuHa9CaZuIrCdFBVJZ6CjHFzK2JNCOPdXEBjsSJHPRZj1mBlfEU+uBY/IBlVEQLtsPXSRRnljKOJvQ4/sHWGIC1cZsmsiv+btR5jtRETsAP5rytmsmyoYDVMb58BhW2EnrQDG/eUKfhUeyP851ZqvejWRZEKzRxcbpTASTJoYSQ9zTJLdDluJkXc+J7VGjvkJIpYAWtRvLFBGav9GJZU0AZIRn8oiaf3ZllGgybEvJ6vATmmpjZKwtKGLBqPnS8xmoPK9CBVAcmFShlZPV4bhUx3o9OD2U5zKLH2ZQCYJt1JBrR5swnbAk21VCAql11QgWYfaubD9RRrYxNcTaF8HZ1KtxrwLiADOxJG+vqgzhfQenEKvaaq5HsR3wlLJgzGw429aiAFTCnPVF8sLKALlfIKCTdqEEJV6Tq9PHq0RxfS73YNtYy4ETjzcpRw47SjU0Tqig5vU1q6NDgMM2iqA82CcfYy/A5lBSbmUXyGBG/SzRWGXmn4kqYNT5QL7bZGQun2vhCUigrYUuE1OLJe+gdkkfOaZY5zB53ufZ52LfXFeqHNjSl0IzW0r4FxtbIXhxDaKyRYQUyGI654/FVfRU2u+FlvIjHOekT2n5Oy29TDgXUoUKa1cyDQwF5DMC8aLWroAIqiDMf1sHG2Ahr6qRxSshG5+xQk/alqLJTlX+pgJ5EFSkZ7bfJ4kJsgQ1VwNa4EfGxBeRgM7v86Uy//agn51e728EKsHkS5+ADfIdv8Q5OwVuwySEfNfaiGuIn+/x3erxq9DmQiwooqYBq+ED6CV7Fap+HXcFidM41dd5fbAG/4jfsrOpCCtGn4d/hUzfFKjhQhSgfY2DUxGXTA7NiO53jf1vACNyv67m/aZgi8gj5Rg2b3IEQc/w/+CUuwBx2NJbDfSj56FdxD65XQ12LhzAIZ6nhWnAZ7sX4cjIOUuGP4josjENxuCZ6ari06ecqTenFkdgLjfhHS5qV/1RUGVV4M7tGFTkP5kMnurS9kF5/jwrIgYbT2LYIZU4sr+VaELOhM3z6wSG1P4yNiumdIfgXP+BHDLMfyWvYcb9DGeNJo/rNmfs0+ktYC/7GItEJvKl6Vds/NvvgeLPTY3LjzfeuZjzzZTQpyUeycO6ErAAAAABJRU5ErkJggg==" alt="Honda Logo" class="honda-logo">
                        <div class="company-name">
                            <p class="staff-tag">App</p>
                            <h4 class="dealer-name">PT Prospect Motor</h4>
                        </div>
                    </div>
                </div>

                <div class="welcome-banner">
                    <p>${currentLang === 'id' ? 'Selamat Bekerja,' : 'Have a great day,'}</p>
                    <h2>${userSession.email.split('@')[0]}</h2>
                </div>

                <div class="delivery-calc-card">
                    <div class="card-body">
                        <div class="info">
                            <h3>${currentLang === 'id' ? 'Kalkulator Pengiriman' : 'Delivery Calculator'}</h3>
                            <p>${currentLang === 'id' ? 'Hitung estimasi jarak & biaya antar unit Honda.' : 'Calculate Honda unit delivery distance & cost.'}</p>
                        </div>
                        <button class="btn-start-calc">
                            <span class="icon">📍</span>
                        </button>
                    </div>
                    <div class="honda-lineup-preview">
                        <span>Honda Brio</span> • <span>HR-V</span> • <span>WR-V</span> • <span>CR-V</span>
                    </div>
                </div>

                <div class="services-grid">
                    <div class="service-item">
                        <div class="s-icon">📋</div>
                        <p>${currentLang === 'id' ? 'Input DO' : 'Delivery Order'}</p>
                    </div>
                    <div class="service-item">
                        <div class="s-icon">🏙️</div>
                        <p>${currentLang === 'id' ? 'Area Dealer' : 'Dealer Areas'}</p>
                    </div>
                    <div class="service-item">
                        <div class="s-icon">💰</div>
                        <p>${currentLang === 'id' ? 'Tarif BBM' : 'Fuel Rates'}</p>
                    </div>
                    <div class="service-item">
                        <div class="s-icon">📈</div>
                        <p>${currentLang === 'id' ? 'Laporan' : 'Reports'}</p>
                    </div>
                </div>

                <div class="recent-logs">
                    <h3 class="title">${currentLang === 'id' ? 'Pengiriman Terakhir' : 'Recent Deliveries'}</h3>
                    <div class="log-card">
                        <div class="log-status success"></div>
                        <div class="log-details">
                            <strong>All New HR-V RS</strong>
                            <p>Jakarta → Bogor (45 KM)</p>
                        </div>
                        <div class="log-time">10m ago</div>
                    </div>
                </div>

                <div class="footer-home">
                    <button id="logoutBtn" class="btn-honda-logout">
                        ${currentLang === 'id' ? 'Keluar Akun' : 'Sign Out'}
                    </button>
                    <div class="lang-selector-home">
                        <span class="btn-lang ${currentLang === 'id' ? 'active' : ''}" data-lang="id">ID</span>
                        <span class="btn-lang ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</span>
                    </div>
                </div>
            </div>
        `;
    },

    afterRender: (navigateTo, changeLang) => {
        const session = localStorage.getItem('userSession');
        if (!session) { navigateTo('login'); return; }

        document.getElementById('logoutBtn').onclick = () => {
            Swal.fire({
                title: 'Sign Out?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#cc0000', // Warna Honda Red
                confirmButtonText: 'Logout'
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem('userSession');
                    navigateTo('login');
                }
            });
        };

        document.querySelector('.btn-start-calc').onclick = () => {
            navigateTo('calculator');
        };

        document.querySelectorAll('.btn-lang').forEach(btn => {
            btn.onclick = () => changeLang(btn.dataset.lang);
        });
    }
};