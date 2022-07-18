# Security Library for Microservices
Securitas is an easy-to-use library supporting multiple functionalities related to secrets management, data protection etc.

It allows microservices to use fetch secrets, encrypt/decrypt data using Hashicorp Vault
## Installation

Using npm
```bash
npm i @uc-engg/securitas
```
Note: add --save if you are using npm < 5.0.0

## Usage
1. Fetching secrets from Vault: 

    ```javascript
    secretPaths = [{secretIdentifier: 'ABC', vaultPath : 'kv/x/y'},
                   {secretIdentifier: 'XYZ', vaultPath: 'kv/secret', jsonKey: 'a'}]   
    secrets = Securitas.fetchCredentialsFromVault(secretPaths)
   // secrets = {
    //  'ABC' : {},
    //  'XYZ' : {} 
   // } 
    ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

