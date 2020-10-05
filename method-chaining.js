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

let userOne = new User('aman@xyz.com', 'Aman');
let userTwo = new User('akram@xyz.com', 'Akram');

// Object Method Chaning
userTwo.login().updateSocre().updateSocre().logout();