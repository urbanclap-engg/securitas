import {PayloadFormat} from '../common/interfaces'
import * as Initializer from '../common/initializer'
const Singleton = Initializer.getSingleton()
const vaultClient = Singleton['vaultClient']
const serviceId = Singleton['serviceID']

function encode(input: string): string {
    return Buffer.from(input).toString('base64')
}

function decode(input:string): string {
    return Buffer.from(input, 'base64').toString('utf8')
}

const encryptData = async (payload: PayloadFormat): Promise<string> => {
    const vaultKey = serviceId + "-" + payload.uniqueUserId
    let encryptResponse = await vaultClient.encryptData({
        name: vaultKey,
        plaintext: encode(payload.data)
    })
    return encryptResponse.data.ciphertext
}

const decryptData = async (payload: PayloadFormat): Promise<string> => {
    const vaultKey = serviceId + "-" + payload.uniqueUserId
    let decryptResponse = await vaultClient.decryptData({
        name: vaultKey,
        ciphertext: payload.data
    })
    return decode(decryptResponse.data.plaintext)
}

export {
    encryptData,
    decryptData
}