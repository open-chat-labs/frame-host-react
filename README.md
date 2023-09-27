# IFrame hosted OpenChat proof of concept in React

This is a simple example react site showing how you can embed multiple OpenChat frames. Each frame is initialised independently and we we show how the OpenChat path that each frame displays can be controlled dynamically from within the host site.

We make use of the [openchat-xframe](https://github.com/open-chat-labs/openchat-xframe) library to manage the communication between the host page and the instances of OpenChat running in the iframes.

The library allows us to set an initial theme and to change path which is all we need in this case.

This sample site uses React boostrapped using Vite. You can run it locally by running the following commands from the root directory.

```
npm i
npm run dev
```
