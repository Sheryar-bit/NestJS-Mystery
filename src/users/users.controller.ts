import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';
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
   //Used ParseIntPipe that will automatically validate that our parameter is converted to Js integer
   findOne(@Param('id', ParseIntPipe) id: number) {
    return this.UsersService.findOne(id)
   }

   @Post() //creating /users
   Create(@Body() user: {name: string, email: string, role: "INTERN" | "ENGINEER" | "ADMIN" }) {
    return this.UsersService.Create(user)
   }
   
   @Patch(':id') //GET /users/interns/:id
   //Used ParseIntPipe that will automatically validate that our parameter is converted to Js integer
   Update(@Param('id', ParseIntPipe) id: number, @Body() userUpdate: {name?: string, email?: string, role?: "INTERN" | "ENGINEER" | "ADMIN" }) {
    return this.UsersService.update(id, userUpdate)
   }

   @Delete(':id') //GET /users/interns/:id
   //Used ParseIntPipe that will automatically validate that our parameter is converted to Js integer
   delete(@Param('id', ParseIntPipe) id: number) {
    return this.UsersService.delete(id)
   }
}
