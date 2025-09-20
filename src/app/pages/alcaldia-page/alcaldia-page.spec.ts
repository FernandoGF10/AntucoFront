import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcaldiaPage } from './alcaldia-page';

describe('AlcaldiaPage', () => {
  let component: AlcaldiaPage;
  let fixture: ComponentFixture<AlcaldiaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlcaldiaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlcaldiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
