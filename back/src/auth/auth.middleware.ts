import { Request, Response, NextFunction } from 'express';

import authService, { Payload } from './auth.service'

export const auth = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = req.header('Authorization')?.replace('Bearer ', '')

		if (!token) {
			throw new Error();
		}

		const decoded = authService.verifyJWT(token) as Payload
		
		req.user = decoded.user
		
		next()
	} catch (err) {
		res.status(401).send('Please authenticate');
	}
};
