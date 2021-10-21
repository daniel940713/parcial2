import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//AQUI IMPORTO RUTAS
import { APP_ROUTING } from './app.routes';

//AQUI IMPORTO LOS SERVICIOS
import { jugadoresService } from './servicios/jugadores.service';

//AQUI IMPORTO COMPONENTES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/utilidades/home/home.component';
import { JamesComponent } from './components/james/james.component';
import { MessiComponent } from './components/messi/messi.component';
import { RonaldoComponent } from './components/ronaldo/ronaldo.component';
import { FooterComponent } from './components/footer/footer.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JamesComponent,
    MessiComponent,
    RonaldoComponent,
    FooterComponent,
    JugadoresComponent
  ],
  //AQUI IMPORTO MODULOS
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  //AQUI IMPORTO LOS SERVICIOS CREADOS
  providers: [jugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
