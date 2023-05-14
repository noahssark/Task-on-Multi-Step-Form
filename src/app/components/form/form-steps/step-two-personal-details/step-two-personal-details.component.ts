import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-two-personal-details',
  templateUrl: './step-two-personal-details.component.html',
  styleUrls: ['./step-two-personal-details.component.scss']
})

export class StepTwoPersonalDetailsComponent implements OnInit {
  stepForm!: FormGroup;

  @Input() formGroupName!: string;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.stepForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

  }


}

