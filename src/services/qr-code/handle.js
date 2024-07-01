import qr from 'qrcode-terminal'
import chalk from 'chalk'

export async function handle(err, result) {
  if (err) {
    console.log('conection err')
    return
  }

  const isSmall = result.type == 2
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green.bold('QRCode gerado:\n'));
    console.log(qrcode);
  })
}

export default handle