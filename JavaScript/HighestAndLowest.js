/*
** Highest and Lowest
** https://www.codewars.com/kata/554b4ac871d6813a03000035
*/

const highAndLow = (numbers) => {
    const stringNumbers = numbers.split(" ")
    const arrayNumbers = stringNumbers.map(Number)
    const sortNumbers = arrayNumbers.sort((a, b) => { return a - b })

    const lowNumber = sortNumbers[0]
    const highNumber = sortNumbers.slice(-1)[0]

    return `${highNumber} ${lowNumber}`
}