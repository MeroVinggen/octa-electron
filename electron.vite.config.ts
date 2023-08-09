import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import { resolve } from 'path';

const build = {
  watch: {
    buildDelay: 2000
  },
}

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build,
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      ...build,
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/preload/index.ts'),
          "passivePractice/index": resolve(__dirname, 'src/preload/passivePractice/index.ts'),
        },
        output: {
          entryFileNames: "[name].js"
        }
      }
    },
  },
  renderer: {
    build,
  },
});
