import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {


  sohang:any = 1;
  tien: any = 33590000;
  tong: any = {};
  nameProduct = "iPhone 13 Pro Max-Xám";

  Cong(){
    if(this.sohang >= 0) {
       this.sohang = this.sohang + 1;
       this.tong = this.tien * this.sohang;
      }
  }

  Tru(){
      if(this.sohang >= 2) {
       this.sohang = this.sohang - 1;
       this.tong = this.tong - this.tien;
      }
  }

  Tong() {
    if (this.sohang && this.tong) {
      console.log("Tên sản phẩm:",this.nameProduct," Số sảm phẩm:",this.sohang, " Tổng tiền:", this.tong +" đ")
      return this.tong = this.tien;
    }
  }
  ngOnInit(): void {
    this.Tong();
    this.Tru();
  }

    validateForm: FormGroup;


  autoTips: Record<string, Record<string, string>> = {
    'zh-cn': {
      required: 'Vui lòng nhập trường này!'
    },
    en: {
      required: 'Vui lòng nhập trường này!'
    },
    default: {
      email: 'Email không hợp lệ!',
    }
  };

  buyForm(): void {
    if (this.validateForm.valid) {
      console.log('Userbuy', this.validateForm.value);
      alert('Đặt hàng thàng công!');
       this.router.navigate(['home'])
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<MyValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          observer.next({
            duplicated: { 'zh-cn': `Tên bị thừa`, en: `The username is redundant!` }
          });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(private fb: FormBuilder, private router: Router,) {
    // use `MyValidators`
    const { required, maxLength, minLength, email, mobile } = MyValidators;
    this.validateForm = this.fb.group({
      userName: ['', [required, maxLength(50), minLength(3)], [this.userNameAsyncValidator]],
      mobile: ['', [required, mobile]],
      email: ['', [required, email]],
      comment: ['',],
    });
  }

}

// current locale is key of the MyErrorsOptions
export type MyErrorsOptions = { 'zh-cn': string; en: string } & Record<string, NzSafeAny>;
export type MyValidationErrors = Record<string, MyErrorsOptions>;

export class MyValidators extends Validators {
  static minLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): MyValidationErrors | null => {
      if (Validators.minLength(minLength)(control) === null) {
        return null;
      }
      return { minlength: { 'zh-cn': `Tối thiểu là ${minLength} ký tự`, en: `Tối thiểu là ${minLength} ký tự` } };
    };
  }

  static maxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): MyValidationErrors | null => {
      if (Validators.maxLength(maxLength)(control) === null) {
        return null;
      }
      return { maxlength: { 'zh-cn': `Tối đa là ${maxLength} ký tự`, en: `Tối đa là ${maxLength} ký tự` } };
    };
  }

  static mobile(control: AbstractControl): MyValidationErrors | null {
    const value = control.value;

    if (isEmptyInputValue(value)) {
      return null;
    }

    return isMobile(value)
      ? null
      : { mobile: { 'zh-cn': `Số điện thoại không đúng`, en: `Số điện thoại không đúng` } };
  }
}

function isEmptyInputValue(value: NzSafeAny): boolean {
  return value == null || value.length === 0;
}

function isMobile(value: string): boolean {
  return typeof value === 'string' && /((09|03|07|08|05)+([0-9]{8})\b)/g.test(value);
}
