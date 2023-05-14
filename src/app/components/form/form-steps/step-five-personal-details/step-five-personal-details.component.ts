import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-five-personal-details',
  templateUrl: './step-five-personal-details.component.html',
  styleUrls: ['./step-five-personal-details.component.scss']
})

export class StepFivePersonalDetailsComponent implements OnInit {
  stepForm!: FormGroup;

  @Input() formGroupName!: string;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.stepForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

  }


}

