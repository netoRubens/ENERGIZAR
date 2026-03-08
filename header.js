const header = document.querySelector("header");


/* SCROLL SUAVE COM OFFSET */
const links = document.querySelectorAll('a[href^="#"]');
const headerHeight = header.offsetHeight;

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        const offsetTop = target.offsetTop - headerHeight;

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    });
});

/* MENU MOBILE */
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mobileMenu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  menu.classList.toggle('active');

  document.body.style.overflow =
    menu.classList.contains('active') ? 'hidden' : '';
});

/* fecha ao clicar em um link */
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('active');
    menu.classList.remove('active');
    document.body.style.overflow = '';
  });
});