import {types} from 'ret'

export default function reret (token) {
  // console.log(token)
  switch (token.type) {
    case types.ROOT: { // 0
      if (token.stack instanceof Array) {
        return token.stack.map(reret).join('')
      }
      break
    }
    case types.GROUP: { // 1
      break
    }
    case types.POSITION: { // 2
      return token.value
    }
    case types.SET: { // 3
      break
    }
    case types.RANGE: { // 4
      break
    }
    case types.REPETITION: { // 5
      if (token.max === Infinity) {
        switch (token.min) {
          case 0:
            return reret(token.value) + '*'
          case 1:
            return reret(token.value) + '+'
        }
      }
      return reret(token.value) + `{${token.min},${token.max}}`
    }
    case types.REFERENCE: { // 6
      break
    }
    case types.CHAR: { // 7
      return String.fromCharCode(token.value)
    }
  }
}
