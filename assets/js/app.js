const barsButton = document.querySelector('.bars');

barsButton.addEventListener('click', handleToggleMobileMenu);

function handleToggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-nav');
  mobileMenu.classList.toggle('active');
}
