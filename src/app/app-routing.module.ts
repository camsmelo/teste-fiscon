import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  { path: '', component: CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatFormFieldModule, MatButtonModule,
    MatInputModule, FormsModule, MatTableModule,
    ReactiveFormsModule,],
  declarations: [
    CadastroComponent,
  ],
  exports: [RouterModule, MatFormFieldModule, MatInputModule 
],
providers: [
  {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
]

})
export class AppRoutingModule { }
