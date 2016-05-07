---
layout: post
title: Lightweight JS
---

Web-development buz-words

## Realtime

[According to wikipedia](https://en.wikipedia.org/wiki/Real-time_web): The real-time web is a network web using technologies and practices that enable users to receive information as soon as it is published by its authors, rather than requiring that they or their software check a source periodically for updates.

Fancy way to say:
  - we wll use [WebSockets](http://caniuse.com/#feat=websockets) (or similar: [Push API](http://caniuse.com/#feat=push-api), [Flash XMLSockets](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/net/XMLSocket.html), [Pushlet](https://en.wikipedia.org/wiki/Push_technology#Pushlet), [Long pooling](https://en.wikipedia.org/wiki/Push_technology#Long_polling))
  - we will use [publish–subscribe pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
  - if you are sophisticated enough you can refer to [Lambda](http://lambda-architecture.net/)/[Kappa architecture](http://milinda.pathirage.org/kappa-architecture.com/)

## Realtime vs offline

[RethinkDB](https://www.rethinkdb.com/) - realtime [but no offline support](https://github.com/rethinkdb/rethinkdb/issues/3680).
[PouchDB](http://pouchdb.com/) + [CouchDB](http://couchdb.apache.org/) - realtime and offline support.




- https://github.com/HenrikJoreteg/feather-app
- http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org
- [Building realtime collaborative offline-first apps with React, Redux, PouchDB and WebSockets](http://blog.yld.io/2015/11/30/building-realtime-collaborative-offline-first-apps-with-react-redux-pouchdb-and-web-sockets/)
- [Offline Web Applications with CouchDB, PouchDB and Ember CLI](https://teamgaslight.com/blog/offline-web-applications-with-couchdb-pouchdb-and-ember-cli)


## MicroJS

http://microjs.com/

### VurtualDOM or react-like
  - http://riotjs.com/
  - https://github.com/developit/preact

### jQuery-like
  - https://github.com/oneuijs/You-Dont-Need-jQuery
  - https://github.com/LeaVerou/bliss

  https://docs.google.com/document/d/1LPaPA30bLUB_publLIMF0RlhdnPx_ePXm7oW02iiT6o/edit
  https://docs.google.com/document/d/1LPaPA30bLUB_publLIMF0RlhdnPx_ePXm7oW02iiT6o/edit


## Offline first & Appcache
https://github.com/pazguille/offline-first
http://alistapart.com/article/application-cache-is-a-douchebag
http://appcache.offline.technology/
https://developer.chrome.com/apps/offline_apps
http://hood.ie/

## Progressive Web Apps

Progressive Web Apps are (definition taken [here](https://developers.google.com/web/progressive-web-apps#learnmore)):

  - **Progressive** - Work for every user, regardless of browser choice because they’re built with progressive enhancement as a core tenet. [polyfill.io](https://cdn.polyfill.io/v2/docs/), [normalize.css](http://necolas.github.io/normalize.css/)
  - **Responsive** - Fit any form factor: desktop, mobile, tablet, or whatever is next. [learnlayout.com](http://learnlayout.com/toc.html), css grid, mobile first, responsive web design
  - **Connectivity independent** - Enhanced with service workers to work offline or on low quality networks.
  - **App-like** - Feel like an app to the user with app-style interactions and navigation because it's built on the app-shell model. [Appcache Facts](http://appcache.offline.technology/), [Application Cache is a Douchebag](http://alistapart.com/article/application-cache-is-a-douchebag)
  - **Fresh** - Always up-to-date thanks to the [service worker](http://caniuse.com/#feat=serviceworkers) update process.
  - **Safe** - Served via HTTPS to prevent snooping and ensure content hasn’t been tampered with. [letsencrypt](https://letsencrypt.org/)
  - **Discoverable** - Are identifiable as “applications” thanks to [W3C manifests](https://w3c.github.io/manifest/) and service worker registration scope allowing search engines to find them.
  - **Re-engageable** - Make re-engagement easy through features like [push](https://www.w3.org/TR/push-api/) [notifications](https://dvcs.w3.org/hg/notifications/raw-file/tip/Overview.html). [WebSockets](http://caniuse.com/#search=WebSockets)
  - **Installable** - Allow users to “keep” apps they find most useful on their home screen without the hassle of an app store. [How to Add Websites to the Home Screen on Any Smartphone or Tablet](http://www.howtogeek.com/196087/how-to-add-websites-to-the-home-screen-on-any-smartphone-or-tablet/), [Configuring Web Applications](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)
  - **Linkable** - Easily share via URL and not require complex installation. [History API](http://caniuse.com/#search=history)

### Links

  - http://addyosmani.com/blog/getting-started-with-progressive-web-apps/
  - https://gist.github.com/nolanlawson/d9e66349635452a95bb1


## ACCELERATED MOBILE PAGES PROJECT

https://github.com/ampproject/amphtml

Discalimer: AMP is not for web aps

For many, reading on the mobile web is a slow, clunky and frustrating experience - but it doesn’t have to be that way. The Accelerated Mobile Pages (AMP) Project is an open source initiative that embodies the vision that publishers can create mobile optimized content once and have it load instantly everywhere.

### Values:

  - Allow only asynchronous scripts (`<script async>`)
  - Size all resources statically
  - Don’t let extension mechanisms block rendering
  - Keep all third-party JavaScript out of the critical path
  - All CSS must be inline and size-bound
  - Font triggering must be efficient (`body {opacity: 0}`)
  - Minimize style recalculations [fastdom](https://github.com/wilsonpage/fastdom)
  - Only run GPU-accelerated animations (`transform`, `opacity`)
  - Prioritize resource loading (viewport)
  - Load pages in an instant (`<link rel="prerender">`)

### Other related links:

  - [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components). See also [polymer](https://www.polymer-project.org/1.0/), [Angular component](https://toddmotto.com/exploring-the-angular-1-5-component-method/), [Ember Components](https://guides.emberjs.com/v1.10.0/components/), [React component](https://facebook.github.io/react/docs/component-api.html)
  - Animation and custom DOM re-calculation: [Velocity.js](http://julian.com/research/velocity/)
  - Critical path (initial viewport, above the fold): [critical](https://github.com/addyosmani/critical)
  - Responsive/adaptive images: [picture element](http://www.html5rocks.com/en/tutorials/responsive/picture-element/), [adaptive images](http://adaptive-images.com/details.htm), [Real-time Resizing of Flickr Images Using GPUs](http://code.flickr.net/2015/06/25/real-time-resizing-of-flickr-images-using-gpus/), [Facebooks technology behind preview photos](https://code.facebook.com/posts/991252547593574/the-technology-behind-preview-photos/)

## React

### VIRTUAL DOM
React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native.

  - Server-side prerendering e.g. isomorphic - works on server and client. The most beatifull here it can catchup server generated structures at client and continue.
  - Fastdom-like functionality - abstracts access to the real DOM, which make them faster.
  - Do not need to track what is changing explicitly. Tracked by dom-diffing instead.

### DATA FLOW
React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.

### Other

  - Web Components

### [Redux](https://github.com/rackt/redux)

  - Single source of truth. The state of your whole application is stored in an object tree within a single store.
  - State is read-only. The only way to mutate the state is to emit an action, an object describing what happened.
  - Changes are made with pure functions. To specify how the state tree is transformed by actions, you write pure reducers.

## Isomorphic

Runs both on server and client. So yes we tied JavaScript. Good exmple

  - VirtualDOM: [React](https://facebook.github.io/react/), etc
  - Router
  - DB: [PouchDB](http://pouchdb.com/). There are other real-time databases, but I do not see sense of having database which [doesn't]() have [conflict solving algorithm](http://docs.couchdb.org/en/1.6.1/replication/conflicts.html).
  - Other via browserify.

### Links

  - http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/
  - https://www.lullabot.com/articles/what-is-an-isomorphic-application
  - https://www.meteor.com/
  - https://github.com/mattkrick/meatier




