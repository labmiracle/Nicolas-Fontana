interface Character {
    name: string;
    height: string;
    mass: string;
    eye_color: string;
    gender: string;
}

const characters: Character[] = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        eye_color: "blue",
        gender: "male",
    },
    {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        eye_color: "yellow",
        gender: "male",
    },
    {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        eye_color: "brown",
        gender: "female",
    },
    {
        name: "Anakin Skywalker",
        height: "188",
        mass: "84",
        eye_color: "blue",
        gender: "male",
    },
];

export default characters;
