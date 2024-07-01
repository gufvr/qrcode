import prompt from 'prompt'
import mainPrompt from './prompts/prompt-main.js'

async function main() {
  prompt.get(mainPrompt, async (err, choice) => {
    if (choice.name == 1) console.log('Você escolheu a opção de QRCode')
    else if (choice.name == 2) console.log('Você escolheu a opção Password')
  })

  prompt.start()
}

main()
