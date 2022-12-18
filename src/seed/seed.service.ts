import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from '../brands/brands.service';
import { BRANDS_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {

  constructor(
      private readonly CarsService:CarsService,
      private readonly BrandsService:BrandsService
    ){}

  populateDB(){
    this.CarsService.fillCarsWithSeedData(CARS_SEED);
    this.BrandsService.fillBrandsWithSeedData(BRANDS_SEED);
    return 'Seed executed'
  }

}
