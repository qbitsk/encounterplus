class Class {
    public name: string;
    public code: number;

    constructor(name: string, code: number) {
        this.name = name;
        this.code = code;
    }
}

class Race {
    public name: string;

    constructor(race: string) {
        this.name = race;
    }
}

export class Constants {
    public static Classes: Class[] = [
        new Class("Barbarian", 1),
        new Class("Druid", 2)
    ];

    public static Races: Race[] = [
        new Race("Human"),
        new Race("Elf")
    ];

    public static MAX_LEVEL: number = 20;
}
