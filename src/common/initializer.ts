import { ModuleSingleton } from "./interfaces";
import {
    INVALID_UCERROR,
    MODULE_SINGLETON_INVALID_ERROR,
    SERVICE_ID_INIT_ERROR,
  } from './error';
  
  let moduleSingleton: ModuleSingleton = null;
  
  const initialize = async (params: ModuleSingleton) => {
    if (!params.UCError) {
      throw INVALID_UCERROR;
    }
    if (!params.serviceID) {
      throw new params.UCError(SERVICE_ID_INIT_ERROR);
    }
    moduleSingleton = params;
  };
  
  const getSingleton = (): ModuleSingleton => {
    if (!moduleSingleton) {
      throw MODULE_SINGLETON_INVALID_ERROR;
    }
    return moduleSingleton;
  };
  
  export { initialize, getSingleton };
  