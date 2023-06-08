type Role = "Full Stack Resident" | "Enterprise Instructor" | "Lead Instructor" | "Instructor";

interface User {
    firstName: string;
    lastName: string;
    role: Role;
}

const users: User[] = [
    { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
    { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
    { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
    { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
    { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
    { firstName: "Wes", lastName: "Reid", role: "Instructor" },
    { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

const usersToString = users.map(user => `${user.firstName}-${user.lastName}: ${user.role}`);

const filteredUsersByRole = users.filter(user => user.role === "Full Stack Resident");

type usersByRole = { [key in Role]: User[] };

const reducedUsers = users.reduce((acc, user) => {
    if (acc[user.role]) {
        acc[user.role].push(user);
    } else {
        acc[user.role] = [user];
    }
    return acc;
}, {} as usersByRole);

const searchByName = (name: string) => users.find(user => user.firstName === name);

console.log("Mapealo a un arreglo de strings: firstName-lastName: role\n", usersToString, "\n\n");
console.log("Filtra aquellos usuarios con role de Full Stack Resident\n", filteredUsersByRole, "\n\n");
console.log("Cada propiedad es un role y su valor un arreglo con los objetos usuarios que tienen dicho role\n", reducedUsers, "\n\n");
console.log("Función de búsqueda de un usuario por firstName\n", searchByName("Jonathan"));
