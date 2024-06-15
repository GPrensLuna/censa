# Uso de Prisma con PNPM

pnpm install --save @prisma/client
pnpm prisma migrate dev
pnpm prisma generate
prisma generate


loading page

pnpm install nextjs-toploader

efecto cambio de pagina 

pnpm install framer-motion

Componetes de tailwind 

condicionales 

pnpm install clsx
pnpm install tailwind-merge


## Instalación de Prisma y configuración inicial:

### Instalación de Prisma CLI:

- Comandos comunes de Prisma:
## pnpm add prisma -g

# Inicialización de un nuevo proyecto Prisma:

- Generación de código a partir del esquema:

### prisma init

- Crear un modelo (tabla) en el esquema:

### prisma generate

- Actualizar el modelo en el esquema:

### prisma model create

- Eliminar un modelo del esquema:

### prisma model update

- Ejecutar migraciones pendientes:

### prisma model delete

- Revertir la última migración ejecutada:

### prisma migrate up

- Ver el estado actual de las migraciones:

### prisma migrate down

- Generar un nuevo archivo de migración basado en cambios  esquema:
## comando
### prisma migrate status

- Sincronizar el estado de la base de datos con el esquema 
## comando
- prisma migrate save --name <nombre_de_la_migracion>

### Consultar la base de datos con Prisma Client:

- prisma migrate save --name <nombre_de_la_migracion> 

### Eliminar migraciones antiguas:

- Restablecer el estado de la base de datos:

### prisma migrate reset

- Actualizar las dependencias de Prisma CLI:

### prisma db push --force

- Verificar la versión de Prisma CLI:

### prisma update

- Obtener ayuda sobre los comandos de Prisma:

## comando
prisma --help