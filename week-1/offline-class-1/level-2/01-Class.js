class Animal{
    constructor(name, legCount){
        this.name = name
        this.legCount = legCount
    }
    describe(){
        return `${this.name} has ${this.legCount} legs`
    }
}


let dog = new Animal("dog", 4)
console.log(dog.describe())

let kangroo = new Animal("kangaroo", 2)
console.log(kangroo.describe())