import prompt from 'prompt'
import promptSchemaMain from './prompts-schema/schema-main.js'
import schemaQRCode from './services/qr-code/create.js'
import createPassword from './services/password/create.js'
import chalk from 'chalk'

async function main() {
  prompt.get(promptSchemaMain, async (err, choice) => {
    if (err) console.log(chalk.red.italic(err))

    if (choice.select == 1) await schemaQRCode()
    if (choice.select == 2) await createPassword()
  })

  prompt.start()
}

main()
