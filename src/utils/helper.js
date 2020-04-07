const helper = {
  randomString(length) {
    let result = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  },

  convertMapToArray(enumObject) {
    let arr = []
    for (var key in enumObject) {
      arr.push({
        key: key,
        value: enumObject[key]
      })
    }
    return arr
  }
}

export default helper
