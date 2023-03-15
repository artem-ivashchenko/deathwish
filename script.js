const button = document.querySelector('i.hamburger');
const nav = document.querySelector('div.header__nav');

console.log(nav.clientHeight);

button.addEventListener('click', () => {
  nav.classList.toggle('active');
})