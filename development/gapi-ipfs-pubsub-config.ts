import { Service } from "@gapi/core";

@Service()
export class GapiIpfsPubSubConfig {
    logging?: boolean;
    roomName: string;
}