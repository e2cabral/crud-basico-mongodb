import { Pessoa } from './../domain/pessoa.model';
import { PessoaDto } from '../domain/dto/pessoa.dto';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PessoasService {
  constructor(@InjectModel('Pessoa') private readonly pessoaModel: Model<Pessoa>) {}

  async obter(): Promise<Array<PessoaDto> | Error> {
    try {
      return await this.pessoaModel.find().exec();
    } catch (error) {
      return await new Error(error);
    }
  }

  async obterPorId(id: string | number): Promise<PessoaDto | Error> {
    try {
      return await this.pessoaModel.findById(id);
    } catch (error) {
      return await new Error(error);
    }
  }

  async criar(pessoa: PessoaDto): Promise<void | Error> {
    try {
      await new this.pessoaModel(pessoa).save();
    } catch (error) {
      return new Error(error);
    }
  }

  async atualizar(id: string | number, pessoa: PessoaDto): Promise<void | Error> {
    try {
      await this.pessoaModel.updateOne({ '_id': id }, pessoa);
    } catch (error) {
      return new Error(error);
    }
  }

  async excluir(id: string | number): Promise<void | Error> {
    try {
      await this.pessoaModel.deleteOne({ _id: id });
    } catch (error) {
      return new Error(error);
    }
  }
}
