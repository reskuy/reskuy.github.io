const app = document.getElementById('app');

const routes = {
  login: 'views/login/login.html',
  register: 'views/register/register.html',
  about: 'views/about/about.html',
  dashboard: 'views/dashboard/dashboard.html'
};

async function loadPage(page) {
  const path = routes[page] || routes['login'];
  try {
    const res = await fetch(path);
    const html = await res.text();
    app.innerHTML = html;
    // Re-execute script tags
    const scripts = app.querySelectorAll('script');
    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script');
      if (oldScript.type) newScript.type = oldScript.type;
      if (oldScript.src) {
        newScript.src = oldScript.src;
      } else {
        newScript.textContent = oldScript.textContent;
      }
      document.body.appendChild(newScript);
    });
    history.pushState({}, '', '#' + page);
    checkSideBar()
  } catch (err) {
    app.innerHTML = `<p class="text-red-500">Error loading page: ${err.message}</p>`;
  }
}

function router() {
  const hash = location.hash.replace('#', '') || 'login';
  loadPage(hash);
//   checkSideBar()
}


window.addEventListener('hashchange', router);
window.addEventListener('load', router);


function checkSideBar(){
     const drawer = document.querySelector('.mainDrawer');

        // Check login status from localStorage
        const isLoggedIn = localStorage.getItem('logged') == 'true';

        if (isLoggedIn) {
            // alert('ok')
            // drawer.classList.remove('hidden');
            drawer.classList.add('lg:drawer-open');
        } else {
            // drawer.classList.add('hidden');
            drawer.classList.remove('lg:drawer-close');
        }
}
 