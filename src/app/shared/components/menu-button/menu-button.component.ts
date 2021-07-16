import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})

export class MenuButtonComponent implements OnInit {
  public style: {} = {};
  public isLink = false;
  @Input() addClass!: string[] | string;
  @Input() link!: string;

  constructor() {}

  ngOnInit(): void {
    if(this.link){
      this.isLink = true;
    }
  }
}
