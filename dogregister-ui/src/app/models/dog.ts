export interface Dog {
  id: number;
  name: string;
  breed: string;
  age: number;
  weight: number;
  tailLength: number;
}

export type CreateDog = Pick<Dog, 'name' | 'breed' | 'age' | 'weight'>;