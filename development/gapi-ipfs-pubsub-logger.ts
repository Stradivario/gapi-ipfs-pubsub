import { Service, Inject } from "@gapi/core";
import { GapiIpfsPubSubConfig } from './gapi-ipfs-pubsub-config';

@Service()
export class GapiIpfsPubSubLogger {

    constructor(
        private config: GapiIpfsPubSubConfig
    ) {}

    log(message) {
        if (this.config.logging) {
            console.log(message);
        }
    }

    err(message) {
        if (this.config.logging) {
            console.error(message);
        }
    }
}