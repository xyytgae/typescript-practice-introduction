// let list: number[] = [1, 2, 3]
// let list: Array<number> = [1, 2, 3]

// let list: Array<number | string> = [1, 'hello', 2]

let list: Array<any> = [1, true, 'hello']

let tuple: [string, number]
tuple = ['hello', 10] //←OK
// tuple = [10, 'hello'] //←NG