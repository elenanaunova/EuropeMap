import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'play', pathMatch: 'full'},
  { path: 'play', component: InfoPanelComponent },
  { path: 'leader-board/:correctGuesses', component: LeaderBoardComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
