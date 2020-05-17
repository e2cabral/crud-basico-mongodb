import { Document } from 'mongoose';

export interface Pessoa extends Document {
  readonly id: string,
  readonly nome: string,
  readonly idade: number,
  readonly email: string,
  readonly cpf: string,
}