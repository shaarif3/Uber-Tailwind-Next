import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src='https://seekvectorlogo.net/wp-content/uploads/2019/07/uber-technologies-inc-vector-logo.png' />
          <Profile>
            <Name>Shaarif Shahid</Name>
            <UserImage src='https://avatars.githubusercontent.com/u/57302453?v=4' />
          </Profile>
        </Header>
        <ActionButtons>
          <ActionButton>
            <ActionButtonImage src='https://p7.hiclipart.com/preview/307/29/138/car-rental-taxi-wordpress-renting-mercedes-car-png-image.jpg' />
            Ride
          </ActionButton>
          <ActionButton>
            <ActionButtonImage
              src='  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqy5H54njpYXXechKwsd6qiVKXAc0GM3ZFvA&usqp=CAU
'
            />
            Two Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src='https://e7.pngegg.com/pngimages/524/691/png-clipart-computer-icons-calendar-date-schedule-miscellaneous-calendar.png' />
            Reserve
          </ActionButton>
        </ActionButtons>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex flex-col h-screen
 `;
const ActionItems = tw.div`flex-1 p-4`;
const Header = tw.div`flex justify-between items-center`;
const UberLogo = tw.img`h-20`;
const Profile = tw.div`flex items-center`;
const Name = tw.div`mr-2 w-20 text-sm`;
const UserImage = tw.img`h-16 w-16 rounded-full border border-gray-800 p-px`;
const ActionButtons = tw.div`flex `;
const ActionButton = tw.div`flex flex-col justify-center rounded-lg bg-gray-200 flex-1 m-1 h-32 items-center`;
const ActionButtonImage = tw.img`h-3/5`;
