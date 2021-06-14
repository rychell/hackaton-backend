# Repository template

This template has been developed as a template for applications using typescript on NodeJS. 

## What is already in this repository?
* Typescript
* ts-node-dev
* Eslint with Airbnb standards
* Prettier
* Jest

## Eslint
This repository requires eslint vscode extension.
Be sure that your vscode has the lines below in `settings.json` file
```js
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll": true,
  }
```

If eslint do not work, please try to run the command below to forces it to run.
```sh
yarn eslint . --ext .ts
```
or
```sh
#If you're not using yarn
npx eslint . --ext .ts
```
## Jest
Only the basics to run with typescript. It will consider a test anyfile ending with `.spec.ts`