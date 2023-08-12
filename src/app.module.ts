import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { CadastroRepository } from './repositories/cadastro-repository';
import { PrismaCadastroRepository } from './repositories/prisma/prisma-cadastro-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: CadastroRepository,
      useClass: PrismaCadastroRepository
    }
  ],
})
export class AppModule {}
