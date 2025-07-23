import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
    providers: [AdminService], //Bsiness logic, injected into the controllr
    controllers: [AdminController], //Will be handling the inComing reqs
})
export class AdminModule {

}


// imports      =>	Import other modules
// controllers  =>	Declare controllers (handle routes)
// providers    =>	Declare services, guards, etc.
// exports	    =>  Make services/providers usable in other modules