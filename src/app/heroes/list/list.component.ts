import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public herosNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deleteHero?: string;

  removeLastHeroe(): void {
    this.deleteHero = this.herosNames.pop();
  }
}
