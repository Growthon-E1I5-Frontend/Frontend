import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Header from '../Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function RootLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Navbar />
    </Container>
  );
}

export default RootLayout;
