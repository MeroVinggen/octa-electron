import { Window } from '../../utils/window/Window';
import { windowInstanceRegistry } from './windowInstanceRegistry';

/**
 * creating all window instances at registry
 */
export const initWindowInstanceRegistry = () => {
  windowInstanceRegistry.set("main", new Window());
  windowInstanceRegistry.set("passivePractice", new Window());
  windowInstanceRegistry.set("error", new Window());
};
