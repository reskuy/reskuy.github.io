export const translations = {
    id: {
        login_title: "Masuk",
        login_subtitle: "Silakan login ke akun Anda",
        reg_title: "Daftar",
        reg_subtitle: "Buat akun baru Anda",
        email_label: "Email",
        pass_label: "Password",
        btn_login: "Masuk",
        btn_reg: "Daftar Sekarang",
        switch_to_reg: "Belum punya akun? Daftar",
        switch_to_login: "Sudah punya akun? Login"
    },
    en: {
        login_title: "Login",
        login_subtitle: "Please login to your account",
        reg_title: "Register",
        reg_subtitle: "Create your new account",
        email_label: "Email",
        pass_label: "Password",
        btn_login: "Login",
        btn_reg: "Register Now",
        switch_to_reg: "Don't have an account? Register",
        switch_to_login: "Already have an account? Login"
    }
};

export let currentLang = localStorage.getItem('lang') || 'id';

export const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
};