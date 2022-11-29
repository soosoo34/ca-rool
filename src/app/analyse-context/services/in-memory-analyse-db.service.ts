import {InMemoryDbService} from 'angular-in-memory-web-api';
import {inMemoryReferenceMock} from 'src/app/analyse-context/services/reference/in-memory-reference.mock';
import {InMemoryWearMock} from 'src/app/analyse-context/services/wear/in-memory-wear.mock';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let reference = [...inMemoryReferenceMock];
    let wear = [...InMemoryWearMock];
    return {reference, wear};
  }
}
