import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpadteUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "INTERN"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "role": "INTERN"
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "role": "INTERN"
  },
  {
    "id": 4,
    "name": "Bob Williams",
    "email": "bob.williams@example.com",
    "role": "INTERN"
  },
  {
    "id": 5,
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "role": "INTERN"
  }
]

    //Getting All yhe users with some role(optionl)
    findAll(role?: "INTERN" | "ENGINEER" | "ADMIN") {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role) //For each user in the array it checks if the user.role matches the provided role
            if(rolesArray.length === 0) throw new NotFoundException("User Role Not Found!! ")
              return rolesArray
        }
        return this.users
    }
    //Finding user with Id
    findOne(id: number) {
        const user = this.users.find(user => user.id === id)

        if(!user) throw new NotFoundException("User Not Found!! ")
        return this.users
    }

    //creates a user
    Create(CreateUseDto: CreateUserDto){
        //just creating some logic to crete IDs
        const userByHighestId = [...this.users].sort(function(a,b){
           return  b.id - a.id
    })
    const newUser = {
            id: userByHighestId[0].id = 1,
            ...CreateUseDto
           }
           this.users.push(newUser)
           return newUser
    }
    //Upadtes user By Id
    update(id: number, UpadteUserDto: UpadteUserDto) {
        this.users = this.users.map(user => { //uses map to create a new aray of users
            if (user.id === id){
                return {...user, ...UpadteUserDto} //This merges the existing user object with the updatedUser object
            }
            return user
        })

        return this.findOne(id)
    }

    //delete the uer by Idd
    delete(id: number) {
        const removeUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removeUser
    }
}
