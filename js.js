'use strict'

console.log('Task 1---------------------')

function longWord(word) {
    word.split('')

    if(word.length > 10) {
        let numberOfLetters = 1

        while(numberOfLetters < word.length - 2) {
            numberOfLetters++
        }
        console.log(`${word[0]}${numberOfLetters}${word[word.length - 1]}`)
    } else {
        console.log(word)
    }
    
}

longWord('localization')
longWord('internationalization')
longWord('word')
longWord('')
longWord('1')

console.log('Task 2---------------------')

