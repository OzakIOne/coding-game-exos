const ip = '192.168.1.1'
const ipSplit = (ip) => ip.split('.')
const toBinary = (nums) => nums.map((n) => parseInt(n).toString(2))
const leadingZeros = (nums) => `00000000${nums}`.slice(-8)
const format = (nums) => nums.map(leadingZeros)

const binaryArray = toBinary(ipSplit(ip))
const formatedArray = format(binaryArray)
const sumArray = parseInt(formatedArray.join(''), 2)
console.log(sumArray)
