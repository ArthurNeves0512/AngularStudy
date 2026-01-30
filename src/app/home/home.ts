import { Component, inject } from '@angular/core';

import { Spring } from '../spring/spring';
import { RouterOutlet } from '@angular/router';


export enum SeasonENUM{
  "spring",
  "summer",
  "fall",
  "winter"
};

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,Spring],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  season:SeasonENUM=SeasonENUM.spring;



  nextSeason(){
    if(this.season>=SeasonENUM.winter){
      this.season=SeasonENUM.spring
    }
    else{
      this.season+=1;
    }
  }
}
