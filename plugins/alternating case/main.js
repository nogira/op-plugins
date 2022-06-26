
const inputString = process.env.OP_TEXT.toLowerCase();

let text = ""
let currentChar =  ""
// track number of consecutive same case to prevent > 3 in a row same case
let numConsecutiveLower = 0
let numConsecutiveUpper = 0

function addChar(charCase) {
    if (charCase == 'upper') {
        text += currentChar.toUpperCase();
        numConsecutiveUpper += 1
        numConsecutiveLower = 0
    } else {
        text += currentChar
        numConsecutiveLower += 1
        numConsecutiveUpper = 0
    }
}

for (const char of inputString) {
    currentChar = char;
    if (char == 'i') {
        addChar('lower')
    } else if (char == 'l') {
        addChar('upper')
    } else if (numConsecutiveUpper == 3) {
        addChar('lower')
    } else if (numConsecutiveLower == 3) {
        addChar('upper')
    } else {
        const randomTrueOrFalse = Math.random() >= 0.5;
        if (randomTrueOrFalse) {
            addChar('lower')
        } else {
            addChar('upper')
        }
    }
}

process.stdout.write(text)
