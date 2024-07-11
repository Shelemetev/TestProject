const menuButton = document.querySelector('.active--btn')
const menuBtnImg = document.querySelector('.header__menu-img')
const menuBlock = document.querySelector('.header__menu-block')

// menuButton.addEventListener('mouseover', () => {
//     menuBtnImg.classList.remove("img--disactive")
//     menuBtnImg.classList.add("img--active")
//     menuBlock.classList.add("header__block--active")
//     menuBlock.classList.remove("header__block--disctive")
// })

// menuButton.addEventListener('mouseout', () => {
//     menuBtnImg.classList.remove("img--active")
//     menuBtnImg.classList.add("img--disactive")
//     menuBlock.classList.remove("header__block--active")
//     menuBlock.classList.add("header__block--disctive")
// })

menuButton.addEventListener('click', () => {
    menuBtnImg.classList.toggle("img--active")
    menuBlock.classList.toggle("header__block--active")
})

const comments = document.querySelector('.reviews__comments')
const widthC = comments.scrollWidth

const reviews = document.querySelector('.reviews').offsetWidth

const comment = document.querySelectorAll('.reviews__comment').length

const step = Math.floor(widthC / reviews)

const center = Math.floor(step/2)

let count = center 
comments.style.transform = 'translateX(-' + (reviews * count) + 'px)';

let recode = () => {
    comments.style.transform = 'translateX(-' + (reviews * count) + 'px)';
}

const btnNext = document.querySelector('.reviews__comments-btn--next')
const btnPrev = document.querySelector('.reviews__comments-btn--prev')

btnNext.addEventListener('click', () => {
    if (count < step) {
        count += 1
        recode()
    }
})

btnPrev.addEventListener('click', () => {
    if (count >= 0) {
        count -= 1
        recode()
    }
})

// 

const burgerBtn = document.querySelector('.header__burger-btn')
const menu = document.querySelector('.header__menu')

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle("header__menu--active")
})

// 

const inputTell = document.querySelector(".contacts__form-input--tel")
const submit = document.querySelector('.contacts__form-btn')
const checkbox = document.querySelector('.contacts__form-input--checkbox')
const box = document.querySelector('.custom__checkbox')

box.addEventListener('mouseout', () => {
    if(inputTell.value != undefined && checkbox.checked) {
        submit.classList.add('btn--red')
    }
})

inputTell.onblur = function() {
    if(inputTell.value != undefined && checkbox.checked) {
        submit.classList.add('btn--red')
    }
}

submit.addEventListener("submit", () => {
    
})

// 

document.addEventListener("touchstart", Start, false)
document.addEventListener("touchmove", Move, false)

let x1 = null
let y1 = null

function Start(event) {
    const firstTouch = event.touches[0]

    x1 = firstTouch.clientX

    y1 = firstTouch.clientY

    console.log(x1,y1);
    
}

function Move(event) {
    if (!x1 || !y1) {
        return false
    }
    let x2 = event.touches[0].clientX

    let y2 = event.touches[0].clientY

    let xDiff= x2 - x1

    let yDiff= y2 - y1

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if(xDiff > 0) {
            if (count >= 0) {
                count -= 1
                recode()
            }
            
        } else {
            if (count < step) {
                count += 1
                recode()
            }
        }
    }
    x1 = null
    y1 = null
    console.log(x2,y2);
}