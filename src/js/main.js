const sliderLinks = document.querySelectorAll(`a[data-toggle='modal']`)
const sliderModal = document.querySelector(`.datafolks__modal`)
const forms = document.forms
const contactForm = forms[0]

const contactFormButton = contactForm.querySelector(`input[type="submit"]`)


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

contactFormButton.addEventListener(`click`, (e) => {
    e.preventDefault()

    const contactFormName = contactForm.childNodes[0].querySelector(`input[type="text"]`).value
    const contactFormEmail = contactForm.childNodes[1].querySelector(`input[type="email"]`).value
    const contactFormPhone = contactForm.childNodes[2].querySelector(`input[type="tel"]`).value
    const contactFormText = contactForm.childNodes[3].querySelector(`textarea`).value

    const body = `name=` + encodeURIComponent(contactFormName) +
    `&email=` + encodeURIComponent(contactFormEmail) + `&phone` + encodeURIComponent(contactFormPhone) + `&text` + encodeURIComponent(contactFormText)

    /* TODO form XHR Request */

    // const xhr = new XMLHttpRequest()
    // xhr.open(`POST`, `../../form.php`, true)
    // xhr.setRequestHeader(`Content-Type`, `application/x-www-form-urlencoded; charset=UTF-8`)

    // xhr.onreadystatechange = function () {
    //     if (this.readyState === 4) {
    //         if (this.status >= 200 && this.status < 400) {
    //             const response = this.responseText
    //             console.log(response)
    //         } else {
    //             console.log(`Something went wrong`)
    //         }
    //     }
    // }
    // xhr.send(body)
})
