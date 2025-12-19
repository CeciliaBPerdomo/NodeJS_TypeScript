<div align="center">
    <img src="../Cecilia_Perdomo.png" alt="Cecilia Perdomo">
</div> 

# NucbaApi

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
- `npm i dotenv` → Variables de entorno
- `npm i mongoose`
- `npm i cors` → `npm i --save-dev @types/cors` → asegura que nadie que yo no quiera se conecte a mi api
- `npm i jsonwebtoken` → `npm i --save-dev @types/jsonwebtoken`
- `npm i bcryptjs` → Encriptación
- `npm i randomstring` → `npm i --save-dev @types/randomstring` →  genera codigo aleatorio
- `npm i express-validator`
- `npm i nodemailer` → `npm i --save-dev @types/nodemailer`

## Error de configuración en nodemailer 
> Error al envio al correo: Error: Invalid login: 534-5.7.9 Application-specific password required. For more information, go to
534 5.7.9  https://support.google.com/mail/?p=InvalidSecondFactor a1e0cc1a2514c-93f5aebc393sm1359399241.10 - gsmtp
- Seguir el link
- Crea y administra las contraseñas de aplicaciones → seguir los pasos

> Error al envio al correo: Error: Missing credentials for "PLAIN"
- Agregar: `import 'dotenv/config';`


<!-- 
Postman del post de orders: 

{
    "price": 1500,
    "shippingCost": 100,
    "items": [
        {
            "desc": "Pizza conmigo",
            "id": 1,
            "price": 1500,
            "quantity": 1,
            "title": "Pizza conmigo"
        }
    ],
    "shippingDetails": {
        "name": "Cecilia Perdomo",
        "cellphone": "3456879",
        "location": "Colonia",
        "address": "Calle 1234"
    },
    "total": 1600
}

 -->

 ## Configuraciones en Vercel

| Documentacion | Descripcion | Web |
| ------------- | ----------- | ---- |
| Serverless Functions en Vercel (Node / Express) | 👉 Vercel Functions | `https://vercel.com/docs/functions` | 
| Express en Vercel | 👉 Using Express with Vercel | `https://vercel.com/docs/functions/serverless-functions/using-express` | 
| Configuración **vercel.json** | 👉 Vercel JSON | `https://vercel.com/docs/project-configuration` | 
| TypeScript en Functions | 👉 TypeScript with Vercel | `https://vercel.com/docs/functions/typescript` | 


## Documentación
Documentación creada por postman: `https://documenter.getpostman.com/view/20220203/2sB3dWqRj3`