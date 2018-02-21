namespace FirstNameSpace {
    class NotExported {
    }

    export class NameSpaceClass {
        id: number;
    }
}

namespace SecondNameSpace {
    export class NameSpaceClass {
        name: string;
    }
}

window.onload = () => {
    var unionType: string | number;
    unionType = 1;
    console.log(`unionType : ${unionType}`);
    unionType = "test";
    console.log(`unionType : ${unionType}`);

    function addWithTypeGuard(
        arg1: string | number,
        arg2: string | number
    ): string | number {
        if (typeof arg1 === "string") {
            // arg1 is treated as string within this code
            console.log("first argument is a string");
            return arg1 + arg2;
        }
        if (typeof arg1 === "number" && typeof arg2 === "number") {
            // arg1 and arg2 are treated as numbers within this code
            console.log("both arguments are numbers");
            return arg1 + arg2;
        }
        console.log("default return");
        return arg1.toString() + arg2.toString();
    }

    console.log(`addWithTypeGuard(1,2)=${addWithTypeGuard(1, 2)}`); // con backtick | backquote

    type StringOrNumber = string | number;
    function addWithAlias(
        arg1: StringOrNumber,
        arg2: StringOrNumber
    ): string {
        return arg1.toString() + arg2.toString();
    }
    console.log(`addWithAlias: ${addWithAlias(2, 3)}`);

    type CallbackWithString = (message: string) => void;
    var f: CallbackWithString = (message: string) => { console.log(message); };
    function usingCallbackWithString(
        callback: CallbackWithString): void {
        callback("this is a string");
    }
    usingCallbackWithString(f);

    //#region Interfaccie e classi

    interface IOptionalProp {
        id: number;
        name?: string;
    }
    let idOnly: IOptionalProp = { id: 1 };
    let idAndName: IOptionalProp = {
        id: 2, name: "idAndName"
    };
    idAndName = idOnly;

    interface IYou {
        name: string;
        value: number;
    }

    interface ILabelYou {
        label: string;
    }

    interface ISize extends IYou, ILabelYou {
        size: number;
    }

    function printLabel(labelledObj: ISize): void {
        console.log(labelledObj.label);
    }

    let myObj: ISize = { size: 10, label: "Size 10 Object" } as ISize;
    printLabel(myObj);

    interface IPrint {
        print();
    }

    class ClassA implements IPrint {
        print() { console.log('ClassA.print()') };
    }

    class ClassB implements IPrint {
        print() { console.log(`ClassB.print()`)};
    }

    function printClass( a : IPrint ) {
        a.print();
    }

    let classA = new ClassA();
    let classB = new ClassB();
    printClass(classA);
    printClass(classB);

    class ClassWithConstructor {
        id: number;
        name: string;

        constructor(_id: number, _name: string) {
            this.id = _id;
            this.name = _name;
        }
    }

    var c: ClassWithConstructor = new ClassWithConstructor(1, "Nome01");
    console.log(`Il nome di ClassWithConstructor è: ${c.name}`);

    class StaticClass {
        static printTwo() {
            console.log(`StaticClass.printTwo() -> 2`);
        }
    }
    StaticClass.printTwo();

    class StaticProperty {
        static count = 0;
    
        updateCount() {
            StaticProperty.count ++;
        }
    }

    let firstInstance = new StaticProperty();
    console.log(`StaticProperty.count = ${StaticProperty.count}`);
    firstInstance.updateCount();
    console.log(`StaticProperty.count = ${StaticProperty.count}`);

    let secondInstance = new StaticProperty();
    secondInstance.updateCount();
    console.log(`StaticProperty.count = ${StaticProperty.count}`);

    let firstNameSpace = new FirstNameSpace.NameSpaceClass();
    // let notExported = new FirstNameSpace.NotExported(); // Va in errore, NotExported non è accessibile.

};