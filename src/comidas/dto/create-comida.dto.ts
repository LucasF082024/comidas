import {
  IsString,
  IsNumber,
  Min,
  Max,
  isString,
  isBoolean,
  IsBoolean,
  MinLength,
  MaxLength,
} from 'class-validator';
export class CreateComidaDto {
  @MaxLength(20)
  @MinLength(2)
  @IsString()
  name: string;
  @MaxLength(20)
  @MinLength(2)
  @IsString()
  nacionality: string;

  @IsBoolean()
  isVeggie: boolean;
}
