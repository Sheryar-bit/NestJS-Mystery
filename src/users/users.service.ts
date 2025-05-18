import { Injectable } from '@nestjs/common';

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
            return this.users.filter(user => user.role === role) //For each user in the array it checks if the user.role matches the provided role
        }
        return this.users
    }
    //Finding user with Id
    findOne(id: number) {
        const user = this.users.find(user => user.id === id)
        return this.users
    }

    //creates a user
    Create(user: {name: string, email: string, role: "INTERN" | "ENGINEER" | "ADMIN" }){
        //just creating some logic to crete IDs
        const userByHighestId = [...this.users].sort(function(a,b){
           return  b.id - a.id
    })
    const newUser = {
            id: userByHighestId[0].id = 1,
            ...user
           }
           this.users.push(newUser)
           return newUser
    }
    //Upadtes user By Id
    update(id: number, updatedUser: {name?: string, email?: string, role?: "INTERN" | "ENGINEER" | "ADMIN" }) {
        this.users = this.users.map(user => { //uses map to create a new aray of users
            if (user.id === id){
                return {...user, ...updatedUser} //This merges the existing user object with the updatedUser object
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
