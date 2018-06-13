import { Service } from "@gapi/core";
import { GapiIpfsPubSubRoom } from "./gapi-ipfs-pubsub-injection";

@Service()
export class GapiIpfsPubSubConfig {
    logging?: boolean;
    rooms: Array<GapiIpfsPubSubRoom>;
}