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
    let resultStringsArray = [];

    for(let i = 0; i < splitedString.length; i++) {

        let splitedLetters = splitedString[i].split('')

        if(splitedString[i].length == 1) {                                                                               // проверка на один символ                   
            if(splitedString[i].match('[a-z]')) {
                resultStringsArray.push(splitedString[i].toUpperCase())
            } else {
                resultStringsArray.push(splitedString[i].toLowerCase())
            }
        } else if(splitedLetters[0].match('[a-z]')) {                                                                    // проверка на слова, которые начинаються с маленькой буквы      
            for(let y = 1; y < splitedLetters.length; y++) {
                if(splitedString[i].slice(1).match('[a-z]')) {
                    resultStringsArray.push(splitedString[i]) 
                    break
                } else if(splitedString[i].slice(1).match('[A-Z]')) {
                    resultStringsArray.push(`${splitedLetters[0].toUpperCase()}${splitedString[i].slice(1).toLowerCase()}`)
                    break
                }
            }
        } else if(splitedLetters[0].match('[A-Z]')) {                                                                     // проверка на слова, которые начинаються с большой буквы      
            for(let y = 1; y < splitedLetters.length; y++) {
                if(splitedString[i].slice(1).match('[a-z]')) {
                    resultStringsArray.push(splitedString[i]) 
                    break
                } else if(splitedString[i].slice(1).match('[A-Z]' && splitedString[i].length > 2)){
                    resultStringsArray.push(`${splitedLetters[0].toUpperCase()}${splitedString[i].slice(1).toLowerCase()}`) 
                    break
                } else {
                    resultStringsArray.push(splitedString[i].toLowerCase())
                    break
                }
            }
        }     
    }
    return resultStringsArray.join(' ');
}

console.log(capsLock('cAPS'))
console.log(capsLock('Lock'))
console.log(capsLock('wHY DO wE NEED cAPS lOCK?'))
console.log(capsLock('FuNkY iS nOt CaPs!'))
console.log(capsLock('z'))
console.log(capsLock('Z'))




