import { Router } from 'express'
import { create, findAll, findById, remove, update } from './controller/todoController'

const router = Router()

const createRoute = (path: string): Router => {
	const newRouter = Router()
	router.use(path, newRouter)
	return newRouter
}

const todoRouter = createRoute('/todo')
todoRouter.post('/', create)
todoRouter.get('/', findAll)
todoRouter.get('/:id', findById)
todoRouter.patch('/:id', update)
todoRouter.delete('/:id', remove)

export default router