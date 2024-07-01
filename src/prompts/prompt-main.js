import chalk from 'chalk'

const mainPrompt = [
  {
    name: 'select',
    description: chalk.yellow.bold(
      'Escolha a ferramenta (1 para QRCode ou 2 para password)'
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic('Escolha apenas entre 1 e 2.'),
    required: true,
  },
]

export default mainPrompt
