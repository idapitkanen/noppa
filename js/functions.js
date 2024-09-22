const dice = document.querySelector('#dice img')
const button = document.querySelector('button')

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min
}

button.addEventListener('click', () => {
    const randomized_number = getRandomIntNumberInRange(1,6)
    
    // Vaihdetaan nopan kuvaa numeroa vastaavaksi
    if (randomized_number === 1) {
        dice.src ="./images/1.png"
    } else if (randomized_number === 2) {
        dice.src ="./images/2.png"
    } else if (randomized_number === 3) {
        dice.src ="./images/3.png"
    } else if (randomized_number === 4) {
        dice.src ="./images/4.png"
    } else if (randomized_number === 5) {
        dice.src ="./images/5.png"
    } else if (randomized_number === 6) {
        dice.src ="./images/6.png"
    }
})
