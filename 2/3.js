class User {
    _tel = "";

    constructor(name, age) {
        this.name = name;
        this.age = age;
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

let user = new User("Alex", 20);

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
