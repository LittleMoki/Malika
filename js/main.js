let burger = document.getElementById('burger')
let popup = document.getElementById('popup')

burger.addEventListener('click', ()=>{
  popup.classList.toggle('active')
})
// popup.addEventListener('mouseleave', ()=>{
//   popup.classList.remove('active')
// })