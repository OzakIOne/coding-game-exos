const str = "Hello World"
const str2 = "72 101 108 108 111 32 87 111 114 108 100"

const strSplit = (str) => str.split('')
const strConvert = (str) => str.map((letters) => letters.charCodeAt())
const format = (str) => strConvert(str).join(' ')
console.log(format(strSplit(str)));

const str2Split = (str) => str.split(' ')
const str2Convert = (str) => str.map((nums) => String.fromCharCode(nums))
const format2 = (str) => str2Convert(str).join('')
console.log(format2(str2Split(str2)));
