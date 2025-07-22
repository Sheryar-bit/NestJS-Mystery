import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    private admins = [
        {
            id: 1, 
            name: 'Sheryar',
            email: 'sheryar@gmail.com'
        },
        {
            id: 2, 
            name: 'Yasir',
            email: 'Yasirr@gmail.com'
        },
        {
            id: 3, 
            name: 'Imran',
            email: 'Imran804@gmail.com'
        }
    ];
    getAllAdmins(){
        return this.admins;
    }

    getAdminById(id: number) {
        return this.admins.find(admin => admin.id === id); //admin ka andar ki id === parametere ka andar walli id (id: number)
    }
}
