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
const core_1 = require("@gapi/core");
const ipfs_1 = require("@gapi/ipfs");
const gapi_ipfs_pubsub_config_1 = require("./gapi-ipfs-pubsub-config");
const gapi_ipfs_pubsub_injection_1 = require("./gapi-ipfs-pubsub-injection");
const Room = require('ipfs-pubsub-room');
let GapiIpfsPubSubModule = GapiIpfsPubSubModule_1 = class GapiIpfsPubSubModule {
    static forRoot(config) {
        const ROOMS = [];
        config.rooms
            .map((room) => ROOMS.push({
            provide: room,
            deps: [ipfs_1.IPFS, gapi_ipfs_pubsub_injection_1.GapiIpfsPubSubRoom],
            useFactory: (ipfs, pubsub) => {
                ipfs.on('ready', () => {
                    console.log(`Joined to room: ${room.name}`);
                });
                return pubsub(ipfs, room.name);
            }
        }));
        return {
            gapiModule: GapiIpfsPubSubModule_1,
            services: [
                { provide: gapi_ipfs_pubsub_config_1.GapiIpfsPubSubConfig, useValue: config || {} },
                { provide: gapi_ipfs_pubsub_injection_1.GapiIpfsPubSubRoom, useValue: Room },
                ...ROOMS
            ]
        };
    }
};
GapiIpfsPubSubModule = GapiIpfsPubSubModule_1 = __decorate([
    core_1.GapiModule({
        services: [gapi_ipfs_pubsub_config_1.GapiIpfsPubSubConfig]
    })
], GapiIpfsPubSubModule);
exports.GapiIpfsPubSubModule = GapiIpfsPubSubModule;
__export(require("./gapi-ipfs-pubsub-config"));
__export(require("./gapi-ipfs-pubsub-injection"));
__export(require("./gapi-ipfs-pubsub-logger"));
var GapiIpfsPubSubModule_1;
