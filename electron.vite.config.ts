import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import { resolve } from 'path';

const build = {
  watch: {
    buildDelay: 2000
  },
};
export default defineConfig(() => {
  return {
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
            "main": resolve(__dirname, 'src/preload/main.ts'),
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
            "activePractice": resolve(__dirname, 'src/renderer/activePractice/index.html'),
            "errorWindow": resolve(__dirname, 'src/renderer/errorWindow/index.html'),
            "trayWindow": resolve(__dirname, 'src/renderer/trayWindow/index.html'),
          }
        }
      }
    },
  };
});
