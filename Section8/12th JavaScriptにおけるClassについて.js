class UserClass {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getName() {
    return this.name
  }
}

const user = new UserClass('yamada', 42)

console.log(user)
console.log(user.getName())
