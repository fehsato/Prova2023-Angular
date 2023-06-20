import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmpresasComponent } from './app.component';

describe('EmpresasComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        EmpresasComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EmpresasComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ProvaAngular'`, () => {
    const fixture = TestBed.createComponent(EmpresasComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ProvaAngular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EmpresasComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ProvaAngular app is running!');
  });
});
