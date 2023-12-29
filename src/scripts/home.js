import kfcBucket from '../imgs/kfc_bucket.png'

const addHomePage = () => {
    const homePage = document.createElement('div')
    homePage.className = 'home-page'

    const bucketAndQuote = document.createElement('div')
    bucketAndQuote.className = 'bucket-and-quote'

    const bucket = new Image()
    bucket.src = kfcBucket

    const quote = document.createElement('p')
    quote.innerHTML = "Savor the Crunch: Unleash a symphony of flavors at KFC where every bite tells a delicious story."

    bucketAndQuote.append(bucket, quote)

    homePage.append(bucketAndQuote)

    return homePage
}

export { addHomePage }

