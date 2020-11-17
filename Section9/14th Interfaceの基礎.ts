interface User {
    readonly name: string
    age?: number
    sayHi(): string
}

const user: User = {
    name: 'yamada',
    // age: 32,
    sayHi() {
        return 'こんにちは'
    }
}

console.log(user.name)
// user.name = 'saito' ←readonlyがついているので、再代入不可
// console.log(user.name)

