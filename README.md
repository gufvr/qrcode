<h1 align="center">QRCode</h1>

<p align="center">
  Este repositório contém uma implementação de geração de QR Codes e senha aleatórias usando Node.js
</p>

## Objetivo
O objetivo deste projeto é fornecer uma ferramenta simples para gerar QR Codes e senhas que podem ser utilizados em diversas aplicações, como sites, aplicativos móveis e documentos.

## Funcionalidades
- Geração de QR Codes a partir de links e senhas delimitadas à escolha do usuário.
- Configuração de tamanho e níveis de correção de erro
- Suporte para diversos formatos de saída (ex.: PNG, SVG).

## Requisitos
- Node.js (versão 12 ou superior)
- npm (versão 6 ou superior)

## Instalação
Para instalar e configurar o projeto, siga os passos abaixo:

1. Clone o repositório:
```bash
git clone https://github.com/gufvr/qrcode.git
```
2. Navegue até o diretório do projeto:
```bash
cd qrcode
```
3. Instale as dependências:
```bash
npm install
```

## Uso do QR Code
1. Para gerar um QR Code, utilize o comando:
```bash
npm run dev
```
2. Digite `1` para selecionar a opção de geração do QR Code:
```bash
Escolha a ferramenta (1 para QRCode ou 2 para password):  1
```
3. Informe o link que deseja gerar o QR Code:
```bash
Insira o link para gerar o QRCode:  (link desejado aqui)
```
4. Escolha o tipo de QR Code desejado:
```bash
Escolha o tipo de QRCode desejado (1 - normal e 2 - terminal):
```
5. QR Code gerado:

![image](https://github.com/gufvr/qrcode/assets/107816413/9e7cedc5-686c-4b67-9931-7d7cb43af079)

## Uso da criação de senha:
1. Para configurar o limite de caracteres e especificar quais tipos serão gerados, navegue até o arquivo `.env`:
```.env
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=13
```
2. Rode o comando `npm run dev` e selecione a opção `2`:
```bash
Escolha a ferramenta (1 para QRCode ou 2 para password):  2
```
3. Senha gerada aleatoriamente conforme especificações:
```bash
Password
43#i|hwBpZ)W^
```

## Estrutura do Projeto
- `src/`: Código fonte do projeto.
- `prompts-schema/`: Diretório de prompts exibidos no terminal.
- `services/`: Diretório com configurações para utilização dos geradores de senha e QR Code.
- `package.json`: Configurações do projeto e dependências.
- `.env`: Arquivo de configuração de ambiente.

![image](https://github.com/gufvr/qrcode/assets/107816413/b509bc27-4a53-4a66-827a-e6c3c0ba4cea)

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a MIT License.
