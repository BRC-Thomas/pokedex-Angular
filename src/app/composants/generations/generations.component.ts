import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent {
 public  generations: string[] = [];

  constructor() {

    this.generations.push('Generation I');
    this.generations.push('Generation II');
    this.generations.push('Generation III');
    this.generations.push('Generation IV');
    this.generations.push('Generation V');
    this.generations.push('Generation VI');
    this.generations.push('Generation VII');
  }

}
