class Person {
    #firstName;
    #lastName;
    #email;
    #phoneNumber;
    #address;

    constructor(
        firstName = "John",
        lastName = "Doe",
        email = "john.doe@mail.com",
        phoneNumber = "06.xx.xx.xx.xx",
        address = "Av. Gustave Eiffel, 75007 Paris"
    ) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#phoneNumber = phoneNumber;
        this.#address = address;
    }

    get fullName() {
        return `${this.#firstName} ${this.#lastName}`
    }
    get firstName() {
        return this.#firstName;
    }
    get lastName() {
        return this.#lastName;
    }
    get email() {
        return this.#email;
    }
    get phoneNumber() {
        return this.#phoneNumber;
    }
    get address() {
        return this.#address;
    }

    set firstName(value) {
        this.#firstName = value;
    }
    set lastName(value) {
        this.#lastName = value;
    }
    set email(value) {
        this.#email = value;
    }
    set phoneNumber(value) {
        this.#phoneNumber = value;
    }
    set address(value) {
        this.#address = value;
    }
};

class Experience {
    #company = [];
    #position = [];
    #startDate = [];
    #endDate = [];
    #location = [];
    #description = [];

    addExperience(company, position, startDate, endDate, location, description) {
        this.#company.push(company);
        this.#position.push(position);
        this.#startDate.push(startDate);
        this.#endDate.push(endDate);
        this.#location.push(location);
        this.#description.push(description);
    }

    changeExperience(index, company, position, startDate, endDate, location, description) {
        this.#company[index] = company;
        this.#position[index] = position;
        this.#startDate[index] = startDate;
        this.#endDate[index] = endDate;
        this.#location[index] = location;
        this.#description[index] = description;
    }

    removeExperience(index) {
        this.#company.splice(index, 1);
        this.#position.splice(index, 1);
        this.#startDate.splice(index, 1);
        this.#endDate.splice(index, 1);
        this.#location.splice(index, 1);
        this.#description.splice(index, 1);
    }
};

class Education {
    #school = [];
    #degree = [];
    #startDate = [];
    #endDate = [];
    #location = [];

    addEducation(school, degree, startDate, endDate, location) {
        this.#school.push(school);
        this.#degree.push(degree)
        this.#startDate.push(startDate);
        this.#endDate.push(endDate);
        this.#location.push(location);
    }

    changeEducation(index, school, degree, startDate, endDate, location) {
        this.#school[index] = school;
        this.#degree[index] = degree;
        this.#startDate[index] = startDate;
        this.#endDate[index] = endDate;
        this.#location[index] = location;
    }

    removeEducation(index) {
        this.#school.splice(index, 1);
        this.#degree.splice(index, 1);
        this.#startDate.splice(index, 1);
        this.#endDate.splice(index, 1);
        this.#location.splice(index, 1);
    }
};

class Data {
    constructor() {
        this.person = new Person();
        this.experience = new Experience();
        this.education = new Education();
    }
};

export {Data, Person, Experience, Education};