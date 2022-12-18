import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid'
import { Car } from './interfaces/car.interface';
import { UpdateCarDto ,CreateCarDto} from './dto';

@Injectable()
export class CarsService {
    private cars:Car[] = [
        {id:uuid(), brand:'Toyota', model:'Corolla'},
        {id:uuid(), brand:'Honda', model:'Civic'},
        {id:uuid(), brand:'Jeep', model:'Cherokee'}
    ];

    findAll(){
        return [...this.cars]
    }

    findById(id:string){
        const car = this.cars.find((car)=>(car.id === id)); 
        if(!car) throw new NotFoundException(`Car with id '${id}' Not Found`);
        
        return car;
    }

    create(CreateCarDto:CreateCarDto){
        const newCar:Car = {id: uuid(), ...CreateCarDto};
        this.cars.push(newCar);
        return "Insertado Correctamente" ;
    }

    update(id:string, UpdateCarDto:UpdateCarDto){

        let carDB = this.findById(id); // Si no hay id muestrar el error 404

        this.cars = this.cars.map( car => {
            if(car.id === carDB.id){
                carDB = {...carDB,...UpdateCarDto, id};
                return carDB;
            }
            return car
        });

        return carDB;
    }

    delete(id:string){
        const carDB = this.findById(id);
        this.cars = this.cars.filter((car)=>(car.id !== carDB.id));
        // return {msg:"Eliminado"}
    }
}
