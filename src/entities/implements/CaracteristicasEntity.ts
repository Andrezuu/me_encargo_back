import { Entity, PrimaryColumn,  Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { ICaracteristicas } from "../ICaracteristicas";
import { Caracteristicas_ProductoEntity } from './Caracteristicas_ProductoEntity';
import { ICaracteristicas_Producto } from '../ICaracteristicas_Producto';

@Entity({name:'Caracteristicas'})
export class CaracteristicasEntity implements ICaracteristicas{
    
    @PrimaryGeneratedColumn()
    id_Caracteristicas!: number;
    
    @Column({type: 'varchar'})
    nombre!: string;
    
    @OneToMany(() => Caracteristicas_ProductoEntity, caracteristicas_Producto => caracteristicas_Producto.caracteristicas)
    caracteristicas_Producto!: ICaracteristicas_Producto[];


}