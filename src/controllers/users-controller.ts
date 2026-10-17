import { Request, Response } from "express"
import { db } from "@/prisma/db"

class UsersController {

  async index(request: Request, response: Response) {
    const userSelect = await db.orm.public.User.all()

    return response.json(userSelect)
  }

  async create(request: Request, response: Response) {  
    const {name, email} = request.body

    const newUser = await db.orm.public.User.create({name, email})

    return response.status(201).json(newUser)
  }

  async show(request: Request, response: Response) {
    const {id} = request.params
    
    const selectedUser = await db.orm.public.User.where({id}).first()

    return response.json(selectedUser)
  }
}

export { UsersController }
