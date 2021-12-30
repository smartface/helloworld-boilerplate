     ____                       _    __                      _
    / ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___
    \___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \
     ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
    |____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/
    -----------------------------------------------------------------

Hey fellow developer, thank you for using Smartface!

Developing native apps for iOS and Android is as easy as a few lines of code.

Start coding right away and to view your app instantly on a real device, just click the Run on Device button and follow the instructions.

> [Appcircle.io](https://appcircle.io/) fully supports Smartface CI/CD Processes. You can build, distribute & deploy your Smartface Code Under 10 Minutes!

Welcome to the world of mobility!
Smartface Inc..

## Usage

Smartface Services use `yarn` as their node package manager.
In order to use Smartface fully, your computer should have `yarn` installed globally.
Follow the [official yarn install documentation](https://classic.yarnpkg.com/en/docs/install) to get it on your computer.

### Node Version

Smartface and their modules works the best at Node Version 12. To manage Node Versions easily, Smartface recommends to use NVM.

For Mac/Linux: https://github.com/nvm-sh/nvm
For Windows: https://github.com/coreybutler/nvm-windows

## Build or watch a workspace in a computer

Smartface IDE will run these tasks for you. However, if you want to keep track of them on your own,
refer to the npm scripts located at `package.json`.

- Watch for UI Changes
  ` yarn run watch:sf`
- Build the Smartface Project
  ` yarn run build:sf`
- Run Typescript Compiler on Build mode
  ` yarn run build:tsc`
- Run Typescript Compiler on watch mode
  ` yarn run watch:tsc`

## Linter&Formatter Configuration

For ease of usage, basic configuration of ESLint and Prettier are included in the project.
You can either use as is, expand it or delete them.

## Support & Documentation & Useful Links

- [Guides](https://docs.smartface.io)
- [API Docs](http://ref.smartface.io)
- [Download Smartface On-Device Emulator](https://e.smartface.io) (Works only for Physical Devices)
