import {Analyse} from 'src/app/analyse-context/entities/analyse';

export enum RateEnum {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

export interface Wear extends Analyse {
  rate: RateEnum;
}
