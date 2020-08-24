/** @format */

const reverseNum = num => {
  const newNum = Number(num)
  // 判断是正数还是负数
  const isPositiveNum = newNum >= 0
  // 转成字符串
  const str = newNum.toString()
  const frontStuff = isPositiveNum ? '' : str.substr(0, 1)
  // 反转字符串
  const reverseStr = (isPositiveNum ? str : str.substr(1)).split().reverse()
  // 转成数字
  const reverseNum = Number(`${frontStuff}${reverseStr.join()}`)
  return reverseNum
}

console.log(typeof reverseNum('-123'))
console.log(reverseNum(-123))
