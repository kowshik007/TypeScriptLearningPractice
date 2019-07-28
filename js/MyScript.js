console.log("Hello world!");
var SignIn = /** @class */ (function () {
    function SignIn() {
    }
    Object.defineProperty(SignIn.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignIn.prototype, "getPassword", {
        get: function () {
            return this.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignIn.prototype, "getTandC", {
        get: function () {
            return this.TandC;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignIn.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignIn.prototype, "setPassword", {
        set: function (password) {
            this.password = password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignIn.prototype, "setTandC", {
        set: function (TandC) {
            this.TandC = TandC;
        },
        enumerable: true,
        configurable: true
    });
    return SignIn;
}());
var SignInobj = new SignIn();
var baseFunction = function () {
    SignInobj.setEmail = document.getElementById("exampleInputEmail1").value;
    SignInobj.setPassword = document.getElementById("exampleInputPassword1").value;
    SignInobj.setTandC = document.getElementById("exampleCheck1").checked;
    var JsonObj = {};
    if (SignInobj.getTandC) {
        JsonObj.email = SignInobj.getEmail;
        JsonObj.password = SignInobj.getPassword;
    }
    console.log(JsonObj);
    return true;
};
var IndianPersion = {
    name: "Kowshik",
    age: 22,
    location: "India"
};
console.log(IndianPersion);
var JsonObject = { "PersonsInfo": [] };
var Person1 = { id: 1, Information: { name: "Kowshik", age: 22, location: "India" } };
var Person2 = { id: 2, Information: { name: "Karthik", age: 23, location: "India" } };
JsonObject.PersonsInfo.push(Person1);
JsonObject.PersonsInfo.push(Person2);
console.log(JsonObject);
