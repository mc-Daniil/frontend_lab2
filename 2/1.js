class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        alert("Hi! My name is " + this.name + ". And I am " + this.age + " years old.");
    }
}

let user = new User("Alex", 20);
user.hello();
