import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Flavor } from './flavor.entity';

// sql table === 'coffee
@Entity('coffee')
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({ default: 0})
  recommendations: number;

  @JoinTable()
  @ManyToMany(type => Flavor, (flavor) => flavor.coffees)
  flavors: Flavor[];
}
