import { Request, Response } from "express"
import {db} from "@/prisma/db"

class QuestionsController {
  async index(request: Request, response: Response) {

    const userQuestions = request.query.title?.toString() || ""

    const questions = await db.orm.public.Question.where((model) => model.title.ilike(`%${userQuestions}%`)).all()

    return response.json(questions)
  }

  async create(request: Request, response: Response) {
    
    const {title, content, user_id} = request.body

    await db.orm.public.Question.create({
      title, 
      content, 
      userId: user_id
    })

    return response.status(201).json("Questão criado!")
  }

  async update(request: Request, response: Response) {
   
    const {id} = request.params
    const {title, content} = request.body

    await db.orm.public.Question.where({userId: id}).update({title: title, content: content})

    return response.json("Questão atualizada.")
  }

  async remove(request: Request, response: Response) {

    const { id } = request.params

    await db.orm.public.Question.where({id}).delete()

    return response.json(`Item removido.`)
  }
}

export { QuestionsController }
