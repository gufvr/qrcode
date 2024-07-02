import permittedCharacters from './permittedCharacters'

async function handle() {
  let characters = []
  let password = ''

  const passwordLength = process.env.UPPERCASE_LENGTH
  characters = await permittedCharacters()

  for (i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length)
    password += characters[index]
  }
}

export default handle
