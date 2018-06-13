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
const gapi_ipfs_pubsub_logger_1 = require("./gapi-ipfs-pubsub-logger");
const Room = require('ipfs-pubsub-room');
let GapiIpfsPubSubModule = GapiIpfsPubSubModule_1 = class GapiIpfsPubSubModule {
    static forRoot(config) {
        return {
            gapiModule: GapiIpfsPubSubModule_1,
            services: [
                { provide: gapi_ipfs_pubsub_config_1.GapiIpfsPubSubConfig, useValue: config || {} },
                {
                    provide: gapi_ipfs_pubsub_injection_1.GapiIpfsPubSubRoom,
                    deps: [
                        ipfs_1.IPFS,
                        ipfs_1.IPFS_NODE_READY,
                        gapi_ipfs_pubsub_logger_1.GapiIpfsPubSubLogger,
                        gapi_ipfs_pubsub_config_1.GapiIpfsPubSubConfig
                    ],
                    useFactory: (ipfs, nodeReady, logger, config) => new Promise((resolve) => nodeReady.subscribe(() => {
                        logger.log(`Ipfs Pubsub room name: ${config.roomName}!`);
                        resolve(Room(ipfs, config.roomName));
                    }))
                },
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
