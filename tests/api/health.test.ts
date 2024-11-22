import { $fetchRaw, setup } from 'nitro-test-utils/e2e'
import { describe, expect, it, beforeAll, afterAll } from 'vitest';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

describe('api-health',async () => {
	/*let nitro;
	
	process.on('uncaughtException', (err) => {
		console.error('Uncaught Exception:', err);
	});
	
	process.on('unhandledRejection', (reason, promise) => {
		console.error('Unhandled Rejection at:', promise, 'reason:', reason);
	});
	
	beforeAll(async () => {
		try {
			console.log('Determining root Dir');
			const currentDir = dirname(fileURLToPath(import.meta.url));
			const rootDir = resolve(currentDir, '../..');
			
			console.log('Initializing Nitro server with root directory:', rootDir);
			nitro = await setup({ rootDir });
			console.log('Nitro server initialized');
		} catch (error) {
			console.error('Error during setup:', error);
		}
	});
	
	afterAll(async () => {
		await nitro.close();
	});*/
	
	it('responds successfully', async () => {
		console.log('Request:', { url: '/api/health' })
		const { data, status } = await $fetchRaw('/api/health')
		
		console.log('Response:', { data, status })
		
		expect(status).toBe(200)
		expect(data).toMatchSnapshot()
	})
})