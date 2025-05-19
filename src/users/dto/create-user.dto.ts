/*
What is ValidationPipe?
ValidationPipe is a built-in pipe in NestJS that automatically validates incoming data using DTOs 
(Data Transfer Objects).

What is DTO (Data Transfer Object) in NestJS?
A DTO (Data Transfer Object) is an object that defines the shape (structure) of the data being sent between
the client and the server (or between different layers of your application).
It is used to validate and transform incoming data.
It is usually defined as a TypeScript class.
Makes your code cleaner, more secure, and maintainable*/

import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["INTERN", "ENGINEER", "ADMIN"], {
        message: "Valid role Required"
    })
    role: "INTERN" | "ENGINEER" | "ADMIN"
}