'use strict';
const memo = new Map()
memo.set(0, 0)
memo.set(1, 1)
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n)
    }
    const val = fib(n-1) + fib(n-2)
    memo.set(n, val) 
    return val
}
const length = 40
for (let i = 0; i <= length; i++){
    console.log(fib(i))
}