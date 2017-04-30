---
layout: post
title: "Down the rabbit hole: React map component"
---

<div class="row">
  <div class="columns medium-6 large-6">
    <img src="/assets/posts/down-the-rabbit-hole-react-map-component/rabbit.jpg">
  </div>
  <div class="columns medium-6 large-6">
    <p><b>TL;DR</b> I need React component for maps. I thought it would be easy. The 5-minute task, not more. As a result, it turned out to be month (not a month of working time) trip of errors, trials and bug reports.</p>
    <h2>Google maps</h2>
    <p>Obviously, I tried <a href="https://github.com/tomchentw/react-google-maps">react-google-maps</a>. I didn't know much about maps and React at the moment. Immediately got a <a href="https://github.com/tomchentw/react-google-maps/pull/449#event-1050542543">bug</a> with rendering popup (infoWindow in terms of Google Maps). <a href="https://github.com/tomchentw/react-google-maps/issues/266#issuecomment-290935975">I found out that this library poorly supported</a> and started to search for alternatives. There are 4 alternatives for React Google maps components. But all of them poorly supported.</p>
    <p>See full table with data in my <a href="https://gist.github.com/stereobooster/13a26188d4ad5382bc6da9ffe76ce3e1#file-1-react-google-maps-md">gist</a></p>
  </div>
</div>


## Other options

I started to dig what are other options. I found following options libraries for maps: [Leaflet](http://leafletjs.com/), [OpenLayers](https://openlayers.org/), [D3](http://map.reactd3.org/), [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js), [Mapbox.js](https://www.mapbox.com/mapbox.js/api/v3.1.0/) (which is Leaflet plugin) and corresponding React components. Check the same gist for comparison of those libraries.

[react-leaflet](https://github.com/PaulLeCam/react-leaflet) is most supported option. Except for the fact, that everything which is out of bounds of Leaflet, but makes sense for React component library, is mercilessly rejected:

- [Declarative isOpen flag for Popups](https://github.com/PaulLeCam/react-leaflet/issues/317)
- [Server rendering support](https://github.com/PaulLeCam/react-leaflet/issues/45)

Later I found [small example which compared OpenLayer and Mapbox GL](https://osm2vectortiles.tileserver.com/#v3/mapboxgl) and was stricken by the speed of render of Mapbox GL JS. I also was able to compare to Leaflet with [VectorGrid plugin](https://github.com/Leaflet/Leaflet.VectorGrid), and from my POV Mapbox GL JS is far ahead of other competitors in the speed of rendering.

I realized that usage of Mapbox GL JS or Leaflet or OpenLayer makes much more sense, rather than use Google Maps.

- I'm not locked to one tile provider. I can use free providers or even roll my own server. Small note: it is possible to use third-party tile providers with Mapbox GL JS.
- I can bundle library with Webpack (or Brunch or anything else), which is not possible with Google maps
- It is open source

## Mapbox GL JS

So I switched my attention to [react-map-gl](https://uber.github.io/react-map-gl/#/interactivity). It looks really impressive. It appreciates React declarative approach. It uses Mapbox GL JS. But [lacks standard components, like Popup or Marker](https://github.com/uber/react-map-gl/issues/209). Not a problem I said to myself — I will do it myself. And here avalanche of problems started. It is [totally unclear how to get into development server, to test new code](https://github.com/uber/react-map-gl/issues/213). Not a problem: I will create an empty project with `create-react-app` add `react-map-gl` as dependency and build a component. Why `create-react-app`? Because it is so easy to use it. I use it even for projects without React (simply delete react dependencies from `package.json`). Nope. Not so fast: [react-map-gl is incompatible with create-react-app](https://github.com/uber/react-map-gl/issues/176). After poking around I realized that I do not use the latest version of the library. Latest published version is `2.0.2` (at the moment of writing, was smaller at the moment of my experiments), but GitHub project actually contains version `3.0.0.aplpha.5`. I decide to give a try with the latest development version. Added dependency using GitHub link. And surprise: [npm can not handle git installation from repositories without pre-generated artifacts](https://github.com/npm/npm/issues/3055). I actually using yarn, but it has [the same issue](https://github.com/yarnpkg/yarn/issues/2875). Whatever, let's solve this in a straightforward way:

```bash
yarn install
cd node_modules/react-map-gl/
yarn install
npm run build-es5
npm run build-es6
```

Finally, I got into [issue with create-react-app or Webpack or babel (not sure what exactly) and ES6 modules](https://github.com/facebookincubator/create-react-app/issues/2049).

## Result

I got no working map component. I know much more about maps and a bit more about React. I have issued ton of bug reports and feature requests.

## PS

This is another JS-fatigue story. I wanted to share it with you to show how much troubles you can catch before you even try to write actual software. This threshold should be minimized. I want to say thank you to people who makes me believe that not all that bad

### Dan Abramov

One of the authors of create-react-app and open source advocate. Create-react-app is the gem of easy to use software. I do not want to do a lot of small decisions on the start. Give me reasonable defaults. I suppose Rails was first who came up with conventions over configuration (thanks to DHH and co). Also, Dan actively promotes good documentation, which a lot of projects miss.

### Evan Czaplicki

The author of Elm. One really amazing feature of Elm is super friendly error messages. After Elm Rust and even Haskell started to work on more friendly messages. I mention this because [I got into one cryptic warning on this trip](https://github.com/webpack/webpack/issues/196#issuecomment-298234662).

###  Yehuda Katz

Who took part in the development of Rails, Ember, Yarn, Bundler and many others. Thank you for Yarn.

## PS 2

There is hope to get [cross-platform](https://microsoft.github.io/reactxp/) Mapbox React component. [React Native Mapbox GL](https://github.com/mapbox/react-native-mapbox-gl) already exists.

Image credit: Sir John Tenniel from the 1865 edition of "Allice in Wonderland", via [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:John_Tenniel%27s_illustrations_of_Alice%27s_Adventures_in_Wonderland).
