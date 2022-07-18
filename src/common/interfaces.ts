export interface ModuleSingleton {
    vaultClient: any,
    serviceID: string,
    UCError: any,
    Logger: any
}

export interface PayloadFormat {
    data: string,
    uniqueUserId: string
}

export interface SecretPathInterface {
    secretIdentifier:string,
    vaultPath: string,
    jsonKey?: string 
}