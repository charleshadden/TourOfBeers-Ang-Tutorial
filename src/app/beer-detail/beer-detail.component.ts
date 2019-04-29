import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../beer';
import {ActivatedRoute} from '@angular/router';
import {BeerService} from '../beer.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {

  beer: Beer;

  constructor( private route: ActivatedRoute,
               private beerService: BeerService,
               private location: Location) { }

  ngOnInit() {
    this.getBeer();
  }

}
