import { RequestHandler } from 'express'
import { Todo } from '../model/todo'

const todoList: Todo[] = []
const todoListMaxLength: number = 100

// Add dummy data
todoList.push(new Todo(Math.floor((Math.random() * todoListMaxLength) + 1).toString(), 'Complete the project report'))
todoList.push(new Todo(Math.floor((Math.random() * todoListMaxLength) + 1).toString(), 'Respond to work emails'))
todoList.push(new Todo(Math.floor((Math.random() * todoListMaxLength) + 1).toString(), 'Attend team meeting at 3 PM'))
todoList.push(new Todo(Math.floor((Math.random() * todoListMaxLength) + 1).toString(), 'Finish code review for the new feature'))
todoList.push(new Todo(Math.floor((Math.random() * todoListMaxLength) + 1).toString(), 'Study for the upcoming exam'))
todoList.push(new Todo(Math.floor((Math.random() * todoListMaxLength) + 1).toString(), 'Write blog post on TypeScript best practices'))

export const create: RequestHandler = (req, res, next) => {
	const description = req.body.description

	if(!description) {
		res.status(400).json({ message: 'description cannot be blank'})
		return
	}

	const newTodo = new Todo(Math.floor((Math.random() * todoListMaxLength) + 1).toString(), description)

	todoList.push(newTodo)

	res.status(201).json({ id: newTodo.id, description: newTodo.description })
}

export const findById: RequestHandler<{id: string}> = (req, res, next) => {
	const todoId = req.params.id

	const todoIndex = todoList.findIndex(todo => todo.id === todoId)

	if(todoIndex < 0) {
		res.status(404).send(null)
		return
	}

	const todoItem = todoList[todoIndex]

	res.status(200).json({ id: todoItem.id, description: todoItem.description })
}

export const findAll: RequestHandler = (req, res, next) => {
	res.status(200).json( todoList )
}

export const update: RequestHandler<{id: string}> = (req, res, next) => {
	const todoId = req.params.id

	const todoIndex = todoList.findIndex(todo => todo.id === todoId)

	if(todoIndex < 0) {
		res.status(404).send(null)
		return
	}

	const description = req.body.description

	if(!description) {
		res.status(400).json({ message: 'description cannot be blank'})
		return
	}

	todoList[todoIndex] = new Todo(todoList[todoIndex].id, description)

	res.status(204).send(null)
}

export const remove: RequestHandler = (req, res, next) => {
	const todoId = req.params.id

	const todoIndex = todoList.findIndex(todo => todo.id === todoId)

	if(todoIndex < 0) {
		res.status(404).send(null)
		return
	}

	todoList.splice(todoIndex, 1)

	res.status(204).send(null)
}
