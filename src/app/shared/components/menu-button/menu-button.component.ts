import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})

export class MenuButtonComponent implements OnInit {
  public style: {} = {};
  @Input() addClass!: string[] | string;
  @Input() bgColor!: string;
  @Input() textColor!: string;
  @Input() link!: string;

  constructor() {}

  ngOnInit(): void {
    this.generateButtonStyle();
  }

  private generateButtonStyle(): void{
    this.style['color'] = MenuButtonComponent.checkIfPropIsAColour(this.textColor);
    this.style['background-color'] = MenuButtonComponent.checkIfPropIsAColour(this.bgColor);
    if(this.style['color'] === ''){
      this.style['color'] = 'rgba(0,0,0,0.6)';
    }

    if(this.style['background-color'] === ''){
      this.style['background-color'] = '#fff';
    }
  }

  private static checkIfPropIsAColour(arg): string{
    let s = new Option().style;
    if (arg){
        if(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(arg)){
          return arg;
        } else {
          return '';
        }
    }
    else {
      return '';
    }
  }
}
