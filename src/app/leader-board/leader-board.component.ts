import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserData } from '../model';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit, OnDestroy {

  correctGuesses: number;
  userDataForm: FormGroup;
  submitted: boolean = false;
  users: UserData[];
  displayedColumns: string[] = ['id', 'name', 'score'];
  routeSubscribtion$: Subscription;

 constructor(private _fb: FormBuilder, private localStorageService: LocalStorageService,
             private router: Router, private route: ActivatedRoute) { }

 ngOnInit() {
   this.userDataForm = this._fb.group({
     name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]]
   });

   this.routeSubscribtion$ = this.route.params.subscribe(params => {
    this.correctGuesses = +params['correctGuesses'];
  });

   this.sortUsersByScore();
  } 

  onSubmit() {
    this.submitted = true;
    let currentDate = new Date();
    this.localStorageService.set(this.userDataForm.controls["name"].value + '_' + currentDate, this.correctGuesses);
    this.sortUsersByScore();
  }

  sortUsersByScore() {
    this.users = this.localStorageService.getAllUsers().sort((x, y) => y.score - x.score).splice(0,10);
  }

  playAgain() {
    this.router.navigateByUrl('/play');
  }

  ngOnDestroy() {
    this.routeSubscribtion$.unsubscribe();
    this.routeSubscribtion$ = null;
  }
}
