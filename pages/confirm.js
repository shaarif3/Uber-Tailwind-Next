import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import Link from 'next/dist/client/link';
import RideSelector from './components/RideSelector';
import { useRouter } from 'next/router';
const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);
  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoic2hhYXJpZiIsImEiOiJjbDFlNDR4cTQwZzd3M2tuMmt4bXNxNjBwIn0.t4F-DMl4cvSPrS2p3QJ0FA',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };
  console.log(pickupCoordinates);

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoic2hhYXJpZiIsImEiOiJjbDFlNDR4cTQwZzd3M2tuMmt4bXNxNjBwIn0.t4F-DMl4cvSPrS2p3QJ0FA',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href='/search'>
          <BackButton src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATkAAAChCAMAAACLfThZAAAAb1BMVEX39/cAAAD+/v6Pj48uLi78/PzFxcXKysqFhYW+vr7BwcHPz89wcHB7e3tqamrp6enV1dWysrLv7+8oKCjb29urq6uBgYGUlJRcXFzh4eF0dHS4uLibm5tTU1NiYmIgICClpaU/Pz8VFRVDQ0Oampqnjc7BAAADEElEQVR4nO3d3XLaQAxAYa/AEAIJweAACTT85P2fsUkn7aRl17J1s9rp+S56vXNGsgkFU1UAAAAAAABwRqRqms9/MYg0p906hMtxtKfdAHU1Cn88LmnXV71fh+/uSddPvQn/eCVdH7fhQtjUuU9VAImEC2fKqaLhPvaVdIpEuHDkStctFS6EZe6j+ZYOF+asa4eOcFzoushTOlxYUS6pM1yYUC6lO1zY5z6fW0q4MSOXoIQLW17PxWnhQpP7hE6p4VpGLkoN90K4KJkr4RaEi9LDcV+NUleViYtjVY0IZyRTJRx31TgmzohwRqyqEeGM1FUlXBzhjNRVfSBclEwIZ8LEGRHOiFU1UsM9Ey6KcEZc44yYOCO5V8LdES5KnTjCxbGqRjJj4kwIZ0Q4I+6qRkyckbwq4UaEi1InjnBxXOOMWFUjwhmp4d4lI8cfalTDrQ+jfE6zxms8NVx2x4nLi4WscofpYdf4G7siwoVw2XtL539Vv1ycfcWnkIn75OsxAQWF8/WV7aLChbOfoSsrXAib3MF+Ky1caJ2sq7S5Swzl5O2aWntbyR83H8rY5S4xlJv/6q1/5E4x0MFLueLSTZ3cIari0uXO9V1R6Xy9L11SOm9/8j/mDtKXu6c+SSFTd3K1q7+UsbAuH7pb+1/YhdNnZKvXurfzOJ/r48lpt6pHuqeMR69d/xaA63S+kc5MFkq6OekS1HRMXQpTZ0Y6M3khnRFTZ8bUmZHOTB5IZ8TUmanppqRLUBeWdCmkMyOdmZrO58fsPWDqzEhnxsKayTPpjEhnRjoz0pnJnZKOn6dOIZ0Z6cxIZ6amm5EugXRmLKwZU2cmI9IZkc5MTce1LkVNt/H2TQ83tHRXyqVo6WakS1HS+XoUiy9KumXu8zkm265yc9Y1rTOdp8f/+NOVbkW5Lh3p3H131xl5T5Xb5z6ad6l0Y0ZOk0i35fWcKp7O2bMdfJLDbbiWkevjNh2/gtuTnP4Ot+D20JdM31hVm7pqr18vR7YN4Qap6+Vk1c6WFd2Gqz/kPgMAAAAAAPjv/QRzuzO/I4FFowAAAABJRU5ErkJggg==' />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;
const ConfirmButton = tw.div`bg-black text-white my-4 mx-4 py-4 text-center text-xl`;
const ConfirmButtonContainer = tw.div`border-t-2`;
const Wrapper = tw.div`flex flex-col h-screen`;
const RideContainer = tw.div`flex-1 flex flex-col h-8`;
const ButtonContainer = tw.div`rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer`;
const BackButton = tw.img`h-full object-contain h-12`;
