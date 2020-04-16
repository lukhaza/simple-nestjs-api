import { Controller } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';
UsersService

@Controller('users')
export class UsersController {
    constructor(private userservice: UsersService){
        
    }
}

