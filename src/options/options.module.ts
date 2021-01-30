import { Module } from '@nestjs/common';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';
import { OptionsRepository } from './options.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([OptionsRepository]),
  ],
  providers: [OptionsService],
  controllers: [OptionsController],
  exports: [OptionsService, TypeOrmModule.forFeature([OptionsRepository])]
})
export class OptionsModule {}
