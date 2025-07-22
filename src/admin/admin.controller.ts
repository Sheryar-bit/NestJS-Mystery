import { Controller, Get, Param } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {
        // Ab Dependency injection of AdminService
    }
    
    @Get()
    getAllAdmins() {
        return this.adminService.getAllAdmins();
    }

    @Get(':id')
    getAdminById(@Param('id') id: number) {
        return this.adminService.getAdminById(Number(id)); //Typcast
    }
}
