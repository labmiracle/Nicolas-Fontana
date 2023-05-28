const users = [
    {
        login: "knuth",
        firstName: "Donald",
        lastName: "Knuth",
        likes: ["C", "Unix"],
    },
    {
        login: "norvig",
        firstName: "Peter",
        lastName: "Norvig",
        likes: ["AI", "Search", "NASA", "Mars"],
    },
    {
        login: "mfowler",
        firstName: "Martin",
        lastName: "Fowler",
        likes: ["Design Patterns", "Refactoring"],
    },
    {
        login: "kent",
        firstName: "Kent",
        lastName: "Beck",
        likes: ["TDD", "wikis", "Design Patterns"],
    },
];

const lookup = (login: string, property: string): string[] | string | undefined => {
    const userFound = users.find(user => user.login === login);
    if (userFound === undefined) {
        throw new Error("Could not find user");
    } else if (!(property in userFound)) {
        throw new Error("Could not find property");
    }
    return userFound[property as keyof typeof userFound];
};

export default lookup;
