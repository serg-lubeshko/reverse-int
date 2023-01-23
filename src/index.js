module.exports = function reverse (n) {
    let num_str = String(Math.abs(n))
    let num_list=num_str.split('')
    let reversedStr = num_list.reverse().join("");
    return Number(reversedStr)
}




