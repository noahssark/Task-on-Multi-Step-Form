import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-step-four-summary',
  templateUrl: './step-four-summary.component.html',
  styleUrls: ['./step-four-summary.component.scss']
})
export class StepFourSummaryComponent implements OnInit {
  @Input() stepForm!: FormGroup;


  constructor(private rootFormGroup: FormGroupDirective, private formService: FormService) { }
  ngOnInit(): void {
      }

  changePlan() {
    this.formService.goBackToPreviousStep(3)
  }
}
