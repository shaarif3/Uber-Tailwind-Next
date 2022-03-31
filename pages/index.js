import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2hhYXJpZiIsImEiOiJjbDFlNDR4cTQwZzd3M2tuMmt4bXNxNjBwIn0.t4F-DMl4cvSPrS2p3QJ0FA';
export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'my-map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.2901, 39.391],
      zoom: 3,
    });
  }, []);

  return (
    <Wrapper>
      <Map>map</Map>
      <ActionItems>start</ActionItems>
      <div id='my-map' style={{ width: '600px', height: '400px' }} />
    </Wrapper>
  );
}

const Wrapper = tw.div`flex flex-col bg-red-300 h-screen
 `;
const Map = tw.div`bg-red-500 flex-1`;
const ActionItems = tw.div`flex-1`;
