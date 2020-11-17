interface UserInterface {
    name: string
    age: number
}

interface UserInterface {
    sayHi(): string
}

interface SuperUserInterface extends UserInterface {
    deleteUser(): void
}

class SuperUser implements SuperUserInterface {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHi(): string {
        return 'こんにちは'
    }
    deleteUser(): void {
        console.log('delete user');
    }
}

const user = new SuperUser('yamada', 32)

console.log(user.deleteUser())
