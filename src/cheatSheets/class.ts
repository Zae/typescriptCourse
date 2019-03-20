interface CalculationInterface {
  add(arg1: number, arg2: number): number
  minus(arg1: number, arg2: number): number
  multiplier(arg1: number, arg2: number): number
  devider(arg1: number, arg2: number): number
}

class Calculator implements CalculationInterface {
  add(number1: number, number2: number) {
    return number1 + number2
  }

  minus(number1: number, number2: number) {
    return number1 - number2
  }

  multiplier(number1: number, number2: number) {
    return number1 * number2
  }

  devider(number1: number, number2: number) {
    return number1 / number2
  }
}

const calculator = new Calculator()
console.log(calculator.add(4, 4))
