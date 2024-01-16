import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { FamousPhrasesController } from './famous-phrases/famous-phrases.controller';
import { CatService } from './cat/cat.service';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [CatModule],
  controllers: [AppController, FamousPhrasesController],
  providers: [AppService],
})
export class AppModule {}
