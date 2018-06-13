import { GapiModuleWithServices } from '@gapi/core';
import { GapiIpfsPubSubConfig } from './gapi-ipfs-pubsub-config';
export declare class GapiIpfsPubSubModule {
    static forRoot(config?: GapiIpfsPubSubConfig): GapiModuleWithServices;
}
export * from './gapi-ipfs-pubsub-config';
export * from './gapi-ipfs-pubsub-injection';
export * from './gapi-ipfs-pubsub-logger';
