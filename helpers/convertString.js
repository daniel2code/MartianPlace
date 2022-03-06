export const shortWallet = (string) => {
return (string.substr(0, 5) + ".." + string.slice(-5))
}
export const toFixed5 = (string) => {
  if (string) {
    var res = string.split('.')
    return (res[0] + '.' + (res[1]).substr(0, 5))
  } else { return string }
}