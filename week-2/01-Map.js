// given an array give me back a new array in which every value if multiplied by 2
// [1,2,3,4,5]
// [2,4,6,8,10]

const input = [1,2,3,4,5]

const transform = (i) => {
    return i*2;
}

const ans = input.map(transform)
console.log(ans)