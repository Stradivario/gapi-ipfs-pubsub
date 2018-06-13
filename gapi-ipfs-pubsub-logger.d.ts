import { GapiIpfsPubSubConfig } from './gapi-ipfs-pubsub-config';
export declare class GapiIpfsPubSubLogger {
    private config;
    constructor(config: GapiIpfsPubSubConfig);
    log(message: any): void;
    err(message: any): void;
}
