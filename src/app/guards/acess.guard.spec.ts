import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { acessGuard } from './acess.guard';

describe('acessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => acessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
