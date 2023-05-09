import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-une-generation',
  templateUrl: './une-generation.component.html',
  styleUrls: ['./une-generation.component.scss']
})
export class UneGenerationComponent {
  @Input() public leNomDeGeneration : string = "";
}
