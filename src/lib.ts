import {CredentialService, PIIService} from './service'

export = {
    encryptData: PIIService.encryptData,
    decryptData: PIIService.decryptData,
    fetchCredentialsFromVault: CredentialService.fetchCredentialsFromVault
}

