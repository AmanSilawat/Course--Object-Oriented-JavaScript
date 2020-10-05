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

function Admin(...args) {
    User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (u) {
    users = users.filter((user) => {
        return user.email != u.email;
    });
};

let userOne = new User('aman@xyz.com', 'Aman');
let userTwo = new User('akram@xyz.com', 'Akram');
let admin = new Admin('moienBhai@xyz.com', 'moienBhai');

let users = [userOne, userTwo, admin];


console.log(users); // [User, User, Admin]
admin.deleteUser(userOne)
console.log(users); // [User, Admin]
