import {RateEnum, Wear} from 'src/app/analyse-context/entities/wear.interface';

export const InMemoryWearMock: Wear[] = [
  {
    id: 1,
    vehicle: 'Bike',
    rate: RateEnum.A,
    picture: 'https://www.commander-mes-pneus.fr/img/tuto/comment-savoir-pneus.jpg'
  },
  {
    id: 2,
    vehicle: 'Car',
    rate: RateEnum.B,
    picture: 'https://www.chacun-sa-route.fr/wp-content/uploads/2020/04/Usue-centre0.jpg'
  },
  {
    id: 3,
    vehicle: 'Motorcycle',
    rate: RateEnum.C,
    picture: 'https://www.chacun-sa-route.fr/wp-content/uploads/2020/04/PHOTO-2-1.jpg'
  },
  {
    id: 4,
    vehicle: 'Truck',
    rate: RateEnum.D,
    picture: 'https://www.chacun-sa-route.fr/wp-content/uploads/2020/04/PHOTO-3-.jpg'
  }
];
