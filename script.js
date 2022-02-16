const message = "Hello world!"

function showName(name = "Unknown", years = 18) {
    if (years <= 0) {
        alert("Родися вже")
    } else {
        alert("Your name is - " + name + ", I'm " + years + " years")
    }
}
//
// showName("Khrystyna", 21)
//
// showName("Yana", 18)
//
// showName("Bla bla bla", -20)

function checkYears(years) {
    // return "Years: " + years
    //
    //
    // return false
    if (years > 18) {
        return "You are adult"
    }

    return false
}

const year = checkYears(17)
const year2 = checkYears(21)

console.log('year', year)
console.log('year2', year2)



