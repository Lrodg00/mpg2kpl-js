// 1 mile = 1.609344
// 1 liter = .2641720524
// f(mpg) = mpg * 1.609344 kpm * 0.2641720524 gpl

let kpm = 1.609344
let gpl = 0.2641720524

function mpg2kpl(mpg) {
    return mpg * kpm * gpl
}

console.log(mpg2kpl(52))


