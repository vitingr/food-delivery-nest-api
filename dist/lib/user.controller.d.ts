import UserRepository from '../repositories/user-repository';
import { CreateUser, UpdateUser, viewNavbar, viewRoutine } from '../dtos/user';
export declare class UserController {
    private userRepository;
    constructor(userRepository: UserRepository);
    getUser(email: string): Promise<string>;
    createUser(body: CreateUser): Promise<void>;
    updateUser(body: UpdateUser): Promise<void>;
    viewMenu(body: viewNavbar): Promise<void>;
    viewRoutine(body: viewRoutine): Promise<void>;
}
