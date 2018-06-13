import { InjectionToken } from "@gapi/core";

export interface GapiIpfsPubSubRoom {
    name: string;
}

export const GapiIpfsPubSubRoom = new InjectionToken<GapiIpfsPubSubRoom>('gapi-ipfs-pubsub-injection');
