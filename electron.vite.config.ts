import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import { resolve } from 'path';

const build = {
  watch: {
    buildDelay: 2000
  },
};

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
          "mainWindow/main": resolve(__dirname, 'src/preload/mainWindow/main.ts'),
          "passivePractice/main": resolve(__dirname, 'src/preload/passivePractice/main.ts'),
        }
      }
    },
  },
  renderer: {
    build: {
      ...build,
      rollupOptions: {
        input: {
          "mainWindow": resolve(__dirname, 'src/renderer/mainWindow/index.html'),
          "passivePractice": resolve(__dirname, 'src/renderer/passivePractice/index.html'),
        }
      }
    }
  },
});
