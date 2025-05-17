import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users') // /users will handle this 
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELERE /users/:id
    */

    /* The Hierarichy matters, we go from Getting users>interns>:id */

   @Get() //Get /users or /users?role=value
   findAll(@Query('role') role?: 'INTERN' | "ENGINEER" | 'ADMIN') 
   {
    return []
   }

   @Get('interns') //GET /users/interns
   findAllInterns() {
    return []
   }

   @Get(':id') //GET /users/interns/:id
   findOne(@Param('id') id: string) {
    return { id }
   }

   @Post() //creating /users
   Craete(@Body() user: {}) {
    return user
   }
   
   @Patch(':id') //GET /users/interns/:id
   Update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate }
   }

   @Delete(':id') //GET /users/interns/:id
   delete(@Param('id') id: string) {
    return { id }
   }
}
