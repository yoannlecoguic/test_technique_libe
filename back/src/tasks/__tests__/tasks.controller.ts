import request from 'supertest'

// Not great, should be testing only task.controller.ts
import app from '../../main'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InlvYW5uMSJ9LCJpYXQiOjE2Nzc2NzgzMzEsImV4cCI6MTY3Nzg1MTEzMX0.df8M4dkqlj283V2QgbnFEXl5UVc0igjqjwLC2MSI-tk'

describe('Test app.ts', () => {
	test('Test GET task without auth', async () => {
		const res = await request(app).get('/api/tasks/1')
		expect(res.status).toBe(401)
	})

	test('Test GET task with auth', async () => {
		const res = await request(app)
			.get('/api/tasks/1')
			.set('Authorization', `Bearer ${token}`)
		expect(res.status).toBe(500)
	})

	test('Test POST task', async () => {
		const res = await request(app)
			.post('/api/tasks')
			.set('Authorization', `Bearer ${token}`)
		expect(res.status).toBe(500)
	})

	test('Test PUT task', async () => {
		const res = await request(app)
			.put('/api/tasks/1')
			.set('Authorization', `Bearer ${token}`)
		expect(res.status).toBe(500)
	})

	test('Test DELETE task', async () => {
		const res = await request(app)
			.delete('/api/tasks/1')
			.set('Authorization', `Bearer ${token}`)
		expect(res.status).toBe(500)
	})
})