
export enum PersonCategory {
    Infant,
    Child,
    Adult
}

export interface IPerson {
    Category: PersonCategory;
    canSignContracts(): boolean;
    printDetails(): void;
}

export abstract class Person implements IPerson {
    Category: PersonCategory;
    private DateOfBirth: Date;

    constructor(dateOfBirth: Date) {
        this.DateOfBirth = dateOfBirth;
    }

    abstract canSignContracts(): boolean;

    printDetails(): void {
        console.log(`Person: `);
        console.log(`Date of Birth  : ${this.DateOfBirth.toDateString()}`);
        console.log(`Category       : ${PersonCategory[this.Category]}`);
        console.log(`Can sign       : ${this.canSignContracts()}`);
    }
}

export class Infant extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Infant;
    }

    canSignContracts(): boolean { return false; }
}

export class Child extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Child;
    }

    canSignContracts(): boolean { return false; }
}

export class Adult extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Adult;
    }

    canSignContracts(): boolean { return true; }
}

export class PersonFactory {
    getPerson(dateOfBirth: Date): IPerson {
        let dateNow: Date = new Date(); // defaults to now.
        let currentMonth: number = dateNow.getMonth() + 1;
        let currentDate: number = dateNow.getDate();
        let dateTwoYearsAgo: Date = new Date(dateNow.getFullYear() - 2, currentMonth, currentDate);
        let date18YearsAgo: Date = new Date(dateNow.getFullYear() - 18, currentMonth, currentDate);

        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }

        if (dateOfBirth >= date18YearsAgo) {
            return new Child(dateOfBirth);
        }

        return new Adult(dateOfBirth);
    }
}