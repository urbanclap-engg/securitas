import * as Initializer from '../common/initializer'
import * as _ from 'lodash'
import { SecretPathInterface } from '../common/interfaces'
const Singleton = Initializer.getSingleton()
const vaultClient = Singleton['vaultClient']
const Logger = Singleton['Logger']


const fetchCredentialJsonFromVault = async (path: string) => {
    Logger.info({
        key_1: 'ServiceId',
        key_1_value: Singleton.serviceID,
        key_2: 'Credentials path',
        key_2_value: path,
    })
    return vaultClient.read(path)
}

const fetchCredentialsFromVault = async (secretPaths: SecretPathInterface[]) => {
    let credentials = {}
    for (const secretPath of secretPaths) {
        let credentialJson = await fetchCredentialJsonFromVault(secretPath.vaultPath)
        _.set(credentials, secretPath.secretIdentifier, secretPath.jsonKey?_.get(credentialJson.data, secretPath.jsonKey, {}):credentialJson.data)
    }
    return credentials
}

module.exports = {
    ...fetchCredentialsFromVault
}