import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from '../../books/entities/book.entity.js';
import { Order } from '../../orders/entities/order.entities.js';

@Entity({ name: 'order_items' })
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'order_id' })
  order_id: string;

  @ManyToOne(() => Order, { nullable: false })
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column({ type: 'uuid', name: 'book_id' })
  book_id: string;

  @ManyToOne(() => Book, { nullable: false })
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  subtotal: string;
}
