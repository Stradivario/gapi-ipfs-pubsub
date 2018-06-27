"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@rxdi/core");
const ipfs_1 = require("@gapi/ipfs");
const ipfs_pubsub_config_1 = require("./ipfs-pubsub-config");
const ipfs_pubsub_injection_1 = require("./ipfs-pubsub-injection");
const services_1 = require("./services");
const Room = require("ipfs-pubsub-room");
let IpfsPubSubModule = IpfsPubSubModule_1 = class IpfsPubSubModule {
    static forRoot(config) {
        const ROOMS = [];
        config.rooms
            .map((room) => ROOMS.push({
            provide: room,
            deps: [ipfs_1.IPFS, ipfs_pubsub_injection_1.IpfsPubSubRoom, services_1.IpfsPubsubTopicService],
            lazy: true,
            useFactory: (ipfs, pubsub, topicService) => {
                ipfs.on('ready', () => {
                    console.log(`Ipfs pubsub -> Joined to room: ${room.topic}`);
                });
                return topicService.setTopic(pubsub(ipfs, room.topic));
            }
        }));
        return {
            module: IpfsPubSubModule_1,
            services: [
                services_1.IpfsPubsubTopicService,
                { provide: ipfs_pubsub_config_1.IpfsPubSubConfig, useValue: config || {} },
                { provide: ipfs_pubsub_injection_1.IpfsPubSubRoom, useValue: Room },
                ...ROOMS
            ]
        };
    }
};
IpfsPubSubModule = IpfsPubSubModule_1 = __decorate([
    core_1.Module({
        services: [ipfs_pubsub_config_1.IpfsPubSubConfig]
    })
], IpfsPubSubModule);
exports.IpfsPubSubModule = IpfsPubSubModule;
__export(require("./ipfs-pubsub-config"));
__export(require("./ipfs-pubsub-injection"));
__export(require("./ipfs-pubsub-logger"));
var IpfsPubSubModule_1;
