import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './loginGuard.guard';

describe('LoginGuardGuard', () => {
  let guard: LoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
