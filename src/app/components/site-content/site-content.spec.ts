import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteContent } from './site-content';

describe('SiteContent', () => {
  let component: SiteContent;
  let fixture: ComponentFixture<SiteContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
