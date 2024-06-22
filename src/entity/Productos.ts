import { IsNotEmpty, IsNumber, IsPositive, MaxLength } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Productos{
 
    @PrimaryColumn()
    @IsNotEmpty({message:'Debe indicar el ID.'})
    id:number;
    @Column({length:50,nullable:false})
    @MaxLength(50,{message:'Debe contener un maximo de 50 caracteres'})
    @IsNotEmpty({message:'Debe indicar el nombre del producto.'})
    nombre: string;
    @Column()
    @IsNotEmpty({message:'Debe indicar el precio.'})
    @IsNumber()
    precio: number;
    @Column()
    @IsNotEmpty({message:'Debe indicar el stock.'})
    @IsPositive({message:'Debe indicar un valor positivo'})
    stock:number;
    @Column()
    @IsNotEmpty({message:'Debe indicar la categoria.'})
    categoria: number;
    @Column({default:1})
    estado: boolean;






    
}