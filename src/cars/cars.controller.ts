import { Controller,  ParseUUIDPipe } from '@nestjs/common';
import { Param , Get, Post, Body, Patch, Delete} from '@nestjs/common/decorators';
import { CarsService } from './cars.service';
import { CreateCarDto,UpdateCarDto } from './dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {

    constructor(private readonly carsService:CarsService){}

    @Get('')
    getAllCars(){
        return this.carsService.findAll()
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id:string){
        return this.carsService.findById(id);
    }

    @Post()
    createCar(@Body() createCarDto:CreateCarDto){
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id:string,
        @Body() UpdateCarDto:UpdateCarDto)
    {
        return this.carsService.update(id,UpdateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id',ParseUUIDPipe) id:string){
        return this.carsService.delete(id);
    }

}
