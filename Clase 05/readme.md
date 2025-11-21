# Instalaciones
- `npm init -y`

Si no está instalado typescript de manera global: `npm install -g typescript`

- `tsc --init`
- `ts -w`

- Inquirer: 
    - `npm i inquirer@^8.0.0`
    - `npm i --save-dev @types/inquirer` 

Para ejecutarlo: ` node ./dist/index.js`

## Error
index.ts:1:8 - error TS1295: ECMAScript imports and exports cannot be written in a CommonJS file under 'verbatimModuleSyntax'. Adjust the 'type' field in the nearest 'package.json' to make this file an ECMAScript module, or adjust your 'verbatimModuleSyntax', 'module', and 'moduleResolution' settings in TypeScript. 1 import inquirer from "inquirer"

- ✅ Abrí tu package.json y agregá:

```
{
  "type": "module"
}
```