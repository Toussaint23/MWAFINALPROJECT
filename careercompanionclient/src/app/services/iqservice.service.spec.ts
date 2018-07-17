import { TestBed, inject } from '@angular/core/testing';

import { IqserviceService } from './iqservice.service';

describe('IqserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IqserviceService]
    });
  });

  it('should be created', inject([IqserviceService], (service: IqserviceService) => {
    expect(service).toBeTruthy();
  }));
});
