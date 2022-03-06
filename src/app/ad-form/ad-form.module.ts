import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NbStepperModule, NbDatepickerModule, NbRadioModule, NbCardModule, NbUserModule, NbButtonModule, NbIconModule, NbInputModule, NbTabsetModule, NbSelectModule, NbListModule, NbProgressBarModule, NbSelectComponent } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../@theme/theme.module';
import { AdFormComponent } from './ad-form.component';



@NgModule({

  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    Ng2SmartTableModule,
    FormsModule,
    NbInputModule,
  ],
  declarations: [
    AdFormComponent
  ],
})

export class AdFormModule { }
