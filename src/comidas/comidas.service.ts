import { Injectable } from '@nestjs/common';
import { CreateComidaDto } from './dto/create-comida.dto';
import { UpdateComidaDto } from './dto/update-comida.dto';

const COMIDAS: CreateComidaDto[] = [];

@Injectable()
export class ComidasService {
  create(comida: CreateComidaDto) {
    const comidas = COMIDAS;
    comidas.push(comida);
    return 'oks';
  }

  findAll() {
    return COMIDAS;
  }

  findOne(id: number) {
    console.log(COMIDAS);
    return `This action returns a #${id} comida`;
  }

  update(id: number, updateComidaDto: UpdateComidaDto) {
    return `This action updates a #${id} comida`;
  }

  remove(id: number) {
    return `This action removes a #${id} comida`;
  }
}
