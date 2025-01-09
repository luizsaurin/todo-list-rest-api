import { RequestHandler } from 'express'
import { Todo } from '../model/todo'

const TODOS: Todo[] = []

export const createTodo: RequestHandler = (req, res, next) => {
	const text = req.body.text
	const newTodo = new Todo(Math.random().toString(), text)

	TODOS.push(newTodo)

	res.status(201).json({ message: 'TODO created.', createdTodo: newTodo })
}

export const getTodos: RequestHandler = (req, res, next) => {
	res.json({ todos: TODOS })
}

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
	const todoId = req.params.id

	const updatedText = req.body.text

	const todoIndex = TODOS.findIndex(todo => todo.id === todoId)

	if(todoIndex <0 ) {
		throw new Error('Could not find todo')
	}

	TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText)

	res.json({ message: 'Updated!', updatedTodo: TODOS[todoIndex] })
}

export const deleteTodo: RequestHandler = (req, res, next) => {
	const todoId = req.params.id

	const todoIndex = TODOS.findIndex(todo => todo.id === todoId)

	if(todoIndex <0 ) {
		throw new Error('Could not find todo')
	}

	TODOS.splice(todoIndex, 1)

	res.json({ message: 'Todo deleted!' })

}