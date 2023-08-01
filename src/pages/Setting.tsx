import styled from 'styled-components';
import ImageTab from '../components/ImageTab';

const Container = styled.div`
  height: 100%;
  background-color: #ffffff;
`;

function Setting() {
  return (
    <Container>
      <ImageTab />
    </Container>
  );
}

export default Setting;
