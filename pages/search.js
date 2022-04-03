/* eslint-disable @next/next/link-passhref */
import React from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Search = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href='/'>
          <BackButton src='https://cdn-icons-png.flaticon.com/512/271/271218.png' />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zb9jd9Z24wLO_nPfh6HxVyUewMBZ0CEAqEcvYiAkCjLXga_T5lsCY5JjeKVf2adarcA&usqp=CAU' />
          <Line src='https://img.favpng.com/15/25/15/rectangle-line-png-favpng-HC7CTM2YeRuzsUj1KzdsReAvv_t.jpg' />
          <Square src='https://static.vecteezy.com/system/resources/previews/001/209/957/large_2x/square-png.png' />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder='Enter Pickup Location' />
          <Input placeholder='Where to?' />
        </InputBoxes>
        <PlusIcon src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrsTHiRUy0kM8-5Sq2zZ3MnAde1KyXp5iV96vrIlDsq7vtSxeOFk2vbedpPB9q8O0OAI&usqp=CAU' />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src=' https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png' />
        Saved Places
      </SavedPlaces>
      <Link href='/confirm'>
        <ConfirmLocation>Confirm Location</ConfirmLocation>
      </Link>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`bg-gray-200 h-screen `;
const ButtonContainer = tw.div`bg-white px-4`;
const BackButton = tw.img`h-10 cursor-pointer`;
const InputContainer = tw.div`bg-white flex items-center px-4 mb-2`;
const FromToIcons = tw.div`w-10 flex flex-col mr-2 items-center`;
const Circle = tw.img`h-5`;
const Line = tw.img`h-14`;
const Square = tw.img`h-4`;
const InputBoxes = tw.div`flex flex-col flex-1`;
const Input = tw.input`h-10 bg-gray-200 my-6 rounded-2 p-4 outline-none border-none `;
const PlusIcon = tw.img`h-10 w-10 ml-3`;
const SavedPlaces = tw.div`flex items-center bg-white px-4 py-2 `;
const StarIcon = tw.img`bg-gray-400 w-10 h-10 p-2 rounded-full mr-2`;
const ConfirmLocation = tw.div` text-white bg-black text-center mt-2 mx-4 py-3 text-2xl cursor-pointer `;
