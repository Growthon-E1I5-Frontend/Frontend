import styled, { keyframes } from 'styled-components';

interface IPreview {
  $isShow: boolean;
}

const popupAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const Container = styled.div<IPreview>`
  position: absolute;
  width: 393px;
  height: 100%;
  background-color: #bfb9f5;
  animation: ${popupAnimation} 0.3s ease-out;
`;

function Preview({ $isShow }: IPreview) {
  return (
    <Container $isShow={$isShow}>
      <h4>미리보기</h4>
    </Container>
  );
}

export default Preview;
