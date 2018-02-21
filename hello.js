window.onload = function () {
    var unionType;
    unionType = 1;
    console.log("unionType : " + unionType);
    unionType = "test";
    console.log("unionType : " + unionType);
    function addWithTypeGuard(arg1, arg2) {
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
    console.log("addWithTypeGuard(1,2)=" + addWithTypeGuard(1, 2)); // con backtick | backquote
    function addWithAlias(arg1, arg2) {
        return arg1.toString() + arg2.toString();
    }
    console.log("addWithAlias: " + addWithAlias(2, 3));
    var f = function (message) { console.log(message); };
    function usingCallbackWithString(callback) {
        callback("this is a string");
    }
    usingCallbackWithString(f);
    var idOnly = { id: 1 };
    var idAndName = {
        id: 2, name: "idAndName"
    };
    idAndName = idOnly;
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
};
//# sourceMappingURL=hello.js.map