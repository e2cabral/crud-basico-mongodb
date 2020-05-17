import { Controller, Get, Body, Param, Post, Put, Delete, HttpCode } from '@nestjs/common';

import { Pessoa } from './../domain/pessoa.model';

import { PessoasService } from '../services/pessoas.service';
import { PessoaDto } from '../domain/dto/pessoa.dto';

@Controller('pessoas')
export class PessoasController {

  constructor(private pessoasService: PessoasService) {}
  
  @Get()
  @HttpCode(200)
  async obter() {
    return await this.pessoasService.obter();
  }

  @Get(':id')
  @HttpCode(200)
  async obterPorId(@Param() param) {
    return await this.pessoasService.obterPorId(param.id);
  }

  @Post()
  @HttpCode(201)
  async salvar(@Body() pessoa: PessoaDto) {
    await this.pessoasService.criar(pessoa);
  }

  @Put(':id')
  @HttpCode(204)
  async atualizar(@Body() pessoa: PessoaDto, @Param() param) {
    await this.pessoasService.atualizar(param.id, pessoa);
  }

  @Delete(':id')
  @HttpCode(200)
  async excluir(@Param() param) {
    await this.pessoasService.excluir(param.id);
  }
}
