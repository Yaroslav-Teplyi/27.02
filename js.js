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

function capsLock(str) {
    let splitedString = str.split(' ')

    for(let i = 0; i < splitedString.length; i++) {

        let splitedLetters = splitedString[i].split('')

        if(splitedLetters[0].match('[a-z]')) {
            for(let y = 1; y < splitedLetters.length; y++) {
                if(splitedString[i].slice(1).match('[a-z]')) {
                    console.log(splitedString[i]) 
                    break
                } else if(splitedString[i].slice(1).match('[A-Z]')) {
                    console.log(`${splitedLetters[0].toUpperCase()}${splitedString[i].slice(1).toLowerCase()}`)
                    break
                }
            }
        } else if(splitedLetters[0].match('[A-Z]')) {
            for(let y = 1; y < splitedLetters.length; y++) {
                if(splitedString[i].slice(1).match('[a-z]')) {
                    console.log(splitedString[i]) 
                    break
                } else if(splitedString[i].slice(1).match('[A-Z]' && splitedString[i].length > 2)){
                    console.log(`${splitedLetters[0].toUpperCase()}${splitedString[i].slice(1).toLowerCase()}`) 
                    break
                } else {
                    console.log(splitedString[i].toLowerCase())
                    break
                }
            }
        }     
    }
}

capsLock('cAPS')
capsLock('Lock')
capsLock('wHY DO wE NEED cAPS lOCK?')
capsLock('FuNkY iS nOt CaPs!')
