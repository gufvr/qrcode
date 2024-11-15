<h1 align="center">QR Code & Password Generator</h1>

<p align="center">
  This repository contains an implementation of generating QR Codes and random passwords using Node.js.
</p>

## Objective
The goal of this project is to provide a simple tool to generate QR Codes and passwords that can be used in various applications, such as websites, mobile applications and documents.

## Features
- Generation of QR Codes from links and passwords defined by the user.
- Support for various output formats (e.g. PNG, SVG).

## Requirements
- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Install
To install and configure the project, follow the steps below:

1. Clone the repository:
```bash
git clone https://github.com/gufvr/qrcode.git
```
2. Navigate to the project directory:
```bash
cd qrcode
```
3. Install dependencies:
```bash
npm install
```

## Using QR Code
1. To generate a QR Code, use the command:
```bash
npm run dev
```
2. Type `1` to select the QR Code generation option:
```bash
Escolha a ferramenta (1 para QRCode ou 2 para password):  1
```
3. Enter the link you want to generate the QR Code:
```bash
Insira o link para gerar o QRCode:  (link desejado aqui)
```
4. Choose the type of QR Code you want:
```bash
Escolha o tipo de QRCode desejado (1 - normal e 2 - terminal):
```
5. QR Code generated:

![image](https://github.com/gufvr/qrcode/assets/107816413/9e7cedc5-686c-4b67-9931-7d7cb43af079)

## Using password creation:
1. To set the character limit and specify which types to generate, navigate to the `.env` file:
```.env
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=13
```
2. Run the `npm run dev` command and select option `2`:
```bash
Choose the tool (1 for QRCode or 2 for password):  2
```
3. Randomly generated password as per specifications:
```bash
Password
43#i|hwBpZ)W^
```

## Project Structure
- `src/`: Project source code.
- `prompts-schema/`: Directory of prompts displayed in the terminal.
- `services/`: Directory with settings for using the password and QR Code generators.
- `package.json`: Project settings and dependencies.
- `.env`: Environment configuration file.

![image](https://github.com/gufvr/qrcode/assets/107816413/b509bc27-4a53-4a66-827a-e6c3c0ba4cea)
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a MIT License.
