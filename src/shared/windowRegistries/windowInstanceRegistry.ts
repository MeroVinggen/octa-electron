import { type Window } from '../../utils/window/Window';
import { type WindowNames } from './interface';

export const windowInstanceRegistry = new Map<WindowNames, Window>();
