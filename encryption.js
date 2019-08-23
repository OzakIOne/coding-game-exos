/*
Each character on an odd position is swap with the next character
If the string has an odd length the last character is moved to the begenning of the string and then each character on an odd position is swap with the next character
*/

function DecodeSwap(string) { // 0 to end
    const array = string.split('');
    if (string.length % 2) {
        array.push(array[0])
        array.shift()
    }
    return array
}

function EncodeSwap(string) { // end to 0
    const array = string.split('');
    if (string.length % 2) {
        array.unshift(array[array.length - 1])
        array.pop()
    }
    return array
}

function Decode(string) {
    const SortString = DecodeSwap(string)
    if (SortString.length % 2) { // even
        var i = 0;
    } else { var i = 1 } // odd
    for (; i < SortString.length - 1; i = i + 2) {
        [SortString[i], SortString[i + 1]] = [SortString[i + 1], SortString[i]]
    }
    console.log(SortString.join(''))
}

function Encode(string) {
    const SortString = EncodeSwap(string)
    for (let i = 1; i < SortString.length - 1; i = i + 2) {
        [SortString[i], SortString[i + 1]] = [SortString[i + 1], SortString[i]]
    }
    console.log(SortString.join(''))
}

Decode('ehTsii  s aemssga')
Encode('This is a message')

Decode('Eev nelgnht.')
Encode('Even length.')