// const button = document.getElementsByClassName('hamburger')[0];
// const nav = document.getElementsByClassName('header__nav')[0];

// button.addEventListener('click', () => {
//   nav.classList.toggle('active');
// })

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});