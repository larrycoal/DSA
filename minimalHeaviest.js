function minimalHeaviestSetA(arr) {
    // Write your code here
    let newArr = arr.sort((a, b) => a - b)
    let Firsthalf = newArr.slice(0, Math.floor(newArr.length / 2))
    let Secondhalf = newArr.slice(Math.floor(newArr.length / 2))

    let totalFirst = Firsthalf.reduce((acc, curr) => acc += curr, 0)
    let totalSecond = Secondhalf.reduce((acc, curr) => acc += curr, 0)

    while (totalSecond > totalFirst) {
        let temp = Secondhalf.shift()
        totalFirst += temp
        totalSecond -= temp
        Firsthalf.push(temp)
    }
    return [Firsthalf.pop(), ...Secondhalf]
}