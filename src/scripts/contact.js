import locationImage from '../imgs/location.png'

const addContactPage = () => {

    // Contact page parent
    const contactPage = document.createElement('div')
    contactPage.className = 'contact-page'

    // Card in parent.
    const contactCard = document.createElement('div')
    contactCard.className = 'contact-card'

    // Children in card.
    const number = document.createElement('h1')
    number.innerHTML = 'Number: +971 56 933 0647'
    const location = document.createElement('h1')
    location.innerHTML = 'Location: Food Court Arena @ Your mums street 7879'
    const image = new Image()
    image.src = locationImage

    contactCard.append(
        number,
        location,
        image
    )

    contactPage.append(contactCard)

    return contactPage
}

export { addContactPage }