import { Component, OnInit } from '@angular/core';

import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  _test (values) {
    return console.log('value===: ', values);
  }

  ngOnInit() {
    console.log('home: ', this.heroService.getHeros().subscribe(this._test));
  }

}
