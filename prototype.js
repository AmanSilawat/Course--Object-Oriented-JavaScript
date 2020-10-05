function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.email, 'logged in.');
};

User.prototype.logout = function () {
    this.online = false;
    console.log(this.email, 'logged out.');
};

let userOne = new User('aman@xyz.com', 'Aman');
let userTwo = new User('akram@xyz.com', 'Akram');

console.log(userOne); // User {email: "aman@xyz.com", name: "Aman", online: false}
userTwo.login(); // userTwo.login()
