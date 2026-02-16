import { translations, currentLang } from './i18n.js';

export const DeliveryCalculator = {
    render: () => {
        const t = translations[currentLang];
        return `
            <div class="calc-container">
                <div class="header-back">
                    <button id="backBtn" class="btn-circle">←</button>
                    <h2>${currentLang === 'id' ? 'Hitung Biaya' : 'Calculate Cost'}</h2>
                </div>

                <div class="calc-card-main">
                    <div class="form-group">
                        <label>${currentLang === 'id' ? 'Jarak Tempuh (KM)' : 'Distance (KM)'}</label>
                        <input type="number" id="inputDistance" placeholder="0" class="input-large">
                    </div>

                    <div class="form-group">
                        <label>${currentLang === 'id' ? 'Tipe Kendaraan' : 'Vehicle Type'}</label>
                        <select id="vehicleType" class="input-large">
                            <option value="4000">Honda Brio / City Car</option>
                            <option value="5500">Honda HR-V / WR-V / SUV</option>
                            <option value="7000">Honda CR-V / Accord / Premium</option>
                        </select>
                    </div>

                    <div class="result-area">
                        <p class="res-label">${currentLang === 'id' ? 'Estimasi Biaya' : 'Estimated Cost'}</p>
                        <h1 id="totalCost">Rp 0</h1>
                    </div>

                    <button id="btnSubmitCalc" class="btn-confirm-delivery">
                        ${currentLang === 'id' ? 'Proses Pengantaran' : 'Process Delivery'}
                    </button>
                </div>
            </div>
        `;
    },

    afterRender: (navigateTo, changeLang) => {
        const inputDistance = document.getElementById('inputDistance');
        const vehicleType = document.getElementById('vehicleType');
        const totalCostText = document.getElementById('totalCost');

        // Fungsi Hitung Otomatis
        const calculate = () => {
            const distance = parseFloat(inputDistance.value) || 0;
            const rate = parseFloat(vehicleType.value);
            const total = distance * rate;

            // Format ke Rupiah
            totalCostText.innerText = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0
            }).format(total);
        };

        inputDistance.addEventListener('input', calculate);
        vehicleType.addEventListener('change', calculate);

        // Tombol Kembali
        document.getElementById('backBtn').onclick = () => navigateTo('dashboard');

        // Tombol Submit (Hanya Trigger Swal)
        document.getElementById('btnSubmitCalc').onclick = () => {
            if (parseFloat(inputDistance.value) > 0) {
                Swal.fire({
                    icon: 'success',
                    title: currentLang === 'id' ? 'Siap Antar!' : 'Ready!',
                    text: currentLang === 'id' ? 'Data pengantaran telah dicatat.' : 'Delivery data has been recorded.',
                    confirmButtonColor: '#cc0000'
                }).then(() => navigateTo('dashboard'));
            } else {
                Swal.fire({
                    icon: 'warning',
                    text: currentLang === 'id' ? 'Masukkan jarak dulu ya!' : 'Please enter distance first!'
                });
            }
        };
    }
};