import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { ListaComponent } from './lista/lista.component';
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { MenuComponent } from './menu/menu.component';
import { FotosComponent } from './fotos/fotos.component';
import { PublicidadeComponent } from './publicidade/publicidade.component';

@NgModule({
  declarations: [
    AppComponent,
    MensagemComponent,
    ListaComponent,
    VideoComponent,
    HomeComponent,
    NoticiasComponent,
    NoticiaComponent,
    MenuComponent,
    FotosComponent,
    PublicidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
