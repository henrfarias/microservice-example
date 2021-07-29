import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm";

@Entity()
export class Client extends BaseEntity {
  
  @PrimaryColumn("uuid", { unique: true })
  id: string

  @Column()
  fullName : string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  cpf_number: number;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipcode: string; 

  @Column()
  current_balance: number;

  @Column()
  average_salary: number;

  @Column()
  status: "aproved" | "rejected";
}