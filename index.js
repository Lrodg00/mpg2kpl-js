// 1 mile = 1.609344
// 1 liter = .2641720524
// f(mpg) = mpg * 1.609344 kpm * 0.2641720524 gpl


let readline = require('mpg2kpl')

let kpm = 1.609344
let gpl = 0.2641720524

function mpg2kpl(mpg) {
    return mpg * kpm * gpl
}

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter MPG value: ', (mpg) => {
    console.log(mpg2kpl(mpg))
    rl.close()
})
