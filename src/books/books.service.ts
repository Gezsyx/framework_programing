import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity.js';
import { CreateBookDto } from './dto/create-book-dto.js';

@Injectable()
export class BooksService {
  private books: Book[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '978-0-7432-7356-5',
      publishedYear: 1925,
      isAvailable: true,
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      isbn: '978-0-06-112008-4',
      publishedYear: 1960,
      isAvailable: true,
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      isbn: '978-0-452-28423-4',
      publishedYear: 1948,
      isAvailable: true,
    },
  ];

  private currentId = 4;

  // Menampilkan semua buku
  findAll(): Book[] {
    return this.books;
  }

  // Menampilkan buku berdasarkan ID
  findById(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  // Menambahkan buku baru
  create(dto: CreateBookDto): Book {
    const newBook: Book = {
      id: this.currentId++,
      title: dto.title,
      author: dto.author,
      isbn: dto.isbn,
      publishedYear: dto.publishedYear,
      isAvailable: true,
    };
    this.books.push(newBook);
    return newBook;
  }

  // Mengupdate buku berdasarkan ID
  update(id: number, dto: Partial<CreateBookDto>): Book | undefined {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      return undefined;
    }

    const updatedBook: Book = {
      ...this.books[bookIndex],
      ...dto,
    };

    this.books[bookIndex] = updatedBook;
    return this.books[bookIndex];
  }

  //Menghapus buku
  delete(id: number): boolean {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      return false;
    }
    this.books.splice(bookIndex, 1);
    return true;
  }
}
