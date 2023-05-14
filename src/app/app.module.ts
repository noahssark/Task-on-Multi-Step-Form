import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { StepOnePersonalDetailsComponent } from './components/form/form-steps/step-one-personal-details/step-one-personal-details.component';
import { StepTwoPersonalDetailsComponent } from './components/form/form-steps/step-two-personal-details/step-two-personal-details.component';
import { StepFourPersonalDetailsComponent } from './components/form/form-steps/step-four-personal-details/step-four-personal-details.component';
import { StepFivePersonalDetailsComponent } from './components/form/form-steps/step-five-personal-details/step-five-personal-details.component';
import { StepThreePersonalDetailsComponent } from './components/form/form-steps/step-three-personal-details/step-three-personal-details.component';
import { StepFourSummaryComponent } from './components/form/form-steps/step-four-summary/step-four-summary.component';
import { StepFiveConfimComponent } from './components/form/form-steps/step-five-confim/step-five-confim.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ProgressionButtonsComponent } from './components/progression-buttons/progression-buttons.component';
import { StepTrackerIconsComponent } from './components/step-nav/step-tracker-icons.component';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    StepTrackerIconsComponent,
    ProgressionButtonsComponent,
    FormComponent,
    StepOnePersonalDetailsComponent,
    StepTwoPersonalDetailsComponent,
    StepThreePersonalDetailsComponent,
    StepFourPersonalDetailsComponent,
    StepFivePersonalDetailsComponent,
    StepFourSummaryComponent,
    StepFiveConfimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
