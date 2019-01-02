import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { ListaComponent } from './lista/lista.component';
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { FotosComponent } from './fotos/fotos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mensagem', component: MensagemComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'video', component: VideoComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'fotos', component: FotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
