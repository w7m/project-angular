import {User} from '../models/User.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
        providedIn: 'root'
    }
)

export class UserService {
    private users: User[] = [
        {
            firstName: 'wahid',
            lastName: 'mhamdi',
            email: 'mhamdi.wahid@gmail.com,',
            drinkPreference: 'Coca',
            hoppies: [
                'coder',
                'Travailler'
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emailUser() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emailUser();
    }
}
