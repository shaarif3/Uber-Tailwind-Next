import React from 'react';
import tw from 'tailwind-styled-components';

const Login = () => {
  return (
    <Wrapper>
      <UberLogo src='https://seekvectorlogo.net/wp-content/uploads/2019/07/uber-technologies-inc-vector-logo.png' />
      <Title>Login To Access Your Account</Title>
      <HeadImage src='https://indusscrolls.com/wp-content/uploads/2019/12/uber-696x522.jpg' />

      <SignInButton>Login With Google</SignInButton>
    </Wrapper>
  );
};

export default Login;
const Wrapper = tw.div`flex flex-col h-screen w-screen p-4 bg-white-500`;
const SignInButton = tw.button`bg-black text-white text-center py-4 mt-8 self-center w-full `;
const UberLogo = tw.img`h-14 w-auto object-contain self-start`;
const Title = tw.div`text-6xl pt-4 text-black-100 mb-6`;
const HeadImage = tw.img` object-contain w-full overflow-hidden`;
