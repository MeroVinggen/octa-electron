import { resetAppDB } from './resetAppDB';
import { resetApp } from './resetApp';
import { resetErrorLogs } from './resetErrorLogs';
import { copyOctaWebRendererFilesToBuild } from './copyOctaWebRendererFilesToBuild';

const [, , command, ...params] = process.argv;

const commandHandlers = {
  resetApp,
  resetAppDB,
  resetErrorLogs,
  copyOctaWebRendererFilesToBuild,
};

if (command in commandHandlers) {
  commandHandlers[command](params);
} else {
  throw new Error("Unknown command - " + command)
}
