import { launchApp } from './App/launchApp';
import { appLaunchPreparer as appLaunchPreparer, onAppReady } from './App/utils';

(async () => {
  const openAppWindowAtStart = await appLaunchPreparer();

  await launchApp();

  onAppReady({ openAppWindowAtStart });
})();
