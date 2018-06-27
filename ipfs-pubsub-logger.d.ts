import { IpfsPubSubConfig } from './ipfs-pubsub-config';
export declare class IpfsPubSubLogger {
    private config;
    constructor(config: IpfsPubSubConfig);
    log(message: any): void;
    err(message: any): void;
}
