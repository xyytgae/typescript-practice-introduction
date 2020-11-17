const area = (height: number, width: number, unit: string): string => {
    return height * width + unit
}

console.log(area(10, 20, 'cm'));

const sum = (num1: number, num2: number): void => {
    console.log(num1 + num2)
    return undefined
}

sum(1, 2)

const showError = (msg: string): never => {
    throw new Error(msg)
    // return
}

// showError('エラーが発生しました。')

let func:(msg: string) => never

func = showError
func('error')