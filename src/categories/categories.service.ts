import { Injectable } from '@nestjs/common';
import { Category } from './entities/categories.entity.js';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'Fiction',
    },
    {
      id: 2,
      name: 'Non-Fiction',
    },
    {
      id: 3,
      name: 'Science Fiction',
    },
  ];


    // Menampilkan semua kategori
    findAll(): Category[] {
      return this.categories;
    }
  
    // Menampilkan kategori berdasarkan ID
    findById(id: number): Category | undefined {
      return this.categories.find((category) => category.id === id);
    }
}
