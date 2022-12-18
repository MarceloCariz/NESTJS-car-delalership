import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import {IsString, MinLength} from 'class-validator'

// El partial type extiende del create Dto pero todas la variables son
// Opcionales
// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class UpdateBrandDto {
    @IsString()
    @MinLength(1)
    name: string
}
