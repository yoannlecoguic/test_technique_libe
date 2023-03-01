import { JwtPayload } from 'jsonwebtoken';
import { Payload } from './auth.service'

declare global {
	namespace Express {
		export interface Request {
			user?: Payload
		}
	}
}

export {}