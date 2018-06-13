import { GapiModule, GapiModuleWithServices } from '@gapi/core';
import { IPFS_NODE_READY, IPFS } from '@gapi/ipfs';
import { GapiIpfsPubSubConfig } from './gapi-ipfs-pubsub-config';
import { GapiIpfsPubSubRoom } from './gapi-ipfs-pubsub-injection';
import { GapiIpfsPubSubLogger } from './gapi-ipfs-pubsub-logger';
import { Subject } from 'rxjs/Subject';
const Room = require('ipfs-pubsub-room');

@GapiModule({
    services: [GapiIpfsPubSubConfig]
})
export class GapiIpfsPubSubModule {
    static forRoot(config?: GapiIpfsPubSubConfig): GapiModuleWithServices {
        return {
            gapiModule: GapiIpfsPubSubModule,
            services: [
                { provide: GapiIpfsPubSubConfig, useValue: config || {} },
                {
                    provide: GapiIpfsPubSubRoom,
                    deps: [
                        IPFS,
                        IPFS_NODE_READY,
                        GapiIpfsPubSubLogger,
                        GapiIpfsPubSubConfig
                    ],
                    useFactory: (
                        ipfs: IPFS,
                        nodeReady: Subject<boolean>,
                        logger: GapiIpfsPubSubLogger,
                        config: GapiIpfsPubSubConfig
                    ) => new Promise((resolve) => nodeReady.subscribe(() => {
                        logger.log(`Ipfs Pubsub room name: ${config.roomName}!`);
                        resolve(Room(ipfs, config.roomName));
                    }))
                },
            ]
        };
    }
}

export * from './gapi-ipfs-pubsub-config';
export * from './gapi-ipfs-pubsub-injection';
export * from './gapi-ipfs-pubsub-logger';
