const navbar = document.getElementById('navbar')
const menuBtn = document.querySelector('.fa-bars')

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('open')
  menuBtn.classList.toggle('rotate')
})
