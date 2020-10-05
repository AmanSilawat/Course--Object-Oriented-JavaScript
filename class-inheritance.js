class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'logged in.');
        return this;
    }
    logout() {
        console.log(this.email, 'logged out.');
        return this;
    }
    updateSocre() {
        this.score++;
        console.log(this.email, 'Your socre is', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter((u) => {
            return u.email != user.email;
        });
    }
}

let userOne = new User('aman@xyz.com', 'Aman');
let userTwo = new User('akram@xyz.com', 'Akram');
let admin = new Admin('moienBhai@xyz.com', 'moienBhai');

var users = [userOne, userTwo, admin];
console.log(users); // [User, User, Admin]

admin.deleteUser(userOne);
console.log(users); // [User, Admin]