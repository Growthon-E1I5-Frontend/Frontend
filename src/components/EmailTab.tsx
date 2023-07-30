import { useEffect } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import AttachImage from './AttachImage';
import useImageUploader from '../hooks/useImageUploader';
import ImageCropper from './ImageCropper';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 257px;
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

export default function EmailTab() {
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
    <Accordion title="이메일">
      <Wrapper>
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
        <Input placeholder="example@email.com" />
      </Wrapper>
    </Accordion>
  );
}
