'use strict';

import * as Initializer from './common/initializer';
import { ModuleSingleton } from './common/interfaces';

const init = async (params: ModuleSingleton): Promise<void> => {
  await Initializer.initialize(params);
};

const getModule = async () => {
  return import('./lib');
};

export = {
  init,
  getModule
};

