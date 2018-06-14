import { GapiModule, GapiModuleWithServices } from '@gapi/core';
import { IPFS } from '@gapi/ipfs';
import { GapiIpfsPubSubConfig } from './gapi-ipfs-pubsub-config';
import { GapiIpfsPubSubRoom } from './gapi-ipfs-pubsub-injection';
import { GapiIpfsPubsubTopicService } from './services';

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
                deps: [IPFS, GapiIpfsPubSubRoom, GapiIpfsPubsubTopicService],
                useFactory: (ipfs: IPFS, pubsub, topicService: GapiIpfsPubsubTopicService) => {
                    ipfs.on('ready', () => {
                        console.log(`Ipfs pubsub -> Joined to room: ${room.topic}`);
                    });
                    return topicService.setTopic(pubsub(ipfs, room.topic));
                }
            }));
        return {
            gapiModule: GapiIpfsPubSubModule,
            services: [
                GapiIpfsPubsubTopicService,
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