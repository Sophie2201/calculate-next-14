export const CalculateHook = () => {
    const sum = (num1: number, num2: number) => num1 + num2;
    const subtract = (num1: number, num2: number) => num1 - num2;
    const multiply = (num1: number, num2: number) => num1 * num2;
    const division = (num1: number, num2: number) => {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "zero is not divided";
            
        }
    }

    return { sum, subtract, multiply, division }
}