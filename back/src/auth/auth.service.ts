import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const SECRET_KEY = process.env.SECRET_KEY
const JWT_EXPIRATION = process.env.JWT_EXPIRATION

interface Payload {
	user: {
		id: number;
		username: string;
	}
}

export { Payload }

export default {
	verifyJWT: (token: string) => {
		return jwt.verify(token, SECRET_KEY)
	},

	generateJWT: (payload: Payload) => {
		return jwt.sign(payload, SECRET_KEY, {
			expiresIn: JWT_EXPIRATION,
		})
	},
	
	isMatch: async (password: string, userHash: string) => {
		return await bcrypt.compare(password, userHash)
	},
	
	hashPassword: async (password: string) => {
		return await bcrypt.hash(password, SALT_ROUNDS)
	},
}


