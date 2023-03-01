declare global {
	namespace NodeJS {
		interface ProcessEnv {
			SECRET_KEY: string;
			NODE_ENV: 'development' | 'production';
			DATABASE_URL: string;
			BACK_PORT: string;
			JWT_EXPIRATION: string;
			SALT_ROUNDS: string;
		}
	}
}

export {}