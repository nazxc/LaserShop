const slides = document.querySelectorAll('.slider__item')
const dots = document.querySelectorAll('.slider__dot')

let index = 0

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active__slider')
    }
    slides[n].classList.add('active__slider')
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active__dot')
    }
    dots[n].classList.add('active__dot')
}

const prepareCurrentSlide = ind => {
    activeSlide(ind)
    activeDot(ind)
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0
        prepareCurrentSlide(index)
    } else {
        index++
        prepareCurrentSlide(index)
    }
}

const prevSlide = () => {
        if (index == slides.length - 1) {
            index = 0
            prepareCurrentSlide(index)
        } else {
            index++
            prepareCurrentSlide(index)
        }
    }
    // Переключение слайдера
dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        prepareCurrentSlide(index)
        clearInterval(intervalTime)
        intervalTime = setInterval(nextSlide, 3000)
    })
})

intervalTime = setInterval(nextSlide, 3000)