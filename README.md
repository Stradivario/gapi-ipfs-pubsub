# @Gapi Ipfs InterPlanetary File System Pub Sub Module (Beta)

##### More information about IPFS system can be find here [IPFS-WIKI](https://en.wikipedia.org/wiki/InterPlanetary_File_System)
##### For questions/issues you can write ticket [here](http://gitlab.youvolio.com/gapi/gapi-ipfs/issues)
##### This module is intended to be used with [GAPI](https://github.com/Stradivario/gapi)

@gapi/ipfs hello world ipfs address:

https://ipfs.io/ipfs/QmPhYdx4dB6TwBU1KEbYmyET7HQJoLpyERvRD4kMWv3B3a

## Installation and basic examples:
##### To install this Gapi module, run:

```bash
$ npm install @gapi/ipfs-pubsub --save
```

## Consuming @gapi/ipfs-pubsub
##### Import inside AppModule or CoreModule
```typescript

import { GapiModule } from '@gapi/core';
import { GapiIpfsPubSubModule } from '@gapi/ipfs-pubsub';

@GapiModule({
    imports: [
        GapiIpfsPubSubModule.forRoot({
            roomName: 'your-room',
            logging: true
        }),
    ]
})
export class CoreModule { }

```

TODO: Better documentation...

Enjoy ! :)
