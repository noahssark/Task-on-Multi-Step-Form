import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private activeStepSubject = new BehaviorSubject<number>(1);
  activeStep$ = this.activeStepSubject.asObservable();


  multiStepForm: FormGroup = this.fb.group({
    personalDetails: this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],

    }),
    phone: this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(10)]],
    }),
    city: this.fb.group({
      city: ['', [Validators.required, Validators.minLength(4)]],
    })
  })

  get stepForm(): FormGroup {
    return this.multiStepForm;
  }

  constructor(private fb: FormBuilder) { }

  goToNextStep(number: number) {
    this.activeStepSubject.next(number + 1);
  }

  goBackToPreviousStep(number: number) {
    this.activeStepSubject.next(number - 1);
  }
  submit() {
    //TO-DO => validate form
    this.goToNextStep(6);
    setTimeout(() => {
      this.activeStepSubject.next(1);
    }, 8000);

  }


}
