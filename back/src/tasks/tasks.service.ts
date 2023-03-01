import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface Task {
	title: string, 
	description: string, 
	assignee: number, 
	priority: number, 
	status: number,
}

export default {
	prisma: prisma.task,

	create: async (options: Task) => {
		return await prisma.task.create({
			data: {
				title: options.title,
				description: options.description,
				assignee: options.assignee,
				priority: options.priority,
				status: options.status,
			},
		})
	},

	edit: async (id: number, options: Task) => {
		return await prisma.task.update({
			where: {
				id,
			},
			data: {
				title: options.title,
				description: options.description,
				assignee: options.assignee,
				priority: options.priority,
				status: options.status,
			},
		})
	},

	delete: async (id: number) => {
		return await prisma.task.delete({
			where: {
				id,
			},
		})
	},
}


