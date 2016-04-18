//字符串值转换为布尔值。否则,返回的值
//没有修改所以Vue可以抛出一个警告。
export default (val) => (typeof val !== "string" ? val :
  val === "true" ? true :
  val === "false" ? false :
  val === "null" ? false :
  val === "undefined" ? false : val)
