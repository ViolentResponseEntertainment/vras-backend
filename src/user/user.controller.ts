import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('user')
    @UseGuards(AuthGuard('bearer'))
    findAll() {
        return [];
    }

}
