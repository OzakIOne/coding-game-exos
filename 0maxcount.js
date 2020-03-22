const string = "1000203000010000005"

const strSplit = (str) => str.split(/[1-9]/)
const listMaxzeros = (str) => str.reduce((acc, cur) => Math.max(cur.length, acc), 0)
const r = listMaxzeros(strSplit(string))
console.log(r);