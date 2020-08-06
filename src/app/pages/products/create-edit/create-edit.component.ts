import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {
  form: FormGroup;
  images = [];
  constructor(private fb: FormBuilder,
    private productService: ProductsService) { }


  ngOnInit(): void {
    this.createForm();
    this.productService.getAll().subscribe((res: any) => console.log(res));
  }

  createForm() {
    this.form = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required],
      imgs: ["", Validators.required],
      cupomForm: this.fb.group({
        codeCupom: [{ value: "", disabled: true }, Validators.required],
        priceDiscount: [{ value: "", disabled: true }, Validators.required]
      }),
      quantity: [0]
    });
  }

  manageFieldsCupom(check: boolean) {
    if (check) {
      this.f.cupomForm.get('codeCupom').enable();
      this.f.cupomForm.get('priceDiscount').enable();
    } else {
      this.f.cupomForm.get('codeCupom').disable();
      this.f.cupomForm.get('priceDiscount').disable();
    }
  }

  Addimages(): FormGroup {
    return this.fb.group({
      src: [""]
    });
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.images.push(event.target.result);

          this.form.patchValue({
            imgs: this.images
          });
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  get f() {
    return this.form.controls;
  }

  submitForm() {
    if (this.form.invalid) {
      return;
    }
    this.productService.createProduct(this.form.value);
  }

}
