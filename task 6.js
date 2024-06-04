class Person {
    constructor(firstName, lastName, age, gender, address, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    updateAddress(newAddress) {
        this.address = newAddress;
    }

    updatePhoneNumber(newPhoneNumber) {
        this.phoneNumber = newPhoneNumber;
    }

    updateEmail(newEmail) {
        this.email = newEmail;
    }

    getDetails() {
        return {
            fullName: this.getFullName(),
            age: this.age,
            gender: this.gender,
            address: this.address,
            phoneNumber: this.phoneNumber,
            email: this.email
        };
    }

    toString() {
        return `Name: ${this.getFullName()}\n` +
               `Age: ${this.age}\n` +
               `Gender: ${this.gender}\n` +
               `Address: ${this.address}\n` +
               `Phone Number: ${this.phoneNumber}\n` +
               `Email: ${this.email}`;
    }
}

// Example usage:
const person = new Person("sathish", "E",25, "Male", "KARUR", "8940994069", "itzme.sathish7@gmail.com");
console.log(person.toString());
person.updateAddress("Bangalore");
console.log(person.getDetails());
