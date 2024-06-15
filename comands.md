npm install -g pnpm
npm install -g ts-node
npm install -g typescript


pnpm install ts-node
pnpm install nodemon
pnpm install express @types/express

  "scripts": {
    "start": "nodemon index.ts ts-node",
    "dev": "nodemon index.ts ts-node",
    "test": "echo \"Error: no test specified\" && exit 1"
  }

pnpm install dotenv --save

pnpm install @prisma/cleint @types@prisma/client
pnpx prisma migrate dev
pnpx prisma generate

## Register protocolos e seguridad

pnpm install bcrypt

## Login protocolos e seguridad

pnpm install jsonwebtoken
pnpm install cookie

## Plus

mono repo

pnpm-workspace.yaml

packages:
  - backend ->  Nombres de la carpeta (debe coninsidir con el del package.json igual al de la carpeta)
  - frontend -> Nombres de la carpeta (debe coninsidir con el del package.json igual al de la carpeta)



## comandos del frontend