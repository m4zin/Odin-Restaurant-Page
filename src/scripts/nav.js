import kfcLogo from '../imgs/KFC_logo.svg'

const addNavbar = () => {
    // Creating nav element
    const navbar = document.createElement('nav')

    // Creating logo element
    const image = new Image()
    image.src = kfcLogo

    // Div for storing nav content
    const navContent = document.createElement('div')
    navContent.className = 'nav-content'

    // the content
    const ul = document.createElement('ul')

    const liOne = document.createElement('li')
    const liOneBtn = document.createElement('button')
    liOneBtn.innerHTML = 'Home'
    liOneBtn.className = 'home-button'
    liOne.appendChild(liOneBtn)

    const liTwo = document.createElement('li')
    const liTwoBtn = document.createElement('button')
    liTwoBtn.innerHTML = 'Menu'
    liTwoBtn.className = 'menu-button'
    liTwo.appendChild(liTwoBtn)

    const liThree = document.createElement('li')
    const liThreeBtn = document.createElement('button')
    liThreeBtn.innerHTML = 'Contact'
    liThreeBtn.className = 'contact-button'
    liThree.append(liThreeBtn)

    ul.append
    (
        liOne, 
        liTwo, 
        liThree
    )

    navContent.append
    (
        ul
    )

    navbar.append
    (
        image,
        navContent
    )

    return navbar
}

export {addNavbar}