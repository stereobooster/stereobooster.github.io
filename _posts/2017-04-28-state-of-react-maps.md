---
layout: post
title: State of React Maps
---

First of all let's choose 3-rd party map library. Main options on the plate are:

|             | Vector-binary tiles and client side rendering       | Locked to one tiles provider | Ability to bundle lib | Open source                                     |
|-------------|------------------------------------------------------|------------------------------|-----------------------|-------------------------------------------------|
| Google maps | I suppose yes                                        | yes                          | no                    | no                                              |
| MapboxGL    | yes                                                  | no, but feels a bit hacky    | yes                   | [yes](https://github.com/mapbox/mapbox-gl-js)   |
| Leaflet     | [yes](https://github.com/Leaflet/Leaflet.VectorGrid) | no                           | yes                   | [yes](https://github.com/Leaflet/Leaflet)       |
| OpenLayers  | yes                                                  | no                           | yes                   | [yes](https://github.com/openlayers/openlayers) |

AFAIK I listed all map libraries which can handle vector-binary tiles and client side rendering. From my personal view MapboxGL feels most responsive. There is [example](https://osm2vectortiles.tileserver.com/#v3/mapboxgl) which compares MapboxGL and OpenLayers. **TODO**: add examples for Leaflet and Google maps.


### Goolge maps

Goolge maps - there are 4 implementations out there and all of them are poorly supported. See my [gist](https://gist.github.com/stereobooster/13a26188d4ad5382bc6da9ffe76ce3e1#file-1-react-google-maps-md).

### React-Leaflet

[React-Leaflet](https://github.com/PaulLeCam/react-leaflet) has good support, but lacks "React approach". Really thin wrapper around Leaflet, anything that seems to be logical for React, but is out of Leaflet reach is rejected. Examples:

- [Declarative isOpen flag for Popups](https://github.com/PaulLeCam/react-leaflet/issues/317)
- [Server rendering support](https://github.com/PaulLeCam/react-leaflet/issues/45)

### react-map-gl

[react-map-gl](https://github.com/uber/react-map-gl) seems to be impresive: fast and declarative. Lacks support of some standard components, like Marker and Popup. It is not very "contribution friendly" - if you want to contribute, you need to overcome a lot of small issues:

- [Unable to use in create-react-app](https://github.com/uber/react-map-gl/issues/176)
- [It uses npm and custom npm server - no way to switch to yarn](https://github.com/yarnpkg/yarn/issues/521#issuecomment-297545407)
- There are exmaples folder and examples in gh-pages. Good idea is to collect all examples in one place and switch to [styleguidist](http://react-styleguidist.js.org/)
