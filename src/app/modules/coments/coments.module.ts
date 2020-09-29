import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComentsComponent } from './components/all-coments/all-coments.component';
import { ComentComponent } from './components/coment/coment.component';
import { ComentsService } from './services/coments.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AllComentsComponent, ComentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AllComentsComponent },])
  ],
  providers: [ComentsService]
})
export class ComentsModule { }
