import { Pessoa } from './schemas/pessoa.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PessoasService } from './services/pessoas.service';
import { PessoasController } from './controllers/pessoas.controller';
import { Module } from '@nestjs/common';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Pessoa', schema: Pessoa }])
	],
	controllers: [
		PessoasController
	],
	providers: [
		PessoasService,
	],
})
export class PessoasModule { }
