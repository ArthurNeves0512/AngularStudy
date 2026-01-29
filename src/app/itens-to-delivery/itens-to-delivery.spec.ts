import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensToDelivery } from './itens-to-delivery';

describe('ItensToDelivery', () => {
  let component: ItensToDelivery;
  let fixture: ComponentFixture<ItensToDelivery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItensToDelivery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensToDelivery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
