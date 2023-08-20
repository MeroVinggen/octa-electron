import { resetAppDB } from './resetAppDB';
import { resetApp } from './resetApp';
import { resetErrorLogs } from './resetErrorLogs';

const [, , command, ...params] = process.argv;

const commandHandlers = {
  resetApp,
  resetAppDB,
  resetErrorLogs,
};

if (command in commandHandlers) {
  commandHandlers[command](params);
} else {
  console.log("Unknown command - " + command);
}
