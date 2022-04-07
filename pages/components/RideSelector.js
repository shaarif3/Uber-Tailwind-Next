/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { carList } from '../data/carList';
import Link from 'next/link';
const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);
  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoic2hhYXJpZiIsImEiOiJjbDFlNDR4cTQwZzd3M2tuMmt4bXNxNjBwIn0.t4F-DMl4cvSPrS2p3QJ0FA`
    )
      .then((res) => res.json())
      .then((data) => {
        setRideDuration(data.routes[0].duration / 100);
      });
  }, [pickupCoordinates, dropoffCoordinates]);
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((item, i) => (
          <Car key={i}>
            <CarImage src={item?.imgUrl} />
            <CarDetail>
              <Service>{item?.service}</Service>
              <Time>5 mins away</Time>
            </CarDetail>
            <Price>{'$' + (rideDuration * item.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;
const Wrapper = tw.div`flex-1 overflow-y-scroll flex flex-col `;
const Title = tw.div`text-gray-500 text-center text-xs py-2 border-b`;
const CarList = tw.div`overflow-y-scroll`;
const Car = tw.div`flex p-4 items-center`;
const CarImage = tw.img`h-20 mr-4`;
const CarDetail = tw.div`flex-1`;
const Service = tw.div`font-medium`;
const Time = tw.div`text-xs text-blue-500`;
const Price = tw.div``;
