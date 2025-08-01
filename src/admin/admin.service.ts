import { Injectable, NotFoundException } from '@nestjs/common';

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
        const admin = this.admins.find(admin => admin.id === id); //admin ka andar ki id === parametere ka andar walli id (id: number)
        if(!admin) throw new NotFoundException('Admin not found');
        return admin;
    }

    //Post API
    createAdmin(data: {name: string; email:string} ) {
        const newAdmin = {
            id: Date.now(),
            ...data
        };
        this.admins.push(newAdmin); //new admin ko admins array mein push karna
        return newAdmin;
    }

    //put API
    upadteAdmin(id:number,data:{name: string; email:string}) {
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
