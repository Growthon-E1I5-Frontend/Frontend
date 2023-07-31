import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

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
