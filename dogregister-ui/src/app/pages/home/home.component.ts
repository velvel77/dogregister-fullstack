import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap, startWith } from 'rxjs';
import { Dog, CreateDog } from '../../models/dog';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  creating = false;
  dogs$!: Observable<Dog[]>;
  form!: FormGroup;

  @ViewChild('dogDialog') dogDialog!: ElementRef<HTMLDialogElement>;

  trackByDogId = (_: number, d: Dog) => d.id;
  
  constructor(private dogService: DogService, private fb: FormBuilder ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      age: ['', Validators.required],
      weight: ['', Validators.required]
    });
    
    this.dogs$ = this.dogService.getAllDogs();
  }

  //Simple getter for list of registered dogs
  private loadDogs(): Observable<Dog[]> {
    return this.dogService.getAllDogs().pipe(startWith([] as Dog[]));
  }

  //Dialog will be used for subsequent methods
  openDialog() {
    this.form.reset({name: '', breed: '', age: 0, weight: 0});
    this.dogDialog.nativeElement.showModal();
  }

  closeDialog() {
    this.dogDialog.nativeElement.close();
  }

  //Method for adding the dog inside modal
  onCreate() {
    if(this.form.invalid) return;
    this.creating = true;
    const dto: CreateDog = this.form.value as CreateDog;
    this.dogService.createDog(dto).subscribe({
      next: () => {
        this.dogs$ = this.dogService.getAllDogs();
        this.closeDialog();
      },
      error: (e) => console.error(e),
      complete: () => (this.creating = false),
    });
  }

  onDelete(id: number) {
    
  }

}
