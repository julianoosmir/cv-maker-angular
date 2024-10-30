import {Routes} from '@angular/router';
import {DadosPessoaisComponent} from './dados-pessoais/dados-pessoais.component';
import {FormacaoComponent} from './formacao/formacao.component';
import {ExperienciaComponent} from './experiencia/experiencia.component';

export const routes: Routes = [
  {path: '', component: DadosPessoaisComponent},
  {path: 'formacao', component: FormacaoComponent},
  { path: 'experiencia', component: ExperienciaComponent },
];
