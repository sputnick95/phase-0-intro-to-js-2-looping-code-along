// Code your solutions in this file
const deck = ["Guadalupe", "Ollie", "Aki"]
const deck2 =[]

function writeCards(cards) {
    for (let i=0; i<deck.length; i++) {
        deck2.push(`Thank you, ${deck[i]}, for the wonderful surprise gift!`)
    }
    return deck2
}

function countDown(num) {
    let i = 10;
    while (i>=0) {
        console.log(i)
        --i
    }
}