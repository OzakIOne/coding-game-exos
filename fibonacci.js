function fibonacci(n) {
    const array = [0, 1];
    if (n === 1) console.log('0');
    else if (n === 2) console.log('0 1')
    for (let i = 0; i < n; i++) {
        array.push(array[i] + array[i + 1])
    }
    console.log(array.join(' '));
}

fibonacci(10)