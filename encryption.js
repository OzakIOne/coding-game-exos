/*
Each character on an odd position is swap with the next character
If the string has an odd length the last character is moved to the begenning of the string and then each character on an odd position is swap with the next character
https://ramdajs.com/repl/#?%2F%2A%0AEach%20character%20on%20an%20odd%20position%20is%20swap%20with%20the%20next%20character%0AIf%20the%20string%20has%20an%20odd%20length%20the%20last%20character%20is%20moved%20to%20the%20begenning%20of%20the%20string%20and%20then%20each%20character%20on%20an%20odd%20position%20is%20swap%20with%20the%20next%20character%0A%0A%2A%2F%0A%0Afunction%20DecodeSwap%28string%29%20%7B%20%2F%2F%200%20to%20end%0A%20%20%20%20const%20array%20%3D%20string.split%28%27%27%29%3B%0A%20%20%20%20if%20%28string.length%20%25%202%29%20%7B%0A%20%20%20%20%20%20%20%20array.push%28array%5B0%5D%29%0A%20%20%20%20%20%20%20%20array.shift%28%29%0A%20%20%20%20%7D%0A%20%20%20%20return%20array%0A%7D%0A%0Afunction%20EncodeSwap%28string%29%20%7B%20%2F%2F%20end%20to%200%0A%20%20%20%20const%20array%20%3D%20string.split%28%27%27%29%3B%0A%20%20%20%20if%20%28string.length%20%25%202%29%20%7B%0A%20%20%20%20%20%20%20%20array.unshift%28array%5Barray.length%20-%201%5D%29%0A%20%20%20%20%20%20%20%20array.pop%28%29%0A%20%20%20%20%7D%0A%20%20%20%20return%20array%0A%7D%0A%0Afunction%20Decode%28string%29%20%7B%0A%20%20%20%20const%20SortString%20%3D%20DecodeSwap%28string%29%0A%20%20%20%20if%20%28SortString.length%20%25%202%29%20%7B%20%2F%2F%20even%0A%20%20%20%20%20%20%20%20var%20i%20%3D%200%3B%0A%20%20%20%20%7D%20else%20%7B%20var%20i%20%3D%201%20%7D%20%2F%2F%20odd%0A%20%20%20%20for%20%28%3B%20i%20%3C%20SortString.length%20-%201%3B%20i%20%3D%20i%20%2B%202%29%20%7B%0A%20%20%20%20%20%20%20%20%5BSortString%5Bi%5D%2C%20SortString%5Bi%20%2B%201%5D%5D%20%3D%20%5BSortString%5Bi%20%2B%201%5D%2C%20SortString%5Bi%5D%5D%0A%20%20%20%20%7D%0A%20%20%20%20console.log%28SortString.join%28%27%27%29%29%0A%7D%0A%0Afunction%20Encode%28string%29%20%7B%0A%20%20%20%20const%20SortString%20%3D%20EncodeSwap%28string%29%0A%20%20%20%20for%20%28let%20i%20%3D%201%3B%20i%20%3C%20SortString.length%20-%201%3B%20i%20%3D%20i%20%2B%202%29%20%7B%0A%20%20%20%20%20%20%20%20%5BSortString%5Bi%5D%2C%20SortString%5Bi%20%2B%201%5D%5D%20%3D%20%5BSortString%5Bi%20%2B%201%5D%2C%20SortString%5Bi%5D%5D%0A%20%20%20%20%7D%0A%20%20%20%20console.log%28SortString.join%28%27%27%29%29%0A%7D%0A%0ADecode%28%27ehTsii%20%20s%20aemssga%27%29%0AEncode%28%27This%20is%20a%20message%27%29%0A%0ADecode%28%27Eev%20nelgnht.%27%29%0AEncode%28%27Even%20length.%27%29
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
