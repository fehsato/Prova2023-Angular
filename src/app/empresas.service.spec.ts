import { EmpresasService } from './empresas.service';
import { TestBed } from '@angular/core/testing';

describe('EmpresasService', () => {
  let service: EmpresasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
