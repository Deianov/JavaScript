class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(clientId) {
        if (!/^\d{6}$/g.test(clientId)) {
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = clientId;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        if (!/^[a-zA-Z0-9]+@[a-zA-Z.]+$/g.test(email)) {
            throw new TypeError('Invalid e-mail');
        }
        this._email = email;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        if (!/^.{3,20}$/.test(firstName)) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        if (!/^[a-zA-Z]+$/g.test(firstName)) {
            throw new TypeError('First name must contain only Latin characters');
        }
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        if (!/^.{3,20}$/g.test(lastName)) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        if (!/^[a-zA-Z]+$/g.test(lastName)) {
            throw new TypeError('Last name must contain only Latin characters');
        }
        this._lastName = lastName;
    }
}

console.log(new CheckingAccount('123456', 'ivan@some.com', 'Ivan', 'Petrov'));

// TypeError: Client ID must be a 6-digit number
// TypeError: Invalid e-mail
// TypeError: First/Last name must be between 3 and 20 characters long
// TypeError: First/Last name must contain only Latin characters