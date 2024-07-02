async function permittedCharacters() {
  let permitted = []
  if (permitted.env.UPPERCASE_LETTER === true)
    characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ')

  if (permitted.env.LOWERCASE_LETTER === true)
    characters.push(...'abcdefghijklmnopqrstuvwxyz')

  if (permitted.env.NUMBERS === true) characters.push(...'0123456789')

  if (permitted.env.SPECIAL_CHARACTERS === true)
    characters.push(...'!@#$%^&*()_+=-{}[]|;\':",.<>/?')

  return permitted
}

export default permittedCharacters
