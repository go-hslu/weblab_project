import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Tech {

    @PrimaryGeneratedColumn(("uuid"))
    id: string;

    @Column()
    name: string;

}
