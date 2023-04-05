import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndvidualTaskComponent } from './indvidual-task.component';

describe('IndvidualTaskComponent', () => {
  let component: IndvidualTaskComponent;
  let fixture: ComponentFixture<IndvidualTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndvidualTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndvidualTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
