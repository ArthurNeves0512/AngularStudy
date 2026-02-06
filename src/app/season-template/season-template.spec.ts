import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonTemplate } from './season-template';

describe('SeasonTemplate', () => {
  let component: SeasonTemplate;
  let fixture: ComponentFixture<SeasonTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
