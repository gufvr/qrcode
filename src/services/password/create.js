import chalk from 'chalk'
import permittedCharacters from './permittedCharacters'
import handle from './handle';

async function createPassword() {
  console.log(chalk.green('Password'))

  const password = await handle()
  console.log(password);
}

export default createPassword
