import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { PostsModule } from './posts/posts.module';
import { OptionsModule } from './options/options.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PostsModule,
    OptionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
