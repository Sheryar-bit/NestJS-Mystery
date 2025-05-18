import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
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
   findOne(@Param('id') id: string) {
    return this.UsersService.findOne(parseInt(id))
   }

   @Post() //creating /users
   Create(@Body() user: {name: string, email: string, role: "INTERN" | "ENGINEER" | "ADMIN" }) {
    return this.UsersService.Create(user)
   }
   
   @Patch(':id') //GET /users/interns/:id
   Update(@Param('id') id: string, @Body() userUpdate: {name?: string, email?: string, role?: "INTERN" | "ENGINEER" | "ADMIN" }) {
    return this.UsersService.update
   }

   @Delete(':id') //GET /users/interns/:id
   delete(@Param('id') id: string) {
    return this.UsersService.delete(parseInt(id))
   }
}
