import { Component, input, Output} from '@angular/core';
import { Input} from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule, MatAnchor } from '@angular/material/button';
import { List } from "../list/list";
@Component({
  selector: 'app-season-template',
  imports: [MatToolbar, MatAnchor, List],
  templateUrl: './season-template.html',
  styleUrl: './season-template.scss',
})
export class SeasonTemplate {
  @Input() 
  currentSeason:string="";
  @Input() 
  nextSeason:string="";

  fishList:[]=[];
  forageList:[]=[];
  cropList:[]=[];

}
