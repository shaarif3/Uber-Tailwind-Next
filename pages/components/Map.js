import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2hhYXJpZiIsImEiOiJjbDFlNDR4cTQwZzd3M2tuMmt4bXNxNjBwIn0.t4F-DMl4cvSPrS2p3QJ0FA';

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'my-map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.2901, 39.391],
      zoom: 3,
    });
  }, []);
  return <Wrapper id='my-map'>Map</Wrapper>;
};
const Wrapper = tw.div`flex-1 `;
export default Map;
