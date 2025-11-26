# Instalaciones 
- `npm init -y`
- `npm i express`
- `npm i typescript`
- `tsc --init` --> actualizar el tscongif (outDir)
- `npm i nodemon` 
- `tsc --watch`
- `nodemon ./dist/app.js` --> Si no funciona probar con `npm install -g nodemon`
- `npm i --save-dev @types/express`
- Agregar: `"type": "module",` en el package.json

## Errores 
> 'Request' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.ts(1484) (alias) interface Request<P = core.ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = QueryString.ParsedQs, Locals extends Record<string, any> = Record<string, any>> import Request

> import **type** { Request, Response} from "express"