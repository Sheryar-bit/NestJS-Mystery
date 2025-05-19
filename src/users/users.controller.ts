import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpadteUserDto } from './dto/update-user.dto';

@Controller('users') // /users will handle this 
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELERE /users/:id
    */
   constructor(private readonly UsersService: UsersService) {}

    /* The Hierarichy matters, we go from Getting users>interns>:id */

   @Get() //Get /users or /users?role=value
   findAll(@Query('role') role?: 'INTERN' | "ENGINEER" | 'ADMIN') 
   {
    return this.UsersService.findAll(role)
   }

//    @Get('INTERNS') //GET /users/interns
//    findAllInterns() {
//     return 
//    }

   @Get(':id') //GET /users/interns/:id
   //Used ParseIntPipe that will automatically validate that our parameter is converted to Js integer
   findOne(@Param('id', ParseIntPipe) id: number) {
    return this.UsersService.findOne(id)
   }

   @Post() //creating /users
   //used DTO to create a user
   Create(@Body(ValidationPipe) CreateUserDto: CreateUserDto) {
    return this.UsersService.Create(CreateUserDto)
   }
   
   @Patch(':id') //GET /users/interns/:id
   //Used ParseIntPipe that will automatically validate that our parameter is converted to Js integer
   Update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) upadteUserDto: UpadteUserDto) {
    return this.UsersService.update(id, upadteUserDto)
   }

   @Delete(':id') //GET /users/interns/:id
   //Used ParseIntPipe that will automatically validate that our parameter is converted to Js integer
   delete(@Param('id', ParseIntPipe) id: number) {
    return this.UsersService.delete(id)
   }
}
