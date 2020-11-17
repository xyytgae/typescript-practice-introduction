interface AddFunc {
    (a: number, b?: number): number
}

let add: AddFunc

add = (a, b) => {
    return b ? a + b : a
}

console.log(add(1))
