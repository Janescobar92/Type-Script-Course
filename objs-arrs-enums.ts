// Se puede hacer esto:
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Jan",
//   age: 28,
// };
//pero no es exactamente una buena practica
//la mejor practica es hacer esto :
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
} // este tipo de dato el Enum presnete en otros
//lenguajes se añada a JS gracias a TS; En el los datos almacenados
//se cuentan por defecto como ADMIN = 0, READ_ONLy = 1 y ATUHOR = 2; Sin mebargo puesdes asignar el que desees de la siguiente forma:
enum Character {
  MAD = 10,
  CRAZY = "PATATA",
  FUNNY = "FUNNY",
} // esto sirve para realizar comparacions con sus valores.

const person = {
  name: "Jan",
  age: 28,
  hobbies: ["Gym", "Video Games"],
  role: Role.ADMIN, // esta es la forma de acceder al enumen TS, Es como si fuera un objeto.
};
// en caso de tener la necesidad de declarar un tipo se tiene que realizar esto como por ejemplo con una tupla
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string] //le indica a TS que este elemento va a ser de tipo tupla y con ese length y esos determinados tipos en los indices especificos.
// } = {
//   name: "Jan",
//   age: 28,
//   hobbies: ["Gym", "Video Games"],
//   role: [2, 'author'],
// };

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("Is admin");
}
