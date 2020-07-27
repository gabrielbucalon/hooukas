import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required],
      cupomForm: this.fb.group({
        codeCupom: [{value: "", disabled: true}, Validators.required],
        priceDiscount: [{value: "", disabled: true}, Validators.required]
      }),
    });
  }

  manageFieldsCupom(check: boolean){
    if (check) {
      this.f.cupomForm.get('codeCupom').enable();
      this.f.cupomForm.get('priceDiscount').enable();
    }else{
      this.f.cupomForm.get('codeCupom').disable();
      this.f.cupomForm.get('priceDiscount').disable();
    }
  }

  get f(){
    return this.form.controls;
  }

  submitForm(){  }

}
