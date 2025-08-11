import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create.admin.dto';

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

    @Post()
    createAdmin(@Body() CreateAdminDto: CreateAdminDto)  {
        return this.adminService.createAdmin(CreateAdminDto);
    }
    @Put(':id')
    upadteAdmin(@Param('id') id: string, @Body() body :{name: string; email: string, age: number}) {
        return this.adminService.upadteAdmin(Number(id), body);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() body : Partial<{name: string; email: string}>) {
        return this.adminService.patchAdmin(Number(id), body);
    }

    @Delete(':id')
    deleteAdmin(@Param('id') id: string) {
        return this.adminService.deleteAdmin(Number(id));
    }
}
