# NestJS Notes

## 🚀 Introduction

NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications using TypeScript.

---

## ✅ What are Controllers?

* **Controllers** handle incoming HTTP requests and send responses.
* They define routes (like `/users`, `/products`).

### Example:

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getAllUsers() {
    return 'This will return all users';
  }
}
```

---

## ✅ What are Modules?

* **Modules** are logical groupings of related components (Controllers, Services, Providers).
* Every NestJS application has at least one module (AppModule).

### Example:

```typescript
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
})
export class UserModule {}
```

---

## ✅ What are Services?

* **Services** contain business logic and handle complex operations.
* They are reusable and can be injected anywhere.

### Example:

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUsers() {
    return 'Returning all users from service';
  }
}
```

---

## ✅ What are Providers?

* **Providers** are classes that can be injected into other classes.
* They include services, factories, and custom providers.

### Example:

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserProvider {
  provideData() {
    return 'This is data from provider';
  }
}
```

---

## ✅ What are Pipes?

* **Pipes** are used for data transformation and validation.
* They can validate data before it reaches the route handler.

### Example:

```typescript
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}
```

---

## ✅ Using ValidationPipe with DTOs

* ValidationPipe is a built-in pipe in NestJS for validating data using DTOs.

### Example:

```typescript
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
```

```typescript
import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UserController {
  @Post('register')
  @UsePipes(new ValidationPipe())
  registerUser(@Body() createUserDto: CreateUserDto) {
    return { message: 'User registered successfully!', user: createUserDto };
  }
}
```

---

## Source
NestJS Documentation
ChatGpt
Dave Gray YT 