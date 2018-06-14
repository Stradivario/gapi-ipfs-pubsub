import { GapiModule, GapiModuleWithServices } from '@gapi/core';
import { IPFS } from '@gapi/ipfs';
import { GapiIpfsPubSubConfig } from './gapi-ipfs-pubsub-config';
import { GapiIpfsPubSubRoom } from './gapi-ipfs-pubsub-injection';
const Room = require('ipfs-pubsub-room');

@GapiModule({
    services: [GapiIpfsPubSubConfig]
})
export class GapiIpfsPubSubModule {
    static forRoot(config?: GapiIpfsPubSubConfig): GapiModuleWithServices {
        const ROOMS = [];
        config.rooms
            .map((room) => ROOMS.push({
                provide: room,
                deps: [IPFS, GapiIpfsPubSubRoom],
                useFactory: (ipfs: IPFS, pubsub) => {
                    ipfs.on('ready', () => {
                        console.log(`Joined to room: ${room.name}`);
                    });
                    return pubsub(ipfs, room.name);
                }
            }));
        return {
            gapiModule: GapiIpfsPubSubModule,
            services: [
                { provide: GapiIpfsPubSubConfig, useValue: config || {} },
                { provide: GapiIpfsPubSubRoom, useValue: Room },
                ...ROOMS
            ]
        };
    }
}

export * from './gapi-ipfs-pubsub-config';
export * from './gapi-ipfs-pubsub-injection';
export * from './gapi-ipfs-pubsub-logger';