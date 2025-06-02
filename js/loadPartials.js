document.addEventListener('DOMContentLoaded', function() {
  // Load sidebar
  fetch('sidebar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('sidebar-container').innerHTML = data;
    highlightCurrentSidebarLink(); // ini opsional
  });

// Load header
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
    setPageTitle(); // Panggil setelah header dimuat
  });

  // Set judul halaman setelah DOM ready
  setPageTitle();
});

function highlightCurrentSidebarLink() {
  let currentPath = window.location.pathname.split('/').pop();

  // Kalau di halaman security atau preferences, anggap saja sedang di settings
  const settingsPages = ['Preferences.html', 'security.html'];
  if (settingsPages.includes(currentPath)) {
    currentPath = 'settings.html';
  }

  const links = document.querySelectorAll('#sidebar a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('text-blue-700', 'font-semibold');
      const icon = link.querySelector('i');
      if (icon) {
        icon.classList.add('text-blue-700');
      }
    }
  });
}


function setPageTitle() {
  const currentFile = window.location.pathname.split('/').pop();
  const pageTitles = {
    'home.html': 'CreditCards',
    'transactions.html': 'Transactions',
    'accounts.html': 'Accounts',
    'investments.html': 'Investments',
    'loans.html': 'Loans',
    'services.html': 'Services',
    'settings.html': 'Settings',
    'Preferences.html': 'Settings',
    'security.html': 'Settings',
  };

  const pageTitleElement = document.querySelector('header h1');
  if (pageTitles[currentFile] && pageTitleElement) {
    pageTitleElement.textContent = pageTitles[currentFile];
  }
}
