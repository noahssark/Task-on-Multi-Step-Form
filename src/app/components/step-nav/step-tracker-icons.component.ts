import { Component, OnInit } from '@angular/core';
import { FormService } from '../form/form.service';

@Component({
  selector: 'app-step-tracker-icons',
  templateUrl: './step-tracker-icons.component.html',
  styleUrls: ['./step-tracker-icons.component.scss']
})
export class StepTrackerIconsComponent implements OnInit {

  stepDetails: { step: number; description: string;}[] = [
    { step: 1, description: 'Your name' },
    { step: 2, description: 'city' },
    { step: 3, description: 'phone' },
    { step: 4, description: 'address' },
    { step: 5, description: 'country' },
    { step: 6, description: 'Summary' }
  ]
  activeStep$: number;

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.formService.activeStep$.subscribe(
      activeStep => this.activeStep$ = activeStep);
  }

}
