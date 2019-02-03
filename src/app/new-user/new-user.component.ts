import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../models/User.model';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

    userForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        drinkPreference: new FormControl(''),
        hobbies: new FormArray([]),
    });

    constructor(private formBuilder: FormBuilder,
                private userService: UserService,
                private router: Router) {
    }

    ngOnInit() {
    }

    initForm() {
        this.userForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            drinkPreference: ['', Validators.required],
            hobbies: this.formBuilder.array([])
        });
    }

    onSubmitForm() {
        const formValue = this.userForm.value;
        const newUser = new User(
            formValue['firstName'],
            formValue['lastName'],
            formValue['email'],
            formValue['drinkPreference'],
            formValue['hobbies'] ? formValue['hobbies'] : []
        );
        this.userService.addUser(newUser);
        this.router.navigate(['/users']);
    }

    getHobbies(): FormArray {
        return this.userForm.get('hobbies') as FormArray;
    }

    onAddHobbies() {
        const newHobbyControl = this.formBuilder.control(null, Validators.required);
        if (typeof newHobbyControl !== 'undefined') {
            this.getHobbies().push(newHobbyControl);
        }

    }
}
