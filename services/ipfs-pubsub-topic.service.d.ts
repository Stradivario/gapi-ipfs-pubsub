import { BehaviorSubject } from 'rxjs';
import { IpfsPubSubRoom } from '../ipfs-pubsub-injection';
export declare class IpfsPubsubTopicService {
    topics: BehaviorSubject<IpfsPubSubRoom[]>;
    setTopic(room: IpfsPubSubRoom): IpfsPubSubRoom | Function;
    getTopics(): IpfsPubSubRoom[];
    findTopic(topic: string): IpfsPubSubRoom | (() => never);
}
