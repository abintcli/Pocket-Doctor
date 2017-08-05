import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { DoctersFormComponent } from './components/consultDocter/docters-form/docters-form.component';
import { VideoComponent } from './components/consultDocter/video/video.component';
import { VoiceComponent } from './components/consultDocter/voice/voice.component';
import { TextComponent } from './components/consultDocter/text/text.component';
import { WaitingComponent } from './components/consultDocter/waiting/waiting.component';

const routes: Routes = [
  {
      path: 'auth',
      component: AuthComponent
  },
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'video',
      component: VideoComponent
  },
  {
      path: 'voice',
      component: VoiceComponent
  },
  {
      path: 'text',
      component: TextComponent
  },
  {
      path: 'waiting',
      component: WaitingComponent
  },
  {
      path: 'consult',
      component: DoctersFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
