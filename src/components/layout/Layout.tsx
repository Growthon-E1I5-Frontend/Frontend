import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Header from '../Header';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 393px;
  height: calc(100% - 116px);
  margin-top: 50px;
  margin-bottom: 60px;
  position: relative;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function RootLayout() {
  const [isShow, setIsShow] = useState(false);

  const handlePreview = () => setIsShow((curr) => !curr);

  return (
    <Container>
      <Header onClick={handlePreview} isShow={isShow} />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Navbar onClick={handlePreview} isShow={isShow} />
    </Container>
  );
}

export default RootLayout;
