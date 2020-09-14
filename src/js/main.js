const sliderLinks = document.querySelectorAll(`a[data-toggle='modal']`)
const sliderModal = document.querySelector(`.datafolks__modal`)
const contactForm = document.querySelector(`form`)
sliderLinks.forEach((item) => {
    item.addEventListener(`click`, (e) => {
        e.preventDefault()
        const dataImage = item.childNodes[0].getAttribute(`src`)
        const dataHeading = item.childNodes[1].textContent
        const dataFolksModal = document.querySelector(`.datafolks__modal`)
        const dataFolksModalContainer = document.querySelector(`.datafolks__modal__container`)
        dataFolksModal.classList.remove(`d--none`)
        dataFolksModalContainer.childNodes[0].textContent = dataHeading
        dataFolksModalContainer.childNodes[1].textContent = `Lorem ipsum dolor sit amet...`
        dataFolksModalContainer.childNodes[2].setAttribute(`src`, dataImage)
    })
})
sliderModal.addEventListener(`click`, () => {
    sliderModal.classList.add(`d--none`)
})
contactForm.submit((e) => {
    e.preventDefault()
    console.log(`submit`)
})
