let headsFlips = 0
let headsPercent = 0
let tailsFlips = 0
let tailsPercent = 0
let totalFlips = 0


document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#flip').addEventListener('click', function () {
        if (Math.random() > .49999999){
        // flipped heads
        headsFlips++
        totalFlips++
        headsPercent = Math.round(headsFlips/totalFlips * 100)
        tailsPercent = Math.round(tailsFlips/totalFlips * 100)
        document.querySelector('#penny-image').src = 'assets/images/penny-heads.jpg'
        document.querySelector('#message').innerHTML = "You Flipped Heads!"
        document.querySelector('#heads').innerHTML = headsFlips
        document.querySelector('#heads-percent').innerHTML = headsPercent + '%'
        document.querySelector('#tails').innerHTML = tailsFlips
        document.querySelector('#tails-percent').innerHTML = tailsPercent + '%'
        } else {
        // flipped tails;
        tailsFlips++
        totalFlips++
        headsPercent = Math.round(headsFlips/totalFlips * 100)
        tailsPercent = Math.round(tailsFlips/totalFlips * 100)
        document.querySelector('#penny-image').src = 'assets/images/penny-tails.jpg'
        document.querySelector('#message').innerHTML = "You Flipped Tails!"
        document.querySelector('#heads').innerHTML = headsFlips
        document.querySelector('#heads-percent').innerHTML = headsPercent + '%'
        document.querySelector('#tails').innerHTML = tailsFlips
        document.querySelector('#tails-percent').innerHTML = tailsPercent + '%'
        }

    })
    // Clearing functionality
    document.querySelector('#clear').addEventListener('click', function () {
        headsFlips = 0
        headsPercent = 0
        tailsFlips = 0
        tailsPercent = 0
        totalFlips = 0
        document.querySelector('#penny-image').src = 'assets/images/penny-heads.jpg'
        document.querySelector('#message').innerHTML = "Let's Get Flipping!"
        document.querySelector('#heads').innerHTML = headsFlips
        document.querySelector('#heads-percent').innerHTML = headsPercent + '%'
        document.querySelector('#tails').innerHTML = tailsFlips
        document.querySelector('#tails-percent').innerHTML = tailsPercent + '%'
    })

})
    