import { useEffect } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import AttachImage from './AttachImage';
import ImageCropper from './ImageCropper';
import useImageUploader from '../hooks/useImageUploader';

interface InputProps {
  width: number;
}

const CountryWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input<InputProps>`
  width: ${(props) => props.width}px;
  height: 40px;
  padding: 8px 16px;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: #f3f3f3;
  font-size: 12px;
  &::placeholder {
    color: #9d9d9d;
  }
`;

export default function PhoneTab() {
  const {
    uploadImage,
    compressedImage,
    handleUploadImage,
    handleCompressImage,
  } = useImageUploader();

  useEffect(() => {
    if (uploadImage) {
      handleCompressImage();
    }
  }, [uploadImage]);

  return (
    <Accordion title="전화번호">
      <CountryWrapper>
        <ImageCropper aspectRatio={1 / 1} onCrop={handleUploadImage}>
          {compressedImage ? (
            <AttachImage
              width={40}
              height={40}
              imgSrc={compressedImage!}
              imgAlt="compressedImg"
            />
          ) : (
            <AttachImage width={40} height={40} />
          )}
        </ImageCropper>
        <Input placeholder="국가번호" width={257} />
      </CountryWrapper>
      <Input placeholder="전화번호" width={305} />
    </Accordion>
  );
}
