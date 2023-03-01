import { Express, Request, Response } from 'express'

import tasksService from './tasks.service'
import { auth } from '../auth/auth.middleware'

export default (app: Express) => {
	app.get('/api/tasks/:id', auth, async (req: Request, res: Response) => {
		try {
			const task = await tasksService.prisma.findUniqueOrThrow({
				where: {
					id: parseInt(req.params.id),
				}
			})

			res.status(200).send(task)
		} catch (error) {
			console.error(error);
			res.status(500).send({ error, })
		}
	})

	app.post('/api/tasks', auth, async (req: Request, res: Response) => {
		try {
			const options = {
				title: req.body.title,
				description: req.body.description,
				assignee: req.body.assignee,
				priority: req.body.priority,
				status: req.body.status
			}
			const task = await tasksService.create(options)
			res.status(200).send({
				task,
			})
		} catch (error) {
			console.error(error);
			res.status(500).send({ error: 'Task creation has failed', })
		}
	})

	app.put('/api/tasks/:id', auth, async (req: Request, res: Response) => {
		try {
			const options = {
				title: req.body.title,
				description: req.body.description,
				assignee: req.body.assignee,
				priority: req.body.priority,
				status: req.body.status
			}
			const task = await tasksService.edit(parseInt(req.params.id), options)
			res.status(200).send({
				task,
			})
		} catch (error) {
			console.error(error);
			res.status(500).send({ error: 'Task modification has failed', })
		}
	})

	app.delete('/api/tasks/:id', auth, async (req: Request, res: Response) => {
		try {
			const user = await tasksService.delete(parseInt(req.params.id))
			res.status(200).send({
				id: user.id,
			})
		} catch (error) {
			console.error(error);
			res.status(500).send({ error: 'Task modification has failed', })
		}
	})
}


