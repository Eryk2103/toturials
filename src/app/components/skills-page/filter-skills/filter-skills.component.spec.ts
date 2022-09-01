import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSkillsComponent } from './filter-skills.component';

describe('FilterSkillsComponent', () => {
  let component: FilterSkillsComponent;
  let fixture: ComponentFixture<FilterSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
