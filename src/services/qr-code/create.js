import prompt from 'prompt'
import chalk from 'chalk'
import promptQRCode from '../../prompts/prompt-qrcode.js'
import { handle } from './handle.js'

export function createQRCode() {
  prompt.get(promptQRCode, handle)

  prompt.start()
}

export default createQRCode
