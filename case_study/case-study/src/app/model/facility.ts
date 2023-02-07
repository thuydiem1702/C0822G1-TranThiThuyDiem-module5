import {RentType} from './rent-type';

export interface Facility {
  id?: number;
  name: string;
  area: number;
  numberOfFloors: number;
  maxPeople: number;
  cost: number;
  rentType: RentType;
  status: string;
}
