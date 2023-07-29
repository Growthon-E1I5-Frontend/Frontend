import styled from 'styled-components';
import AddIcon from '../assets/ImageAdd.svg';

interface BoxSizeProps {
  width: number;
  height: number;
}

const Container = styled.div<BoxSizeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 8px;
  background-color: #f3f3f3;
`;

export default function AttachImage({ width, height }: BoxSizeProps) {
  return (
    <Container width={width} height={height}>
      <img src={AddIcon} alt="Add Img File" />
    </Container>
  );
}
