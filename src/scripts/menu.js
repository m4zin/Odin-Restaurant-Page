import bucketImg from '../imgs/item_pic.png'
import borgorImg from '../imgs/item_pic_2.png'
import twistorImg from '../imgs/item_pic_3.png'
import cockImg from '../imgs/item_pic_4.png'

const addMenuPage = () => {

    const homePage = document.querySelector('.home-page')
    homePage.style.display = 'none'

    const menuPage = document.createElement('div')
    menuPage.className = 'menu-page'

    // Creating Item one
    const itemOne = document.createElement('div')
    itemOne.className = 'item'
    const itemOneHeading = document.createElement('h1')
    itemOneHeading.innerHTML = 'Booket'
    const itemOnePng = new Image()
    itemOnePng.src = bucketImg
    const button = document.createElement('button')
    button.innerHTML = 'Buy'

    // Creating Item two
    const itemTwo = document.createElement('div')
    itemTwo.className = 'item'
    const itemTwoHeading = document.createElement('h1')
    itemTwoHeading.innerHTML = 'Borgor'
    const itemTwoPng = new Image()
    itemTwoPng.src = borgorImg
    const buttonTwo = document.createElement('button')
    buttonTwo.innerHTML = 'Buy'

    // Creating Item two
    const itemThree = document.createElement('div')
    itemThree.className = 'item'
    const itemThreeHeading = document.createElement('h1')
    itemThreeHeading.innerHTML = 'Twistor'
    const itemThreePng = new Image()
    itemThreePng.src = twistorImg
    const buttonThree = document.createElement('button')
    buttonThree.innerHTML = 'Buy'

    // Creating Item two
    const itemFour = document.createElement('div')
    itemFour.className = 'item'
    const itemFourHeading = document.createElement('h1')
    itemFourHeading.innerHTML = 'Cock'
    const itemFourPng = new Image()
    itemFourPng.src = cockImg
    const buttonFour = document.createElement('button')
    buttonFour.innerHTML = 'Buy'

    // Appending itemOne's child elements to it.
    itemOne.append
    (
        itemOneHeading,
        itemOnePng,
        button
    )

    // Appending itemOne's child elements to it.
    itemTwo.append
    (
        itemTwoHeading,
        itemTwoPng,
        buttonTwo
    )

    // Appending itemOne's child elements to it.
    itemThree.append
    (
        itemThreeHeading,
        itemThreePng,
        buttonThree
    )

    // Appending itemOne's child elements to it.
    itemFour.append
    (
        itemFourHeading,
        itemFourPng,
        buttonFour
    )

    // Now appending itemOne to menu page
    menuPage.append(itemOne, itemTwo, itemThree, itemFour)

    return menuPage

}

export { addMenuPage }