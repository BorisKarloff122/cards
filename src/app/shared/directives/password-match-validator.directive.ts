import { Directive } from '@angular/core';
import {AbstractControl, Validators, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[appPasswordMatchValidator]'
})
export class PasswordMatchValidatorDirective implements Validators{

  constructor() { }

  static passMatchValidator (aString): ValidatorFn{
      return (control: AbstractControl): { [key: string]: any } | null =>  {
          const match = aString === control.value;
          return match ? {control: {validity: false}} : null;
      }
  }
}
