import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IquestionlistComponent } from './iquestionlist.component';

describe('IquestionlistComponent', () => {
  let component: IquestionlistComponent;
  let fixture: ComponentFixture<IquestionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IquestionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IquestionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
