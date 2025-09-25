// filtering
// what if I tell u, given an input array, give me back all the even values from it

const arr = [1,2,3,4,5]

const ans = arr.filter((i) => {
    return i%2 == 0;
})

// console.log(ans)


const users = ["harkirat", "dhruv", "prash"]

const final = users.filter((i) => {
    return i.startsWith("h");
})

console.log(final)