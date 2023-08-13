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
          "passivePracticeWindow/main": resolve(__dirname, 'src/preload/passivePracticeWindow/main.ts'),
          "errorWindow/main": resolve(__dirname, 'src/preload/errorWindow/main.ts'),
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
          "errorWindow": resolve(__dirname, 'src/renderer/errorWindow/index.html'),
        }
      }
    }
  },
});
