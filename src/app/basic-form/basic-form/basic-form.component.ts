import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  form: FormGroup;
  programmingLanguages = ['TS', 'JS', 'Java', 'Python'];

  constructor(private fb: FormBuilder) {}

  

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, Validators.required],
      isExperienced: [null, Validators.required],
      angular: [null, Validators.required],
      favouriteLanguage: [null, Validators.required],
      jsversion: [null, Validators.required],
    });

    this.form.get('favoriteLanguage').valueChanges.subscribe(value => {
      const jsVersionFormControl = this.form.get('jsversion');

      if (value === 'JS') {
        jsVersionFormControl.setValidators(Validators.required);

      } else {
        jsVersionFormControl.clearValidators();
      }
      jsVersionFormControl.updateValueAndValidity();
    });    

  }

}
