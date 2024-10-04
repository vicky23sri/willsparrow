document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuContent = document.getElementById('mobile-menu-content');
    const servicesMenuBtn = document.getElementById('services-menu-btn');
    const servicesSubmenu = document.getElementById('services-submenu');
    
    const homeLinks = document.querySelectorAll('.home-link');
    const currentPath = window.location.pathname;
    
    homeLinks.forEach(link => {
        if (currentPath === '/home.html') {
            link.style.display = 'none';
        }
    });

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('hidden');
        requestAnimationFrame(() => {
            mobileMenuContent.classList.remove('translate-x-full');
        });
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenuContent.classList.add('translate-x-full');
        setTimeout(() => {
            mobileMenuOverlay.classList.add('hidden');
        }, 300);
    });

    // Services submenu toggle
    servicesMenuBtn.addEventListener('click', () => {
        const isOpen = servicesSubmenu.classList.contains('hidden');
        servicesSubmenu.classList.toggle('hidden');
        servicesMenuBtn.querySelector('svg').style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0)';
    });
});