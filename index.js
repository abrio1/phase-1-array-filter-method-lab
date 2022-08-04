const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    let result = drivers.filter(element => element === string || element === string.toLowerCase())
    return result
}

function fuzzyMatch(drivers, string) {
    let letters = drivers.filter(driver => driver.slice(0, string.length) === string)
    return letters
}

function matchName(drivers, string) {
    let name = drivers.filter(driver => driver.name === string)
    return name
}