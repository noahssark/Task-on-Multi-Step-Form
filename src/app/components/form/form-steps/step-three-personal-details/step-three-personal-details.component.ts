import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-three-personal-details',
  templateUrl: './step-three-personal-details.component.html',
  styleUrls: ['./step-three-personal-details.component.scss']
})

export class StepThreePersonalDetailsComponent implements OnInit {
  stepForm!: FormGroup;

  @Input() formGroupName!: string;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.stepForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

  }


}

