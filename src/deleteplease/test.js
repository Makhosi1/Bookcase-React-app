const num = 10
let nums = [...Array(num).keys()]

console.log(nums)


// nums = nums.map((n) => n + 1)
// 0.235 secs (10 items)
// 0.459 secs (500 items)


// nums.shift()
// nums.push(num + 1)
// 0.521 seconds (10 items)
// 0.225 seconds (500 items)

// console.log(nums)

// [0, 1, 2, 3, 4, 5, 6, 7]

// [[0, 1], [2, 3], [4, 5], [6, 7]]

// [[0, 1, 2], [3, 4, 5], [6, 7]]

// [[0, 1, 2, 3], [4, 5, 6, 7]]

sum = nums.reduce((prev, currentValue) => {
    return currentValue + prev
}, 10)

console.log(sum)

