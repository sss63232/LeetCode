// [1, 1, 2, 3, 5, 8, 13...]

const fib = idx => {
    if (idx < 0) return null
    if (idx < 2) return 1

    return fib(idx - 1) + fib(idx - 2)
}

const fibByIteration = idx => {
    if (idx < 0) return null
    if (idx < 2) return 1

    let n1 = 1
    let n2 = 1
    let sumOfPreviousTwo = null
    for (let i = 2; i <= idx; i++) {
        sumOfPreviousTwo = n1 + n2

        n1 = n2
        n2 = sumOfPreviousTwo
    }

    return sumOfPreviousTwo
}

console.log(fib(1)) // 1
console.log(fib(4)) // 5
console.log(fib(5)) // 8
console.log(fibByIteration(1)) // 1
console.log(fibByIteration(4)) // 5
console.log(fibByIteration(5)) // 8