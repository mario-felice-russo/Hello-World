
export class Employee {
    private _fullName: string;
    private _passcode: string;

    constructor(passcode: string) {
        this._passcode = passcode;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (this._passcode && this._passcode === "secret passcode") {
            this._fullName = newName;
        } else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
