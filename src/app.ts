import { json } from 'body-parser'
import express, { NextFunction, Request, Response } from 'express'
import routes from './routes'

const app = express()

app.use(json())

app.use(routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: err.message })
})

app.listen(3000)