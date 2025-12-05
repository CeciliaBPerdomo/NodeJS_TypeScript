<div align="center">
    <img src="../Cecilia_Perdomo.png" alt="Cecilia Perdomo">
</div> 

# Students DB-API
Nuestra app cumple con: 
- Creación y persistencia de usuarios
- Actualización total o parcial
- Eliminación de usuarios
- Búsqueda de un usuario
- Búsqueda de todos los usuarios

## Instalaciones 
- `npm init -y`
- `npm i express`
- `npm i typescript`
- `tsc --init` → actualizar el tscongif (outDir)
- `npm i nodemon` 
- `tsc --watch`
- `nodemon ./dist/app.js` → Si no funciona probar con `npm install -g nodemon`
- `npm i --save-dev @types/express`
- Agregar: `"type": "module",` en el package.json
- `nm i mongoose`
- `npm i axios`

## Conexión con MongoDB
- Crear el modelo → `models > server.ts`
- Crear la configuración a la base de datos → `database > config.ts`
- Crear las rutas → `routes > students.ts` x ejemplo
- Crear el schema  → `models > students.ts`
- Crear los controladores  → `controllers > students.ts`

## Errores 
> index.ts:1:8 - error TS1295: ECMAScript imports and exports cannot be written in a CommonJS file under 'verbatimModuleSyntax'. Adjust the 'type' field in the nearest 'package.json' to make this file an ECMAScript module, or adjust your 'verbatimModuleSyntax', 'module', and 'moduleResolution' settings in TypeScript. 1 import inquirer from "inquirer"

**✅ Abrí tu package.json y agregá**:

```ts
"type": "module"
```

--- 

> 'Request' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.ts(1484) (alias) interface Request<P = core.ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = QueryString.ParsedQs, Locals extends Record<string, any> = Record<string, any>> import Request

```ts
import type { Request, Response} from "express"
```

--- 

> Type 'string | undefined' is not assignable to type 'Condition<ApplyBasicQueryCasting<number>> | undefined' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the type of the target.ts(2412) (property) ci?: Condition<ApplyBasicQueryCasting<number>>

Este error es muy mongoose + TypeScript y aparece porque TS se pone exquisito con los tipos cuando activaste:
```ts
"exactOptionalPropertyTypes": true
```
Básicamente hace que undefined no entre ni de casualidad en campos opcionales a menos que lo declares explícitamente.


¿Qué te está diciendo ESTE error?
```ts
Type 'string | undefined' is not assignable to type 'Condition<number> | undefined'
```
Mongoose espera que ci sea un number, pero vos le estás pasando algo que puede ser:

- un string (siempre que venga de req.params)
- o incluso undefined

Entonces TS te dice: **"Esto no es un número y tampoco prometiste que podía venir undefined"**.