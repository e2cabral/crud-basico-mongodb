import { Schema, SchemaTypes } from 'mongoose';

export const Pessoa = new Schema({
  id: {
    type: SchemaTypes.ObjectId,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
});