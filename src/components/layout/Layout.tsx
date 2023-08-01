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
  height: calc(100% - 111px);
  margin-top: 51px;
  margin-bottom: 60px;
  overflow: auto;
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
