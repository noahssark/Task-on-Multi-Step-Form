import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-four-personal-details',
  templateUrl: './step-four-personal-details.component.html',
  styleUrls: ['./step-four-personal-details.component.scss']
})

export class StepFourPersonalDetailsComponent implements OnInit {
  stepForm!: FormGroup;

  @Input() formGroupName!: string;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.stepForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

  }


}

