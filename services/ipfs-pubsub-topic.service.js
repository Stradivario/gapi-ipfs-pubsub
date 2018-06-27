"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@rxdi/core");
const rxjs_1 = require("rxjs");
let IpfsPubsubTopicService = class IpfsPubsubTopicService {
    constructor() {
        this.topics = new rxjs_1.BehaviorSubject([]);
    }
    setTopic(room) {
        this.topics.next([...this.topics.getValue(), room]);
        return this.findTopic(room.topic);
    }
    getTopics() {
        return this.topics.getValue();
    }
    findTopic(topic) {
        return this.topics.getValue().filter(t => t.topic === topic)[0] || function () { throw new Error(`Ipfs pubsub -> Missing topic: ${topic}`); };
    }
};
IpfsPubsubTopicService = __decorate([
    core_1.Service()
], IpfsPubsubTopicService);
exports.IpfsPubsubTopicService = IpfsPubsubTopicService;
