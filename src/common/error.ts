enum ErrorTypes {
    INVALID_PARAMS = "Invalid Params"
}

export const SERVICE_ID_INIT_ERROR = {
    err_type: ErrorTypes.INVALID_PARAMS,
    err_message: `Problems while initializing Securitas library - serviceId is not valid`,
};


export const MODULE_SINGLETON_INVALID_ERROR = {
    err_type: ErrorTypes.INVALID_PARAMS,
    err_message: 'Invalid Module Singleton, Securitas library was not initialized properly',
};

export const INVALID_UCERROR = {
    err_type: ErrorTypes.INVALID_PARAMS,
    err_message: 'Problems while initializing Securitas library - Invalid UCError',
};
  