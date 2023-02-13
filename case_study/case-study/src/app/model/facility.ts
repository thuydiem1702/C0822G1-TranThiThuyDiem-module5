import {RentType} from './rent-type';
import {FacilityType} from './facility-type';

export interface Facility {
  id?: number;
  name?: string;
  area?: number;
  cost?: number;
  facilityFree?: string;
  maxPeople?: number;
  numberFloors?: number;
  otherConvenience?: string;
  pollArea?: number;
  standardRoom?: number;
  facilityType?: FacilityType;
  rentType?: RentType;
}
