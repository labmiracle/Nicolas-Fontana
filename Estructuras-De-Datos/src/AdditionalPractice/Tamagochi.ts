class Tamagochi {
    private name: string;
    private energy: number;
    private gender: "F" | "M";
    private senseOfHumor: number;
    private age: number;
    private consecutiveDrinks: number;
    private consecutiveFood: number;
    private static readonly maxConsecutiveActions: number = 5;
    private static readonly energyIncrement: number = 25;
    private static readonly jumpEnergyCost: number = 25;
    private static readonly walkEnergyCost: number = 10;

    constructor(name: string, gender: "F" | "M") {
        this.name = name;
        this.energy = 60;
        this.gender = gender;
        this.senseOfHumor = Math.floor(Math.random() * 5 + 1);
        this.age = 0;
        this.consecutiveDrinks = 0;
        this.consecutiveFood = 0;
    }

    eat() {
        this.incrementConsecutiveCount("food");
        if (this.energy === 0) return;
        this.energy = Math.min(this.energy + Tamagochi.energyIncrement, 100);
        console.log(`${this.name} is eating. Current energy: ${this.energy}`);
    }

    sleep() {
        if (this.energy === 0) return;
        this.resetCounter();
        console.log(`${this.name} is sleeping.`);
    }

    drink() {
        this.incrementConsecutiveCount("drink");
        if (this.energy === 0) return;
        console.log(`${this.name} is drinking`);
    }

    jump() {
        if (this.energy === 0) return;
        this.resetCounter();
        if (this.energy > Tamagochi.jumpEnergyCost) {
            this.energy -= Tamagochi.jumpEnergyCost;
            console.log(`${this.name} is jumping. Current energy ${this.energy}`);
        } else {
            console.log(`${this.name} doesn't have enough energy to jump. Current energy ${this.energy}`);
        }
    }

    run() {
        if (this.energy === 0) return;
        this.resetCounter();
        console.log(`${this.name} is running`);
    }

    walk() {
        if (this.energy === 0) return;
        this.resetCounter();
        if (this.energy > Tamagochi.walkEnergyCost) {
            this.energy -= Tamagochi.walkEnergyCost;
            console.log(`${this.name} is walking`);
        } else {
            console.log(`${this.name} doesn't have enough energy to walk. Current energy ${this.energy}`);
        }
    }

    getName() {
        return this.name;
    }

    private incrementConsecutiveCount(action: "food" | "drink"): void {
        if (action === "food") {
            this.consecutiveFood++;
            if (this.consecutiveFood === Tamagochi.maxConsecutiveActions) {
                return this.die();
            }
        } else if (action === "drink") {
            this.consecutiveDrinks++;
            if (this.consecutiveDrinks === Tamagochi.maxConsecutiveActions) {
                return this.die();
            }
        }
    }

    private resetCounter(): void {
        this.consecutiveDrinks = 0;
        this.consecutiveFood = 0;
    }

    private die(): void {
        this.energy = 0;
        console.log(`${this.name} is dead. ¡RIP!`);
    }
}

const tamagochiJuan = new Tamagochi("Juan", "M");
tamagochiJuan.eat();
tamagochiJuan.eat();
tamagochiJuan.eat();
tamagochiJuan.eat();
tamagochiJuan.eat();
tamagochiJuan.jump();
tamagochiJuan.drink();
tamagochiJuan.drink();
tamagochiJuan.drink();

class TamagochiCollection {
    private tamagochis: Tamagochi[];

    constructor() {
        this.tamagochis = [];
    }

    addTamagochi(tamagochi: Tamagochi) {
        this.tamagochis.push(tamagochi);
    }

    removeTamagochi(tamagochi: Tamagochi) {
        const index = this.tamagochis.indexOf(tamagochi);
        if (index !== -1) {
            this.tamagochis.splice(index, 1);
        }
    }

    findTamagochiByName(name: string): Tamagochi | undefined {
        return this.tamagochis.find(tamagochi => tamagochi.getName() === name);
    }
}

const tamagochiCollection = new TamagochiCollection();

const tamagochiMaria = new Tamagochi("Maria", "F");
const tamagochiNico = new Tamagochi("Nico", "M");

tamagochiCollection.addTamagochi(tamagochiJuan);
tamagochiCollection.addTamagochi(tamagochiMaria);
tamagochiCollection.addTamagochi(tamagochiNico);

const foundTamagochi = tamagochiCollection.findTamagochiByName("Maria");
console.log(foundTamagochi);

tamagochiCollection.removeTamagochi(tamagochiMaria);

const notFoundTamagochi = tamagochiCollection.findTamagochiByName("Maria");
console.log(notFoundTamagochi); // Output: undefined
