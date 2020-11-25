let total = 0
let min = 0
let max = 100000
let size = 100000000
for (let index = 0; index < size; index++) {
    total += randint(min, max)
}
let average = total / size
basic.showNumber(average)
