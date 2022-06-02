import { v4 as uuidv4 } from "uuid"
import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm"

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date

  constructor(id?: string) {
    if (!id) {
      this.id = uuidv4()
    }
  }
}
