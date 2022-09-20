import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFooterComponent } from './details-footer.component';

describe('DetailsFooterComponent', () => {
  let component: DetailsFooterComponent;
  let fixture: ComponentFixture<DetailsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
