import styled from 'styled-components';
import AddIcon from '../../assets/ImageAdd.svg';

interface AttachImageProps {
  width: number;
  height: number;
  imgSrc?: string;
  imgAlt?: string;
}

const Img = styled.img<AttachImageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 8px;
  margin: 0 6px 6px 0;
`;

export default function AttachImage({
  width,
  height,
  imgSrc,
  imgAlt,
}: AttachImageProps) {
  return (
    <Img
      src={imgSrc || AddIcon}
      alt={imgAlt || 'Add Img File'}
      width={width}
      height={height}
    />
  );
}
