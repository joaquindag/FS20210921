import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-error-messages',
  templateUrl: './show-error-messages.component.html',
  styleUrls: ['./show-error-messages.component.scss']
})
export class ShowErrorMessagesComponent implements OnInit {
@Input() message:string="";
  constructor() { }

  ngOnInit(): void {
  }


}
