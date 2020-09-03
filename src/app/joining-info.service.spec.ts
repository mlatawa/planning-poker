import { TestBed } from '@angular/core/testing';

import { JoiningInfoService } from './joining-info.service';

describe('JoiningInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoiningInfoService = TestBed.get(JoiningInfoService);
    expect(service).toBeTruthy();
  });
});
