[![Docker Pulls](https://img.shields.io/docker/pulls/samurais/ss-spa.svg?maxAge=2592000)](https://hub.docker.com/r/samurais/ss-spa/) [![Docker Stars](https://img.shields.io/docker/stars/samurais/ss-spa.svg?maxAge=2592000)](https://hub.docker.com/r/samurais/ss-spa/) [![Docker Layers](https://images.microbadger.com/badges/image/samurais/ss-spa.svg)](https://microbadger.com/#/images/samurais/ss-spa)
[![](https://images.microbadger.com/badges/version/samurais/ss-spa.svg)](https://microbadger.com/images/samurais/ss-spa "Get your own version badge on microbadger.com")

![](https://camo.githubusercontent.com/ae91a5698ad80d3fe8e0eb5a4c6ee7170e088a7d/687474703a2f2f37786b6571692e636f6d312e7a302e676c622e636c6f7564646e2e636f6d2f61692f53637265656e25323053686f74253230323031372d30342d30342532306174253230382e32302e3437253230504d2e706e67)

# Welcome
![](./docs/demo.gif)

SuperScript Single Page Application is 

* Easy to bootstrap SuperScript.
* Embrace WeakAI in minutes.
* Adopt chatbot quickly.

## Deps

Node.js v7.1.6+ (leverage async/await)
MongoDB

## Usage
```
git clone https://github.com/Samurais/ss-spa.git
cd ss-spa
npm install
bower install
cp config/environment/development.sample.js config/environment/development.js
cp config/log4js.sample.json config/log4js.json
npm start
open http://localhost:3001
```

## Watch
Re-parse and restart app when editing chat's scripts.
```
npm run dev:start
```

> Note, in the browser, socket.io would reconnect to server when the app is restarted, it avoids reloading client page.


## Test
```
npm run dev:start
npm test
```

> npm test  -- --watch # to run testcase lively.

# Thanks to

[WebRTC chat with React.js](http://blog.mgechev.com/2014/09/03/webrtc-peer-to-peer-chat-with-react/)

[SuperScript](http://superscriptjs.com/)

[Wechaty](https://github.com/Chatie/wechaty)


# Docker
To start app with docker-compose.
```
./scripts/start-docker-spa.sh
open http://localhost:3001
```

Note, **samurais/ss-spa:0.0.1** can be built locally.
```
./scripts/build-docker-image.sh
```

# Work with [Wechaty](https://github.com/Chatie/wechaty)
[ss-spa](https://github.com/Samurais/ss-spa) can connect to your wechat personal account in minutes with [ss-wechaty](https://github.com/Chatie/ss-wechaty). 

```
git clone git@github.com:Chatie/ss-wechaty.git && cd ss-wechaty
scripts/start-docker-compose.sh
```


# License
MIT
