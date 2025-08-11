import { Injectable, NotFoundException } from '@nestjs/common';
import { Admin } from './interfaces/admin.interface';
import { CreateAdminDto } from './dto/create.admin.dto';

@Injectable()
export class AdminService {
    private admins: Admin[]=[
        //These 3 feilds are must , id, name, age as w have defined in the interface
        {
            id: 1, 
            name: 'Sheryar',
            age: 25,
        },
        {
            id: 2, 
            name: 'Yasir',
            age: 28,
        },
        {
            id: 3, 
            name: 'Imran',
            age: 30,
        }
    ];
    getAllAdmins(): Admin[]{
        return this.admins;
    }

    getAdminById(id: number) {
        const admin = this.admins.find(admin => admin.id === id); //admin ka andar ki id === parametere ka andar walli id (id: number)
        if(!admin) throw new NotFoundException('Admin not found');
        return admin;
    }

    //Post API
    createAdmin(CreateAdminDto: CreateAdminDto): Admin {
        const newAdmin = {
            id: Date.now(),
            ...CreateAdminDto //Spread operator to include all properties from CreateAdminDto
        };
        this.admins.push(newAdmin); //new admin ko admins array mein push karna
        return newAdmin;
    }

    //put API
    upadteAdmin(id:number,data:{name: string; age: number}) {
        const idx = this.admins.findIndex(admin => admin.id === id);
        if(idx === -1) throw new NotFoundException('Admin not found'); //Validation check for id
        this.admins[idx] = {id, ...data}; //Update the admin with new data
        return this.admins[idx];
    }

    //Patch API
    patchAdmin(id:number, data: Partial<{name: string; email:string}>) {
        const admin = this.getAdminById(id); //Using the getAdminById method to find the admin
        Object.assign(admin, data); //Update the admin properties with the provided data
        return admin;
    }

    //Delete API
    deleteAdmin(id: number) {
        const idx = this.admins.findIndex(admin => admin.id === id);
        if(idx === -1) throw new NotFoundException('Admin not found');
        this.admins.splice(idx, 1); //Remove the admin from the array
        return { message: 'Admin deleted successfully' };
    }
}
