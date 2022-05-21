import { v4 as uuidv4 } from "uuid"

export class Category {
  id?: string
  name: string
  description: string
  created_at: Date

  constructor(id?: string) {
    if(!id) {
      this.id = uuidv4()
    }
  }
}
