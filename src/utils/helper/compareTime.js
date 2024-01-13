const compareTime = (d1, d2) => {
    const dateInMillisecond1 = new Date(d1).getTime()
    const dateInMillisecond2 = new Date(d2).getTime()
    return dateInMillisecond1 > dateInMillisecond2;
}

module.exports = compareTime