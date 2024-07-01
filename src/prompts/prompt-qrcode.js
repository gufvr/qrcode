import chalk from 'chalk'

const promptQRCode = [
  {
    name: 'link',
    description: chalk.green.bold('Insira o link para gerar o QRCode'),
  },
  {
    name: 'type',
    description:
      'Escolha o tipo de QRCode desejado (1 - normal e 2 - terminal)',
    pattern: /^[1-2]+$/,
    message: chalk.red.italic('Escolha apenas entre 1 e 2.'),
    required: true,
  },
]

export default promptQRCode
