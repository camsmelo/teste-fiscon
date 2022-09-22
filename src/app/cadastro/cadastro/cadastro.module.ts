import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CadastroComponent } from './cadastro.component';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [
      AppComponent,
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [CadastroComponent]
})
export class AppModule { }