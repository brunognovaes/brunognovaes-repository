export default function getPercentage(list) {
    const totalSize = list.length
    const blueSize = list.reduce((acc, item) => {
        if (item === "blue") {
            return acc += 1
        }
        return acc
    }, 0 )
    const redSize = list.reduce((acc, item) => {
        if (item === "red") {
            return acc += 1
        }
        return acc
    }, 0 )

    const blueProbability = ((blueSize / totalSize) * 100).toFixed(2)
    const redProbability = ((redSize / totalSize) * 100).toFixed(2)

    const lastTen = list.slice(totalSize - 10)
    const lastTenBlue = lastTen.reduce((acc, item) => {
        if (item === "blue") {
            return acc += 1
        }
        return acc
    }, 0 )
    const lastTenRed = lastTen.reduce((acc, item) => {
        if (item === "red") {
            return acc += 1
        }
        return acc
    }, 0 )

    const blueTenProbability = ((lastTenBlue / 10) * 100).toFixed(2)
    const redTenProbability = ((lastTenRed / 10) * 100).toFixed(2)


    return {
        totalSize,
        blueSize,
        redSize,
        blueProbability,
        redProbability,
        lastTenRed,
        lastTenBlue,
        isTenLength: lastTen.length >= 10,
        blueTenProbability,
        redTenProbability
    }
}