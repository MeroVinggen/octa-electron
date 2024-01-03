import { resetWebAppDB } from "./resetAppWebDB";
import { resetDesktopAppDB } from "./resetDesktopAppDB";
import { resetErrorLogs } from "./resetErrorLogs";

export const resetApp = async () => {
  console.log("-- App full reset begin");

  await Promise.all([
    resetDesktopAppDB(),
    resetErrorLogs(),
    resetWebAppDB(),
  ]).catch((err) => console.log(err));

  console.log("-- App full reset finished");
};
