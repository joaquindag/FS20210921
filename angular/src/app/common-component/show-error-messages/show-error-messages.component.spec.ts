import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowErrorMessagesComponent } from './show-error-messages.component';

describe('ShowErrorMessagesComponent', () => {
  let component: ShowErrorMessagesComponent;
  let fixture: ComponentFixture<ShowErrorMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowErrorMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
