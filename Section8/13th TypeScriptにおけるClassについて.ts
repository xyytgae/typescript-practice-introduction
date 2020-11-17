
abstract class User {
    constructor(protected name: string, private age: number) {}

    getName(): string {
        return this.name
    }
}

// const user = new User('yamada', 42) ←aUserクラスがabstractを付けて抽象クラスになっているので、インスタンス化できない
// console.log(user.getName())

class SuperUser extends User {
    constructor(name: string, age: number) {
        super(name, age)
    }

    changeName(): void {
        this.name = 'root'
    }
}

const superUser = new SuperUser('saito', 30)
console.log(superUser)
superUser.changeName()
console.log(superUser)

