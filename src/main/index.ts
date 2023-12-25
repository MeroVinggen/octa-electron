import { app } from 'electron';
import { setAppAdditionalListenersAndModelId } from './App/launchApp';
import { appLaunchPreparer, onAppReady, onAppTryLaunch } from './App/utils';

(async () => {
  onAppTryLaunch();

  const openAppWindowAtStart = await appLaunchPreparer();

  setAppAdditionalListenersAndModelId();

  await app.whenReady();

  onAppReady({ openAppWindowAtStart });
})();
