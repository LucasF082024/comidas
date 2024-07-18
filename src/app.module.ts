import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComidasModule } from './comidas/comidas.module';

@Module({
  imports: [ComidasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
