import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.sass']
})

export class UserComponent {
    firstName = 'John';
    lastName = 'Doe';
    age = 30;

    constructor() {
        this.sayHello();
        console.log(this.age);
        this.hasBirthday();
        console.log(this.age);
    }

    sayHello() {
        console.log(`Hello ${this.firstName}`)
    }

    hasBirthday() {
        this.age += 1;
    }
}