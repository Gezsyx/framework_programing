import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('profile')
export class Profile{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @CreateDateColumn({type:'datetime'})
    createAt:Date;

}