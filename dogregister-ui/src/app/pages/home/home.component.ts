import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Dog } from '../../models/dog';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  dogs$: Observable<Dog[]>;
  trackByName = (_: number, d: Dog) => d.name;
  
  constructor(private dogService: DogService) {
    this.dogs$ = this.dogService.getAllDogs();
  }

}
