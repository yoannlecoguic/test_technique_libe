import express, { Express } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import tasksController from './tasks/tasks.controller'

const app: Express = express()
app.use(bodyParser.json())
app.use(cors())

tasksController(app)

app.listen(process.env.PORT, () => {
	console.log(`Server is running at http://localhost:${process.env.PORT}`)
});

export default app