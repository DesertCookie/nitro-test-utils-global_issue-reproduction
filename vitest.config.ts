import { defineConfig } from 'nitro-test-utils/config'
import path from 'path'

export default defineConfig({
	nitro: {
		global: true
	},
	test: {
		globals: true,
		environment: 'node',
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname), // Resolve `~` to the project root
		},
	},
})