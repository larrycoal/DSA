var romanToInt = function (s) {
    let romanNum = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let jump = false
    return s.split("").reduce((acc, curr, idx, rom) => {
        if (romanNum[rom[idx]] < romanNum[rom[idx + 1]]) {
            jump = true
            acc += romanNum[rom[idx + 1]] - romanNum[rom[idx]]
        } else if (!jump) {
            acc += romanNum[rom[idx]]
        } else {
            jump = false
        }

        return acc
    }, 0)
};