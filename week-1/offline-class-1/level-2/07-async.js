function kiratAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there")
        }, 1000)
    })
    return p
}

async function main(){
    const value = await kiratAsyncFunction()
    console.log(value)
}

main()