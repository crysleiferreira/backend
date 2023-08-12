import { Body, Controller, Get, Post } from '@nestjs/common';
import { CadastroBody } from './dto/cadastro-body';
import { CadastroRepository } from './repositories/cadastro-repository';
@Controller()
export class AppController {
  constructor(
    private cadastroRepository : CadastroRepository
    ) {}

  @Post('cadastro')
  async postCadastro(@Body() body: CadastroBody ) {

    const {nome, cpf} = body;

    return this.cadastroRepository.post(nome, cpf)
    
  }

  @Get('cadastro')
  async getAllCadastro() {

    return this.cadastroRepository.getAll()
    
  }
}
