import { BehaviorSubject } from 'rxjs';
import { GapiIpfsPubSubRoom } from '../gapi-ipfs-pubsub-injection';
export declare class GapiIpfsPubsubTopicService {
    topics: BehaviorSubject<GapiIpfsPubSubRoom[]>;
    setTopic(room: GapiIpfsPubSubRoom): GapiIpfsPubSubRoom | Function;
    getTopics(): GapiIpfsPubSubRoom[];
    findTopic(topic: string): GapiIpfsPubSubRoom | (() => never);
}
