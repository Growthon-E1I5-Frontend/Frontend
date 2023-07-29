import styled from 'styled-components';
import AddIcon from '../assets/ImageAdd.svg';

interface AttachImageProps {
  width: number;
  height: number;
  IconWidth?: number;
  IconHeight?: number;
}

const Container = styled.div<AttachImageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 8px;
  background-color: #f3f3f3;
`;

export default function AttachImage({
  width,
  height,
  IconWidth,
  IconHeight,
}: AttachImageProps) {
  return (
    <Container width={width} height={height}>
      <img
        src={AddIcon}
        alt="Add Img File"
        width={IconWidth}
        height={IconHeight}
      />
    </Container>
  );
}
