const burger = document.querySelector('.nav__burger')
const navBurger = document.querySelector('.nav__items')
const navBurgerDropdown = document.querySelector('.catalog__items')
const itemDropdown = document.getElementById('dropdown__menu')

burger.addEventListener('click', () => {
    burger.classList.toggle('active__burger')
    navBurger.classList.toggle('burger__nav')
})

itemDropdown.addEventListener('click', () => {
    navBurgerDropdown.classList.toggle('catalog__items-burger')
})