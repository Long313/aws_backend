import { UserService } from './user.service';
import { User } from './user.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    create(user: User): Promise<User>;
}
