import { Service } from '@gapi/core';
import { BehaviorSubject } from 'rxjs';
import { GapiIpfsPubSubRoom } from '../gapi-ipfs-pubsub-injection';


@Service()
export class GapiIpfsPubsubTopicService {
    topics: BehaviorSubject<GapiIpfsPubSubRoom[]> = new BehaviorSubject([]);

    setTopic(room: GapiIpfsPubSubRoom): GapiIpfsPubSubRoom | Function {
        this.topics.next([...this.topics.getValue(), room]);
        return this.findTopic(room.topic);
    }

    getTopics(): GapiIpfsPubSubRoom[] {
        return this.topics.getValue();
    }

    findTopic(topic: string) {
        return this.topics.getValue().filter(t => t.topic === topic)[0] || function () {throw new Error(`Ipfs pubsub -> Missing topic: ${topic}`);};
    }

}