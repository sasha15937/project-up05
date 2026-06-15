const popup = document.querySelector('.popup-overlay')
const openBtn = document.querySelectorAll('#show-popup')
const closeBtn = document.querySelector('.popup-close')

openBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        popup.classList.add('show')
    })
})
closeBtn.addEventListener('click', () => {
    popup.classList.remove('show')
})