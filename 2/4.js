class User {
    _tel = "";
    #age = 0;

    constructor(name) {
        this.name = name;
    }

    set age(value) {
        if (Number.isInteger(value) && value >= 1 && value <= 100) {
            this.#age = value;
        } else {
            alert("Incorrect age");
        }
    }

    get age() {
        return this.#age;
    }

    set tel(value) {
        if (/^\+7\d{10}$/.test(value)) {
            this._tel = value;
        } else {
            alert("Incorrect phone number");
        }
    }

    get tel() {
        return this._tel;
    }

    hello() {
        alert("Hi! My name is " + this.name + ". And I am " + this.age + " years old.");
    }
}

let user = new User("Alex");

while (user.age === 0) {
    let age = prompt("Enter age");

    if (age === null) {
        alert("Age is required");
        continue;
    }

    user.age = Number(age);
}

while (user.tel === "") {
    let tel = prompt("Enter phone number");

    if (tel === null) {
        alert("Phone number is required");
        continue;
    }

    user.tel = tel;
}

user.hello();
alert(user.tel);
