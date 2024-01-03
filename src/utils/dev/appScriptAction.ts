import { copyOctaWebRendererFilesToBuild } from './copyOctaWebRendererFilesToBuild';
import { resetApp } from './resetApp';
import { resetWebAppDB } from "./resetAppWebDB";
import { resetDesktopAppDB } from './resetDesktopAppDB';
import { resetErrorLogs } from './resetErrorLogs';

const [, , command, ...params] = process.argv;

const commandHandlers = {
  resetApp,
  resetDesktopAppDB,
  resetWebAppDB,
  resetErrorLogs,
  copyOctaWebRendererFilesToBuild,
};

if (command in commandHandlers) {
  commandHandlers[command](params);
} else {
  throw new Error("Unknown command - " + command);
}
