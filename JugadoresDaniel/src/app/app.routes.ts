import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { JamesComponent } from "./components/james/james.component";
import { JugadoresComponent } from "./components/jugadores/jugadores.component";
import { MessiComponent } from "./components/messi/messi.component";
import { RonaldoComponent } from "./components/ronaldo/ronaldo.component";
import { HomeComponent } from "./components/utilidades/home/home.component";



const APP_ROUTES: Routes = [
    {path: "jugadores", component:JugadoresComponent},
    {path: "messi", component:MessiComponent},
    {path: "ronaldo", component:RonaldoComponent},
    {path: "james", component:JamesComponent},
    {path: "footer", component:FooterComponent},
    {path: "home", component:HomeComponent},
    {path: "**", pathMatch:'full', redirectTo:'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);