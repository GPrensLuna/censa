npm install -g pnpm
npm install -g ts-node
npm install -g typescript

export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin

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


Ejemplo 1: Declaración de Tipos Básicos y Interfaces

En este ejemplo, vamos a definir tipos básicos y una interfaz para representar datos de empleados en una empresa.

typescript

// Definición de tipos básicos
let employeeId: number = 1;
let employeeName: string = "John Doe";
let isActive: boolean = true;
let salary: number = 50000;

// Definición de una interfaz para empleado
interface Employee {
    id: number;
    name: string;
    isActive: boolean;
    salary: number;
}

// Función para imprimir detalles de un empleado
function printEmployeeDetails(employee: Employee) {
    console.log(`ID: ${employee.id}, Name: ${employee.name}, Active: ${employee.isActive}, Salary: ${employee.salary}`);
}

// Crear un objeto de tipo Employee
let newEmployee: Employee = {
    id: employeeId,
    name: employeeName,
    isActive: isActive,
    salary: salary
};

// Llamar a la función para imprimir detalles del empleado
printEmployeeDetails(newEmployee);

Explicación:

    Se utilizan tipos básicos como number, string, y boolean para definir variables como employeeId, employeeName, isActive, y salary.
    Se define una interfaz Employee que especifica la estructura esperada para un objeto de tipo empleado, con propiedades id, name, isActive, y salary.
    La función printEmployeeDetails acepta un parámetro de tipo Employee e imprime sus detalles en la consola.
    Se crea un objeto newEmployee que cumple con la interfaz Employee y se pasa como argumento a printEmployeeDetails.

Ejemplo 2: Tipos Avanzados y Tipos Genéricos

En este ejemplo, exploramos el uso de tipos avanzados como uniones, intersecciones y tipos genéricos para modelar una aplicación de gestión de tareas.

typescript

// Definición de tipos
type Status = "Todo" | "In Progress" | "Done";

interface Task {
    id: number;
    title: string;
    description: string;
    status: Status;
}

// Función para actualizar el estado de una tarea
function updateTaskStatus(task: Task, newStatus: Status): Task {
    return { ...task, status: newStatus };
}

// Intersección de tipos para extender la interfaz Task con una fecha de vencimiento opcional
interface TaskWithDueDate extends Task {
    dueDate?: Date;
}

// Función para imprimir detalles de una tarea con fecha de vencimiento opcional
function printTaskDetails(task: TaskWithDueDate) {
    let details = `ID: ${task.id}, Title: ${task.title}, Status: ${task.status}, Description: ${task.description}`;
    if (task.dueDate) {
        details += `, Due Date: ${task.dueDate.toDateString()}`;
    }
    console.log(details);
}

// Crear una tarea con fecha de vencimiento
let task1: TaskWithDueDate = {
    id: 1,
    title: "Implement login functionality",
    description: "Develop the login feature with authentication",
    status: "Todo",
    dueDate: new Date('2024-07-31')
};

// Actualizar el estado de la tarea
task1 = updateTaskStatus(task1, "In Progress");

// Imprimir detalles de la tarea
printTaskDetails(task1);

Explicación:

    Se define un tipo Status que es una unión de strings para representar el estado de una tarea: "Todo", "In Progress", y "Done".
    La interfaz Task define la estructura básica de una tarea con propiedades como id, title, description, y status.
    La función updateTaskStatus acepta una tarea y un nuevo estado y devuelve una nueva tarea con el estado actualizado.
    Se utiliza una intersección de tipos (TaskWithDueDate) para extender la interfaz Task con una propiedad opcional dueDate de tipo Date.
    La función printTaskDetails imprime los detalles de una tarea, incluyendo la fecha de vencimiento si está presente.
    Se crea una tarea (task1) utilizando TaskWithDueDate, se actualiza su estado y se imprime utilizando las funciones definidas.
