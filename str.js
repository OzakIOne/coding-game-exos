const string = "DAMN IT'S hard"

const strSplit = (str) => str.split('')

const majCount = (str) => str.reduce((acc, cur) => {
    console.log(cur, acc);

    return acc += Boolean((cur).match(/[a-z]/))
}, 0)

console.log(majCount(strSplit(string)))