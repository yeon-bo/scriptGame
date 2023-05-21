import { atom } from "jotai";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { fromLonLat, transformExtent } from "ol/proj";
import XYZ from "ol/source/XYZ";

const url = `http://api.vworld.kr/req/wmts/1.0.0/${process.env.VW_KEY}/Base/{z}/{y}/{x}.png`;

export const mapAtom =
  atom <
  Map >
  new Map({
    layers: [
      new TileLayer({
        source: new XYZ({
          url,
        }),
      }),
    ],
    view: new View({
      center: fromLonLat([128, 37]),
      zoom: 8,
      extent: transformExtent([115, 30, 142, 45], "EPSG:4326", "EPSG:3857"),
      minZoom: 6,
      maxZoom: 22,
    }),
  });
