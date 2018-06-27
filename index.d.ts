import { ModuleWithServices } from '@rxdi/core';
import { IpfsPubSubConfig } from './ipfs-pubsub-config';
export declare class IpfsPubSubModule {
    static forRoot(config?: IpfsPubSubConfig): ModuleWithServices;
}
export * from './ipfs-pubsub-config';
export * from './ipfs-pubsub-injection';
export * from './ipfs-pubsub-logger';
