import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import Link from 'next/link';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ name: user.displayName, photoUrl: user.photoURL });
      } else {
        setUser(null);
        router.push('/login');
      }
    });
  }, []);
  console.log(user, 'vhvhv');
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src='https://seekvectorlogo.net/wp-content/uploads/2019/07/uber-technologies-inc-vector-logo.png' />
          <Profile>
            <Name>{user && user?.name}</Name>
            <UserImage
              src={user && user?.photoUrl}
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href='/search'>
            <ActionButton>
              <ActionButtonImage src='https://p7.hiclipart.com/preview/307/29/138/car-rental-taxi-wordpress-renting-mercedes-car-png-image.jpg' />
              Ride
            </ActionButton>
          </Link>
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
        <InputButton>Where to?</InputButton>
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
const UserImage = tw.img`h-16 w-16 rounded-full border border-gray-800 p-px cursor-pointer`;
const ActionButtons = tw.div`flex `;
const ActionButton = tw.div` cursor-pointer flex flex-col justify-center rounded-lg bg-gray-200 flex-1 m-1 h-32 items-center transform hover:scale-105 transition text-xl`;
const ActionButtonImage = tw.img`h-3/5`;
const InputButton = tw.div`h-20 bg-gray-200 text-2xl p-4 flex items-center rounded-lg mt-8`;
