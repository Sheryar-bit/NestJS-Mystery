import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [UsersModule, 
            DatabaseModule, 
            UserModule,
            ThrottlerModule.forRoot([{
              name: 'short',
              ttl: 60000,
              limit: 3
            },{
              name: 'long',
              ttl: 60000,
              limit: 100
            }
          ]),
            AdminModule //3 reqs per minute

          ],
  controllers: [AppController, AdminController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  }, AdminService],
})
export class AppModule {}
