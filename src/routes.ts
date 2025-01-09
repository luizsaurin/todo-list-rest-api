import { Router } from 'express'
import { create, findAll, findById, remove, update } from './controller/todoController'

const router = Router()

router.post('/', create)
router.get('/', findAll)
router.get('/:id', findById)
router.patch('/:id', update)
router.delete('/:id', remove)

export default router